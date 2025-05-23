import React from "react";
import { motion } from "framer-motion";
import { handleClickLink } from "../../utils";

interface LinksProps {
  toggleSidebar: () => void;
}

const Links: React.FC<LinksProps> = ({ toggleSidebar }) => {
  const links = ["Hero", "About", "Portfolio", "Contact"];

  const varients = {
    open: {
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1,
      },
    },
    closed: {
      transition: {
        staggerChildren: 0.08,
        staggerDirection: -1,
      },
    },
  };

  const linkVarients = {
    open: {
      opacity: 1,
      y: 0,
    },
    closed: {
      opacity: 0,
      y: -30,
    },
  };

  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    link: string
  ) => {
    handleClickLink(e, link);
    setTimeout(() => {
      toggleSidebar();
    }, 100);
  };

  return (
    <motion.div
      className="absolute w-full h-full flex flex-col justify-center items-center gap-5 font-primary"
      variants={varients}
    >
      <motion.span
        variants={linkVarients}
        className="font-secondary text-4xl text-primary underline mb-2 tracking-wide"
      >
        Menu
      </motion.span>
      {links.map((link) => (
        <motion.a
          href={`#${link}`}
          key={link}
          onClick={(e) => {
            handleClick(e, link);
            e.stopPropagation();
          }}
          variants={linkVarients}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="text-3xl cursor-pointer hover:text-primary"
        >
          {link}
        </motion.a>
      ))}
    </motion.div>
  );
};

export default Links;
