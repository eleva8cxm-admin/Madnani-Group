import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Phone, MapPin, Mail, Send, ArrowRight } from 'lucide-react';
import { toast } from 'sonner';
import AnimatedText from './AnimatedText';
import SectionDivider from './SectionDivider';

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('https://formsubmit.co/ajax/madnanigroup@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
          _subject: 'New Property Inquiry from Website',
        })
      });

      if (response.ok) {
        toast.success('Thank you for your inquiry! We will contact you soon.');
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        toast.error('Something went wrong. Please try again.');
      }
    } catch (error) {
      toast.error('Failed to send message. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      value: '+91 9875721210',
      link: 'tel:+919875721210',
    },
    {
      icon: MapPin,
      title: 'Address',
      value: 'Madnani Fantasy Apartments, Chitrakoot Colony, Vaishali Nagar, Ajmer, 305001',
      link: '#',
    },
    {
      icon: Mail,
      title: 'Email',
      value: 'madnanigroup@gmail.com',
      link: 'mailto:madnanigroup@gmail.com',
    },
    {
      icon: Mail,
      title: 'Email',
      value: 'Plotsinajmer@gmail.com',
      link: 'mailto:Plotsinajmer@gmail.com',
    },
  ];

  return (
    <section id="contact" className="bg-background relative overflow-x-clip">
      {/* CRED-Style Big Text Intro */}
      <div className="py-24 sm:py-32 lg:py-48 px-4 sm:px-6 border-b border-border/30">
        <div className="container-custom">
          <p className="text-primary font-medium tracking-[0.3em] uppercase text-sm mb-12">
            GET IN TOUCH
          </p>
          
          <div className="max-w-5xl">
            <AnimatedText
              text="Ready to find your dream property? Let's build something extraordinary together."
              className="text-3xl md:text-5xl lg:text-6xl font-light text-foreground leading-[1.3]"
              highlightWords={["dream", "property", "extraordinary", "together"]}
              mode="word"
            />
          </div>
        </div>
      </div>

      {/* Decorative Divider */}
      <SectionDivider showLogo={true} />

      {/* Contact Form Section */}
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
              Let's Build <span className="text-gradient">Together</span>
            </h2>
          </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-4 sm:space-y-8"
          >
            {contactInfo.map((item, index) => (
              <motion.a
                key={index}
                href={item.link}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className="group flex items-start gap-4 sm:gap-6 p-4 sm:p-6 bg-card/50 backdrop-blur-sm border border-border rounded-2xl hover:border-primary/50 transition-all duration-300"
              >
                <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 bg-primary/10 border border-primary/20 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-sm text-muted-foreground tracking-wider uppercase mb-2">
                    {item.title}
                  </h4>
                  <p className="text-foreground text-base sm:text-lg font-medium group-hover:text-primary transition-colors break-words">
                    {item.value}
                  </p>
                </div>
                <ArrowRight className="flex-shrink-0 w-5 h-5 text-muted-foreground group-hover:text-primary transition-all group-hover:translate-x-1 hidden sm:block" />
              </motion.a>
            ))}

            <div className="p-6 sm:p-8 bg-gradient-to-br from-primary/10 to-transparent border border-primary/20 rounded-2xl">
              <h4 className="font-display text-lg sm:text-xl font-semibold text-foreground mb-4">
                Our Companies
              </h4>
              <ul className="space-y-3 text-muted-foreground text-sm sm:text-base">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                  <span>M/S Madnani Real Estate Pvt Ltd</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                  <span>M/S Madnani Technologies</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                  <span>M/S Madnani Ventures</span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-card/50 backdrop-blur-sm border border-border p-6 sm:p-8 md:p-10 rounded-2xl"
          >
            <h3 className="font-display text-xl sm:text-2xl font-semibold text-foreground mb-6 sm:mb-8">
              Send us a Message
            </h3>

            <div className="space-y-4 sm:space-y-6">
              <div>
                <label className="block text-sm text-muted-foreground mb-2 tracking-wider uppercase">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-background/50 border border-border px-4 sm:px-5 py-3 sm:py-3.5 rounded-full text-foreground focus:outline-none focus:border-primary transition-colors"
                  placeholder="Your name"
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label className="block text-sm text-muted-foreground mb-2 tracking-wider uppercase">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-background/50 border border-border px-4 sm:px-5 py-3 sm:py-3.5 rounded-full text-foreground focus:outline-none focus:border-primary transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm text-muted-foreground mb-2 tracking-wider uppercase">
                    Phone
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-background/50 border border-border px-4 sm:px-5 py-3 sm:py-3.5 rounded-full text-foreground focus:outline-none focus:border-primary transition-colors"
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm text-muted-foreground mb-2 tracking-wider uppercase">
                  Message
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-background/50 border border-border px-4 sm:px-5 py-3 sm:py-3.5 rounded-2xl text-foreground focus:outline-none focus:border-primary transition-colors resize-none"
                  placeholder="Tell us about your property requirements..."
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-primary-glow py-3 sm:py-4 disabled:opacity-50 disabled:cursor-not-allowed"
                whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
                {!isSubmitting && <Send className="w-4 h-4" />}
              </motion.button>
            </div>
          </motion.form>
        </div>
      </div>
    </div>
    </section>
  );
};

export default ContactSection;
