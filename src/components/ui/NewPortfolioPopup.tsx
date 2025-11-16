import { motion } from "framer-motion";
import React from "react";
import { ArrowRight, Sparkles } from "lucide-react";

interface Props {
  onClose: () => void;
}

const containerVariants = {
  hidden: { y: "100%", opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 100, damping: 25, duration: 0.6 },
  },
  exit: { y: "100%", opacity: 0, transition: { ease: "easeInOut", duration: 0.3 } },
};

const contentVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { delay: 0.2, duration: 0.5 },
  },
};

const buttonVariants = {
  hover: { scale: 1.05, transition: { duration: 0.2 } },
  tap: { scale: 0.98 },
};

const NewPortfolioPopup: React.FC<Props> = ({ onClose }) => {
  return (
    <>
      {/* Overlay backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
      />

      {/* Main popup */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        role="dialog"
        aria-modal="true"
        className="fixed left-1/2 transform -translate-x-1/2 bottom-4 z-50 w-[calc(100%-1rem)] sm:w-[calc(100%-2rem)] max-w-sm sm:max-w-md md:max-w-lg"
      >
        <motion.div
          className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-black/20 p-6 md:p-8 shadow-2xl backdrop-blur-xl"
        >
          {/* Animated gradient background */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          {/* Glowing accent lines */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

          {/* Content */}
          <div className="relative z-10 flex flex-col gap-3 sm:gap-4">
            {/* Header with icon */}
            <motion.div variants={contentVariants} className="flex items-start gap-3">
              <motion.div
                animate={{ rotate: 360, scale: [1, 1.1, 1] }}
                transition={{ rotate: { duration: 20, repeat: Infinity, ease: "linear" }, scale: { duration: 2, repeat: Infinity } }}
                className="flex-shrink-0"
              >
                <Sparkles className="w-6 h-6 text-cyan-400" />
              </motion.div>
              <div>
                <h3
                  style={{ fontFamily: "var(--font-primary)" }}
                  className="font-bold text-lg md:text-xl bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent"
                >
                  Check Out My New Portfolio
                </h3>
              </div>
            </motion.div>

            {/* Description */}
            <motion.p variants={contentVariants} className="text-sm md:text-base text-white/70 leading-relaxed">
              I've crafted a fresh experience showcasing my latest work and skills. See what I've been up to!
            </motion.p>

            {/* Buttons */}
            <motion.div variants={contentVariants} className="flex flex-col-reverse sm:flex-row gap-2 sm:gap-3 pt-1 sm:pt-2">
              <motion.button
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
                onClick={onClose}
                className="flex items-center justify-center px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg font-semibold text-sm sm:text-base text-white/80 bg-white/5 border border-white/10 hover:border-white/30 transition-all duration-300 hover:bg-white/10"
              >
                Stay Here
              </motion.button>

              <motion.a
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
                href="https://hari-prasath-dev.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg font-semibold text-sm sm:text-base text-white bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 hover:shadow-lg hover:shadow-blue-500/50 shadow-md transition-all duration-300"
              >
                <span>Visit Portfolio</span>
                <motion.div
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowRight className="w-4 h-4" />
                </motion.div>
              </motion.a>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </>
  );
};

export default NewPortfolioPopup;