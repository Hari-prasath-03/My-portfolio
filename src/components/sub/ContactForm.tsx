import clsx from "clsx";
import React from "react";
import { motion } from "framer-motion";

import { slideInFromLeft, slideInFromRight } from "../../utils/motion";

interface ContactFormProps {
  className?: string;
  children: React.ReactNode;
  animateDirFrom?: "left" | "right" | undefined;
  animateDelay?: number;
  animateOnce?: boolean;
  style?: React.CSSProperties;
}

const ContactForm: React.FC<ContactFormProps> = ({
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
        className="absolute inset-0 -z-10 bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: "url(./wallpaper.jpg)" }}
      />
      {children}
    </motion.div>
  );
};

export default ContactForm;
