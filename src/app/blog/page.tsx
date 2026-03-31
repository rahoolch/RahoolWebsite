import { getPosts } from '@/app/actions/post';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Blog | Rahul Chandani",
  description: "Technical essays and deep dives on AI orchestration and engineering.",
};

export default async function BlogIndex() {
  const posts = await getPosts(true); // Fetch only non-draft posts from SQLite
  
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white p-6 md:p-24 selection:bg-emerald-500/30">
      <div className="max-w-4xl mx-auto flex flex-col pt-12">
        <Link 
          href="/" 
          className="text-white/50 hover:text-white transition-colors text-sm uppercase tracking-widest font-medium mb-12 flex items-center gap-2 w-fit"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 -rotate-90">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m0 0l6.75-6.75M12 19.5l-6.75-6.75" />
          </svg>
          Back to Portfolio
        </Link>

        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent w-max">
          The Architect's Log.
        </h1>
        <p className="text-xl text-white/50 font-light mb-20 max-w-2xl leading-relaxed">
          Essays, post-mortems, and technical deep dives on applied Artificial Intelligence, Distributed Systems, and Pipeline Engineering.
        </p>

        {posts.length === 0 ? (
          <div className="text-center py-20 border border-white/5 rounded-3xl bg-white/5 backdrop-blur-sm">
            <p className="text-white/40 text-lg">No public articles published yet. Check back soon.</p>
          </div>
        ) : (
          <div className="flex flex-col gap-8">
            {posts.map(post => (
              <Link key={post.id} href={`/blog/${post.slug}`} className="group">
                <article className="p-8 border border-white/10 rounded-3xl bg-white/5 hover:bg-white/10 transition-colors backdrop-blur-md relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <p className="text-emerald-400 text-sm font-medium tracking-widest uppercase mb-4 opacity-80">
                    {new Date(post.publishedAt).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </p>
                  <h2 className="text-3xl font-bold tracking-tight mb-4 group-hover:text-emerald-300 transition-colors line-clamp-2">
                    {post.title}
                  </h2>
                  <div className="text-white/50 font-light leading-relaxed line-clamp-3">
                    {post.content.split('\n')[0].replace(/#/g, '')}
                  </div>
                  <div className="mt-8 flex items-center gap-2 text-white/40 font-medium group-hover:text-white transition-colors">
                    Read Article &rarr;
                  </div>
                </article>
              </Link>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
