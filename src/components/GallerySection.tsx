import { motion } from 'framer-motion';

const galleryImages = [
  {
    src: 'https://lalajithebarbershop.ca/wp-content/uploads/2025/12/Screenshot-2025-12-15-165529.webp',
    span: 'col-span-1 row-span-1',
  },
  {
    src: 'https://lalajithebarbershop.ca/wp-content/uploads/2025/12/Screenshot-2025-12-15-165551.webp',
    span: 'col-span-1 row-span-2',
  },
  {
    src: 'https://lalajithebarbershop.ca/wp-content/uploads/2025/12/Screenshot-2025-12-15-165613.webp',
    span: 'col-span-1 row-span-1',
  },
  {
    src: 'https://lalajithebarbershop.ca/wp-content/uploads/2025/12/Screenshot-2025-12-15-170210.webp',
    span: 'col-span-1 row-span-1',
  },
];

const GallerySection = () => {
  return (
    <section id="gallery" className="section-padding bg-jet">
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
            The Lala Ji Family{' '}
            <span className="text-gold-gradient">in Action</span>
          </h2>
        </motion.div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[300px]">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative overflow-hidden rounded-lg group ${image.span}`}
            >
              <img
                src={image.src}
                alt={`Gallery image ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;