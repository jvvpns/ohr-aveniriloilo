import { motion } from 'framer-motion';

const SohoConcept = () => {
  const features = [
    {
      title: 'Dual Functionality',
      description: 'Perfect for freelancers, startups, and self-employed professionals. Your home can double as your productive workspace.',
      icon: '🏢',
    },
    {
      title: 'Business-Ready Space',
      description: 'Register your unit as a business address. Unlike typical condos, Avenir Iloilo welcomes business operations in your unit.',
      icon: '📋',
    },
    {
      title: 'High Rental Potential',
      description: 'Maximize your investment by targeting both residential and commercial tenants, increasing income opportunities.',
      icon: '💰',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring' as const,
        stiffness: 40,
        damping: 15,
      },
    },
  };

  return (
    <section className='relative py-20 md:py-32 bg-gradient-to-b from-background via-background to-accent/5 overflow-hidden'>
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
            What is SOHO?
          </h2>
          <p className='text-lg text-muted-foreground max-w-2xl mx-auto'>
            Small Office / Home Office — Avenir Iloilo offers a versatile space that adapts to your lifestyle. Live, work, or do both—all in one modern condo.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          className='grid md:grid-cols-3 gap-8 md:gap-12'
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className='relative group'
            >
              <div className='absolute -inset-0.5 bg-gradient-to-r from-accent to-secondary opacity-0 group-hover:opacity-20 rounded-lg blur transition duration-300' />
              <div className='relative bg-card p-8 md:p-10 rounded-lg border border-border hover:border-accent/30 transition-all duration-300'>
                <div className='text-5xl mb-6'>{feature.icon}</div>
                <h3 className='text-2xl font-serif text-foreground mb-4'>
                  {feature.title}
                </h3>
                <p className='text-muted-foreground leading-relaxed'>
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Divider */}
        <div className='my-20 md:my-32 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent' />

        {/* Key Features */}
        <motion.div
          className='grid md:grid-cols-2 gap-12 items-center'
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className='space-y-8'>
            <h3 className='text-3xl md:text-4xl font-serif text-foreground'>
              Built for Modern Living
            </h3>
            <div className='space-y-6'>
              {[
                { label: '100% Power Back-up', desc: 'Uninterrupted power supply for your home and business' },
                { label: '3.2m Ceiling Height', desc: 'Spacious interiors with premium living volume' },
                { label: 'Fiber Optic Ready', desc: 'Business-grade data connectivity' },
                { label: 'Mag 8 Resilience', desc: 'Earthquake-resistant construction' },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className='flex gap-4'
                >
                  <div className='flex-shrink-0'>
                    <div className='relative flex items-center justify-center h-8 w-8'>
                      {/* Pulse Ring */}
                      <motion.div 
                        className='absolute inset-0 rounded-full bg-accent/30'
                        animate={{ 
                          scale: [1, 1.4, 1],
                          opacity: [0.3, 0, 0.3]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: idx * 0.4
                        }}
                      />
                      {/* Inner Dot */}
                      <motion.div 
                        className='h-2.5 w-2.5 rounded-full bg-accent'
                        animate={{ 
                          scale: [1, 1.2, 1],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: idx * 0.4
                        }}
                      />
                    </div>
                  </div>
                  <div>
                    <p className='font-semibold text-foreground'>{item.label}</p>
                    <p className='text-muted-foreground text-sm'>{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className='relative'
          >
            <div className='relative group overflow-hidden rounded-3xl border border-accent/20 shadow-2xl'>
              <img
                src='/assets/perspectives/entrance_rotunda.jpg'
                alt='Avenir Iloilo Entrance Rotunda'
                className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-[2s] ease-out'
              />
              <div className='absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700' />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default SohoConcept;
