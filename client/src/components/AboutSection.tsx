import { motion } from 'framer-motion';

/**
 * About Section Component
 * Design: Modern Minimalist with Warm Accents
 * - Asymmetric layout with image on right, text on left
 * - Warm gold accents and navy typography
 * - Smooth fade-in animations on scroll
 */

export default function AboutSection() {
  return (
    <section className="py-12 md:py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="space-y-2">
              <div className="h-1 w-16 bg-accent rounded-full"></div>
              <h2 className="text-3xl md:text-5xl font-serif text-ohr-navy font-bold leading-tight">
                Shaping the Future of Iloilo City
              </h2>
            </div>
            
            <p className="text-lg text-gray-700 leading-relaxed">
              Take a tour of Avenir Iloilo and see how you can live, work, and grow in one smart investment. Our premium SOHO units are designed to adapt to your lifestyle while providing the flexibility and space you need to thrive.
            </p>

            <p className="text-base text-gray-600 leading-relaxed">
              Whether you're a freelancer, entrepreneur, or professional seeking a better work-life balance, Avenir Iloilo offers the perfect solution for modern living in the heart of Iloilo City.
            </p>

            <div className="pt-4">
              <a
                href="#units"
                className="inline-block bg-accent text-ohr-navy px-8 py-3 rounded-sm font-semibold hover:opacity-90 transition-all duration-300"
              >
                Explore Units
              </a>
            </div>
          </motion.div>

          {/* Image Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="relative lg:pl-12"
          >
            <div className="relative group overflow-hidden rounded-[2rem] shadow-2xl border border-accent/20">
              <img
                src="/assets/perspectives/day_2.jpg"
                alt="Avenir Iloilo Grand Perspective"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[2s] ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            </div>
            
            {/* Decorative background elements */}
            <div className="absolute -top-10 -right-10 w-48 h-48 bg-accent/5 rounded-full blur-3xl -z-10"></div>
            <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-secondary/5 rounded-full blur-3xl -z-10"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
