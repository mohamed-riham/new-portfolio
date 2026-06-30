"use client";

import { motion } from "framer-motion";

interface Props {
  text: string;
  className?: string;
  style?: React.CSSProperties;
  delay?: number;
  stagger?: number;
}

const CHAR_VARIANTS = {
  hidden: { opacity: 0, y: 60, rotateX: -80, filter: "blur(8px)" },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    rotateX: 0,
    filter: "blur(0px)",
    transition: {
      delay: i * 0.045,
      duration: 0.65,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

export default function KineticText({ text, className, style, delay = 0, stagger = 0.045 }: Props) {
  const words = text.split(" ");

  return (
    <span
      className={className}
      style={{
        display: "inline",
        perspective: "600px",
        ...style,
      }}
    >
      {words.map((word, wi) => (
        <span key={wi} style={{ display: "inline-block", whiteSpace: "nowrap", marginRight: "0.28em" }}>
          {word.split("").map((char, ci) => {
            const globalIdx = words
              .slice(0, wi)
              .reduce((acc, w) => acc + w.length, 0) + ci;
            return (
              <motion.span
                key={ci}
                custom={globalIdx}
                variants={{
                  hidden: { opacity: 0, y: 56, rotateX: -70, filter: "blur(6px)" },
                  visible: {
                    opacity: 1, y: 0, rotateX: 0, filter: "blur(0px)",
                    transition: {
                      delay: delay + globalIdx * stagger,
                      duration: 0.7,
                      ease: [0.16, 1, 0.3, 1],
                    },
                  },
                }}
                initial="hidden"
                animate="visible"
                style={{ display: "inline-block", transformStyle: "preserve-3d" }}
              >
                {char}
              </motion.span>
            );
          })}
        </span>
      ))}
    </span>
  );
}
