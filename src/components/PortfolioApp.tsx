import { ThemeProvider } from "@/components/ThemeProvider";
import { SmoothScroll } from "@/components/motion/SmoothScroll";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Experience } from "@/components/sections/Experience";
import { Certifications } from "@/components/sections/Certifications";
import { FeaturedWork } from "@/components/sections/FeaturedWork";
import { Skills } from "@/components/sections/Skills";
import { Interests } from "@/components/sections/Interests";
import { Contact } from "@/components/sections/Contact";

export default function PortfolioApp() {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
      disableTransitionOnChange
    >
      <SmoothScroll>
        <div className="relative isolate z-0 min-h-screen">
          <Navbar />
          <main className="relative z-0">
            <Hero />
            <About />
            <Experience />
            <FeaturedWork />
            <Skills />
            <Certifications />
            <Interests />
            <Contact />
          </main>
          <Footer />
        </div>
      </SmoothScroll>
    </ThemeProvider>
  );
}
