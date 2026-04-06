import { motion } from 'framer-motion';
import { MapPin, Utensils, Hospital, BookOpen } from 'lucide-react';

const LocationAmenities = () => {
  const amenities = [
    {
      category: 'Lifestyle & Malls',
      icon: Utensils,
      items: [
        { name: 'Festive Walk Mall', distance: '0.3–0.5 km', time: '1–3 min walk' },
        { name: 'SM City Iloilo', distance: '1–2 km', time: '3–5 min drive' },
      ],
    },
    {
      category: 'Hospitals',
      icon: Hospital,
      items: [
        { name: 'The Medical City Iloilo', distance: '3–4 km', time: '8–10 min drive' },
        { name: 'Healthway QualiMed Hospital', distance: '2–3 km', time: '5–7 min drive' },
      ],
    },
    {
      category: 'Education',
      icon: BookOpen,
      items: [
        { name: 'Central Philippine University', distance: '4–5 km', time: '10–15 min drive' },
        { name: 'St. Paul University Iloilo', distance: '4–6 km', time: '10–15 min drive' },
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring' as const, stiffness: 40, damping: 15 },
    },
  };

  return (
    <section className='relative py-20 md:py-32 bg-gradient-to-b from-background to-accent/5 overflow-hidden'>
      <div className='container mx-auto'>
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
          <h2 className='text-4xl md:text-5xl lg:text-6xl font-serif text-foreground mb-6'>
            Prime Location
          </h2>
          <p className='text-lg text-muted-foreground max-w-2xl mx-auto'>
            Strategically located beside Sunset Boulevard and the Megaworld Commercial District, Avenir Iloilo places you at the center of business, lifestyle, and convenience.
          </p>
        </motion.div>

        {/* Location Map */}
        <motion.div
          className='mb-16 md:mb-24 rounded-2xl overflow-hidden shadow-lg'
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <img
            src='https://d2xsxph8kpxj0f.cloudfront.net/310519663497229436/3RUHF4VUn5wQukcezMJBHJ/location-map-illustration-oFaWt3P6GEdLQd9JQ2CJzt.webp'
            alt='Iloilo City Map'
            className='w-full h-auto'
          />
        </motion.div>

        {/* Amenities Grid */}
        <motion.div
          className='grid md:grid-cols-3 gap-8 md:gap-12'
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
        >
          {amenities.map((amenity, idx) => {
            const IconComponent = amenity.icon;
            return (
              <motion.div key={idx} variants={itemVariants} className='group'>
                <div className='bg-card p-8 md:p-10 rounded-lg border border-border hover:border-accent/30 transition-all duration-300'>
                  <div className='flex items-center gap-4 mb-6'>
                    <div className='p-3 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-colors'>
                      <IconComponent className='w-6 h-6 text-accent' />
                    </div>
                    <h3 className='text-xl font-serif text-foreground'>
                      {amenity.category}
                    </h3>
                  </div>
                  <div className='space-y-4'>
                    {amenity.items.map((item, itemIdx) => (
                      <motion.div
                        key={itemIdx}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: itemIdx * 0.1 }}
                        viewport={{ once: true }}
                        className='pb-4 border-b border-border last:pb-0 last:border-b-0'
                      >
                        <p className='font-medium text-foreground mb-1'>
                          {item.name}
                        </p>
                        <div className='flex items-center gap-2 text-sm text-muted-foreground'>
                          <MapPin className='w-4 h-4' />
                          <span>{item.distance}</span>
                          <span>•</span>
                          <span>{item.time}</span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default LocationAmenities;
