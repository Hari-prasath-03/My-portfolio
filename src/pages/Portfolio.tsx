import { useEffect } from "react";
import About from "../components/sections/About";
import Contact from "../components/sections/Contact";
import Hero from "../components/sections/Hero";
import Projects from "../components/sections/Projects";
import { usePopupModel } from "../hooks/usePopupModel";
import NewPortfolioPopup from "../components/ui/NewPortfolioPopup";
import useScrollToSection from "../hooks/useScrollToSection";

const Portfolio = () => {
  useScrollToSection("/");
  const [openPopup, closePopup, PopupBackdrop] = usePopupModel({
    closeOnBackdropClick: false,
    backgroundColor: "transparent",
  });

  useEffect(() => {
    const onLoad = () => setTimeout(openPopup, 2000);
    if (document.readyState === "complete") onLoad();
    else window.addEventListener("load", onLoad);

    return () => window.removeEventListener("load", onLoad);
  }, []);

  return (
    <div>
      <Hero />
      <About />
      <Projects />
      <Contact />
      <PopupBackdrop>
        <NewPortfolioPopup onClose={closePopup} />
      </PopupBackdrop>
    </div>
  );
};

export default Portfolio;
