import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Content from "@/components/sections/Content";
import Contact from "@/components/sections/Contact";
import GradientBackground from "@/components/ui/GradientBackground";

export default function Home() {
  return (
    <>
      <GradientBackground />
      <Navigation />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Content />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
