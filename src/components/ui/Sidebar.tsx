import { useState } from "react";
import { motion } from "framer-motion";

import Links from "../sub/Links";
import ToggleButton from "../sub/ToggleButton";

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  const toggleSidebar = () => setOpen((pv) => !pv);

  const varients = {
    open: {
      clipPath: "circle(1200px at 40px 40px)",
      transition: {
        delay: 0.5,
        type: "spring",
        stiffness: 300,
        damping: 30,
      },
    },
    closed: {
      clipPath: "circle(25px at 40px 40px)",
      transition: {
        delay: 0.5,
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
  };

  return (
    <motion.div
      className="fixed z-50 flex flex-col items-center justify-center bg-dark"
      animate={open ? "open" : "closed"}
      variants={varients}
    >
      <motion.div
        className="fixed top-0 left-0 bottom-0 w-full sx:w-96 bg-dark"
        onClick={toggleSidebar}
        variants={varients}
      >
        <Links toggleSidebar={toggleSidebar} />
      </motion.div>
      <ToggleButton isOpen={open} toggleSidebar={toggleSidebar} />
    </motion.div>
  );
};

export default Sidebar;
