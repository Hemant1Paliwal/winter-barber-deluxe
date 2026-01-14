import { motion } from 'framer-motion';

const CTASection = () => {
  return (
    <section className="relative h-[400px] overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: `url('https://lalajithebarbershop.ca/wp-content/uploads/2025/11/barber-chair-with-brown-leather-seat-Photoroom-1.webp')`,
        }}
      />
      <div className="absolute inset-0 bg-black/80" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            What are you waiting for? Come to
            <br />
            <span className="text-gold-gradient">Lalaji The Barber Shop</span>
          </h2>
          <p className="text-muted-foreground mb-8">
            Reserve your seat and walk out looking your best.
          </p>
          <a
            href="https://lalajithebarbershop.ca"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold-outline text-lg"
          >
            Book Your Appointment
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;