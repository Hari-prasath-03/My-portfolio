import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

interface NewPortfolioBatchProps {
  onClick: () => void;
}

const NewPortfolioBatch: React.FC<NewPortfolioBatchProps> = ({ onClick }) => {
  return (
    <motion.button
      onClick={onClick}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: "spring", stiffness: 100, damping: 15, delay: 0.5 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 left-6 z-40 group"
      aria-label="Open new portfolio"
    >
      <motion.div
        animate={{
          boxShadow: [
            "0 0 20px rgba(34, 211, 238, 0.4)",
            "0 0 40px rgba(34, 211, 238, 0.6)",
            "0 0 20px rgba(34, 211, 238, 0.4)",
          ],
        }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20"
      />

      {/* Main badge */}
      <div className="relative flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-white/10 to-white/5 border border-white/20 backdrop-blur-xl shadow-xl hover:border-white/40 transition-all duration-300">
        {/* Icon container */}
        <motion.div
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          className="flex items-center justify-center"
        >
          <Sparkles className="w-6 h-6 text-cyan-400" />
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, x: -10 }}
        whileHover={{ opacity: 1, x: 0 }}
        className="absolute left-20 top-1/2 -translate-y-1/2 whitespace-nowrap px-3 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-sm font-semibold shadow-lg pointer-events-none"
      >
        View New Portfolio
        <div className="absolute -left-1.5 top-1/2 -translate-y-1/2 w-0 h-0 border-l-0 border-r-8 border-t-4 border-b-4 border-r-blue-500 border-t-transparent border-b-transparent" />
      </motion.div>

      <motion.div
        animate={{ scale: [1, 1.4], opacity: [1, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute inset-0 rounded-full border border-cyan-400/60"
      />
    </motion.button>
  );
};

export default NewPortfolioBatch;
