import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import property1 from '@/assets/property-1.jpeg';
import property3 from '@/assets/property-3.jpeg';
import property4 from '@/assets/property-4.jpeg';
import property2 from '@/assets/property-2.jpeg';
import AnimatedText from './AnimatedText';
import SectionDivider from './SectionDivider';

const projects = [
  {
    title: 'Madnani Fantasy Apartments',
    location: 'Chitrakoot Colony, Vaishali Nagar, Ajmer',
    type: 'Residential',
    status: 'Ongoing',
    image: property3,
  },
  {
    title: 'Madnani Golden Gardens',
    location: 'Ajmer, Rajasthan',
    type: 'Residential Villa',
    status: 'Ongoing',
    image: property1,
  },
  {
    title: 'Premium City View',
    location: 'Prime Location, Ajmer',
    type: 'Luxury Apartments',
    status: 'Completed',
    image: property4,
  },
  {
    title: 'Smart Meter Installation',
    location: 'Ajmer, Pisangan, Pushkar & Beawar',
    type: 'Infrastructure',
    status: 'Completed',
    description: 'We have successfully replaced 50000+ smart meters door to door',
    image: property2,
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="projects" className="bg-background relative overflow-x-clip">
      {/* CRED-Style Big Text Intro */}
      <div className="py-24 sm:py-32 lg:py-48 px-4 sm:px-6 border-b border-border/30">
        <div className="container-custom">
          <p className="text-primary font-medium tracking-[0.3em] uppercase text-sm mb-12">
            OUR WORK
          </p>
          
          <div className="max-w-5xl">
            <AnimatedText
              text="More than 10 successful projects completed 
Setting new standards in luxury living  and smart electric meters for electricity tracking in ajmer and nearby areas"
              className="text-3xl md:text-5xl lg:text-6xl font-light text-foreground leading-[1.3]"
              highlightWords={["10", "successful", "luxury", "Ajmer"]}
              mode="word"
            />
          </div>
        </div>
      </div>

      {/* Decorative Divider */}
      <SectionDivider variant="minimal" />

      {/* Projects Grid */}
      <div className="section-padding pt-0">
        <div className="container-custom">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold">
              Our <span className="text-gradient">Signature</span> Work
            </h2>
          </motion.div>

          <div className="space-y-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 60 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="group relative"
              >
                <div className="grid lg:grid-cols-2 gap-0 bg-card/50 backdrop-blur-sm border border-border rounded-3xl overflow-hidden hover:border-primary/30 transition-all duration-500">
                  {/* Image */}
                  <div className={`relative h-80 lg:h-[400px] overflow-hidden ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.6 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
                    
                    {/* Status Badge */}
                    <div className="absolute top-6 left-6">
                      <span className={`inline-block px-4 py-2 text-xs font-medium tracking-wider uppercase rounded-full ${
                        project.status === 'Ongoing' 
                          ? 'bg-primary text-primary-foreground shadow-[0_0_20px_hsl(35,90%,55%,0.5)]' 
                          : 'bg-white/10 backdrop-blur-sm text-white border border-white/20'
                      }`}>
                        {project.status}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-10 lg:p-14 flex flex-col justify-center">
                    <span className="text-primary text-sm tracking-wider uppercase font-medium mb-4">
                      {project.type}
                    </span>
                    
                    <h3 className="text-3xl md:text-4xl font-semibold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </h3>
                    
                    <p className={`text-muted-foreground flex items-center gap-2 ${project.description ? 'mb-4' : 'mb-8'}`}>
                      <span className="w-4 h-px bg-primary" />
                      {project.location}
                    </p>
                    
                    {project.description && (
                      <p className="text-muted-foreground mb-8">
                        {project.description}
                      </p>
                    )}

                    <motion.a
                      href="#contact"
                      className="btn-outline self-start"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Inquire Now
                      <ArrowRight className="w-4 h-4" />
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
