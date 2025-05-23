import { motion } from "framer-motion";
import "../../css/Logo.scss";

const Logo = () => {
  return (
    <motion.a
      href="/"
      initial={{ opacity: 0, scale: 0.3 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
      className="flex items-center gap-4 logo cursor-pointer" 
    >
      Hari prasath K
    </motion.a>
  );
};

export default Logo;
