"use client";

import { motion } from "framer-motion";

export default function TextReveal({
  text,
  className = "",
}: {
  text: React.ReactNode;
  className?: string;
}) {
  const isString = typeof text === "string";
  const words = isString ? text.split(" ") : null;

  return (
    <div className={`overflow-hidden inline-block ${className}`}>
      {isString && words ? (
        words.map((word, i) => (
          <motion.span
            key={i}
            initial={{ y: "120%", opacity: 0, filter: "blur(10px)", rotateX: -90 }}
            whileInView={{ y: 0, opacity: 1, filter: "blur(0px)", rotateX: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              delay: i * 0.1,
              ease: [0.165, 0.84, 0.44, 1], // cubic-bezier
            }}
            style={{ display: "inline-block", marginRight: "0.25em", transformOrigin: "bottom" }}
          >
            {word}
          </motion.span>
        ))
      ) : (
        <motion.div
          initial={{ y: "100%", opacity: 0, filter: "blur(10px)" }}
          whileInView={{ y: 0, opacity: 1, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.165, 0.84, 0.44, 1] }}
        >
          {text}
        </motion.div>
      )}
    </div>
  );
}
