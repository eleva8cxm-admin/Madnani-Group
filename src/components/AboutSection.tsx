import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Building2, Users, Award, TrendingUp } from 'lucide-react';
import AnimatedText from './AnimatedText';
import SectionDivider from './SectionDivider';

const stats = [
  { icon: Building2, value: '10+', label: 'Projects Completed' },
  { icon: Users, value: '30+', label: 'Employees' },
  { icon: Award, value: '12', label: 'Years Experience' },
  { icon: TrendingUp, value: '₹100L', label: 'Equity Capital' },
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
      },
    },
  };

  return (
    <section id="about" className="bg-background relative overflow-x-clip">
      {/* CRED-Style Big Text Section */}
      <div className="py-24 sm:py-32 lg:py-48 px-4 sm:px-6">
        <div className="container-custom">
          <p className="text-primary font-medium tracking-[0.3em] uppercase text-sm mb-12">
            WHO WE ARE
          </p>
          
          {/* Big Animated Statement */}
          <div className="max-w-9xl">
            <AnimatedText
              text="At MADNANI GROUP we believe real estate is more than buying or selling property—it's about building lasting relationships and helping people make confident decisions about their future. With a deep understanding of the local market and a commitment to integrity, we provide personalized real estate solutions tailored to each client's unique needs."
              className="text-3xl md:text-5xl lg:text-6xl font-light text-foreground leading-[1.3]"
              highlightWords={["MADNANI", "GROUP", "real estate", "lasting relationships", "integrity"]}
              mode="word"
              speed="slow"
            />
          </div>
        </div>
      </div>

      {/* Decorative Divider */}
      <SectionDivider showLogo={true} />

      {/* Stats + Details Section */}
      <div className="section-padding pt-0">
        <div className="container-custom relative">
          <motion.div
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="grid lg:grid-cols-2 gap-16 items-start"
          >
            {/* Left Content */}
            <div className="space-y-8">
              <motion.h2
                variants={itemVariants}
                className="text-4xl md:text-5xl font-semibold leading-tight"
              >
                Madnani 
                <span className="text-gradient"> Group Profile</span>
              </motion.h2>

              <div className="space-y-6">
                <AnimatedText 
                  text="A well diversified group covering real-estate, construction, IT and software services, field surveys, data mining, electrical projects and energy generation from renewable sources."
                  className="text-muted-foreground text-xl leading-relaxed font-light"
                  highlightWords={["real-estate", "construction", "IT"]}
                  mode="word"
                />
              </div>

              <motion.div
                variants={itemVariants}
                className="pt-8"
              >
                <p className="text-primary font-medium tracking-[0.2em] uppercase text-xs mb-4">Our Companies</p>
                <div className="space-y-3">
                  {['M/S Madnani Real Estate Pvt Ltd', 'M/S Madnani Technologies', 'M/S Madnani Ventures', 'M/S Madnani Energy Solutions'].map((company, i) => (
                    <motion.div
                      key={company}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.5 + i * 0.1 }}
                      className="flex items-center gap-3"
                    >
                      <span className="w-8 h-px bg-primary/50" />
                      <span className="text-foreground text-lg">{company}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Right - Stats Grid */}
            <motion.div
              variants={containerVariants}
              className="grid grid-cols-2 gap-5"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  variants={itemVariants}
                  custom={index}
                  className="relative group"
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Glow effect on hover */}
                  <div className="absolute inset-0 bg-primary/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Card */}
                  <div className="relative bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm border border-border/50 p-6 md:p-8 rounded-2xl overflow-hidden group-hover:border-primary/30 transition-all duration-500">
                    {/* Gradient overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    {/* Corner accent */}
                    <div className="absolute top-0 right-0 w-20 h-20 bg-primary/5 rounded-bl-full" />
                    
                    <div className="relative z-10">
                      {/* Icon with glowing background */}
                      <div className="relative inline-flex mb-5">
                        <div className="absolute inset-0 bg-primary/20 rounded-xl blur-md" />
                        <div className="relative w-12 h-12 bg-primary/10 border border-primary/20 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                          <stat.icon className="w-6 h-6 text-primary" />
                        </div>
                      </div>
                      
                      {/* Value */}
                      <div className="text-4xl md:text-5xl font-bold text-foreground mb-2 tracking-tight">
                        {stat.value}
                      </div>
                      
                      {/* Label */}
                      <div className="text-muted-foreground text-xs tracking-[0.15em] uppercase font-medium">
                        {stat.label}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Philosophy Big Text */}
      <div className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 border-t border-border/30">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <AnimatedText
              text="our philosophy is simple. decisions are made fairly to serve the best interests of clients, employees, and the community."
              className="text-2xl md:text-4xl lg:text-5xl font-light text-foreground leading-[1.4]"
              highlightWords={["philosophy", "clients", "employees", "community"]}
              mode="word"
            />
            
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-primary font-medium mt-12 tracking-wider"
            >
              Core Values: Ethics, Integrity, Principles
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
