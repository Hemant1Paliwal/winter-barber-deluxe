import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';

const testimonials = [
  {
    text: "Simar just gave me the best cut I've had since leaving Calgary two years ago. The faded V cut was on point, crisp, clean, and way better than the trash cuts I got before. Easily the best haircut I've had in a long time.",
    author: 'Arshveer',
    rating: 5,
  },
  {
    text: "Did hair cut with AK really Wonderful experience and did good and decent hair cut. 😊😎",
    author: 'Bhavik Bhatiya',
    rating: 5,
  },
  {
    text: "I had a nice haircut from Issa, very friendly and great communication and overall good service",
    author: 'VISHWA reddy Velma',
    rating: 5,
  },
  {
    text: "Excellent service, easy booking and great atmosphere in the shop! 10 to 10 in my books And I would definitely go back again 🙂",
    author: 'Wil',
    rating: 5,
  },
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-rotate carousel every 1 second
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 2000); 
    return () => clearInterval(interval);
  }, [isPaused]);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="section-padding bg-charcoal relative overflow-hidden min-h-[700px] flex items-center">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
         <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px]" />
         <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-gold/5 rounded-full blur-[80px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* LEFT COLUMN: Content & Carousel */}
          <div className="order-2 lg:order-1 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-left mb-10"
            >
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Voices Of Our <br />
                <span className="text-gold-gradient">Happy Clients</span>
              </h2>
            </motion.div>

            {/* Carousel Card */}
            <div 
              className="relative"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              <div className="glassmorphism rounded-2xl p-8 md:p-10 min-h-[320px] flex flex-col justify-between border border-white/10 relative overflow-hidden group">
                {/* Decorative Quote Icon BG */}
                <Quote className="absolute top-4 right-4 w-24 h-24 text-primary/5 rotate-12" />
                
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4 }}
                    className="relative z-10"
                  >
                    {/* Stars */}
                    <div className="flex gap-1 mb-6">
                      {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                      ))}
                    </div>

                    {/* Text */}
                    <p className="text-lg md:text-xl text-foreground/90 leading-relaxed mb-6 font-light">
                      "{testimonials[currentIndex].text}"
                    </p>

                    {/* Author */}
                    <div>
                      <h4 className="text-primary font-bold text-lg tracking-wide">
                        {testimonials[currentIndex].author}
                      </h4>
                      <p className="text-foreground/40 text-sm">Verified Customer</p>
                    </div>
                  </motion.div>
                </AnimatePresence>

                {/* Progress Bar (Bottom of card) */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-white/5">
                    <motion.div 
                        key={currentIndex}
                        initial={{ width: "0%" }}
                        animate={{ width: isPaused ? "0%" : "100%" }}
                        transition={{ duration: 1, ease: "linear" }}
                        className="h-full bg-primary"
                    />
                </div>
              </div>

              {/* Navigation Buttons (Floating outside card on desktop) */}
              <div className="flex gap-4 mt-8">
                <button onClick={goToPrevious} className="p-3 rounded-full border border-white/10 hover:bg-primary hover:border-primary hover:text-charcoal transition-all text-white group">
                    <ChevronLeft className="w-6 h-6" />
                </button>
                <button onClick={goToNext} className="p-3 rounded-full border border-white/10 hover:bg-primary hover:border-primary hover:text-charcoal transition-all text-white group">
                    <ChevronRight className="w-6 h-6" />
                </button>
              </div>
            </div>

            {/* Trust Badge */}
            <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="mt-8 flex items-center gap-4 opacity-80"
            >
               <img
                src="https://lalajithebarbershop.ca/wp-content/uploads/2025/11/Stars.png"
                alt="5 Star Rating"
                className="h-10 w-auto grayscale hover:grayscale-0 transition-all duration-500"
              />
              <span className="text-sm text-foreground/60">Rated 5.0 on Google</span>
            </motion.div>
          </div>

          {/* RIGHT COLUMN: Chair Image */}
          <div className="order-1 lg:order-2 relative h-[500px] lg:h-[700px] w-full flex items-center justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, x: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative z-10 w-full h-full"
            >
               {/* Glow behind chair */}
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-primary/30 rounded-full blur-[60px]" />
               
               <img
                src="https://lalajithebarbershop.ca/wp-content/uploads/2025/11/barber-chair-with-brown-leather-seat-Photoroom-1.webp"
                alt="Premium Barber Chair"
                className="w-full h-full object-contain drop-shadow-2xl"
                style={{ filter: "drop-shadow(0 20px 40px rgba(0,0,0,0.5))" }}
              />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
