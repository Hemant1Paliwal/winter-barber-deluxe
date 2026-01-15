import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const PromoPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const hasSeenPopup = sessionStorage.getItem('lalaji-promo-seen');
    if (!hasSeenPopup) {
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    sessionStorage.setItem('lalaji-promo-seen', 'true');
  };

  const handleBookNow = () => {
    handleClose();
    navigate('/book-appointment');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={handleClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative glassmorphism rounded-2xl p-8 md:p-12 max-w-md w-full text-center"
          >
            {/* Close button */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
            >
              <X size={24} />
            </button>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="mb-4">
                <span className="text-6xl">✂️</span>
              </div>
              
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-3">
                <span className="text-gold-gradient">Special Offer!</span>
              </h2>
              
              <p className="text-foreground text-lg mb-2">
                Book Now to Enjoy
              </p>
              
              <div className="text-5xl md:text-6xl font-display font-bold text-primary mb-4 animate-glow inline-block px-6 py-2 rounded-lg">
                $5 OFF
              </div>
              
              <p className="text-muted-foreground mb-8">
                Your first haircut at Lalaji The Barber Shop
              </p>

              <button
                onClick={handleBookNow}
                className="btn-gold text-lg w-full"
              >
                Book Now
              </button>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PromoPopup;