import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

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
  return (
    <section className="section-padding bg-charcoal relative overflow-hidden min-h-[800px]">
      <div className="container mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
            Voices Of Our{' '}
            <span className="text-gold-gradient">Happy Clients</span>
          </h2>
        </motion.div>

        {/* Main Layout - Centered Chair with Surrounding Testimonials */}
        <div className="relative min-h-[600px]">
          {/* Barber Chair - Absolute Center */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none"
          >
            <div className="relative">
              {/* Glow effect behind chair */}
              <div className="absolute inset-0 blur-3xl bg-primary/20 rounded-full scale-75" />
              <img
                src="https://lalajithebarbershop.ca/wp-content/uploads/2025/11/barber-chair-with-brown-leather-seat-Photoroom-1.webp"
                alt="Barber Chair"
                className="h-[300px] md:h-[450px] lg:h-[550px] w-auto object-contain relative z-10"
              />
            </div>
          </motion.div>

          {/* Testimonials Grid - Around the Chair */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-20">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.author}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`glassmorphism rounded-xl p-6 md:p-8 ${
                  // Position cards around the center chair
                  index === 0 ? 'md:mr-auto md:max-w-[85%] lg:max-w-[70%]' : ''
                }${index === 1 ? 'md:ml-auto md:max-w-[85%] lg:max-w-[70%]' : ''}${
                  index === 2 ? 'md:mr-auto md:max-w-[85%] lg:max-w-[70%]' : ''
                }${index === 3 ? 'md:ml-auto md:max-w-[85%] lg:max-w-[70%]' : ''}`}
              >
                {/* Quote Icon */}
                <Quote className="w-8 h-8 text-primary mb-4" />

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-primary text-primary"
                    />
                  ))}
                </div>

                {/* Text */}
                <p className="text-foreground mb-6 leading-relaxed text-sm md:text-base">
                  {testimonial.text}
                </p>

                {/* Author */}
                <p className="text-primary font-medium">{testimonial.author}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Trust Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex justify-center mt-12"
        >
          <img
            src="https://lalajithebarbershop.ca/wp-content/uploads/2025/11/Stars.png"
            alt="5 Star Rating"
            className="h-16 w-auto"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
