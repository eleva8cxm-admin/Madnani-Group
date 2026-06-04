import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-10 sm:py-16 px-4 sm:px-6">
      <div className="container-custom">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12 mb-8 sm:mb-12">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <div className="bg-white rounded-full px-4 sm:px-5 py-2 sm:py-3 inline-block mb-4 sm:mb-6">
              <img src="/logo-transparent-svg.svg" alt="Madnani Group" className="h-10 sm:h-14 md:h-16 w-auto" />
            </div>
            <p className="text-muted-foreground leading-relaxed max-w-md mb-6">
              A diversified group encompassing real estate, construction, IT services, 
              and electrical projects. Building trust since 2012.
            </p>
            <p className="text-primary font-display text-lg italic">
              Let's Grow Together
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-foreground font-semibold mb-6 tracking-wider uppercase text-sm">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {['Home', 'About', 'Services', 'Projects', 'Contact'].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Companies */}
          <div>
            <h4 className="text-foreground font-semibold mb-6 tracking-wider uppercase text-sm">
              Our Companies
            </h4>
            <ul className="space-y-3 text-muted-foreground">
              <li>Madnani Real Estate Pvt Ltd</li>
              <li>Madnani Technologies</li>
              <li>Madnani Ventures</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Madnani Group. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
