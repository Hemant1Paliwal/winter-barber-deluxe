import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag } from 'lucide-react';

interface Service {
  id: string;
  title: string;
  price: number;
}

interface AppointmentSummaryProps {
  selectedServices: Service[];
  onNext: () => void;
}

const AppointmentSummary = ({ selectedServices, onNext }: AppointmentSummaryProps) => {
  const total = selectedServices.reduce((sum, service) => sum + service.price, 0);

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      className="bg-gray-900/90 backdrop-blur-lg border border-primary/30 rounded-2xl p-6 shadow-[0_0_30px_rgba(212,175,55,0.15)]"
    >
      <h2 className="font-playfair text-2xl font-bold text-white mb-6 flex items-center gap-3">
        <ShoppingBag className="w-6 h-6 text-primary" />
        Appointment Summary
      </h2>

      <div className="space-y-4 mb-6 min-h-[120px]">
        <AnimatePresence mode="popLayout">
          {selectedServices.length === 0 ? (
            <motion.p
              key="empty"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-gray-500 text-center py-8"
            >
              No services selected yet
            </motion.p>
          ) : (
            selectedServices.map((service) => (
              <motion.div
                key={service.id}
                layout
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="flex justify-between items-start p-3 bg-gray-800/50 rounded-lg border border-white/5"
              >
                <div className="flex-1">
                  <p className="text-white font-medium text-sm uppercase tracking-wide">
                    {service.title}
                  </p>
                </div>
                <p className="text-primary font-bold ml-4">
                  CA${service.price.toFixed(2)}
                </p>
              </motion.div>
            ))
          )}
        </AnimatePresence>
      </div>

      {/* Divider */}
      <div className="border-t border-white/10 my-4" />

      {/* Total */}
      <div className="flex justify-between items-center mb-6">
        <span className="text-gray-400 uppercase text-sm tracking-wide">Total</span>
        <span className="text-primary font-bold text-2xl">
          CA${total.toFixed(2)}
        </span>
      </div>

      {/* Next Button */}
      <motion.button
        onClick={onNext}
        disabled={selectedServices.length === 0}
        whileHover={{ scale: selectedServices.length > 0 ? 1.02 : 1 }}
        whileTap={{ scale: selectedServices.length > 0 ? 0.98 : 1 }}
        className={`
          w-full py-4 rounded-xl font-bold text-lg uppercase tracking-wider
          transition-all duration-300 relative overflow-hidden
          ${selectedServices.length > 0 
            ? 'bg-primary text-black hover:shadow-[0_0_30px_rgba(212,175,55,0.5)] cursor-pointer' 
            : 'bg-gray-700 text-gray-500 cursor-not-allowed'
          }
        `}
      >
        {/* Shimmer Effect */}
        {selectedServices.length > 0 && (
          <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full animate-[shimmer_2s_infinite]" />
        )}
        <span className="relative z-10">Next</span>
      </motion.button>
    </motion.div>
  );
};

export default AppointmentSummary;
