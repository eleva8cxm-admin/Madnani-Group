import { motion } from 'framer-motion';

interface SectionDividerProps {
  showLogo?: boolean;
  variant?: 'default' | 'minimal' | 'dots';
}

const SectionDivider = ({ showLogo = true, variant = 'default' }: SectionDividerProps) => {
  if (variant === 'minimal') {
    return (
      <div className="py-8 flex items-center justify-center gap-6">
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="h-px w-24 bg-gradient-to-r from-transparent to-primary/50 origin-left"
        />
        <motion.div
          initial={{ scale: 0, rotate: -45 }}
          whileInView={{ scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="w-2 h-2 bg-primary rotate-45"
        />
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="h-px w-24 bg-gradient-to-l from-transparent to-primary/50 origin-right"
        />
      </div>
    );
  }

  if (variant === 'dots') {
    return (
      <div className="py-12 flex items-center justify-center gap-3">
        {[0, 1, 2, 3, 4].map((i) => (
          <motion.div
            key={i}
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: i === 2 ? 1 : 0.3 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className={`rounded-full bg-primary ${i === 2 ? 'w-3 h-3' : 'w-1.5 h-1.5'}`}
          />
        ))}
      </div>
    );
  }

  // Default - with logo
  return (
    <div className="py-16 flex flex-col items-center justify-center">
      {/* Decorative lines with logo */}
      <div className="flex items-center gap-8">
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="h-px w-16 md:w-32 bg-gradient-to-r from-transparent to-border origin-left"
        />
        
        {showLogo ? (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative"
          >
            <div className="w-16 h-16 rounded-full bg-white border border-border flex items-center justify-center">
              <img 
                src="/logo-transparent-svg.svg" 
                alt="Madnani Group" 
                className="h-10 w-auto"
              />
            </div>
            {/* Glow effect */}
            <div className="absolute inset-0 w-16 h-16 rounded-full bg-primary/10 blur-xl -z-10" />
          </motion.div>
        ) : (
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="w-3 h-3 bg-primary rotate-45"
          />
        )}
        
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="h-px w-16 md:w-32 bg-gradient-to-l from-transparent to-border origin-right"
        />
      </div>
      
      {/* Subtle tagline */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="mt-6 text-xs text-muted-foreground/50 tracking-[0.3em] uppercase"
      >
        Let's Grow Together
      </motion.p>
    </div>
  );
};

export default SectionDivider;
