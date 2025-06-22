import { motion } from "framer-motion";

const Logo = () => {
  return (
    <motion.a
      href="/"
      initial={{ opacity: 0, scale: 0.3 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
      className="text-2xl font-primary font-bold cursor-pointer group"
    >
      Port
      <span className="text-primary/85 group-hover:text-primary transition-colors duration-300 ease-in">
        folio
      </span>
    </motion.a>
  );
};

export default Logo;
