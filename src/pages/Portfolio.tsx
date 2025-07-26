import About from "../components/sections/About";
import Contact from "../components/sections/Contact";
import Hero from "../components/sections/Hero";
import Projects from "../components/sections/Projects";
import useScrollToSection from "../hooks/useScrollToSection";

const Portfolio = () => {
  useScrollToSection('/');

  return (
    <div>
      <Hero />
      <About />
      <Projects />
      <Contact />
    </div>
  );
};

export default Portfolio;
