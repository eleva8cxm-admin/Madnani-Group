import { useState, useEffect } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Send, Download, Sun } from 'lucide-react';
import { toast } from 'sonner';
import { useNavigate } from 'react-router-dom';
import AnimatedText from '@/components/AnimatedText';
import SectionDivider from '@/components/SectionDivider';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import property1 from '@/assets/property-1.jpeg';
import property2 from '@/assets/property-2.jpeg';
import property3 from '@/assets/property-3.jpeg';
import property4 from '@/assets/property-4.jpeg';
import pmYojna1 from '@/assets/PMYojna-1.jpeg';
import pmYojna2 from '@/assets/PMYojna-2.jpeg';


const images = [property1, property2, property3, property4];

const PmSuryaGhar = () => {
  const navigate = useNavigate();
  const [currentImage, setCurrentImage] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    brand: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const brands = [
    { name: 'Adani', pdf: 'pdfs/Adani.pdf' },
    { name: 'Tata', pdf: 'pdfs/Tata.pdf' },
    { name: 'Luminous', pdf: 'pdfs/Luminous.pdf' },
    { name: 'Waree', pdf: 'pdfs/Waree.pdf' },
    { name: 'UTL', pdf: 'pdfs/UTL.pdf' },
  ];

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
          address: formData.address,
          brand: formData.brand,
          _subject: 'New PM Surya Ghar Inquiry from Website',
        })
      });

      if (response.ok) {
        toast.success('Thank you! We will contact you soon.');
        navigate('/thanks');
      } else {
        toast.error('Something went wrong. Please try again.');
      }
    } catch (error) {
      toast.error('Failed to send message. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleBrandChange = (brand: string) => {
    setFormData({ ...formData, brand });
    const selectedBrand = brands.find(b => b.name === brand);
    if (selectedBrand && selectedBrand.pdf !== '#') {
      toast.info('Brand PDF available for download');
    }
  };

  const handleDownloadPDF = () => {
  const selectedBrand = brands.find(
    (b) => b.name === formData.brand
  );

  if (!selectedBrand?.pdf) {
    toast.error("PDF not available");
    return;
  }

  const link = document.createElement("a");
  link.href = selectedBrand.pdf;
  link.download = `${selectedBrand.name}.pdf`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

  toast.success("PDF downloaded successfully");
};

  return (
    <main className="min-h-screen bg-background overflow-x-hidden w-full max-w-full">
      <Navbar />
      {/* Hero Section */}
      <section id="pm-surya-ghar" className="relative min-h-[60vh] w-full overflow-x-clip pt-24">
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
                alt="Solar Panels"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </AnimatePresence>
          
          {/* Subtle Gradient Overlay - Left side darker for text visibility */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/10" />
        </div>

        {/* Minimal Content */}
        <div className="relative z-10 min-h-[60vh] flex flex-col justify-end container-custom pb-20 sm:pb-24 pt-20 sm:pt-24">
          <div className="max-w-4xl mb-10 sm:mb-14 mx-auto text-center">
            {/* Logos Section */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="flex items-center justify-center gap-6 sm:gap-10 mb-8"
            >
              {/* Left Logo - Madnani Group */}
              <div className="bg-white rounded-full p-4 sm:p-6 shadow-lg flex items-center justify-center w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32">
                <img
                  src={pmYojna1}
                  alt="PM Surya Ghar"
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Right Logo - PM Surya Ghar */}
              <div className="bg-white rounded-full p-4 sm:p-6 shadow-lg flex items-center justify-center w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32">
                <img
                  src={pmYojna2}
                  alt="Madnani Group"
                  className="w-full h-full object-contain"
                />
              </div>
            </motion.div>

            <p className="text-primary font-medium tracking-[0.3em] uppercase text-sm mb-6">
              PM SURYA GHAR
            </p>

            {/* Main Headline - Elegant & Minimal */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-white leading-[1.1] tracking-tight"
            >
              PM Surya Ghar<br />
              <span className="font-medium">Roof Top Solar (Subsidy)</span>
            </motion.h1>

            {/* Accent Line */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.8, ease: 'easeOut' }}
              className="w-12 sm:w-16 h-0.5 bg-primary mt-6 sm:mt-8 mb-8 sm:mb-10 mx-auto origin-center"
            />

            <motion.p
              animate={{
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
              }}
              className="text-2xl md:text-2xl font-black text-yellow-300"
            >
              Get Govt Subsidy of ₹78,000 + ₹17,000
            </motion.p>
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

      {/* Form Section */}
      <section className="section-padding pt-12 sm:pt-16 md:pt-20">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left Content */}
            <div className="space-y-8">
              <motion.h2
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-4xl md:text-5xl font-semibold"
              >
                Get your <span className="text-gradient">Quotation</span>
              </motion.h2>

              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="space-y-6"
              >
                <AnimatedText
                  text="Take advantage of the PM Surya Ghar scheme and install rooftop solar panels with attractive subsidies. Choose from top brands and get a free quotation today."
                  className="text-muted-foreground text-xl leading-relaxed font-light"
                  highlightWords={["subsidies", "top brands", "free quotation"]}
                  mode="word"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="pt-8"
              >
                <div className="bg-gradient-to-br from-primary/10 to-transparent border border-primary/20 rounded-2xl p-6 sm:p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-primary/20 border border-primary/30 rounded-xl flex items-center justify-center">
                      <Sun className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-xl">Why Choose Us?</h3>
                  </div>
                  <ul className="space-y-3 text-muted-foreground">
                    {['Government Approved', 'Top Quality Brands', 'Quick Installation', 'Best Subsidy Benefits'].map((item, i) => (
                      <motion.li
                        key={item}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.7 + i * 0.1 }}
                        className="flex items-center gap-3"
                      >
                        <span className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                        {item}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </div>

            {/* Form */}
            <motion.form
              onSubmit={handleSubmit}
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-card/50 backdrop-blur-sm border border-border p-6 sm:p-8 md:p-10 rounded-2xl"
            >
              <div className="space-y-6">
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

                <div className="grid sm:grid-cols-2 gap-6">
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
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-background/50 border border-border px-4 sm:px-5 py-3 sm:py-3.5 rounded-full text-foreground focus:outline-none focus:border-primary transition-colors"
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm text-muted-foreground mb-2 tracking-wider uppercase">
                    Address
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    className="w-full bg-background/50 border border-border px-4 sm:px-5 py-3 sm:py-3.5 rounded-full text-foreground focus:outline-none focus:border-primary transition-colors"
                    placeholder="Your full address"
                  />
                </div>

                <div>
                  <label className="block text-sm text-muted-foreground mb-2 tracking-wider uppercase">
                    Select Brand
                  </label>
                  <select
                    value={formData.brand}
                    onChange={(e) => handleBrandChange(e.target.value)}
                    className="w-full bg-background/50 border border-border px-4 sm:px-5 py-3 sm:py-3.5 rounded-full text-foreground focus:outline-none focus:border-primary transition-colors"
                  >
                    <option value="">Select a brand</option>
                    {brands.map((brand) => (
                      <option key={brand.name} value={brand.name}>
                        {brand.name}
                      </option>
                    ))}
                  </select>

                  {formData.brand && (
                    <motion.button
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      type="button"
                      onClick={handleDownloadPDF}
                      className="mt-4 flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
                    >
                      <Download className="w-4 h-4" />
                      Download {formData.brand} PDF
                    </motion.button>
                  )}
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-primary-glow py-3 sm:py-4 disabled:opacity-50 disabled:cursor-not-allowed mt-4"
                  whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                >
                  {isSubmitting ? 'Submitting...' : 'Submit'}
                  {!isSubmitting && <Send className="w-4 h-4" />}
                </motion.button>
              </div>
            </motion.form>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default PmSuryaGhar;
