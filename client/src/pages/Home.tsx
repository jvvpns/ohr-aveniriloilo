import Navbar from '@/components/Navbar';
import ScrollExpandHero from '@/components/ScrollExpandHero';
import AboutSection from '@/components/AboutSection';
import SohoConcept from '@/components/SohoConcept';
import DeveloperSection from '@/components/DeveloperSection';
import UnitShowcase from '@/components/UnitShowcase';
import AmenitiesGallery from '@/components/AmenitiesGallery';
import LocationAmenitiesEnhanced from '@/components/LocationAmenitiesEnhanced';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';
import PrivacyModal from '@/components/PrivacyModal';
import { useState } from 'react';

export default function Home() {
  const [showPrivacy, setShowPrivacy] = useState(false);
  
  // YouTube video URL for the hero section
  const heroVideoUrl = 'https://www.youtube.com/embed/EaB_1R1scpE';
  const heroBgUrl = '/assets/perspectives/day_1.jpg';

  return (
    <div className='min-h-screen flex flex-col bg-background'>
      <Navbar />
      
      {/* Hero Section with Scroll Expansion */}
      {/* ... (existing ScrollExpandHero) */}

      <ScrollExpandHero
        mediaType='video'
        mediaSrc={heroVideoUrl}
        bgImageSrc={heroBgUrl}
        title='The Future of Work-Life in Iloilo'
        subtitle='Experience premium SOHO living with 100% business-grade power'
        scrollToExpand='Scroll to Explore'
      />

      {/* About Section */}
      <section id='about'>
        <AboutSection />
      </section>

      {/* SOHO Concept Section */}
      <section id='concept'>
        <SohoConcept />
      </section>

      {/* Developer Section */}
      <section id='developer'>
        <DeveloperSection />
      </section>

      {/* Unit Showcase Section */}
      <section id='units'>
        <UnitShowcase />
      </section>

      {/* Amenities Gallery Section */}
      <section id='amenities-gallery'>
        <AmenitiesGallery />
      </section>

      {/* Location & Amenities Section */}
      <section id='location'>
        <LocationAmenitiesEnhanced />
      </section>

      {/* Contact Form Section */}
      <section id='inquire'>
        <ContactForm />
      </section>

      {/* Footer */}
      <Footer onOpenPrivacy={() => setShowPrivacy(true)} />

      {/* Privacy Modal */}
      <PrivacyModal isOpen={showPrivacy} onClose={() => setShowPrivacy(false)} />
    </div>
  );
}
