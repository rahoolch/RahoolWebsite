import { getPostBySlug } from '@/app/actions/post';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import { Metadata } from 'next';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post || post.isDraft) return { title: "Not Found" };
  
  return {
    title: `${post.title} | Blog`,
  };
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post || post.isDraft) {
    notFound();
  }

  return (
    <main className="min-h-[100dvh] bg-[#0a0a0a] text-white selection:bg-emerald-500/30 relative py-12 px-6 lg:px-0">
      
      {/* Floating Global Back Button */}
      <Link 
        href="/blog" 
        className="fixed top-6 left-6 md:top-10 md:left-10 z-50 flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full bg-black/60 hover:bg-black/90 backdrop-blur-md border border-white/10 shadow-2xl transition-all duration-300 group"
        aria-label="Back to Blog"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6 text-white/70 group-hover:text-white group-hover:-translate-x-1 transition-all">
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
        </svg>
      </Link>

      <article className="max-w-3xl mx-auto pt-16 md:pt-24 pb-32">
        <header className="mb-16 border-b border-white/10 pb-12">
          <div className="flex items-center gap-4 text-emerald-400 font-medium tracking-widest uppercase text-sm mb-6">
            <span>Published</span>
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            <time dateTime={post.publishedAt.toISOString()}>
              {new Date(post.publishedAt).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </time>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 leading-[1.1] text-balance">
            {post.title}
          </h1>
        </header>

        <div className="prose prose-invert prose-lg md:prose-xl max-w-none prose-p:leading-relaxed prose-headings:tracking-tight prose-a:text-emerald-400 prose-a:no-underline hover:prose-a:underline">
          <ReactMarkdown>
            {post.content}
          </ReactMarkdown>
        </div>
      </article>
      
    </main>
  );
}
