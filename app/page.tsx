import Header from "@/sections/header";
import HeroSection from "@/sections/hero";
import Intro from "@/sections/intro";
import Projects from "@/sections/projects";
import Testimonials from "@/sections/testimonials";

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <Intro />
      <Projects />
      <Testimonials />
    </>
  );
}
