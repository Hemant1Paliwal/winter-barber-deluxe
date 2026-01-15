import { motion } from 'framer-motion';
import Snowfall from '@/components/Snowfall';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import LocationCard from '@/components/LocationCard';

const locations = [
  {
    city: 'Halifax',
    image: 'https://lalajithebarbershop.ca/wp-content/uploads/2025/12/Halifax.webp',
    address: '1333 South Park St, Halifax, NS B3K 2K9, Canada',
    bookingLink: 'https://lalajithebarbershop.ca/booking/',
    locationId: 'HALIFAX001',
  },
  {
    city: 'Dartmouth',
    image: 'https://lalajithebarbershop.ca/wp-content/uploads/2025/12/Dartmouth.webp',
    address: '169 Main St Unit 05, Dartmouth NS B2X 1S1 Canada',
    bookingLink: 'https://lalajithebarbershop.ca/booking/',
    locationId: 'DARTMOUTH001',
  },
  {
    city: 'Truro',
    image: 'https://lalajithebarbershop.ca/wp-content/uploads/2025/12/Truro.webp',
    address: '523 Prince St Unit 1, Truro, NS B2N 1E8, Canada',
    bookingLink: 'https://lalajithebarbershop.ca/booking/',
    locationId: 'TRURO001',
  },
  {
    city: 'Sydney',
    image: 'https://lalajithebarbershop.ca/wp-content/uploads/2025/12/Sydney.webp',
    address: '148 Prince St, Sydney, NS B1P 5J7',
    bookingLink: 'https://lalajithebarbershop.ca/booking/',
    locationId: 'SYDNEY001',
  },
  {
    city: 'Bedford',
    image: 'https://lalajithebarbershop.ca/wp-content/uploads/2025/12/Bedford.webp',
    address: '1509 Bedford Hwy, Bedford, NS B4A 1E3, Canada',
    bookingLink: 'https://lalajithebarbershop.ca/booking/',
    locationId: 'BEDFORD001',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { 
    opacity: 0, 
    y: 50,
    scale: 0.95,
  },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

const BookAppointment = () => {
  return (
    <div className="min-h-screen bg-[#050505] relative overflow-hidden">
      {/* Radial Gradient Background */}
      <div className="" />
      
      {/* Snowfall Effect */}
      <Snowfall />
      
      {/* Navbar */}
      <Navbar />
      
      {/* Hero Banner with Parallax */}
      <section className="relative h-[40vh] min-h-[320px] overflow-hidden">
        <motion.div
          className="absolute inset-0"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
        >
          <img
            src="https://lalajithebarbershop.ca/wp-content/uploads/2025/12/Frame-1261153796-scaled.webp"
            alt="Book Appointment"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-[#050505]" />
        </motion.div>
        
        {/* Hero Content */}
        <div className="relative z-10 h-full flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-center"
          >
            <h1 className="font-playfair text-5xl md:text-7xl font-bold text-white mb-4">
              Find Your Nearest
            </h1>
            <h2 className="font-playfair text-4xl md:text-6xl font-bold text-primary">
              Studio
            </h2>
          </motion.div>
        </div>
      </section>

      {/* Locations Section */}
      <section className="relative z-10 py-8 px-4 md:px-8 pb-20">
        <div className="max-w-7xl mx-auto">
          {/* Locations Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {locations.map((location) => (
              <motion.div key={location.city} variants={cardVariants}>
                <LocationCard {...location} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default BookAppointment;
