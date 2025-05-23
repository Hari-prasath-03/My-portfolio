import React from "react";
import { motion } from "framer-motion";

interface ToggleButtonProps {
  toggleSidebar: () => void;
  isOpen: boolean;
}

const ToggleButton: React.FC<ToggleButtonProps> = ({
  toggleSidebar,
  isOpen,
}) => {
  return (
    <button
      onClick={toggleSidebar}
      style={{
        transition: "all 0.3s ease-in-out",
        boxShadow: isOpen ? "none" : "inset 0 0 10px rgba(255, 255, 255, 0.2)",
      }}
      className="fixed z-[999] top-[16px] left-[16px] size-[50px] rounded-full cursor-pointer duration-300 ease-in-out"
    >
      <svg
        className="grid place-content-center w-full"
        width="22"
        height="22"
        viewBox="0 0 23 23"
      >
        <motion.path
          strokeWidth="2.5"
          stroke="#fefefe"
          strokeLinecap="round"
          d="M 2 2.5 L 20 2.5"
          variants={{
            closed: { d: "M 2 2.5 L 20 2.5" },
            open: { d: "M 3 16.5 L 17 2.5" },
          }}
        />
        <motion.path
          strokeWidth="2.5"
          stroke="#fefefe"
          strokeLinecap="round"
          d="M 2 9.423 L 20 9.423"
          variants={{
            closed: { opacity: 1 },
            open: { opacity: 0 },
          }}
        />
        <motion.path
          strokeWidth="2.5"
          stroke="#fefefe"
          strokeLinecap="round"
          d="M 2 16.346 L 20 16.346"
          variants={{
            closed: { d: "M 2 16.346 L 20 16.346" },
            open: { d: "M 3 2.5 L 17 16.346" },
          }}
        />
      </svg>
    </button>
  );
};

export default ToggleButton;
