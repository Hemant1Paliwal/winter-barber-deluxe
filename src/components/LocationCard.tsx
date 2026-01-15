import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';

interface LocationCardProps {
  image: string;
  city: string;
  address: string;
  bookingLink: string;
}

const LocationCard = ({ image, city, address, bookingLink }: LocationCardProps) => {
  return (
    <motion.div
      className="group relative overflow-hidden rounded-2xl bg-gray-900/60 backdrop-blur-md border border-white/10 hover:border-yellow-500/50 transition-all duration-500"
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.3 }}
    >
      {/* Background Image */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={image}
          alt={`${city} Location`}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-end p-6 text-center">
        {/* Location Pin */}
        <div className="absolute top-4 left-1/2 -translate-x-1/2 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
          <MapPin className="w-6 h-6 text-primary" fill="currentColor" />
        </div>

        {/* City Name */}
        <h3 className="font-playfair text-2xl font-bold text-white mb-2 mt-8">
          {city}
        </h3>

        {/* Address */}
        <p className="text-white/70 text-sm mb-4 leading-relaxed">
          {address}
        </p>

        {/* Book Now Button with Shimmer */}
        <a
          href={bookingLink}
          target="_blank"
          rel="noopener noreferrer"
          className="relative overflow-hidden px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-lg transition-all duration-300 hover:shadow-[0_0_20px_rgba(212,175,55,0.5)] group/btn"
        >
          <span className="relative z-10">BOOK NOW</span>
          {/* Shimmer Effect */}
          <div className="absolute inset-0 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/30 to-transparent" />
        </a>
      </div>

      {/* Glow Effect on Hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl shadow-[inset_0_0_30px_rgba(212,175,55,0.1)]" />
    </motion.div>
  );
};

export default LocationCard;
