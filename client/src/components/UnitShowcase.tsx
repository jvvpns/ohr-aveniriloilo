import { useState } from 'react';
import { motion } from 'framer-motion';

interface Unit {
  id: string;
  name: string;
  type: string;
  size: string;
  tcp: string;
  equity: string;
  features: string[];
  badge?: string;
  floorPlan?: string;
}

const UnitShowcase = () => {
  const [selectedUnit, setSelectedUnit] = useState<string>('soho1');

  const units: Unit[] = [
    {
      id: 'soho1',
      name: 'SOHO 1',
      type: 'Studio',
      size: '20.23 – 28.14 SQM',
      tcp: '₱3.3M',
      equity: '₱4,000/mo',
      features: ['Compact studio', 'Ideal for young professionals', 'Solo entrepreneurs'],
      badge: 'Best Seller',
      floorPlan: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663497229436/3RUHF4VUn5wQukcezMJBHJ/soho1_dfd6caca.jpg',
    },
    {
      id: 'soho2',
      name: 'SOHO 2',
      type: 'Studio Unit w/ Balcony',
      size: '25.04 – 50.81 SQM',
      tcp: '₱4.12M',
      equity: '₱5,200/mo',
      features: ['Open-air studio', 'Private balcony', 'Extended living space'],
      floorPlan: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663497229436/3RUHF4VUn5wQukcezMJBHJ/soho2_428c2178.jpg',
    },
    {
      id: 'soho3',
      name: 'SOHO 3',
      type: '1 Bedroom',
      size: '34.93 – 40.25 SQM',
      tcp: '₱5.75M',
      equity: '₱7,400/mo',
      features: ['Spacious 1-bedroom', 'Dedicated office space', 'Professional setup'],
      floorPlan: '/assets/units/soho3.jpg',
    },
    {
      id: 'soho4',
      name: 'SOHO 4',
      type: '1 Bedroom w/ Balcony',
      size: '38.00 – 52.86 SQM',
      tcp: '₱6.28M',
      equity: '₱8,100/mo',
      features: ['Premium 1-bedroom', 'Balcony included', "Executive's choice"],
      badge: 'Best Seller',
      floorPlan: '/assets/units/soho4.jpg',
    },
    {
      id: 'soho5',
      name: 'SOHO 5',
      type: '2 Bedroom w/ Balcony',
      size: '49.93 – 59.74 SQM',
      tcp: '₱9.82M',
      equity: '₱12,800/mo',
      features: ['Full suite for families', 'Dedicated home-office', 'Partition included'],
      badge: 'Premium',
      floorPlan: '/assets/units/soho5.jpg',
    },
    {
      id: 'combined',
      name: 'Bespoke Suites',
      type: 'Custom Configuration',
      size: 'Up to 150+ SQM',
      tcp: 'Exclusive Pricing',
      equity: 'Tailored Terms',
      features: [
        'Seamlessly merge multiple units',
        'Tailored architectural layouts',
        'Executive office expansion',
        'Private architectural consultation',
      ],
      badge: 'Limited Edition',
    },
  ];

  const selected = units.find(u => u.id === selectedUnit) || units[0];

  return (
    <section id='units' className='relative py-20 md:py-32 bg-background overflow-hidden'>
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
          <h2 className='text-4xl md:text-5xl lg:text-6xl font-serif text-foreground mb-6'>
            Unit Types
          </h2>
          <p className='text-lg text-muted-foreground max-w-2xl mx-auto'>
            Start your investment with flexible payment options and choose from five income-ready SOHO configurations.
          </p>
        </motion.div>

        {/* Unit Selector Buttons */}
        <div className='flex flex-wrap justify-center gap-3 md:gap-4 mb-12 md:mb-16'>
          {units.map((unit) => (
            <motion.button
              key={unit.id}
              onClick={() => setSelectedUnit(unit.id)}
              whileHover={{ scale: 1.08, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className={`px-4 md:px-6 py-2 md:py-3 rounded-lg font-medium transition-all duration-300 ${
                selectedUnit === unit.id
                  ? 'bg-accent text-accent-foreground shadow-xl'
                  : 'bg-card text-foreground border border-border hover:border-accent/50 hover:shadow-md'
              }`}
            >
              {unit.name}
            </motion.button>
          ))}
        </div>

        {/* Unit Details */}
        <motion.div
          key={selectedUnit}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className='grid md:grid-cols-2 gap-8 md:gap-12 items-center'
        >
          {/* Left: Details */}
          <div className='space-y-8'>
            <div>
              <div className='flex items-center gap-3 mb-4'>
                <h3 className='text-4xl md:text-5xl font-serif text-foreground'>
                  {selected.name}
                </h3>
                {selected.badge && (
                  <span className='inline-block px-3 py-1 bg-accent/20 text-accent text-xs font-semibold uppercase rounded-full'>
                    {selected.badge}
                  </span>
                )}
              </div>
              <p className='text-xl text-muted-foreground'>{selected.type}</p>
            </div>

            <div className='grid grid-cols-3 gap-4'>
              <div className='bg-card p-4 rounded-lg border border-border'>
                <p className='text-sm text-muted-foreground mb-2'>Area</p>
                <p className='text-lg font-semibold text-foreground'>{selected.size}</p>
              </div>
              <div className='bg-card p-4 rounded-lg border border-border'>
                <p className='text-sm text-muted-foreground mb-2'>Price</p>
                <p className='text-lg font-semibold text-foreground leading-tight'>{selected.tcp}</p>
              </div>
              <div className='bg-card p-4 rounded-lg border border-border'>
                <p className='text-sm text-muted-foreground mb-2'>Monthly</p>
                <p className='text-lg font-semibold text-accent leading-tight'>{selected.equity}</p>
              </div>
            </div>

            <div className='space-y-3'>
              <p className='text-sm text-muted-foreground uppercase tracking-widest font-semibold'>
                Key Features
              </p>
              {selected.features.map((feature, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className='flex items-center gap-3'
                >
                  <div className='h-2 w-2 rounded-full bg-accent flex-shrink-0' />
                  <p className='text-foreground'>{feature}</p>
                </motion.div>
              ))}
            </div>

            <motion.a
              href='#inquire'
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className='inline-block btn-primary'
            >
              {selected.id === 'combined' ? 'Request Consultation' : 'Get Sample Computation'}
            </motion.a>
          </div>

          {/* Right: Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className='relative h-full min-h-[400px]'
          >
            {selected.id === 'combined' ? (
              <div className='h-full relative group'>
                <div className='absolute inset-0 bg-gradient-to-br from-accent/20 via-background to-secondary/20 rounded-3xl blur-2xl opacity-50 group-hover:opacity-100 transition-opacity duration-700' />
                <div className='relative h-full bg-card/40 backdrop-blur-xl rounded-3xl border border-accent/30 p-8 md:p-12 flex flex-col items-center justify-center text-center overflow-hidden shadow-2xl'>
                  {/* Decorative Elements */}
                  <div className='absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-bl-full' />
                  <div className='absolute bottom-0 left-0 w-32 h-32 bg-accent/10 rounded-tr-full' />
                  
                  <motion.div
                    initial={{ rotate: 0 }}
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                    className='w-32 h-32 mb-8 opacity-40 border-2 border-dashed border-accent/30 rounded-full flex items-center justify-center p-4'
                  >
                    <img 
                      src='/assets/logo/avenir-logo-400.webp' 
                      alt='Avenir Logo' 
                      className='w-full h-full object-contain'
                    />
                  </motion.div>

                  <h4 className='text-3xl md:text-4xl font-serif text-foreground mb-4 drop-shadow-sm'>
                    Infinite Possibilities
                  </h4>
                  <div className='w-12 h-1 bg-accent rounded-full mb-6' />
                  <p className='text-lg text-muted-foreground max-w-sm mb-8 leading-relaxed italic'>
                    "Our architects will work with you to design a custom workspace that perfectly fits your business requirements."
                  </p>
                  
                  <div className='grid grid-cols-2 gap-4 w-full text-left'>
                    <div className='p-4 bg-background/50 rounded-xl border border-border/50'>
                      <p className='text-xs text-accent font-bold uppercase mb-1'>Concept</p>
                      <p className='text-sm text-foreground'>Bespoke Expansion</p>
                    </div>
                    <div className='p-4 bg-background/50 rounded-xl border border-border/50'>
                      <p className='text-xs text-accent font-bold uppercase mb-1'>Limit</p>
                      <p className='text-sm text-foreground'>None</p>
                    </div>
                  </div>
                </div>
              </div>
            ) : selected.floorPlan ? (
              <div className='bg-card rounded-2xl overflow-hidden border border-border shadow-lg'>
                <img
                  src={selected.floorPlan}
                  alt={`${selected.name} Floor Plan`}
                  className='w-full h-auto object-cover'
                />
              </div>
            ) : (
              <div className='bg-gradient-to-br from-accent/10 to-secondary/10 rounded-2xl p-8 md:p-12 aspect-square flex items-center justify-center'>
                <div className='text-center'>
                  <div className='text-6xl md:text-7xl font-serif text-accent/30 mb-4'>
                    {selected.name}
                  </div>
                  <p className='text-muted-foreground'>{selected.type}</p>
                </div>
              </div>
            )}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default UnitShowcase;
