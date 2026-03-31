import { getPosts, deletePost } from '@/app/actions/post';
import { logoutAdmin } from '@/app/actions/auth';
import Link from 'next/link';
import { redirect } from 'next/navigation';

export default async function AdminDashboard() {
  const posts = await getPosts(false); // fetch all, including drafts

  const handleDelete = async (formData: FormData) => {
    'use server';
    const id = formData.get('id') as string;
    await deletePost(id);
  };

  const handleLogout = async () => {
    'use server';
    await logoutAdmin();
    redirect('/admin');
  };

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white p-8 md:p-24 font-sans">
      <div className="max-w-5xl mx-auto">
        
        <header className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-16 pb-8 border-b border-white/10">
          <div>
            <h1 className="text-4xl font-bold tracking-tight mb-2">Architect's Desk</h1>
            <p className="text-white/50 text-base">Manage and publish your technical deep-dives.</p>
          </div>
          
          <div className="flex gap-4 items-center">
            <Link 
              href="/admin/editor" 
              className="bg-emerald-500/20 text-emerald-400 hover:bg-emerald-500/30 px-6 py-3 rounded-full font-medium transition-all"
            >
              + Draft New Post
            </Link>
            <form action={handleLogout}>
              <button type="submit" className="text-white/40 hover:text-white transition-colors border border-white/10 px-6 py-3 rounded-full">
                Logout
              </button>
            </form>
          </div>
        </header>

        <section className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden backdrop-blur-md">
          {posts.length === 0 ? (
            <div className="p-16 text-center text-white/40">
              <p>No posts written yet. Start drafting your first architectural pattern!</p>
            </div>
          ) : (
            <ul className="divide-y divide-white/5">
              {posts.map(post => (
                <li key={post.id} className="p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 hover:bg-white/5 transition-colors group">
                  <div>
                    <h3 className="text-2xl font-semibold mb-2 line-clamp-1">{post.title}</h3>
                    <div className="flex items-center gap-4 text-sm text-white/40">
                      <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
                      <span className={`px-3 py-1 rounded-full border ${post.isDraft ? 'border-amber-500/50 text-amber-500' : 'border-emerald-500/50 text-emerald-500'}`}>
                        {post.isDraft ? 'Draft' : 'Published'}
                      </span>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity">
                    <Link 
                      href={`/admin/editor?id=${post.id}`}
                      className="px-5 py-2 bg-white/10 hover:bg-white/20 rounded-lg text-sm font-medium transition-colors"
                    >
                      Edit
                    </Link>
                    <form action={handleDelete}>
                      <input type="hidden" name="id" value={post.id} />
                      <button 
                        type="submit" 
                        className="px-5 py-2 hover:bg-red-500/20 text-red-400 rounded-lg text-sm font-medium transition-colors"
                      >
                        Delete
                      </button>
                    </form>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </section>

      </div>
    </main>
  );
}
