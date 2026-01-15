import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ShoppingBag } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import Snowfall from '@/components/Snowfall';
import ServiceCard from '@/components/ServiceCard';
import AppointmentSummary from '@/components/AppointmentSummary';

// Service data
const servicesData = {
  haircut: [
    {
      id: 'hair-beard-cut',
      title: "Men's Hair and Beard Cut",
      description: "A comprehensive grooming service including a professional haircut tailored to your style and a precise beard trim or shaping for a polished look.",
      price: 50.00,
    },
    {
      id: 'regular-haircut',
      title: "Men's Regular Haircut",
      description: "Professional men's haircuts including regular, tapers, and classic styles. Razor finish available for $5 extra.",
      price: 30.00,
    },
    {
      id: 'long-haircut',
      title: "Men's Long Haircut",
      description: "For clients with longer hair requiring extra time, detailing, and personalized styling.",
      price: 40.00,
    },
    {
      id: 'scissor-cut',
      title: "Men's Scissor Cut",
      description: "Precision haircuts done 100% with scissors, no clippers. Price depends on hair length and complexity.",
      price: 40.00,
    },
    {
      id: 'kids-cut',
      title: "Kids Cut (Up to 8 Years)",
      description: "Haircuts for kids up to 8 years old, done quick, clean, and stylish. Kids over 8 will be charged regular Men's Haircut pricing.",
      price: 25.00,
    },
    {
      id: 'head-shave',
      title: "Head Shave [Hot Towel]",
      description: "Smooth and clean full head shave with a straight razor, finished with hot towel treatment for extra comfort.",
      price: 45.00,
    },
    {
      id: 'hair-perm',
      title: "Men's Hair Perm",
      description: "Custom perms to add curls or texture. Pricing depends on hair length, thickness, and style.",
      price: 120.00,
    },
  ],
  beard: [
    {
      id: 'beard-trim',
      title: "Beard Trim & Shape",
      description: "Professional beard grooming with precise trimming and shaping to enhance your facial features.",
      price: 25.00,
    },
    {
      id: 'beard-lineup',
      title: "Beard Line Up",
      description: "Clean and sharp beard line-up with straight razor for defined edges.",
      price: 15.00,
    },
    {
      id: 'royal-shave',
      title: "Royal Shave",
      description: "The ultimate shaving experience with hot towel, premium oils, and straight razor finish.",
      price: 35.00,
    },
  ],
  additional: [
    {
      id: 'eyebrow-trim',
      title: "Eyebrow Trim",
      description: "Quick and clean eyebrow grooming for a polished look.",
      price: 10.00,
    },
    {
      id: 'hair-design',
      title: "Hair Design",
      description: "Custom hair designs and patterns carved into your haircut.",
      price: 15.00,
    },
    {
      id: 'facial-treatment',
      title: "Facial Treatment",
      description: "Refreshing facial treatment with cleansing, exfoliation, and moisturizing.",
      price: 40.00,
    },
  ],
};

type TabKey = 'haircut' | 'beard' | 'additional';

const tabs: { key: TabKey; label: string }[] = [
  { key: 'haircut', label: 'Haircut Services' },
  { key: 'beard', label: 'Beard Services' },
  { key: 'additional', label: 'Additional Services' },
];

const SelectServices = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<TabKey>('haircut');
  const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set());

  const allServices = [...servicesData.haircut, ...servicesData.beard, ...servicesData.additional];
  const selectedServices = allServices.filter(s => selectedIds.has(s.id));
  const total = selectedServices.reduce((sum, s) => sum + s.price, 0);

  const toggleService = (id: string) => {
    setSelectedIds(prev => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  const handleNext = () => {
    // Navigate to next step or show confirmation
    console.log('Selected services:', selectedServices);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  return (
    <div className="min-h-screen bg-[#050505] relative overflow-hidden">
      {/* Snowfall Background */}
      <div className="fixed inset-0 z-0 opacity-30 pointer-events-none">
        <Snowfall />
      </div>

      {/* Gradient Overlay */}
      <div className="fixed inset-0 z-0 bg-gradient-radial from-gray-900/20 via-transparent to-black/50 pointer-events-none" />

      {/* Simplified Navbar */}
      <nav className="relative z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link 
            to="/book-appointment" 
            className="flex items-center gap-2 text-white/70 hover:text-primary transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="hidden sm:inline">Back</span>
          </Link>
          
          <Link to="/" className="absolute left-1/2 -translate-x-1/2">
            <img 
              src="https://lalajithebarbershop.ca/wp-content/uploads/2025/11/logo-horizontal-1.png" 
              alt="Lalaji The Barber Shop" 
              className="h-10"
            />
          </Link>

          <div className="w-16" /> {/* Spacer */}
        </div>
      </nav>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-8">
        {/* Page Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="font-playfair text-3xl md:text-4xl font-bold text-white">
            Add more to your appointment?
          </h1>
        </motion.div>

        {/* Tabs */}
        <div className="mb-8 border-b border-white/10">
          <div className="flex gap-6 overflow-x-auto pb-0.5 scrollbar-hide">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`
                  relative pb-4 px-1 text-sm uppercase tracking-wider font-medium whitespace-nowrap
                  transition-colors duration-300
                  ${activeTab === tab.key 
                    ? 'text-primary' 
                    : 'text-gray-500 hover:text-gray-300'
                  }
                `}
              >
                {tab.label}
                {activeTab === tab.key && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary shadow-[0_0_10px_rgba(212,175,55,0.8)]"
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Split Layout */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left: Service List */}
          <div className="flex-1 lg:max-w-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                className="space-y-4"
              >
                {/* Category Header */}
                <motion.h2
                  variants={cardVariants}
                  className="font-playfair text-xl font-bold text-primary uppercase tracking-wider mb-6"
                >
                  {tabs.find(t => t.key === activeTab)?.label}
                </motion.h2>

                {/* Service Cards */}
                {servicesData[activeTab].map((service) => (
                  <motion.div key={service.id} variants={cardVariants}>
                    <ServiceCard
                      {...service}
                      isSelected={selectedIds.has(service.id)}
                      onToggle={toggleService}
                    />
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right: Sticky Summary (Desktop) */}
          <div className="hidden lg:block lg:w-96">
            <div className="sticky top-8">
              <AppointmentSummary
                selectedServices={selectedServices}
                onNext={handleNext}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Bottom Bar */}
      <AnimatePresence>
        {selectedServices.length > 0 && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-gray-900/95 backdrop-blur-lg border-t border-primary/30 p-4"
          >
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="bg-primary/20 p-2 rounded-lg">
                  <ShoppingBag className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-white/60 text-xs">
                    {selectedServices.length} service{selectedServices.length > 1 ? 's' : ''} selected
                  </p>
                  <p className="text-primary font-bold text-lg">
                    CA${total.toFixed(2)}
                  </p>
                </div>
              </div>
              <motion.button
                onClick={handleNext}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-primary text-black font-bold py-3 px-8 rounded-xl uppercase tracking-wider relative overflow-hidden"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full animate-[shimmer_2s_infinite]" />
                <span className="relative z-10">Next</span>
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Bottom padding for mobile bar */}
      <div className="lg:hidden h-24" />
    </div>
  );
};

export default SelectServices;
