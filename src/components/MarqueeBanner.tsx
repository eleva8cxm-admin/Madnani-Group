import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface MarqueeBannerProps {
  text: string;
  speed?: number;
  variant?: 'default' | 'outline' | 'gradient';
  direction?: 'left' | 'right';
}

const MarqueeBanner = ({ 
  text, 
  speed = 1, 
  variant = 'default',
  direction = 'left' 
}: MarqueeBannerProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Move text based on scroll - faster with higher speed multiplier
  const xLeft = useTransform(scrollYProgress, [0, 1], ['0%', `-${50 * speed}%`]);
  const xRight = useTransform(scrollYProgress, [0, 1], ['0%', `${50 * speed}%`]);
  
  const x = direction === 'left' ? xLeft : xRight;

  // Repeated text for seamless loop effect
  const repeatedText = Array(8).fill(text).join(' • ');

  const getTextStyle = () => {
    switch (variant) {
      case 'outline':
        return 'text-transparent [-webkit-text-stroke:1px_hsl(var(--foreground)/0.3)]';
      case 'gradient':
        return 'text-gradient';
      default:
        return 'text-foreground/10';
    }
  };

  return (
    <div 
      ref={containerRef}
      className="relative overflow-x-clip py-8 md:py-12 w-full max-w-full"
    >
      {/* Main scrolling text */}
      <motion.div
        style={{ x }}
        className="whitespace-nowrap"
      >
        <span className={`text-5xl md:text-7xl lg:text-9xl font-bold uppercase tracking-tight ${getTextStyle()}`}>
          {repeatedText}
        </span>
      </motion.div>
    </div>
  );
};

// Double marquee with opposite directions
interface DoubleMarqueeBannerProps {
  topText: string;
  bottomText: string;
  speed?: number;
}

export const DoubleMarqueeBanner = ({ 
  topText, 
  bottomText, 
  speed = 1 
}: DoubleMarqueeBannerProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const xLeft = useTransform(scrollYProgress, [0, 1], ['0%', `-${40 * speed}%`]);
  const xRight = useTransform(scrollYProgress, [0, 1], ['-20%', `${40 * speed}%`]);

  const topRepeated = Array(6).fill(topText).join(' • ');
  const bottomRepeated = Array(6).fill(bottomText).join(' • ');

  return (
    <div 
      ref={containerRef}
      className="relative overflow-x-clip py-12 md:py-16 border-y border-border/20 w-full max-w-full"
    >
      {/* Top row - moves left */}
      <motion.div
        style={{ x: xLeft }}
        className="whitespace-nowrap mb-4"
      >
        <span className="text-4xl md:text-6xl lg:text-8xl font-bold uppercase tracking-tight text-foreground/10">
          {topRepeated}
        </span>
      </motion.div>

      {/* Bottom row - moves right */}
      <motion.div
        style={{ x: xRight }}
        className="whitespace-nowrap"
      >
        <span className="text-4xl md:text-6xl lg:text-8xl font-bold uppercase tracking-tight text-transparent [-webkit-text-stroke:1px_hsl(var(--primary)/0.3)]">
          {bottomRepeated}
        </span>
      </motion.div>
    </div>
  );
};

// Simple infinite auto-scroll marquee
export const AutoMarquee = ({ 
  items,
  speed = 30
}: { 
  items: string[];
  speed?: number;
}) => {
  const repeatedItems = [...items, ...items, ...items, ...items];
  
  return (
    <div className="overflow-x-clip py-6 border-y border-border/20 w-full max-w-full">
      <motion.div
        className="flex gap-8 whitespace-nowrap"
        animate={{ x: [0, -50 + '%'] }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: speed,
            ease: "linear",
          },
        }}
      >
        {repeatedItems.map((item, i) => (
          <span 
            key={i} 
            className="text-2xl md:text-3xl font-medium text-muted-foreground/50 flex items-center gap-8"
          >
            {item}
            <span className="text-primary">•</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
};

export default MarqueeBanner;
