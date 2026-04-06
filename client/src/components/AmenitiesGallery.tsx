import { motion } from 'framer-motion';
import { useState } from 'react';

interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  title: string;
}

const AmenitiesGallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryImages: GalleryImage[] = [
    {
      id: 'grand-icon',
      src: '/assets/perspectives/day_1.jpg',
      alt: 'Avenir Iloilo Iconic Architectural View',
      title: 'Architectural Excellence',
    },
    {
      id: 'sky-garden',
      src: '/assets/perspectives/amenity_deck.jpg',
      alt: 'Avenir Iloilo Sky Garden and Amenity Deck',
      title: 'Sky Garden Sanctuary',
    },
    {
      id: 'luxury-arrival',
      src: '/assets/perspectives/dropoff_1.jpg',
      alt: 'Grand Drop-off Porte Cochere at Avenir Iloilo',
      title: 'Grand Luxe Arrival',
    },
    {
      id: 'wellness-oasis',
      src: '/assets/perspectives/pool.jpg',
      alt: 'Infinity-edge Wellness Pool at Avenir Iloilo',
      title: 'Wellness Oasis',
    },
    {
      id: 'social-terrace',
      src: '/assets/perspectives/amenity_deck_2.jpg',
      alt: 'Social Terrace and Garden Deck at Avenir Iloilo',
      title: 'Social Garden Terrace',
    },
    {
      id: 'grand-entrance',
      src: '/assets/perspectives/entrance_rotunda.jpg',
      alt: 'Grand Entrance Rotunda of Avenir Iloilo',
      title: 'Premier Entrance',
    },
    {
      id: 'modern-skyline',
      src: '/assets/perspectives/day_2.jpg',
      alt: 'Modern Skyline View of Avenir Iloilo',
      title: 'A New Horizon',
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring' as const, stiffness: 50, damping: 20 },
    },
  };

  return (
    <section id='amenities' className='relative py-20 md:py-32 bg-background overflow-hidden'>
      <div className='container mx-auto px-4 md:px-0'>
        {/* Section Header */}
        <motion.div
          className='text-center mb-16 md:mb-24'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className='flex justify-center mb-6'>
            <div className='h-1 w-16 bg-accent rounded-full' />
          </div>
          <h2 className='text-4xl md:text-5xl lg:text-6xl font-serif text-foreground mb-6 leading-tight'>
            Built for Living, <br /> <span className='text-accent'>Designed for Business</span>
          </h2>
          <p className='text-lg text-muted-foreground max-w-2xl mx-auto'>
            Designed for productivity and relaxation, Avenir Iloilo offers amenities that support your lifestyle and professional growth.
          </p>
        </motion.div>

        {/* Bento Grid Gallery */}
        <motion.div
          className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8'
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
        >
          {galleryImages.map((image, index) => {
            // Bento Layout logic for 7 images
            let gridClass = '';
            let cardPadding = 'p-5';
            let cardMaxWidth = 'md:max-w-[240px]';
            let titleSize = 'text-xl';

            if (index === 0) {
              // Large Featured Icon
              gridClass = 'lg:col-span-8 lg:row-span-2 h-[450px] md:h-[600px] lg:h-[700px]';
              cardPadding = 'p-8';
              cardMaxWidth = 'md:max-w-[320px]';
              titleSize = 'text-2xl md:text-3xl';
            } else if (index === 6) {
              // Bottom Panorama
              gridClass = 'lg:col-span-12 h-[300px] md:h-[400px] lg:h-[450px]';
              cardPadding = 'p-8';
              cardMaxWidth = 'md:max-w-md';
              titleSize = 'text-2xl md:text-3xl';
            } else {
              // Standard Grid items
              gridClass = 'lg:col-span-4 h-[300px] md:h-[285px] lg:h-[334px]';
            }

            return (
              <motion.div
                key={image.id}
                variants={itemVariants}
                className={`group relative overflow-hidden rounded-[2rem] cursor-pointer shadow-2xl transition-all duration-500 hover:shadow-accent/20 ${gridClass}`}
                onClick={() => setSelectedImage(image.id)}
              >
                <div className='relative w-full h-full overflow-hidden bg-muted'>
                  <motion.img
                    src={image.src}
                    alt={image.alt}
                    className='w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-1000'
                    whileHover={{ scale: 1.08 }}
                  />
                  
                  {/* Premium Glassmorphic Label Overlay */}
                  <div className='absolute bottom-6 left-6 right-6 lg:bottom-8 lg:left-8 lg:right-8'>
                    <motion.div 
                      className={`bg-black/20 backdrop-blur-2xl border border-white/20 ${cardPadding} rounded-2xl ${cardMaxWidth} transform transition-all duration-700 ease-out group-hover:translate-y-[-12px] group-hover:bg-accent/85 group-hover:border-accent group-hover:shadow-2xl shadow-lg`}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 + index * 0.1 }}
                    >
                      <div className='flex items-center gap-3 mb-3'>
                        <div className='w-10 h-px bg-white group-hover:bg-accent-foreground transition-all duration-500 group-hover:w-14' />
                        <span className='text-[10px] uppercase tracking-[0.25em] font-extrabold text-white/90 group-hover:text-accent-foreground'>
                          AMENITY 0{index + 1}
                        </span>
                      </div>
                      <h3 className={`${titleSize} font-serif text-white group-hover:text-accent-foreground transition-colors leading-tight font-bold`}>
                        {image.title}
                      </h3>
                      <div className='overflow-hidden h-0 group-hover:h-8 transition-all duration-500 ease-in-out'>
                        <p className='text-[10px] font-bold uppercase tracking-widest text-accent-foreground mt-3 flex items-center gap-2'>
                          Explore Details <span className='text-lg'>→</span>
                        </p>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Divider */}
        <div className='my-20 md:my-32 section-divider' />

        {/* Amenities List */}
        <motion.div
          className='grid md:grid-cols-2 lg:grid-cols-5 gap-6'
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {[
            { icon: '🏊', name: 'Swimming Pool', desc: 'Olympic-sized pool' },
            { icon: '🎪', name: 'Outdoor Playground', desc: 'Family-friendly space' },
            { icon: '🏃', name: 'Jogging Path', desc: 'Scenic running trails' },
            { icon: '🌳', name: 'Garden Viewing Decks', desc: 'Nature observation' },
            { icon: '🔒', name: '24/7 Security', desc: 'Professional security' },
            { icon: '🖥️', name: 'Co-Working Space', desc: 'Collaborative workspace' },
            { icon: '🏢', name: 'Function Room', desc: 'Event hosting' },
            { icon: '👥', name: 'Meeting Rooms', desc: 'Professional meetings' },
            { icon: '☕', name: 'Exclusive Lounge', desc: 'Relaxation area' },
            { icon: '📡', name: 'Fiber-Ready Connectivity', desc: 'High-speed internet' },
          ].map((amenity, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -5, boxShadow: '0 10px 30px rgba(212, 175, 55, 0.15)' }}
              transition={{ delay: idx * 0.05 }}
              viewport={{ once: true }}
              className='text-center p-6 rounded-lg bg-card border border-border hover:border-accent/50 transition-all duration-300'
            >
              <motion.div
                className='text-4xl mb-3 inline-block'
                whileHover={{ scale: 1.2, rotate: 10 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                {amenity.icon}
              </motion.div>
              <h4 className='font-semibold text-foreground mb-1'>{amenity.name}</h4>
              <p className='text-sm text-muted-foreground'>{amenity.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <motion.div
          className='fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedImage(null)}
        >
          <motion.div
            className='relative max-w-4xl w-full max-h-[90vh]'
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.9 }}
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={galleryImages.find(img => img.id === selectedImage)?.src}
              alt={galleryImages.find(img => img.id === selectedImage)?.alt}
              className='w-full h-full object-contain rounded-lg'
            />
            <button
              onClick={() => setSelectedImage(null)}
              className='absolute top-4 right-4 bg-white/20 hover:bg-white/40 text-white rounded-full p-2 transition-colors'
            >
              <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M6 18L18 6M6 6l12 12' />
              </svg>
            </button>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default AmenitiesGallery;
