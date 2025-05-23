import React from "react";
import { motion } from "framer-motion";

const PageTitle: React.FC<{ children: string }> = ({ children }) => {
  const [title, subTitle] = children.split("|");

  return (
    <motion.h1
      initial={{ scaleX: 0, y: -40 }}
      whileInView={{ scaleX: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ delay: 0.1, duration: 0.3 }}
      className="page-title"
    >
      {title}
      <span className="block text-[10px] md:text-sm text-gray-300 font-primary">{subTitle}</span>
    </motion.h1>
  );
};

export default PageTitle;
