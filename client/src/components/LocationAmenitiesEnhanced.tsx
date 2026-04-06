import { motion } from 'framer-motion';
import { MapPin, ShoppingBag, Hospital, BookOpen } from 'lucide-react';

/**
 * Enhanced Location & Amenities Component
 * Design: Modern Minimalist with Warm Accents
 * - Grid layout with location categories
 * - Distance and travel time information
 * - Icons for visual hierarchy
 */

interface LocationItem {
  name: string;
  distance: string;
  time: string;
  icon?: React.ReactNode;
}

interface LocationCategory {
  title: string;
  icon: React.ReactNode;
  items: LocationItem[];
}

export default function LocationAmenitiesEnhanced() {
  const locations: LocationCategory[] = [
    {
      title: 'Lifestyle & Malls',
      icon: <ShoppingBag className="w-6 h-6" />,
      items: [
        { name: 'Sunset Boulevard', distance: '< 100 m', time: '1 min walk' },
        { name: 'Festive Walk Mall', distance: '1.3 km', time: '3 min drive' },
        { name: 'Molo Mansion', distance: '2.2 km', time: '6 min drive' },
        { name: 'SM City Iloilo', distance: '2.4 km', time: '5 min drive' },
      ],
    },
    {
      title: 'Hospitals',
      icon: <Hospital className="w-6 h-6" />,
      items: [
        { name: 'Western Visayas Medical Center', distance: '0.8 km', time: '2 min drive' },
        { name: 'The Medical City Iloilo', distance: '1.4 km', time: '4 min drive' },
        { name: 'Healthway QualiMed Hospital', distance: '1.5 km', time: '5 min drive' },
      ],
    },
    {
      title: 'Education',
      icon: <BookOpen className="w-6 h-6" />,
      items: [
        { name: 'UP Visayas (Iloilo City)', distance: '3.8 km', time: '10 min drive' },
        { name: 'University of San Agustin', distance: '4.2 km', time: '12 min drive' },
        { name: 'Central Philippine University', distance: '3.5 km', time: '8 min drive' },
        { name: 'St. Paul University Iloilo', distance: '4.5 km', time: '12 min drive' },
      ],
    },
  ];

  return (
    <section className="py-12 md:py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-24 space-y-4"
        >
          <div className="flex justify-center">
            <div className="h-1 w-16 bg-accent rounded-full"></div>
          </div>
          <h2 className="text-3xl md:text-5xl font-serif text-ohr-navy font-bold leading-tight">
            Prime Location
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Strategically located beside Sunset Boulevard and the Megaworld Commercial District, Avenir Iloilo places you at the center of business, lifestyle, and convenience.
          </p>
        </motion.div>

        {/* Location Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {locations.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 pb-4 border-b-2 border-accent/30">
                <div className="text-accent">{category.icon}</div>
                <h3 className="text-xl font-serif text-ohr-navy font-bold">
                  {category.title}
                </h3>
              </div>

              {/* Location Items */}
              <div className="space-y-4">
                {category.items.map((item, itemIdx) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: (idx * 0.1) + (itemIdx * 0.05) }}
                    viewport={{ once: true }}
                    className="space-y-2"
                  >
                    <p className="font-semibold text-gray-900">{item.name}</p>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <MapPin className="w-4 h-4 text-accent flex-shrink-0" />
                      <span>{item.distance}</span>
                    </div>
                    <p className="text-sm text-gray-500 ml-6">
                      {item.time}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Map Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 md:mt-24"
        >
          <div className="grid lg:grid-cols-2 gap-8 items-center bg-card rounded-2xl overflow-hidden border border-border shadow-xl">
            {/* Map Column */}
            <div className="h-[400px] lg:h-[500px] w-full relative">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3920.3269722197856!2d122.54092449999999!3d10.709243899999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33aee51056d5e5ff%3A0x83f9c5d9032b0e4f!2sAvenir%20Iloilo!5e0!3m2!1sen!2sph!4v1775440947780!5m2!1sen!2sph" 
                className="absolute inset-0 w-full h-full border-0" 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Avenir Iloilo Location Map"
              ></iframe>
            </div>

            {/* Info Column */}
            <div className="p-8 md:p-12 space-y-8">
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-accent uppercase tracking-widest text-sm font-bold">
                  <MapPin className="w-5 h-5" />
                  <span>The Address</span>
                </div>
                <h3 className="text-2xl md:text-4xl font-serif text-ohr-navy font-bold leading-tight">
                  Where Opportunity Meets Lifestyle
                </h3>
                <p className="text-gray-600 text-lg">
                  Perfectly positioned at R. Mapa Street, Mandurriao, Iloilo City. Avenir Iloilo is your gateway to the city's most vibrant commercial and residential hub.
                </p>
              </div>

              <div className="space-y-4 pt-6 border-t border-border">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-medium">Location</p>
                    <p className="text-gray-900 font-semibold">R. Mapa St, Mandurriao, Iloilo City</p>
                  </div>
                </div>

                <motion.a
                  href="https://www.google.com/maps/dir/?api=1&destination=Avenir+Iloilo+R.+Mapa+St+Mandurriao"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-secondary text-white rounded-lg font-semibold hover:bg-secondary/90 transition-all duration-300 shadow-lg shadow-secondary/20"
                >
                  <MapPin className="w-4 h-4" />
                  Get Directions
                </motion.a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
