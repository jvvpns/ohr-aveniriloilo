import { motion } from 'framer-motion';

/**
 * Developer Section Component
 * Design: Modern Minimalist with Warm Accents
 * - Centered layout with developer branding
 * - Warm gold accent line
 * - Professional typography hierarchy
 */

export default function DeveloperSection() {
  return (
    <section className="py-12 md:py-24 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center space-y-8"
        >
          {/* Section Header */}
          <div className="space-y-4">
            <div className="flex justify-center">
              <div className="h-1 w-16 bg-accent rounded-full"></div>
            </div>
            <h3 className="text-sm uppercase tracking-widest text-gray-600 font-semibold">
              Developed By
            </h3>
          </div>

          {/* Developer Name */}
          <div className="space-y-4">
            <h2 className="text-3xl md:text-5xl font-serif text-ohr-navy font-bold leading-tight">
              King Properties
            </h2>
            
            {/* Developer Description */}
            <p className="max-w-3xl mx-auto text-lg text-gray-700 leading-relaxed">
              King Properties is a prominent Philippine real estate developer established in 2011 as the real estate arm of Juanito King and Sons, Inc. Committed to quality and innovation, the company delivers developments that combine strategic locations, smart design, and long-term value—creating spaces ideal for modern living, business, and investment.
            </p>
          </div>

          {/* Key Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="space-y-3"
            >
              <div className="text-4xl font-serif text-accent">13+</div>
              <p className="text-gray-600 font-medium">Years of Excellence</p>
              <p className="text-sm text-gray-500">Established in 2011</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-3"
            >
              <div className="text-4xl font-serif text-accent">Quality</div>
              <p className="text-gray-600 font-medium">First Priority</p>
              <p className="text-sm text-gray-500">Premium developments</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="space-y-3"
            >
              <div className="text-4xl font-serif text-accent">Innovation</div>
              <p className="text-gray-600 font-medium">Smart Design</p>
              <p className="text-sm text-gray-500">Forward-thinking spaces</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
