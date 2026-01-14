import { motion } from 'framer-motion';
import { Leaf, Handshake, Award, Users } from 'lucide-react';

const values = [
  {
    icon: Leaf,
    title: 'Proudly Canadian',
    description: 'Rooted in passion, built with Canadian pride.',
  },
  {
    icon: Handshake,
    title: 'Customer First',
    description: 'Every cherished guest is treated like family here.',
  },
  {
    icon: Award,
    title: 'Quality Assured',
    description: 'We deliver nothing less than absolute perfection.',
  },
  {
    icon: Users,
    title: "Expert's Care",
    description: 'Expert care crafted with attention to detail & style.',
  },
];

const CareersSection = () => {
  return (
    <section className="relative">
      {/* Career Banner */}
      <div className="relative h-[400px] md:h-[500px] overflow-hidden">
        <img
          src="https://lalajithebarbershop.ca/wp-content/uploads/2025/12/Screenshot-2025-12-15-165349.webp"
          alt="Build Your Career"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center px-4"
          >
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold italic text-foreground mb-4">
              Build Your Career <span className="text-gold-gradient">in Style</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-md mx-auto">
              Experience growth, learning, and creativity every single day.
            </p>
            <a
              href="https://lalajithebarbershop.ca"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold-outline"
            >
              Join Our Team
            </a>
          </motion.div>
        </div>
      </div>

      {/* Values Bar */}
      <div className="bg-gold-gradient py-12">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <value.icon className="w-10 h-10 mx-auto mb-4 text-background" />
                <h3 className="font-display text-lg font-semibold italic text-background mb-2">
                  {value.title}
                </h3>
                <p className="text-background/80 text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareersSection;