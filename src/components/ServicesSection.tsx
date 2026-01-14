import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const services = [
  {
    title: "Men's Hair & Beard Cut",
    description: 'A professional haircut tailored to your style and a precise beard trim or shaping for a polished look.',
    features: ['Tailored Haircut', 'Premium Products', 'Beard Cut', 'Line-Up Detailing', 'Styling & Finish', 'Post-Service Advice'],
  },
  {
    title: 'Men All Done Pack',
    description: 'A complete, comprehensive grooming experience designed to refresh, relax, and elevate your look.',
    features: ['Tailored Haircut', 'Head Wash', 'Beard Cut', 'Line-Up & Detailing', 'Facial Treatment', 'Professional Styling'],
  },
  {
    title: "Men's Head Spa & Hair Cut",
    description: 'A complete scalp-care and grooming treatment designed to nourish your roots, improve hair health.',
    features: ['Scalp Cleansing', 'Scalp Analysis', 'Scalp Exfoliation', 'Tailored Haircut', 'Head Massage', 'Professional Styling'],
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="section-padding bg-background relative overflow-hidden">
      {/* Gold gradient bar */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gold-gradient" />
      
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
            Our <span className="text-gold-gradient">Signature Services</span>
          </h2>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="card-luxury p-8 flex flex-col"
            >
              {/* Icon */}
              <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <svg
                  viewBox="0 0 24 24"
                  className="w-8 h-8 text-primary"
                  fill="currentColor"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                </svg>
              </div>

              {/* Title */}
              <h3 className="font-display text-xl md:text-2xl font-semibold text-primary mb-4">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-muted-foreground mb-6 flex-grow">
                {service.description}
              </p>

              {/* Divider */}
              <div className="w-full h-px bg-border mb-6" />

              {/* Features */}
              <div className="grid grid-cols-2 gap-3 mb-8">
                {service.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-sm text-foreground">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <a
                href="https://lalajithebarbershop.ca"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold-outline w-full text-center"
              >
                Choose Location
              </a>
            </motion.div>
          ))}
        </div>

        {/* Beard Services Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20"
        >
          <div className="relative rounded-2xl overflow-hidden">
            <img
              src="https://lalajithebarbershop.ca/wp-content/uploads/2025/11/Beard-Services.png"
              alt="Beard Services"
              className="w-full h-64 md:h-80 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent flex items-center">
              <div className="p-8 md:p-12 max-w-lg">
                <h3 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Premium <span className="text-gold-gradient">Beard Services</span>
                </h3>
                <p className="text-muted-foreground mb-6">
                  Expert beard grooming, shaping, and maintenance for the distinguished gentleman.
                </p>
                <a
                  href="https://lalajithebarbershop.ca"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gold"
                >
                  Book Now
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;