import { projects } from "@/data/projects";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const project = projects.find((p) => p.id.toString() === id);
  if (!project) return { title: "Project Not Found" };
  
  return {
    title: `${project.title} | Rahul Chandani`,
    description: project.description,
  };
}

export default async function ProjectDetails({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params;
  const project = projects.find((p) => p.id.toString() === id);

  if (!project) {
    notFound();
  }

  // Pre-process the multiline text into paragraphs
  const paragraphs = project.expandedContent.trim().split("\n\n");

  return (
    <main className="min-h-[100dvh] bg-[#0a0a0a] text-white selection:bg-emerald-500/30 relative">
      
      {/* Floating Global Back Button */}
      <Link 
        href="/#projects" 
        className="fixed top-6 left-6 md:top-10 md:left-10 z-50 flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full bg-black/60 hover:bg-black/90 backdrop-blur-md border border-white/10 shadow-2xl transition-all duration-300 group"
        aria-label="Back to Portfolio"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6 text-white/70 group-hover:text-white group-hover:-translate-x-1 transition-all">
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
        </svg>
      </Link>

      {/* Hero section with image backdrop */}
      <div className="relative w-full h-[50vh] min-h-[400px]">
        <Image 
          src={project.image}
          alt={project.title}
          fill
          priority
          className="object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/80 to-transparent" />
        
        {/* Navigation & Header inside Hero */}
        <div className="absolute inset-x-0 bottom-0 p-8 md:p-24 max-w-7xl mx-auto flex flex-col items-start z-10 font-sans">
          <p className="text-emerald-400 text-sm md:text-base font-semibold uppercase tracking-[0.2em] mb-4">
            {project.category}
          </p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-6 text-balance">
            {project.title}
          </h1>
          <p className="text-xl md:text-3xl font-light text-white/80 max-w-3xl text-balance">
            {project.description}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-8 md:px-24 py-20 flex flex-col lg:flex-row gap-16 lg:gap-32 font-sans relative z-20">
        {/* Main Content Body */}
        <div className="lg:w-2/3">
          <div className="text-white/70 font-light leading-[1.9] text-lg md:text-xl">
            {paragraphs.map((para, idx) => (
              <p key={idx} className="mb-8">{para}</p>
            ))}
          </div>
        </div>

        {/* Sidebar: Technologies */}
        <div className="lg:w-1/3">
          <div className="sticky top-12 bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-md shadow-2xl">
            <h3 className="text-2xl font-semibold tracking-tight mb-8">
              Technologies Used
            </h3>
            <div className="flex flex-wrap gap-3">
              {project.technologies.map((tech) => (
                <span 
                  key={tech}
                  className="px-4 py-2 rounded-full bg-white/10 text-white/90 text-sm font-medium tracking-wide border border-white/10 shadow-inner"
                >
                  {tech}
                </span>
              ))}
            </div>
            
            {/* Sidebar contact CTA */}
            <div className="mt-12 pt-8 border-t border-white/10 flex flex-col gap-6">
              <div>
                <p className="text-white/50 text-sm mb-3">Interested in discussing this architecture?</p>
                <a href="mailto:rahool2306@gmail.com" className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-colors font-medium">
                  Contact Rahul 
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>
                </a>
              </div>
              
              <div className="flex items-center gap-4">
                <a href="https://linkedin.com/in/rahul-chandani" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white transition-colors text-sm font-medium tracking-wide uppercase">
                  LinkedIn
                </a>
                <span className="text-white/20">—</span>
                <a href="https://github.com/rahoolch" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white transition-colors text-sm font-medium tracking-wide uppercase">
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
