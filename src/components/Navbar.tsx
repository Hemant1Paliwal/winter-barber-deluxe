import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const leftNavLinks = [
    { label: 'Home', href: isHomePage ? '#hero' : '/' },
    { label: 'Services', href: isHomePage ? '#services' : '/#services', hasDropdown: true },
    { label: 'Team', href: isHomePage ? '#team' : '/#team' },
  ];

  const rightNavLinks = [
    { label: 'Gallery', href: isHomePage ? '#gallery' : '/#gallery' },
    { label: 'Contact Us', href: isHomePage ? '#contact' : '/#contact' },
  ];

  const allNavLinks = [...leftNavLinks, ...rightNavLinks];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-[60] transition-all duration-300 ${
        isScrolled ? 'bg-background/95 backdrop-blur-lg border-b border-border' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Left Nav Links - Desktop */}
          <div className="hidden lg:flex items-center justify-start flex-1">
            <div className="flex items-center space-x-8">
              {leftNavLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-foreground hover:text-primary transition-colors text-sm font-medium flex items-center gap-1 whitespace-nowrap"
                >
                  {link.label}
                  {link.hasDropdown && <ChevronDown size={14} />}
                </a>
              ))}
            </div>
          </div>

          {/* Centered Logo */}
          <a href="#hero" className="flex-shrink-0 lg:absolute lg:left-1/2 lg:-translate-x-1/2">
            <motion.img
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              src="https://lalajithebarbershop.ca/wp-content/uploads/2025/11/Lalaji-Mobile-Logo.png"
              alt="Lalaji The Barber Shop"
              className="h-10 md:h-16 w-auto"
            />
          </a>

          {/* Right Nav Links - Desktop */}
          <div className="hidden lg:flex items-center justify-end flex-1">
            <div className="flex items-center space-x-8">
              {rightNavLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-foreground hover:text-primary transition-colors text-sm font-medium whitespace-nowrap"
                >
                  {link.label}
                </a>
              ))}
              <Link
                to="/book-appointment"
                className="btn-gold-outline text-sm py-2 px-6 whitespace-nowrap"
              >
                Book Your Appointment
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-foreground p-2"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-background/95 backdrop-blur-lg border-t border-border"
          >
            <div className="py-4 space-y-4">
              {allNavLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-foreground hover:text-primary transition-colors px-4 py-2 text-lg"
                >
                  {link.label}
                </a>
              ))}
              <div className="px-4 pt-4">
                <Link
                  to="/book-appointment"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="btn-gold w-full text-center block"
                >
                  Book Your Appointment
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;
