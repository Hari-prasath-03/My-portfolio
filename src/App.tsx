import Navbar from "./components/ui/Navbar";
import Hero from "./components/pages/Hero";
import About from "./components/pages/About";
import Projects from "./components/pages/Projects";
import Contact from "./components/pages/Contact";
import Footer from "./components/pages/Footer";
import Cursor from "./components/ui/Cursor";

import "./App.css";

const App = () => {
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

export default App;
