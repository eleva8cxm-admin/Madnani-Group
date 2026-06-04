import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase, GraduationCap, Zap, Trophy } from 'lucide-react';
import AnimatedText from './AnimatedText';
import SectionDivider from './SectionDivider';

const FounderSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="bg-background relative overflow-x-clip">
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 -left-32 w-64 sm:w-96 h-64 sm:h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-64 sm:w-96 h-64 sm:h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      {/* Big Quote Section */}
      <div className="py-24 sm:py-32 lg:py-48 px-4 sm:px-6 border-b border-border/30">
        <div className="container-custom">
          <p className="text-primary font-medium tracking-[0.3em] uppercase text-sm mb-12">
            LEADERSHIP
          </p>
          
          <div className="max-w-5xl">
            <AnimatedText
              text="we are committed to fostering a culture of respect, accountability and social responsibility, upholding the highest standards in every aspect of our operations."
              className="text-3xl md:text-5xl lg:text-6xl font-light text-foreground leading-[1.3]"
              highlightWords={["respect", "accountability", "responsibility", "standards"]}
              mode="word"
            />
          </div>
        </div>
      </div>

      {/* Decorative Divider */}
      <SectionDivider variant="dots" />

      {/* Founder Details */}
      <div className="section-padding pt-0 relative">
        <div className="container-custom">
          <motion.div
            ref={ref}
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 1 }}
            className="max-w-5xl mx-auto"
          >
            {/* Founder Info */}
            <div className="grid lg:grid-cols-[1fr,2fr] gap-16 items-start mb-16">
              {/* Left - Name & Title */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
              >

                <div className="flex items-center gap-4 mb-6">
                  <div className="h-px w-12 bg-primary" />
                  <span className="text-primary font-medium tracking-wider uppercase text-sm">
                    Founder & CEO
                  </span>
                </div>
                <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-border/50 shadow-2xl mb-8 group">
                  <div className="absolute inset-0 bg-primary/20 mix-blend-overlay group-hover:bg-transparent transition-all duration-500" />
                  <img 
                    src="/image.png" 
                    alt="Mr. Hitesh Madnani" 
                    className="w-full h-full object-cover object-top transform group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                
                <h3 className="text-4xl md:text-5xl font-semibold text-foreground mb-4">
                  Mr. Hitesh<br />
                  <span className="text-gradient">Madnani</span>
                </h3>
                
                <p className="text-muted-foreground text-lg">
                  Engineering Graduate<br />
                  12+ Years Entrepreneurial Experience
                </p>
              </motion.div>

              {/* Right - Details Grid */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="grid md:grid-cols-2 gap-5"
              >
                {[
                  {
                    title: 'Professional Background',
                    content: 'Former Software Developer and Project Manager at Tata Consultancy Services (TCS). Now successfully running three companies under the Madnani Group umbrella.',
                    Icon: Briefcase
                  },
                  {
                    title: 'Education',
                    content: 'Engineering graduate with distinction in Software Technology from Engineering College Ajmer.',
                    Icon: GraduationCap
                  },
                  {
                    title: 'Key Skills',
                    content: 'Expertise in digital literacy, data analysis, leadership, and team building. A dynamic, visionary leader.',
                    Icon: Zap
                  },
                  {
                    title: 'Reputation',
                    content: 'Well-known businessman in Ajmer with a strong social profile and extensive industry network.',
                    Icon: Trophy
                  }
                ].map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    className="group relative"
                    whileHover={{ y: -5 }}
                  >
                    {/* Glow on hover */}
                    <div className="absolute inset-0 bg-primary/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <div className="relative p-6 bg-gradient-to-br from-card/60 to-card/30 backdrop-blur-sm border border-border/50 rounded-2xl overflow-hidden group-hover:border-primary/30 transition-all duration-500">
                      {/* Top gradient line */}
                      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      
                      {/* Icon */}
                      <div className="w-10 h-10 bg-primary/10 border border-primary/20 rounded-xl flex items-center justify-center mb-4">
                        <item.Icon className="w-5 h-5 text-primary" />
                      </div>
                      
                      {/* Title */}
                      <h5 className="text-primary font-semibold tracking-wider uppercase text-xs mb-3 flex items-center gap-2">
                        <span className="w-6 h-px bg-primary/50" />
                        {item.title}
                      </h5>
                      
                      {/* Content */}
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {item.content}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Vision Statement */}
      <div className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 border-t border-border/30">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <AnimatedText
              text="A visionary leader described as goal-oriented, honest, and transparent. building trust, one project at a time."
              className="text-2xl md:text-4xl lg:text-5xl font-light text-foreground leading-[1.4]"
              highlightWords={["visionary", "goal-oriented", "honest", "transparent", "trust"]}
              mode="word"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderSection;
