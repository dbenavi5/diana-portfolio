import FAQs from "@/sections/faqs";
import Footer from "@/sections/footer";
import Header from "@/sections/header";
import Heindigoction from "@/sections/hero";
import Intro from "@/sections/intro";
import Projects from "@/sections/projects";
import Testimonials from "@/sections/testimonials";

export default function Home() {
  return (
    <>
      <Header />
      <Heindigoction />
      <Intro />
      <Projects />
      <Testimonials />
      <FAQs />
      <Footer />
    </>
  );
}
