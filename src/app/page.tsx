import ScrollyCanvas from "@/components/ScrollyCanvas";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <main className="w-full relative overflow-x-clip bg-black selection:bg-emerald-500/30">
      <ScrollyCanvas frameCount={120} />
      <Projects />
    </main>
  );
}
