import React, { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

import "../css/Paralax.scss";

type sky = "day" | "night";

interface ParalaxProps {
  title: string;
  bg: sky;
}

const Paralax: React.FC<ParalaxProps> = ({ title, bg }) => {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const textYPosition = useTransform(scrollYProgress, [0, 1], ["0%", "700%"]);
  const planetYPosition = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div
      ref={sectionRef}
      style={{
        background:
          bg === "night"
            ? "linear-gradient(180deg, #111132, #0c0c1d)"
            : "linear-gradient(180deg, #111132, #505064)",
      }}
      className="w-full h-full relative flex justify-center items-center overflow-hidden"
    >
      <motion.h1
        style={{ y: textYPosition }}
        className="text-center text-4xl md:text-6xl font-secondary"
      >
        {title}
      </motion.h1>
      <div className="mountain" />
      {bg === "day" ? (
        <motion.div style={{ y: planetYPosition }} className="sun" />
      ) : (
        <motion.div style={{ y: planetYPosition }} className="planets" />
      )}
      <motion.div style={{ x: planetYPosition }} className="stars" />
    </div>
  );
};

export default Paralax;
