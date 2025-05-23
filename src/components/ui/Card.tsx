import clsx from "clsx";
import React from "react";
import { motion } from "framer-motion";

import { slideInFromLeft, slideInFromRight } from "../../utils/motion";
import { StarIcon } from "./Icons";

interface CardProps {
  className?: string;
  children: React.ReactNode;
  animateDirFrom?: "left" | "right" | undefined;
  animateDelay?: number;
  animateOnce?: boolean;
  style?: React.CSSProperties;
}

const Card: React.FC<CardProps> = ({
  className,
  children,
  animateDirFrom,
  animateDelay,
  animateOnce = false,
  style,
}) => {
  const animateDir = {
    left: slideInFromLeft(animateDelay),
    right: slideInFromRight(animateDelay),
  };
  return (
    <motion.div
      className={clsx(
        "card bg-gray-800 backdrop-blur-sm rounded-2xl relative z-0 overflow-hidden after:content-[''] after:block after:absolute after:inset-0 after:z-10 after:outline-[1.5px] after:outline-white/20 after:outline-offset-[-2px] after:pointer-events-none after:rounded-2xl",
        className
      )}
      variants={animateDir[animateDirFrom as "left" | "right"] ?? undefined}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: animateOnce, amount: 0.1 }}
      style={style}
    >
      <div
        className="absolute inset-0 -z-10 opacity-5"
        style={{ backgroundImage: "url(./grain.jpg)" }}
      />
      {children}
    </motion.div>
  );
};

export default Card;

type FontSizeOption = "sm" | "lg";

export const CardHeader = ({
  title,
  discription,
  fontSize = "sm",
}: {
  title: string;
  discription: string;
  fontSize?: FontSizeOption;
}) => {
  const textSize: Record<FontSizeOption, [string, string]> = {
    sm: ["text-xl sm:text-2xl", "text-[10px] sm:text-sm"],
    lg: ["text-2xl sm:text-3xl", "text-[10px] sm:text-base"],
  };
  return (
    <div className="flex flex-col">
      <div className="inline-flex items-center gap-1 sm:gap-2">
        <StarIcon className="text-primary size-5 sm:size-7" />
        <h3 className={clsx("font-secondary", textSize[fontSize][0])}>
          {title}
        </h3>
      </div>
      <p
        className={clsx(
          "text-stone-400 font-semibold font-primary pl-1 sm:pl-2 pt-1 sm:pt-2",
          textSize[fontSize][1]
        )}
      >
        {discription}
      </p>
    </div>
  );
};
