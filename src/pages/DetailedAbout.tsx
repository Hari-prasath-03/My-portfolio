import AboutSub from "../components/sections/AboutSub";
import Allprojects from "../components/sections/Allprojects";
import TechStacks from "../components/sections/TechStacks";
import useScrollToSection from "../hooks/useScrollToSection";

const DetailedAbout = () => {
  useScrollToSection('/about');

  return (
    <>
      <AboutSub />
      <TechStacks />
      <Allprojects />
    </>
  );
};

export default DetailedAbout;
