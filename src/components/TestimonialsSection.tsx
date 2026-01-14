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
    <section className="section-padding bg-charcoal relative overflow-hidden">
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

        {/* Testimonials Grid with Chair */}
        <div className="relative">
          {/* Barber Chair - Center */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="hidden lg:block absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0"
          >
            <img
              src="https://lalajithebarbershop.ca/wp-content/uploads/2025/11/barber-chair-with-brown-leather-seat-Photoroom-1.webp"
              alt="Barber Chair"
              className="h-[500px] w-auto object-contain opacity-80"
            />
          </motion.div>

          {/* Testimonials */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.author}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`glassmorphism rounded-xl p-8 ${
                  index % 2 === 0 ? 'lg:mr-32' : 'lg:ml-32'
                }`}
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
                <p className="text-foreground mb-6 leading-relaxed">
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