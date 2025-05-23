import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

import { skills } from "../../constants/content";

const Skills = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [constraints, setConstraints] = useState({
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  });

  useEffect(() => {
    if (containerRef.current) {
      const { offsetWidth, offsetHeight } = containerRef.current;
      setConstraints({
        left: 0,
        right: offsetWidth - 100,
        top: 0,
        bottom: offsetHeight - 40,
      });
    }
  }, []);

  const genRandomNum = (max: number) => Math.floor(Math.random() * max);

  return (
    <motion.div ref={containerRef} className="absolute inset-0 top-26">
      {skills.map(({ name, icon: Icon }) => (
        <motion.div
          key={name}
          drag
          dragConstraints={constraints}
          dragElastic={0.8}
          className="inline-flex items-center bg-gradient-to-r from-emerald-300 to-sky-500 absolute rounded-full gap-2 px-3 py-1 shadow-2xl border border-neutral-800/20 cursor-grab active:cursor-grabbing"
          style={{
            x: genRandomNum(constraints.right),
            y: genRandomNum(constraints.bottom),
          }}
          whileDrag={{ scale: 1.05 }}
        >
          <Icon className="text-neutral-800 size-6 sm:size-7" />
          <p className="text-xs sm:text-sm text-neutral-800 font-primary font-extrabold">
            {name}
          </p>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default Skills;
