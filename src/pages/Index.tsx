
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import PixelDock from "@/components/PixelDock";
import PixelParallax from "@/components/PixelParallax";

const Index = () => {
  return (
    <div className="min-h-screen relative">
      <PixelParallax />
      <div className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
      <PixelDock />
    </div>
  );
};

export default Index;
