import { motion } from 'framer-motion';
import { Instagram } from 'lucide-react';

const instagramImages = [
  'https://lalajithebarbershop.ca/wp-content/uploads/2025/11/Rectangle-16-2.webp',
  'https://lalajithebarbershop.ca/wp-content/uploads/2025/11/Rectangle-17-2.webp',
  'https://lalajithebarbershop.ca/wp-content/uploads/2025/11/Rectangle-18-2.webp',
  'https://lalajithebarbershop.ca/wp-content/uploads/2025/11/Rectangle-19-2.webp',
  'https://lalajithebarbershop.ca/wp-content/uploads/2025/11/Rectangle-20-2.webp',
  'https://lalajithebarbershop.ca/wp-content/uploads/2025/11/Rectangle-22-1.webp',
];

const InstagramSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
            <span className="text-gold-gradient">#Follow Us</span> On Instagram
          </h2>
        </motion.div>

        {/* Instagram Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {instagramImages.map((image, index) => (
            <motion.a
              key={index}
              href="https://instagram.com/lalajithebarbershop"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="relative group aspect-square overflow-hidden rounded-lg"
            >
              <img
                src={image}
                alt={`Instagram post ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <Instagram className="w-8 h-8 text-white" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstagramSection;