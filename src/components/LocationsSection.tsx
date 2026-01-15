import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, ArrowRight, ExternalLink } from 'lucide-react';

interface Location {
  id: string;
  city: string;
  address: string;
  postalCode: string;
  bookingUrl: string;
}

const locations: Location[] = [
  {
    id: 'halifax',
    city: 'Halifax',
    address: '1333 South Park St, Halifax, NS',
    postalCode: 'B3K 2K9, Canada',
    bookingUrl: '#',
  },
  {
    id: 'dartmouth',
    city: 'Dartmouth',
    address: '169 Main St Unit 05, Dartmouth',
    postalCode: 'NS B2X 1S1, Canada',
    bookingUrl: '#',
  },
  {
    id: 'truro',
    city: 'Truro',
    address: '523 Prince St Unit 1, Truro, NS',
    postalCode: 'B2N 1E8, Canada',
    bookingUrl: '#',
  },
  {
    id: 'sydney',
    city: 'Sydney',
    address: '48 Prince St, Sydney',
    postalCode: 'NS B1P 5J7',
    bookingUrl: '#',
  },
  {
    id: 'bedford',
    city: 'Bedford',
    address: '1509 Bedford Hwy, Bedford, NS',
    postalCode: 'B4A 1E3, Canada',
    bookingUrl: '#',
  },
];

const LocationsSection = () => {
  return (
    <section className="py-16 bg-charcoal relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      
      {/* Subtle Glows */}
      <div className="absolute top-1/4 left-10 w-64 h-64 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-64 h-64 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-bold tracking-widest uppercase mb-2 block">
            Visit Us Today
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
            Our <span className="text-gold-gradient">Locations</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg font-light">
            Conveniently located across Nova Scotia. Select your nearest barbershop to book your premium grooming experience.
          </p>
        </motion.div>

        {/* Locations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 relative z-10">
          {locations.map((location, index) => (
            <motion.div
              key={location.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="h-full bg-white/[0.03] backdrop-blur-sm border border-white/10 hover:border-primary/50 rounded-2xl p-6 flex flex-col items-center text-center transition-all duration-300 hover:bg-white/[0.06] hover:-translate-y-2">
                
                {/* Icon Container */}
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-transparent border border-primary/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-[0_0_15px_rgba(212,175,55,0.1)]">
                  <MapPin className="w-8 h-8 text-primary" />
                </div>

                {/* Content */}
                <h3 className="font-display text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                  {location.city}
                </h3>
                
                <div className="text-gray-400 text-sm leading-relaxed mb-8 flex-grow">
                  <p>{location.address}</p>
                  <p className="mt-1 opacity-70">{location.postalCode}</p>
                </div>

                {/* CTA Button */}
                <a
                  href={location.bookingUrl}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-transparent border border-primary/30 text-primary font-medium text-sm hover:bg-primary hover:text-charcoal transition-all duration-300 group/btn"
                >
                  Book Now
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom decorative line for mobile separation */}
        <div className="mt-16 text-center">
           
        </div>
      </div>
    </section>
  );
};

export default LocationsSection;
