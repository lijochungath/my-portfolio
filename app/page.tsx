import Navbar from "../components/layout/Navbar";
import Hero from "../components/home/Hero";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="pt-16">
        <Hero />
      </main>
    </>
  );
}