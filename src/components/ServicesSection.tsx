import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Building, Cpu, Zap, LineChart, Database, HardHat, ArrowRight } from 'lucide-react';
import AnimatedText from './AnimatedText';
import SectionDivider from './SectionDivider';

const companies = [
  {
    name: 'Madnani Ventures',
    tagline: 'Government & Infrastructure',
    description: 'Specializes in Government Projects and large-scale Surveys.',
    services: [
      { icon: Zap, label: 'Government Projects', desc: 'Recognized government-empanelled electrical contractor for infrastructure.' },
      { icon: LineChart, label: 'Surveys & Data', desc: 'Door-to-door political, geographical, and utility surveys.' },
      { icon: Database, label: 'Data Impact', desc: 'Efficient installation of electric meters and infrastructure mapping.' }
    ]
  },
  {
    name: 'Madnani Real Estate',
    tagline: 'Premium Properties',
    description: 'Trusted company with 10+ years experience and 30+ employees.',
    services: [
      { icon: HardHat, label: 'Portfolio', desc: 'Completed 10+ projects including "Madnani Fantasy Apartments" and "Golden Gardens".' },
      { icon: Building, label: 'Scope', desc: 'Multi-story apartments, private society developments, and villas.' }
    ]
  },
  {
    name: 'Madnani Technologies',
    tagline: 'Digital Solutions',
    description: 'Focuses on IT, software services, and advanced data solutions.',
    services: [
      { icon: Cpu, label: 'Products', desc: 'Sophisticated software tools for data mining and management.' },
      { icon: Database, label: 'Utility', desc: 'Proactive, efficient, and cost-effective data-driven project completion.' }
    ]
  },
  {
    name: 'Madnani Energy Solutions',
    tagline: 'Renewable Energy',
    description: 'Pioneering sustainable energy solutions for a greener tomorrow.',
    services: [
      { icon: Zap, label: 'Solar Power', desc: 'Large-scale solar panel installations for residential and commercial projects, Solar power plants across entire state.' },
      { icon: LineChart, label: 'Energy Consulting', desc: 'Expert guidance on renewable energy adoption and cost optimization.' }
    ]
  }
];

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="services" className="bg-card relative overflow-x-clip">
      {/* CRED-Style Big Text Intro */}
      <div className="py-24 sm:py-32 lg:py-48 px-4 sm:px-6 border-b border-border/30">
        <div className="container-custom">
          <p className="text-primary font-medium tracking-[0.3em] uppercase text-sm mb-12">
            WHAT WE DO
          </p>
          
          <div className="max-w-5xl">
            <AnimatedText
              text="we don't just build properties. we create ecosystems where technology meets infrastructure, delivering excellence across every sector."
              className="text-3xl md:text-5xl lg:text-6xl font-light text-foreground leading-[1.3]"
              highlightWords={["properties", "ecosystems", "technology", "infrastructure", "excellence"]}
              mode="word"
            />
          </div>
        </div>
      </div>

      {/* Decorative Grid */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(to right, hsl(var(--foreground)) 1px, transparent 1px),
                           linear-gradient(to bottom, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Decorative Divider */}
      <SectionDivider variant="dots" />

      {/* Companies Section */}
      <div className="section-padding pt-0 relative">
        <div className="container-custom">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-6">
              Our Group <span className="text-gradient">Companies</span>
            </h2>
            <p className="text-muted-foreground text-xl max-w-2xl mx-auto font-light">
              Four distinct companies delivering excellence across real estate, technology, government infrastructure, and renewable energy.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-4 gap-4">
            {companies.map((company, index) => (
              <motion.div
                key={company.name}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="group relative bg-background/50 backdrop-blur-sm border border-border p-5 rounded-2xl hover:border-primary/50 transition-all duration-500 flex flex-col h-full"
                whileHover={{ y: -8 }}
              >
                {/* Hover Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10 flex flex-col h-full">
                  {/* Tagline Badge */}
                  <span className="inline-flex self-start px-2 py-0.5 bg-primary/10 text-primary text-[10px] font-medium tracking-wider uppercase rounded-full mb-3">
                    {company.tagline}
                  </span>
                  
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {company.name}
                  </h3>
                  <p className="text-muted-foreground mb-4 text-xs leading-relaxed">
                    {company.description}
                  </p>

                  <div className="space-y-3 mt-auto">
                    {company.services.map((service) => (
                      <div key={service.label} className="flex gap-3">
                        <div className="shrink-0 mt-0.5 w-6 h-6 bg-primary/10 rounded-lg flex items-center justify-center">
                          <service.icon className="w-3.5 h-3.5 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-medium text-foreground text-xs">{service.label}</h4>
                          <p className="text-[10px] text-muted-foreground leading-relaxed mt-0.5">
                            {service.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Learn More Link */}
                  <div className="mt-4 pt-4 border-t border-border/50">
                    <a 
                      href="#contact" 
                      className="inline-flex items-center gap-2 text-xs text-muted-foreground hover:text-primary transition-colors group/link"
                    >
                      Learn more
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-1" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Statement */}
      <div className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 border-t border-border/30">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <AnimatedText
              text="From electrical infrastructure to luxury apartments to cutting edge software to solar power plants we do it all "
              className="text-2xl md:text-4xl lg:text-5xl font-light text-foreground leading-[1.4]"
              highlightWords={["electrical", "luxury apartments", "software"]}
              mode="word"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
