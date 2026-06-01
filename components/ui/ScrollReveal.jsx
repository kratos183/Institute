"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] },
  },
};

export default function ScrollReveal({
  children,
  delay = 0,
  direction = "up",
  className = "h-full w-full",
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const initialY = direction === "up" ? 40 : direction === "down" ? -40 : 0;
  const initialX = direction === "left" ? 40 : direction === "right" ? -40 : 0;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: initialY, x: initialX }}
      animate={isInView ? { opacity: 1, y: 0, x: 0 } : {}}
      transition={{
        duration: 0.65,
        delay,
        ease: [0.4, 0, 0.2, 1],
      }}
      className={className}
      style={{ display: "flex", flexDirection: "column" }}
    >
      {children}
    </motion.div>
  );
}
