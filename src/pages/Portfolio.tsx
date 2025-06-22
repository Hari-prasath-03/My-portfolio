import About from "../components/pages/About";
import Contact from "../components/pages/Contact";
import Footer from "../components/pages/Footer";
import Hero from "../components/pages/Hero";
import Projects from "../components/pages/Projects";
import Cursor from "../components/ui/Cursor";
import Navbar from "../components/ui/Navbar";


const Portfolio = () => {
  return (
    <div>
      <Cursor />
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default Portfolio;
