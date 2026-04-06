import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    unitType: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const form = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    if (!form.current) return;

    try {
      // Configuration for EmailJS
      // SERVICE_ID: service_sy0jiwe
      // TEMPLATE_ID: template_au3o9xa
      // PUBLIC_KEY: [Please replace 'YOUR_PUBLIC_KEY' with your actual key from EmailJS dashboard]

      const templateParams = {
        full_name: `${formData.firstName} ${formData.lastName}`,
        email: formData.email,
        phone: formData.phone,
        unit_type: formData.unitType || 'Not specified',
        message: formData.message,
        date: new Date().toLocaleString(),
      };

      await emailjs.send(
        'service_sy0jiwe',
        'template_dkw218m',
        templateParams,
        'VpseX2nJxjp4-sm4B'
      );

      setSubmitStatus('success');
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        unitType: '',
        message: '',
      });

      setTimeout(() => setSubmitStatus('idle'), 5000);
    } catch (error) {
      console.error('EmailJS Error:', error);
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

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
    <section id='inquire' className='relative py-12 md:py-32 bg-gradient-to-b from-background via-background to-accent/5 overflow-hidden'>
      <div className='container mx-auto'>
        <div className='grid md:grid-cols-2 gap-12 md:gap-16 items-start'>
          {/* Left: Contact Info */}
          <motion.div
            className='space-y-8'
            variants={containerVariants}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
          >
            <div>
              <div className='flex justify-start mb-6'>
                <div className='h-1 w-16 bg-accent rounded-full' />
              </div>
              <h2 className='text-3xl md:text-5xl lg:text-6xl font-serif text-foreground mb-4 leading-tight'>
                Secure Your Unit Today
              </h2>
              <p className='text-lg text-muted-foreground mb-2'>
                Don't miss out, units are selling fast! Sign up today for the latest availability and sample computation.
              </p>
              <p className='text-base text-muted-foreground'>
                Fill out the form or contact us directly for more information about our premium SOHO units.
              </p>
            </div>

            <motion.div variants={itemVariants} className='space-y-6'>
              <div className='flex gap-4'>
                <div className='flex-shrink-0'>
                  <div className='flex items-center justify-center h-12 w-12 rounded-lg bg-accent/10'>
                    <Mail className='h-6 w-6 text-accent' />
                  </div>
                </div>
                <div>
                  <h3 className='text-lg font-semibold text-foreground mb-1'>Email</h3>
                  <a
                    href='mailto:onehorizonrealtyph@gmail.com'
                    className='text-accent hover:underline'
                  >
                    onehorizonrealtyph@gmail.com
                  </a>
                </div>
              </div>

              <div className='flex gap-4'>
                <div className='flex-shrink-0'>
                  <div className='flex items-center justify-center h-12 w-12 rounded-lg bg-secondary/10'>
                    <Phone className='h-6 w-6 text-secondary' />
                  </div>
                </div>
                <div>
                  <h3 className='text-lg font-semibold text-foreground mb-1'>Phone</h3>
                  <a href='tel:+639088950035' className='text-muted-foreground hover:text-accent transition-colors'>
                    +63 908 895 0035
                  </a>
                </div>
              </div>

              <div className='flex gap-4'>
                <div className='flex-shrink-0'>
                  <div className='flex items-center justify-center h-12 w-12 rounded-lg bg-accent/10'>
                    <MapPin className='h-6 w-6 text-accent' />
                  </div>
                </div>
                <div>
                  <h3 className='text-lg font-semibold text-foreground mb-1'>Location</h3>
                  <p className='text-muted-foreground'>
                    R. Mapa Street, Mandurriao<br />
                    Iloilo City, Philippines
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.form
            ref={form}
            onSubmit={handleSubmit}
            className='bg-card p-8 md:p-12 rounded-2xl border border-border shadow-lg'
            variants={containerVariants}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
          >
            <motion.div variants={itemVariants} className='space-y-6'>
              <div className='grid grid-cols-2 gap-4'>
                <input
                  type='text'
                  name='firstName'
                  placeholder='First Name'
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  className='px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all'
                />
                <input
                  type='text'
                  name='lastName'
                  placeholder='Last Name'
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  className='px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all'
                />
              </div>

              <input
                type='email'
                name='email'
                placeholder='Email Address'
                value={formData.email}
                onChange={handleChange}
                required
                className='w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all'
              />

              <input
                type='tel'
                name='phone'
                placeholder='+63 9XX XXX XXXX'
                value={formData.phone}
                onChange={handleChange}
                className='w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all'
              />

              <select
                name='unitType'
                value={formData.unitType}
                onChange={handleChange}
                className='w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all appearance-none cursor-pointer'
              >
                <option value=''>Select a unit type</option>
                <option value='SOHO 1 – Studio'>SOHO 1 – Studio</option>
                <option value='SOHO 2 – Studio w/ Balcony'>SOHO 2 – Studio w/ Balcony</option>
                <option value='SOHO 3 – 1-Bedroom'>SOHO 3 – 1-Bedroom</option>
                <option value='SOHO 4 – 1-Bedroom w/ Balcony'>SOHO 4 – 1-Bedroom w/ Balcony</option>
                <option value='SOHO 5 – 2-Bedroom w/ Balcony'>SOHO 5 – 2-Bedroom w/ Balcony</option>
                <option value='Combined Units'>Combined Units</option>
              </select>

              <textarea
                name='message'
                placeholder='Tell us about your requirements or any questions you have...'
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className='w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all resize-none'
              />

              <motion.button
                type='submit'
                disabled={isSubmitting}
                whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(212, 175, 55, 0.3)' }}
                whileTap={{ scale: 0.95 }}
                className='w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed shadow-lg transition-shadow duration-300'
              >
                {isSubmitting ? (
                  <motion.span
                    animate={{ opacity: [1, 0.5, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    Sending...
                  </motion.span>
                ) : (
                  'Send Inquiry'
                )}
              </motion.button>

              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className='p-4 bg-green-50 border border-green-200 rounded-lg text-green-700 text-sm'
                >
                  Thank you! Your inquiry has been sent. We'll contact you soon.
                </motion.div>
              )}

              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className='p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm'
                >
                  There was an error sending your inquiry. Please try again.
                </motion.div>
              )}
            </motion.div>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
