'use server';

import { cookies } from 'next/headers';
import { signToken } from '@/lib/auth';

export async function loginAdmin(password: string) {
  const adminPassword = process.env.ADMIN_PASSWORD;

  if (password === adminPassword) {
    const token = await signToken({ role: 'admin' });
    
    (await cookies()).set('admin_token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 60 * 60 * 24, // 24 hours
      path: '/',
    });
    
    return { success: true };
  }
  
  return { success: false, error: 'Invalid credentials' };
}

export async function logoutAdmin() {
  (await cookies()).delete('admin_token');
  return { success: true };
}
