import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Facebook, Youtube } from 'lucide-react';

interface FooterProps {
  onOpenPrivacy: () => void;
}

const Footer = ({ onOpenPrivacy }: FooterProps) => {
  const currentYear = new Date().getFullYear();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <footer className='relative bg-foreground text-background overflow-hidden'>
      {/* Decorative Background */}
      <div className='absolute inset-0 opacity-5'>
        <div className='absolute top-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl' />
      </div>

      <div className='relative z-10'>
        {/* Main Footer Content */}
        <motion.div
          className='container mx-auto py-16 md:py-24'
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
        >
          <div className='grid md:grid-cols-4 gap-12 mb-12'>
            {/* Brand */}
            <motion.div variants={itemVariants} className='space-y-4'>
              <div className='flex items-center gap-2'>
                <img
                  src='/assets/logo/avenir-logo-400.webp'
                  alt='Avenir Iloilo Logo'
                  className='w-12 h-12 object-contain'
                />
                <div className='flex items-baseline gap-1.5'>
                  <span className='font-serif font-bold text-2xl text-accent'>AVENIR</span>
                  <span className='font-serif font-bold text-2xl text-secondary'>ILOILO</span>
                </div>
              </div>
              <p className='text-background/70 text-sm leading-relaxed'>
                Premium SOHO units designed for seamless living and business in one flexible space.
              </p>
            </motion.div>

            {/* Quick Links */}
            <motion.div variants={itemVariants}>
              <h4 className='font-semibold mb-4'>Quick Links</h4>
              <ul className='space-y-2 text-sm'>
                <li>
                  <a href='#concept' className='text-background/70 hover:text-background transition-colors'>
                    SOHO Concept
                  </a>
                </li>
                <li>
                  <a href='#units' className='text-background/70 hover:text-background transition-colors'>
                    Unit Types
                  </a>
                </li>
                <li>
                  <a href='#location' className='text-background/70 hover:text-background transition-colors'>
                    Location
                  </a>
                </li>
                <li>
                  <button 
                    onClick={onOpenPrivacy}
                    className='text-background/70 hover:text-background transition-colors text-left cursor-pointer'
                  >
                    Privacy Policy
                  </button>
                </li>
              </ul>
            </motion.div>

            {/* Information */}
            <motion.div variants={itemVariants}>
              <h4 className='font-semibold mb-4'>Information</h4>
              <ul className='space-y-3 text-sm'>
                <li className='flex items-start gap-2'>
                  <Mail className='w-4 h-4 mt-0.5 flex-shrink-0' />
                  <a href='mailto:onehorizonrealtyph@gmail.com' className='text-background/70 hover:text-background transition-colors'>
                    onehorizonrealtyph@gmail.com
                  </a>
                </li>
                <li className='flex items-start gap-2'>
                  <Phone className='w-4 h-4 mt-0.5 flex-shrink-0' />
                  <a href='tel:+639088950035' className='text-background/70 hover:text-background transition-colors'>
                    +63 908 895 0035
                  </a>
                </li>
                <li className='flex items-start gap-2'>
                  <MapPin className='w-4 h-4 mt-0.5 flex-shrink-0' />
                  <span className='text-background/70'>
                    R. Mapa Street, Mandurriao<br />
                    Iloilo City, Philippines
                  </span>
                </li>
              </ul>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={itemVariants}>
              <h4 className='font-semibold mb-4'>Follow Us</h4>
              <div className='flex flex-wrap gap-4'>
                <motion.a
                  href='https://www.facebook.com/1horizonrealty'
                  target='_blank'
                  rel='noopener noreferrer'
                  whileHover={{ scale: 1.1, backgroundColor: 'rgba(212, 175, 55, 0.3)' }}
                  whileTap={{ scale: 0.95 }}
                  className='p-3 bg-accent/20 rounded-lg transition-colors'
                  title='Facebook'
                >
                  <Facebook className='w-5 h-5' />
                </motion.a>
                <motion.a
                  href='https://www.instagram.com/onehorizonrealty'
                  target='_blank'
                  rel='noopener noreferrer'
                  whileHover={{ scale: 1.1, backgroundColor: 'rgba(212, 175, 55, 0.3)' }}
                  whileTap={{ scale: 0.95 }}
                  className='p-3 bg-accent/20 rounded-lg transition-colors'
                  title='Instagram'
                >
                  <svg className='w-5 h-5 fill-current' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                    <path d='M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.332 3.608 1.308.975.975 1.245 2.242 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.332 2.633-1.308 3.608-.975.975-2.242 1.245-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.332-3.608-1.308-.975-.975-1.245-2.242-1.308-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.332-2.633 1.308-3.608.975-.975 2.242-1.245 3.608-1.308 1.266-.058-1.646-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z' />
                  </svg>
                </motion.a>
                <motion.a
                  href='https://www.youtube.com/@OneHorizonRealty'
                  target='_blank'
                  rel='noopener noreferrer'
                  whileHover={{ scale: 1.1, backgroundColor: 'rgba(212, 175, 55, 0.3)' }}
                  whileTap={{ scale: 0.95 }}
                  className='p-3 bg-accent/20 rounded-lg transition-colors'
                  title='YouTube'
                >
                  <Youtube className='w-5 h-5' />
                </motion.a>
                <motion.a
                  href='https://www.tiktok.com/@onehorizonrealty'
                  target='_blank'
                  rel='noopener noreferrer'
                  whileHover={{ scale: 1.1, backgroundColor: 'rgba(212, 175, 55, 0.3)' }}
                  whileTap={{ scale: 0.95 }}
                  className='p-3 bg-accent/20 rounded-lg transition-colors'
                  title='TikTok'
                >
                  <svg className='w-5 h-5 fill-current' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                    <path d='M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.68v13.67a2.4 2.4 0 1 1-2.4-2.4c.34 0 .67.03 1 .1V9.81a7.14 7.14 0 0 0-1-.08A7.14 7.14 0 0 0 5 16.77a7.14 7.14 0 0 0 7.14 7.14 7.14 7.14 0 0 0 7.14-7.14V12.78a9.37 9.37 0 0 0 2.41.72v-3.66a4.85 4.85 0 0 1-1.1-.13z' />
                  </svg>
                </motion.a>
              </div>
            </motion.div>
          </div>

          {/* Divider */}
          <div className='h-px bg-gradient-to-r from-transparent via-background/30 to-transparent my-12' />

          {/* Bottom Footer */}
          <motion.div
            variants={itemVariants}
            className='flex flex-col md:flex-row justify-between items-center text-sm text-background/60 space-y-4 md:space-y-0'
          >
            <div className='flex flex-col md:flex-row items-center justify-center gap-4 text-sm text-muted-foreground'>
              <p>© {currentYear} Avenir Iloilo. All rights reserved.</p>
              <div className='flex items-center gap-2'>
                <span>Developed by</span>
                <a 
                  href='https://onehorizonrealty.ph' 
                  target='_blank' 
                  rel='noopener noreferrer' 
                  className='flex items-center gap-1.5 hover:text-accent transition-colors'
                >
                  <img src='/assets/logo/ohr_logo.jpeg' alt='One Horizon Realty' className='w-6 h-6 rounded-sm' />
                  <span className='font-semibold'>One Horizon Realty</span>
                </a>
              </div>
            </div>
            <div className='flex gap-6'>
              <button 
                onClick={onOpenPrivacy}
                className='hover:text-background transition-colors cursor-pointer'
              >
                Privacy Policy
              </button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
