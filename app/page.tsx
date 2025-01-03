import Hero from "@/components/home/Hero";
import Navbar from "@/components/home/Navbar";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
      <Navbar />
      <Hero />
    </main>
  );
}
