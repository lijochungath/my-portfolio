import Navbar from "../components/layout/Navbar";
import Hero from "../components/home/Hero";
import Experience from "../components/home/Experience";
import Projects from "../components/home/Projects";
import Skills from "../components/home/Skills";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="pt-16">
        <Hero />
        <Experience />
        <Projects />
        <Skills />
        
    </main>
    </>
  );
}