import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";
import AboutMe from "@/components/AboutMe";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <NavBar />
      <Hero />
      <AboutMe />
      <Skills />
      <Projects />
      <Testimonials />
      <Footer />
    </>
  );
}
