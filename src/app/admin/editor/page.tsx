'use client';

import { useState, useEffect, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { createPost, updatePost, getPostById } from '@/app/actions/post';

function EditorForm() {
  const searchParams = useSearchParams();
  const router = useRouter();
  
  const existingId = searchParams.get('id');
  
  const [title, setTitle] = useState('');
  const [slug, setSlug] = useState('');
  const [content, setContent] = useState('');
  const [isDraft, setIsDraft] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function loadPost() {
      if (existingId) {
        setLoading(true);
        try {
          const post = await getPostById(existingId);
          if (post) {
            setTitle(post.title);
            setSlug(post.slug);
            setContent(post.content);
            setIsDraft(post.isDraft);
          }
        } catch (err) {
          console.error("Failed to load post:", err);
        } finally {
          setLoading(false);
        }
      }
    }
    loadPost();
  }, [existingId]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (existingId) {
        await updatePost(existingId, { title, slug, content, isDraft });
      } else {
        await createPost({ title, slug, content, isDraft });
      }
      router.push('/admin/dashboard');
    } catch (err: any) {
      console.error(err);
      alert('Error saving post: ' + (err.message || 'Unknown server error. Check Vercel Logs.'));
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6 w-full max-w-4xl mx-auto py-12 px-6 lg:px-0 text-white font-sans h-screen">
      <div className="flex justify-between items-center mb-8 border-b border-white/10 pb-6">
        <h1 className="text-3xl font-bold tracking-tight">{existingId ? 'Edit Draft' : 'New Article'}</h1>
        <div className="flex items-center gap-4">
          <label className="flex items-center gap-2 text-sm text-white/50 cursor-pointer">
            <input 
              type="checkbox" 
              checked={isDraft} 
              onChange={e => setIsDraft(e.target.checked)}
              className="w-4 h-4 accent-emerald-500 rounded border-white/20"
            />
            Keep as Draft
          </label>
          <button 
            type="submit" 
            disabled={loading}
            className="bg-emerald-500 hover:bg-emerald-600 text-black font-semibold px-6 py-2 rounded-lg transition-colors disabled:opacity-50"
          >
            {loading ? 'Saving...' : (existingId ? 'Update Post' : 'Publish Post')}
          </button>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <input 
          type="text" 
          placeholder="Article Title..." 
          required
          value={title}
          onChange={e => {
            setTitle(e.target.value);
            if (!existingId) {
              setSlug(e.target.value.toLowerCase().replace(/\\s+/g, '-').replace(/[^a-z0-9-]/g, ''));
            }
          }}
          className="bg-transparent text-4xl font-bold outline-none placeholder:text-white/20 pb-4"
        />
        <div className="flex items-center gap-2 text-white/40 mb-4">
          <span>/blog/</span>
          <input 
            type="text" 
            required
            value={slug}
            onChange={e => setSlug(e.target.value)}
            className="bg-transparent border-b border-white/10 focus:border-emerald-500/50 outline-none w-1/2"
            placeholder="slug-url-path"
          />
        </div>
      </div>

      <textarea 
        placeholder="Start writing in markdown..."
        required
        value={content}
        onChange={e => setContent(e.target.value)}
        className="flex-grow w-full bg-white/5 border border-white/10 rounded-2xl p-6 font-mono text-white/80 focus:outline-none focus:ring-1 focus:ring-emerald-500/50 resize-none overflow-y-auto"
      />
    </form>
  );
}

export default function EditorPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      <Suspense fallback={<div className="text-white p-24 text-center">Loading editor...</div>}>
        <EditorForm />
      </Suspense>
    </main>
  );
}
