import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

interface ServiceCardProps {
  id: string;
  title: string;
  description: string;
  price: number;
  isSelected: boolean;
  onToggle: (id: string) => void;
}

const ServiceCard = ({ id, title, description, price, isSelected, onToggle }: ServiceCardProps) => {
  return (
    <motion.div
      onClick={() => onToggle(id)}
      whileHover={{ scale: 1.01 }}
      whileTap={{ scale: 0.99 }}
      className={`
        relative cursor-pointer rounded-xl p-5 transition-all duration-300
        backdrop-blur-md border
        ${isSelected 
          ? 'bg-gray-800/90 border-primary shadow-[0_0_20px_rgba(212,175,55,0.3)]' 
          : 'bg-gray-900/80 border-white/10 hover:border-primary/50 hover:shadow-[0_0_15px_rgba(212,175,55,0.15)]'
        }
      `}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1">
          <h3 className="font-playfair text-lg font-semibold text-white uppercase tracking-wide mb-2">
            {title}
          </h3>
          <p className="text-gray-400 text-sm leading-relaxed mb-3">
            {description}
          </p>
          <p className="text-primary font-bold text-xl">
            CA${price.toFixed(2)}
          </p>
        </div>
        
        {/* Selection Indicator */}
        <div className={`
          flex-shrink-0 w-7 h-7 rounded-full border-2 flex items-center justify-center transition-all duration-300
          ${isSelected 
            ? 'bg-primary border-primary' 
            : 'border-white/30 bg-transparent'
          }
        `}>
          {isSelected && <Check className="w-4 h-4 text-black" />}
        </div>
      </div>
      
      {/* Selected Badge */}
      {isSelected && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="absolute top-3 right-14 bg-primary/20 text-primary text-xs px-2 py-1 rounded-full font-medium"
        >
          Added
        </motion.div>
      )}
    </motion.div>
  );
};

export default ServiceCard;
