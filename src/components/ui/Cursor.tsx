import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";
import useMousePosition from "../../hooks/useMousePosition";
import clsx from "clsx";

const Cursor = () => {
  const { x, y } = useMousePosition();
  const [isPointer, setIsPointer] = useState(false);

  const mX = useMotionValue(20);
  const mY = useMotionValue(20);

  const springX = useSpring(mX, { stiffness: 400, damping: 40 });
  const springY = useSpring(mY, { stiffness: 400, damping: 40 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const el = document.elementFromPoint(e.clientX, e.clientY);
      if (!el) return;

      const cursorStyle = window.getComputedStyle(el).cursor;
      setIsPointer(cursorStyle === "pointer" || cursorStyle === "grabbing");
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  mX.set(x + 12);
  mY.set(y + 12);

  return (
    <motion.div
      style={{ x: springX, y: springY }}
      className={clsx(
        "size-6 md:size-10 fixed z-[999] rounded-full outline-2 transition-colors duration-300",
        isPointer ? "outline-primary/75" : "outline-sky-50/75"
      )}
    />
  );
};

export default Cursor;
