import { motion } from 'framer-motion';
import { CheckCircle, Download} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import AnimatedText from '@/components/AnimatedText';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Thanks = () => {
  const navigate = useNavigate();
  const selectedBrand = localStorage.getItem("selectedBrand");

const brands = [
  { name: 'Adani', pdf: '/pdfs/Adani.pdf' },
  { name: 'Tata', pdf: '/pdfs/Tata.pdf' },
  { name: 'Luminous', pdf: '/pdfs/Luminous.pdf' },
  { name: 'Waree', pdf: '/pdfs/Waree.pdf' },
  { name: 'UTL', pdf: '/pdfs/UTL.pdf' },
];

const handleDownloadPDF = () => {
  const brand = brands.find(
    (b) => b.name === selectedBrand
  );
  if (!brand) return;
  const link = document.createElement('a');
  link.href = brand.pdf;
  link.download = `${brand.name}.pdf`;

  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

  return (
    <main className="min-h-screen bg-background overflow-x-hidden w-full max-w-full">
      <Navbar />
      <div className="container-custom py-20 sm:py-32 pt-24">

        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <CheckCircle className="w-24 h-24 text-green-500 mx-auto" />
          </motion.div>

          <div className="flex justify-center">
            <AnimatedText
              text="Thank You!"
              className="text-4xl sm:text-5xl md:text-6xl font-semibold text-foreground mb-6"
              highlightWords={["Thank"]}
              mode="word"
            />
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl sm:text-2xl text-muted-foreground font-light mb-12"
          >
            Our team will contact you shortly.
          </motion.p>

          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleDownloadPDF}
            className="btn-primary-glow inline-flex items-center gap-2"
          >
            <Download className="w-4 h-4" />
            Download {selectedBrand} PDF
          </motion.button>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default Thanks;
