import { aboutMe, toolsIUse } from "../../constants/content";
import Card, { CardHeader } from "../ui/Card";
import PageTitle from "../ui/PageTitle";
import ToolsItems from "../sub/ToolsItems";
import Skills from "../sub/Skills";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="hero-grad">
      <section
        id="About"
        className="responsive-container min-h-screen overflow-x-hidden h-full flex flex-col justify-center pb-5"
      >
        <PageTitle>
          Behind the code | A curious mind on a mission to build and grow
          through code.
        </PageTitle>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 h-full">
          <div className="flex flex-col gap-5">
            {/* Card 1 */}
            <Card
              className="flex-1 pt-4 px-4 pb-2"
              animateDirFrom="left"
              animateOnce
              animateDelay={0.2}
            >
              <CardHeader
                title="Who Am I?"
                discription="Crafting Scalable Web Experiences, One Line of Code at a Time."
              />
              <hr className="mt-2.5 text-stone-500" />
              <p className="font-primary text-neutral-50 font-light text-xs md:text-base pt-2 px-1.5 sm:px-2 my-auto h-fit">
                {aboutMe}
              </p>
            </Card>

            {/* Card 2 */}
            <Card
              className="md:flex-1 pt-4 px-4 pb-2"
              animateDirFrom="left"
              animateOnce
              animateDelay={0.5}
            >
              <CardHeader
                title="The Tech Behind My Builds"
                discription="Leveraging the Right Tech to Build Seamless Solutions."
              />
              <hr className="mt-2.5 text-stone-500" />
              <div className="[mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] h-fit my-auto">
                <ToolsItems
                  items={toolsIUse[0]}
                  className="mt-5"
                  animateDir="right"
                  animateSpeed={20}
                />
                <ToolsItems
                  items={toolsIUse[1]}
                  className="mt-4 mb-2"
                  animateDir="left"
                  animateSpeed={20}
                />
              </div>
            </Card>
          </div>

          {/* Card 3 */}
          <Card
            className="row-span-24 md:row-span-1 pt-4 px-4 pb-2"
            animateDirFrom="right"
            animateDelay={0.3}
            animateOnce
          >
            <CardHeader
              title="Tech That Builds Me"
              discription="A Growing Stack of Frameworks and Languages Driving My Journey."
            />
            <hr className="mt-2.5 text-stone-500" />
            <Skills />
          </Card>
        </div>
        <Link
          to="/about"
          className="text-center self-center w-fit mt-8 text-lg md:text-xl font-secondary text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-primary to-sky-300 leading-tight after-hover"
        >
          View more about me?
        </Link>
      </section>
    </div>
  );
};

export default About;
