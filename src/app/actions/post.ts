'use server';

import prisma from '@/lib/prisma';
import { revalidatePath } from 'next/cache';
import { cookies } from 'next/headers';
import { verifyToken } from '@/lib/auth';

async function verifyAuth() {
  const token = (await cookies()).get('admin_token')?.value;
  if (!token) throw new Error('Unauthorized');
  const payload = await verifyToken(token);
  if (!payload || payload.role !== 'admin') throw new Error('Unauthorized');
}

export async function getPosts(publishedOnly = true) {
  try {
    return await prisma.post.findMany({
      where: publishedOnly ? { isDraft: false } : undefined,
      orderBy: { publishedAt: 'desc' },
    });
  } catch (error) {
    return [];
  }
}

export async function getPostBySlug(slug: string) {
  return await prisma.post.findUnique({
    where: { slug }
  });
}

export async function createPost(data: { title: string; slug: string; content: string; isDraft: boolean }) {
  await verifyAuth();
  const post = await prisma.post.create({
    data,
  });
  revalidatePath('/blog');
  revalidatePath('/admin/dashboard');
  return post;
}

export async function updatePost(id: string, data: { title: string; slug: string; content: string; isDraft: boolean }) {
  await verifyAuth();
  const post = await prisma.post.update({
    where: { id },
    data,
  });
  revalidatePath('/blog');
  revalidatePath(`/blog/${post.slug}`);
  revalidatePath('/admin/dashboard');
  return post;
}

export async function deletePost(id: string) {
  await verifyAuth();
  await prisma.post.delete({
    where: { id },
  });
  revalidatePath('/blog');
  revalidatePath('/admin/dashboard');
  return { success: true };
}
