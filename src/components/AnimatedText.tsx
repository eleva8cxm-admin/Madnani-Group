import { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { cn } from "@/lib/utils";

interface AnimatedTextProps {
  text: string;
  className?: string;
  mode?: "word" | "character";
  highlightWords?: string[]; // Words to highlight in primary color
  as?: "p" | "h1" | "h2" | "h3" | "span";
  speed?: "normal" | "slow" | "slower";
}

const AnimatedText = ({ 
  text, 
  className, 
  mode = "word",
  highlightWords = [],
  as: Component = "p",
  speed = "normal"
}: AnimatedTextProps) => {
  const container = useRef(null);
  
  // Speed presets: slower = more scroll distance needed = slower animation feel
  const getOffset = (): ["start 0.95" | "start 0.98" | "start 1.0", "start 0.35" | "start 0.15" | "start 0.0"] => {
    if (speed === "slower") return ["start 1.0", "start 0.0"];
    if (speed === "slow") return ["start 0.98", "start 0.15"];
    return ["start 0.95", "start 0.35"];
  };
  
  const { scrollYProgress } = useScroll({
    target: container,
    offset: getOffset(),
  });

  const words = text.split(" ");

  if (mode === "character") {
    const characters = text.split("");
    return (
      <Component ref={container} className={cn("flex flex-wrap leading-tight", className)}>
        {characters.map((char, i) => {
          const start = i / characters.length;
          const end = start + 1 / characters.length;
          return (
            <Char key={i} progress={scrollYProgress} range={[start, end]} char={char} />
          );
        })}
      </Component>
    );
  }

  return (
    <Component ref={container} className={cn("flex flex-wrap leading-tight", className)}>
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + 1 / words.length;
        const isHighlighted = highlightWords.some(hw => 
          word.toLowerCase().includes(hw.toLowerCase())
        );
        return (
          <Word 
            key={i} 
            progress={scrollYProgress} 
            range={[start, end]}
            isHighlighted={isHighlighted}
          >
            {word}
          </Word>
        );
      })}
    </Component>
  );
};

interface WordProps {
  children: string;
  progress: MotionValue<number>;
  range: [number, number];
  isHighlighted?: boolean;
}

const Word = ({ children, progress, range, isHighlighted = false }: WordProps) => {
  const opacity = useTransform(progress, range, [0.15, 1]);
  const y = useTransform(progress, range, [10, 0]);
  
  return (
    <span className="relative mr-2 lg:mr-3 inline-block">
      <span className="absolute opacity-[0.08]">{children}</span>
      <motion.span 
        style={{ opacity, y }}
        className={cn(
          "inline-block",
          isHighlighted && "text-primary"
        )}
      >
        {children}
      </motion.span>
    </span>
  );
};

interface CharProps {
  char: string;
  progress: MotionValue<number>;
  range: [number, number];
}

const Char = ({ char, progress, range }: CharProps) => {
  const opacity = useTransform(progress, range, [0.15, 1]);
  const y = useTransform(progress, range, [5, 0]);
  
  return (
    <span className="relative inline-block">
      <span className="absolute opacity-[0.08]">{char}</span>
      <motion.span style={{ opacity, y }} className="inline-block">
        {char === " " ? "\u00A0" : char}
      </motion.span>
    </span>
  );
};

export default AnimatedText;
