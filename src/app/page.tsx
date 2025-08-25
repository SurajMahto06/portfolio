import Hero from "@/components/Hero";
import Quote from "@/components/Quote";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import About from "@/components/About";
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <>
      <Hero />
      <Quote/>
      <Projects/>
      <Skills/>
      <About/>
      <Contact/>
    </>
  );
}
