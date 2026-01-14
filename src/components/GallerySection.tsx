import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

const galleryImages = [
  {
    src: 'https://lalajithebarbershop.ca/wp-content/uploads/2025/12/Screenshot-2025-12-15-165529.webp',
    alt: 'Lalaji barbershop action shot 1',
  },
  {
    src: 'https://lalajithebarbershop.ca/wp-content/uploads/2025/12/Screenshot-2025-12-15-165551.webp',
    alt: 'Lalaji barbershop action shot 2',
  },
  {
    src: 'https://lalajithebarbershop.ca/wp-content/uploads/2025/12/Screenshot-2025-12-15-165613.webp',
    alt: 'Lalaji barbershop action shot 3',
  },
  {
    src: 'https://lalajithebarbershop.ca/wp-content/uploads/2025/12/Screenshot-2025-12-15-170210.webp',
    alt: 'Lalaji barbershop action shot 4',
  },
];

const GallerySection = () => {
  return (
    <section id="gallery" className="section-padding bg-jet overflow-hidden">
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

        {/* 3D Coverflow Carousel */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Swiper
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            slidesPerView="auto"
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 200,
              modifier: 2.5,
              slideShadows: true,
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            modules={[EffectCoverflow, Pagination, Autoplay]}
            className="w-full py-12 gallery-swiper"
          >
            {galleryImages.map((image, index) => (
              <SwiperSlide
                key={index}
                className="!w-[300px] md:!w-[400px] lg:!w-[500px]"
              >
                <div className="relative overflow-hidden rounded-2xl group">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-[350px] md:h-[450px] object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Gold border glow on hover */}
                  <div className="absolute inset-0 rounded-2xl border-2 border-primary/0 group-hover:border-primary/60 transition-all duration-300 shadow-lg group-hover:shadow-primary/30" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>

      {/* Custom Swiper Styles */}
      <style>{`
        .gallery-swiper .swiper-slide {
          transition: transform 0.3s ease, opacity 0.3s ease;
        }
        
        .gallery-swiper .swiper-slide-active {
          transform: scale(1.05);
        }
        
        .gallery-swiper .swiper-pagination-bullet {
          background: hsl(var(--primary));
          opacity: 0.5;
          width: 12px;
          height: 12px;
        }
        
        .gallery-swiper .swiper-pagination-bullet-active {
          opacity: 1;
          transform: scale(1.2);
        }
        
        .gallery-swiper .swiper-slide-shadow-left,
        .gallery-swiper .swiper-slide-shadow-right {
          background: linear-gradient(to left, rgba(0,0,0,0.5), rgba(0,0,0,0));
          border-radius: 1rem;
        }
      `}</style>
    </section>
  );
};

export default GallerySection;
