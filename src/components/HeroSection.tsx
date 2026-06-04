import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import property1 from '@/assets/property-1.jpeg';
import property2 from '@/assets/property-2.jpeg';
import property3 from '@/assets/property-3.jpeg';
import property4 from '@/assets/property-4.jpeg';

const images = [property1, property2, property3, property4];

const HeroSection = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative min-h-screen w-full overflow-x-clip">
      {/* Background Slideshow - Smooth Ken Burns Effect */}
      <div className="absolute inset-0">
        <AnimatePresence mode="sync">
          <motion.div
            key={currentImage}
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: 1,
              scale: [1, 1.05],
            }}
            exit={{ opacity: 0 }}
            transition={{ 
              opacity: { duration: 1.2, ease: 'easeInOut' },
              scale: { duration: 6, ease: 'linear' }
            }}
            className="absolute inset-0"
          >
            <img
              src={images[currentImage]}
              alt="Property showcase"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </AnimatePresence>
        
        {/* Subtle Gradient Overlay - Left side darker for text visibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/10" />
      </div>

      {/* Minimal Content */}
      <div className="relative z-10 min-h-screen flex flex-col justify-end container-custom pb-20 sm:pb-24 pt-20 sm:pt-24">
        <div className="max-w-2xl mb-10 sm:mb-14">
          {/* Main Headline - Elegant & Minimal */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-white leading-[1.1] tracking-tight"
          ><span className="font-medium">
            Building Dreams,<br />
            Creating Legacy</span>
          </motion.h1>

          {/* Accent Line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.8, ease: 'easeOut' }}
            className="w-12 sm:w-16 h-0.5 bg-primary mt-6 sm:mt-8 mb-8 sm:mb-10 origin-left"
          />

          {/* Pill Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="#about"
              className="group inline-flex items-center gap-2 sm:gap-3 bg-white/10 backdrop-blur-sm text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm font-medium tracking-wide border border-white/20 transition-all duration-300 hover:bg-white/20 hover:border-white/30"
            >
              about us
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 sm:gap-3 bg-white/10 backdrop-blur-sm text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm font-medium tracking-wide border border-white/20 transition-all duration-300 hover:bg-white/20 hover:border-white/30"
            >
              our projects
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </motion.div>
        </div>
      </div>

      {/* Minimal Slide Indicators - Bottom Right */}
      <div className="absolute bottom-6 sm:bottom-8 right-4 sm:right-8 z-20 flex items-center gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImage(index)}
            className={`transition-all duration-500 rounded-full ${
              currentImage === index
                ? 'w-8 h-2 bg-white'
                : 'w-2 h-2 bg-white/40 hover:bg-white/60'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Subtle Progress Bar */}
      <motion.div
        key={currentImage}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 6, ease: 'linear' }}
        className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary/60 origin-left z-20"
      />
    </section>
  );
};

export default HeroSection;
