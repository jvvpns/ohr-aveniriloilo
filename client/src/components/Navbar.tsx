import { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Youtube, Facebook } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'Concept', href: '#concept' },
    { label: 'Units', href: '#units' },
    { label: 'Location', href: '#location' },
    { label: 'Contact', href: '#inquire' },
  ];

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className='fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-border'
    >
      <div className='container mx-auto flex items-center justify-between h-20'>
        {/* Logo */}
        <motion.a
          href='#'
          className='flex items-center gap-3'
          whileHover={{ scale: 1.05 }}
        >
          <img
            src='/assets/logo/avenir-logo-400.webp'
            alt='Avenir Iloilo Logo'
            className='w-12 h-12 object-contain'
          />
          <div className='flex flex-col sm:flex-row sm:items-baseline sm:gap-1.5'>
            <span className='font-serif font-bold text-xl text-accent'>
              AVENIR
            </span>
            <span className='font-serif font-bold text-xl text-secondary'>
              ILOILO
            </span>
          </div>
        </motion.a>

        {/* Desktop Navigation */}
        <div className='hidden md:flex items-center gap-8'>
          {navItems.map((item) => (
            <motion.a
              key={item.label}
              href={item.href}
              className='relative text-foreground font-medium group'
              whileHover={{ y: -2 }}
              transition={{ duration: 0.2 }}
            >
              {item.label}
              <motion.span
                className='absolute bottom-0 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300'
                layoutId={`underline-${item.label}`}
              />
            </motion.a>
          ))}
        </div>

        <div className='hidden md:flex items-center gap-4'>
          <motion.a
            href='https://www.facebook.com/1horizonrealty'
            target='_blank'
            rel='noopener noreferrer'
            whileHover={{ scale: 1.15, color: '#1877F2' }}
            whileTap={{ scale: 0.95 }}
            className='text-foreground transition-colors duration-300'
            title='Facebook'
          >
            <Facebook className='w-5 h-5' />
          </motion.a>
          <motion.a
            href='https://www.instagram.com/onehorizonrealty'
            target='_blank'
            rel='noopener noreferrer'
            whileHover={{ scale: 1.15, color: '#E4405F' }}
            whileTap={{ scale: 0.95 }}
            className='text-foreground transition-colors duration-300'
            title='Instagram'
          >
            <svg className='w-5 h-5 fill-current' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
              <path d='M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.332 3.608 1.308.975.975 1.245 2.242 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.332 2.633-1.308 3.608-.975.975-2.242 1.245-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.332-3.608-1.308-.975-.975-1.245-2.242-1.308-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.332-2.633 1.308-3.608.975-.975 2.242-1.245 3.608-1.308 1.266-.058 1.646-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z' />
            </svg>
          </motion.a>
          <motion.a
            href='https://www.youtube.com/@OneHorizonRealty'
            target='_blank'
            rel='noopener noreferrer'
            whileHover={{ scale: 1.15, color: '#FF0000' }}
            whileTap={{ scale: 0.95 }}
            className='text-foreground transition-colors duration-300'
            title='YouTube'
          >
            <Youtube className='w-5 h-5' />
          </motion.a>
          <motion.a
            href='https://www.tiktok.com/@onehorizonrealty'
            target='_blank'
            rel='noopener noreferrer'
            whileHover={{ scale: 1.15, color: '#000000' }}
            whileTap={{ scale: 0.95 }}
            className='text-foreground transition-colors duration-300'
            title='TikTok'
          >
            <svg className='w-5 h-5 fill-current' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
              <path d='M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.68v13.67a2.4 2.4 0 1 1-2.4-2.4c.34 0 .67.03 1 .1V9.81a7.14 7.14 0 0 0-1-.08A7.14 7.14 0 0 0 5 16.77a7.14 7.14 0 0 0 7.14 7.14 7.14 7.14 0 0 0 7.14-7.14V12.78a9.37 9.37 0 0 0 2.41.72v-3.66a4.85 4.85 0 0 1-1.1-.13z' />
            </svg>
          </motion.a>
        </div>

        {/* CTA Button */}
        <motion.a
          href='#inquire'
          whileHover={{ scale: 1.08, boxShadow: '0 10px 25px rgba(212, 175, 55, 0.3)' }}
          whileTap={{ scale: 0.95 }}
          className='hidden md:block btn-primary shadow-lg transition-shadow duration-300'
        >
          Inquire Now
        </motion.a>

        {/* Mobile Menu Button */}
        <button
          className='md:hidden p-2'
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <X className='w-6 h-6 text-foreground' />
          ) : (
            <Menu className='w-6 h-6 text-foreground' />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className='md:hidden border-t border-border bg-background'
        >
          <div className='container mx-auto py-4 space-y-4'>
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className='block text-foreground hover:text-accent transition-colors font-medium py-2'
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href='#inquire'
              className='block btn-primary text-center'
              onClick={() => setIsOpen(false)}
            >
              Inquire Now
            </a>
            {/* Mobile Social Media Links */}
            <div className='flex items-center gap-4 pt-4 border-t border-border'>
              <a
                href='https://www.facebook.com/1horizonrealty'
                target='_blank'
                rel='noopener noreferrer'
                className='text-foreground hover:text-[#1877F2] transition-colors'
                title='Facebook'
                onClick={() => setIsOpen(false)}
              >
                <Facebook className='w-5 h-5' />
              </a>
              <a
                href='https://www.instagram.com/onehorizonrealty'
                target='_blank'
                rel='noopener noreferrer'
                className='text-foreground hover:text-[#E4405F] transition-colors'
                title='Instagram'
                onClick={() => setIsOpen(false)}
              >
                <svg className='w-5 h-5 fill-current' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                  <path d='M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.332 3.608 1.308.975.975 1.245 2.242 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.332 2.633-1.308 3.608-.975.975-2.242 1.245-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.332-3.608-1.308-.975-.975-1.245-2.242-1.308-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.332-2.633 1.308-3.608.975-.975 2.242-1.245 3.608-1.308 1.266-.058-1.646-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z' />
                </svg>
              </a>
              <a
                href='https://www.youtube.com/@OneHorizonRealty'
                target='_blank'
                rel='noopener noreferrer'
                className='text-foreground hover:text-[#FF0000] transition-colors'
                title='YouTube'
                onClick={() => setIsOpen(false)}
              >
                <Youtube className='w-5 h-5' />
              </a>
              <a
                href='https://www.tiktok.com/@onehorizonrealty'
                target='_blank'
                rel='noopener noreferrer'
                className='text-foreground hover:text-black transition-colors'
                title='TikTok'
                onClick={() => setIsOpen(false)}
              >
                <svg className='w-5 h-5 fill-current' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                  <path d='M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.68v13.67a2.4 2.4 0 1 1-2.4-2.4c.34 0 .67.03 1 .1V9.81a7.14 7.14 0 0 0-1-.08A7.14 7.14 0 0 0 5 16.77a7.14 7.14 0 0 0 7.14 7.14 7.14 7.14 0 0 0 7.14-7.14V12.78a9.37 9.37 0 0 0 2.41.72v-3.66a4.85 4.85 0 0 1-1.1-.13z' />
                </svg>
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
