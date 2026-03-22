import type { Metadata } from 'next';
import Hero from '@/components/Hero';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with Airus Realty. Schedule a call, ask a question, or learn more about joining our brokerage.',
};

export default function ContactPage() {
  return (
    <>
      <Hero
        variant="dark"
        title="Talk to Us"
        subtitle="Whether you're an agent exploring Airus or a buyer/seller with questions — we'd love to hear from you."
      />

      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 'var(--space-8)', maxWidth: '900px', margin: '0 auto' }}>
            {/* Contact Form */}
            <div style={{
              background: 'var(--color-white)',
              borderRadius: 'var(--radius-xl)',
              padding: 'var(--space-10)',
              boxShadow: 'var(--shadow-lg)',
              border: '1px solid var(--color-gray-200)',
            }}>
              <h2 style={{ textAlign: 'center', marginBottom: 'var(--space-2)' }}>Send Us a Message</h2>
              <p className="text-muted" style={{ textAlign: 'center', marginBottom: 'var(--space-8)' }}>
                Fill out the form and we&apos;ll get back to you within one business day.
              </p>
              <form>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-5)' }}>
                  <div className="form-group">
                    <label className="form-label" htmlFor="contact-first">First Name</label>
                    <input className="form-input" id="contact-first" type="text" placeholder="First name" required />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="contact-last">Last Name</label>
                    <input className="form-input" id="contact-last" type="text" placeholder="Last name" required />
                  </div>
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="contact-email">Email</label>
                  <input className="form-input" id="contact-email" type="email" placeholder="you@email.com" required />
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="contact-phone">Phone</label>
                  <input className="form-input" id="contact-phone" type="tel" placeholder="(555) 000-0000" />
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="contact-type">I am a...</label>
                  <select className="form-select" id="contact-type">
                    <option value="">Select one</option>
                    <option value="agent">Real Estate Agent</option>
                    <option value="buyer">Home Buyer</option>
                    <option value="seller">Home Seller</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="contact-message">Message</label>
                  <textarea className="form-textarea" id="contact-message" placeholder="How can we help?" rows={5} />
                </div>
                <button type="submit" className="btn btn--primary btn--lg btn--full">
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: 'var(--space-6)',
              textAlign: 'center',
            }}>
              <div className="card" style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '32px', marginBottom: 'var(--space-3)' }}>📧</div>
                <h4>Email</h4>
                <p className="text-muted text-sm">info@airusrealty.com</p>
              </div>
              <div className="card" style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '32px', marginBottom: 'var(--space-3)' }}>📍</div>
                <h4>Location</h4>
                <p className="text-muted text-sm">California</p>
              </div>
              <div className="card" style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '32px', marginBottom: 'var(--space-3)' }}>📋</div>
                <h4>License</h4>
                <p className="text-muted text-sm">DRE #02329021</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
