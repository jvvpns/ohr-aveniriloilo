import { motion, AnimatePresence } from 'framer-motion';
import { X, Shield, Mail } from 'lucide-react';

interface PrivacyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const PrivacyModal = ({ isOpen, onClose }: PrivacyModalProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className='fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8'>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className='absolute inset-0 bg-background/80 backdrop-blur-sm'
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className='relative w-full max-w-4xl max-h-[85vh] bg-card border border-border rounded-[2rem] shadow-2xl overflow-hidden flex flex-col'
          >
            {/* Header */}
            <div className='p-6 md:p-8 border-b border-border flex items-center justify-between bg-accent/5'>
              <div className='flex items-center gap-3'>
                <div className='p-2 bg-accent/10 rounded-lg'>
                  <Shield className='w-6 h-6 text-accent' />
                </div>
                <div>
                  <h2 className='text-2xl font-serif font-bold text-foreground'>Privacy Policy</h2>
                  <p className='text-xs text-muted-foreground uppercase tracking-widest'>Effective: February 01, 2026</p>
                </div>
              </div>
              <button
                onClick={onClose}
                className='p-2 hover:bg-accent/10 rounded-full transition-colors group'
              >
                <X className='w-6 h-6 text-muted-foreground group-hover:text-accent' />
              </button>
            </div>

            {/* Scrollable Body */}
            <div className='flex-1 overflow-y-auto p-6 md:p-10 space-y-8 custom-scrollbar'>
              <section className='space-y-4'>
                <p className='text-muted-foreground leading-relaxed'>
                  This Privacy Policy explains how AvenirIloilo.com (“we,” “us,” or “our”) collects, uses, shares, stores, and protects personal information when you visit or interact with AvenirIloilo.com.
                </p>
                <p className='text-muted-foreground leading-relaxed'>
                  We respect your privacy and comply with applicable data protection laws, including the Philippines Data Privacy Act of 2012 (RA 10173) and related regulations.
                </p>
              </section>

              <div className='grid gap-8'>
                <div className='space-y-3'>
                  <h3 className='text-lg font-bold text-foreground flex items-center gap-2'>
                    <span className='text-accent'>1.</span> Information We Collect
                  </h3>
                  <div className='pl-6 space-y-4 text-sm text-muted-foreground leading-relaxed'>
                    <p><strong className='text-foreground'>A. Information you provide:</strong> Full name, email, phone number, location, property interests, and any messages or voluntary submissions.</p>
                    <p><strong className='text-foreground'>B. Information collected automatically:</strong> IP address, device identifiers, browser type, pages viewed, time spent, and site interactions.</p>
                    <p><strong className='text-foreground'>C. Cookies and similar technologies:</strong> Used to maintain Website functionality, understand visitor usage, and measure performance.</p>
                  </div>
                </div>

                <div className='space-y-3'>
                  <h3 className='text-lg font-bold text-foreground flex items-center gap-2'>
                    <span className='text-accent'>2.</span> How We Use Your Information
                  </h3>
                  <p className='pl-6 text-sm text-muted-foreground leading-relaxed'>
                    We use your data to respond to inquiries, provide property details, send updates or promotions (if opted in), improve Website performance, prevent fraud, and comply with legal obligations.
                  </p>
                </div>

                <div className='space-y-3'>
                  <h3 className='text-lg font-bold text-foreground flex items-center gap-2'>
                    <span className='text-accent'>3.</span> Legal Bases for Processing
                  </h3>
                  <p className='pl-6 text-sm text-muted-foreground leading-relaxed'>
                    Processing is based on Consent, Contractual steps (responding to requests), Legitimate interests (securing/improving the site), and Legal obligations under RA 10173.
                  </p>
                </div>

                <div className='space-y-3'>
                  <h3 className='text-lg font-bold text-foreground flex items-center gap-2'>
                    <span className='text-accent'>4.</span> How We Share Your Information
                  </h3>
                  <p className='pl-6 text-sm text-muted-foreground leading-relaxed'>
                    We do not sell your data. Sharing only occurs with service providers (hosting, CRM), professional advisers, or property partners when relevant to your inquiry or required by law.
                  </p>
                </div>

                <div className='space-y-3'>
                  <h3 className='text-lg font-bold text-foreground flex items-center gap-2'>
                    <span className='text-accent'>5.</span> International Data Transfers
                  </h3>
                  <p className='pl-6 text-sm text-muted-foreground leading-relaxed'>
                    While some providers may store data abroad, we take reasonable steps to ensure appropriate safeguards exist to protect your information.
                  </p>
                </div>

                <div className='space-y-3'>
                  <h3 className='text-lg font-bold text-foreground flex items-center gap-2'>
                    <span className='text-accent'>6.</span> Data Retention
                  </h3>
                  <p className='pl-6 text-sm text-muted-foreground leading-relaxed'>
                    Information is kept only as long as necessary for business purposes, responding to inquiries, or technical record-keeping and legal compliance.
                  </p>
                </div>

                <div className='space-y-3'>
                  <h3 className='text-lg font-bold text-foreground flex items-center gap-2'>
                    <span className='text-accent'>7.</span> Your Rights (Data Subject Rights)
                  </h3>
                  <p className='pl-6 text-sm text-muted-foreground leading-relaxed'>
                    You have the right to access, correct, delete, or object to the processing of your data, as well as the right to data portability and filing complaints with the National Privacy Commission (NPC).
                  </p>
                </div>

                <div className='space-y-3'>
                  <h3 className='text-lg font-bold text-foreground flex items-center gap-2'>
                    <span className='text-accent'>8.</span> Marketing Messages & Opt-Out
                  </h3>
                  <p className='pl-6 text-sm text-muted-foreground leading-relaxed'>
                    You can unsubscribe from marketing at any time via the link in our emails or by contacting us directly.
                  </p>
                </div>

                <div className='space-y-3'>
                  <h3 className='text-lg font-bold text-foreground flex items-center gap-2'>
                    <span className='text-accent'>9.</span> Security Measures
                  </h3>
                  <p className='pl-6 text-sm text-muted-foreground leading-relaxed'>
                    We use administrative and technical safeguards to protect your data, though no system can be guaranteed 100% secure.
                  </p>
                </div>

                <div className='space-y-3'>
                  <h3 className='text-lg font-bold text-foreground flex items-center gap-2'>
                    <span className='text-accent'>10.</span> Third-Party Links
                  </h3>
                  <p className='pl-6 text-sm text-muted-foreground leading-relaxed'>
                    We are not responsible for the privacy practices of third-party sites linked from our website (e.g., social media or embedded maps).
                  </p>
                </div>

                <div className='space-y-3'>
                  <h3 className='text-lg font-bold text-foreground flex items-center gap-2'>
                    <span className='text-accent'>11.</span> Children’s Privacy
                  </h3>
                  <p className='pl-6 text-sm text-muted-foreground leading-relaxed'>
                    This site is not intended for users under 18. We do not knowingly collect personal data from minors.
                  </p>
                </div>

                <div className='space-y-3 p-6 bg-accent/5 rounded-2xl border border-accent/20'>
                  <h3 className='text-lg font-bold text-foreground flex items-center gap-2'>
                    <span className='text-accent'>12.</span> Contact Us
                  </h3>
                  <div className='pl-6 space-y-2'>
                    <p className='text-sm text-foreground font-semibold'>AvenirIloilo.com</p>
                    <a href='mailto:onehorizonrealtyph@gmail.com' className='flex items-center gap-2 text-sm text-accent hover:underline'>
                      <Mail className='w-4 h-4' />
                      onehorizonrealtyph@gmail.com
                    </a>
                  </div>
                </div>

                <div className='space-y-3'>
                  <h3 className='text-lg font-bold text-foreground flex items-center gap-2'>
                    <span className='text-accent'>13.</span> Changes to This Policy
                  </h3>
                  <p className='pl-6 text-sm text-muted-foreground leading-relaxed'>
                    We may update this policy periodically. Continued site use after changes constitutes acceptance of the updated terms.
                  </p>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className='p-8 md:p-10 bg-background border-t border-border flex justify-center mt-auto'>
              <button
                onClick={onClose}
                className='inline-flex items-center justify-center min-w-[200px] bg-accent text-ohr-navy px-12 py-4 rounded-xl font-bold hover:opacity-90 transition-all duration-300 shadow-xl shadow-accent/20 cursor-pointer'
              >
                Close & Return
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default PrivacyModal;
