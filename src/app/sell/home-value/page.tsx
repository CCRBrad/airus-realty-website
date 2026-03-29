'use client';

import { useState, type FormEvent } from 'react';
import Link from 'next/link';
import styles from './page.module.css';

const timelineOptions = [
  'As soon as possible',
  'Within 1–3 months',
  'Within 3–6 months',
  '6+ months',
  'Just exploring',
];

export default function HomeValuePage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <>
      {/* Hero */}
      <section className="section--dark" style={{ padding: 'var(--space-20) 0 var(--space-12)' }}>
        <div className="container text-center">
          <span className="badge" style={{ marginBottom: 'var(--space-4)', display: 'inline-block' }}>Home Valuation</span>
          <h1 className="text-white">Get Your Home Value</h1>
          <p className="text-white" style={{ fontSize: 'var(--font-size-lg)', opacity: 0.85, maxWidth: '640px', margin: '0 auto' }}>
            Receive a personalized home value estimate based on your property and local market data.
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className={styles.formSection}>
        <div className="container">
          <div className={styles.formGrid}>
            {/* Info Column */}
            <div className={styles.infoColumn}>
              <div>
                <h2 className={styles.infoTitle}>Know What Your Home Is Worth</h2>
                <p className={styles.infoSubtitle}>
                  Fill out the form and one of our experienced agents will prepare a personalized home value estimate based on your property details and current market conditions.
                </p>
              </div>

              <div className={styles.benefitList}>
                <div className={styles.benefitItem}>
                  <div className={styles.benefitIcon}>📊</div>
                  <div className={styles.benefitText}>
                    <h4>Market-Based Analysis</h4>
                    <p>We analyze comparable sales, current inventory, and local trends to provide an accurate estimate.</p>
                  </div>
                </div>
                <div className={styles.benefitItem}>
                  <div className={styles.benefitIcon}>🏡</div>
                  <div className={styles.benefitText}>
                    <h4>Property-Specific</h4>
                    <p>Your estimate accounts for your home&apos;s unique features, upgrades, and condition.</p>
                  </div>
                </div>
                <div className={styles.benefitItem}>
                  <div className={styles.benefitIcon}>👤</div>
                  <div className={styles.benefitText}>
                    <h4>Agent-Prepared</h4>
                    <p>A licensed agent reviews your information and prepares a personalized estimate — not an algorithm.</p>
                  </div>
                </div>
                <div className={styles.benefitItem}>
                  <div className={styles.benefitIcon}>🔒</div>
                  <div className={styles.benefitText}>
                    <h4>No Obligation</h4>
                    <p>This is a free, no-commitment service. Get your estimate and decide what&apos;s next on your terms.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form Column */}
            <div>
              {submitted ? (
                <div className={styles.successCard}>
                  <span className={styles.successIcon}>✅</span>
                  <h3 className={styles.successTitle}>Request Received!</h3>
                  <p className={styles.successText}>
                    Thank you! One of our agents will review your information and provide a personalized home value estimate shortly.
                  </p>
                  <Link href="/sell" className="btn btn--primary btn--lg">
                    Back to Sell
                  </Link>
                </div>
              ) : (
                <form className={styles.formCard} onSubmit={handleSubmit}>
                  <h3 className={styles.formCardTitle}>Request My Home Value</h3>

                  {/* Name */}
                  <div className={styles.formRow}>
                    <div className="form-group">
                      <label htmlFor="fullName" className="form-label">Full Name *</label>
                      <input type="text" id="fullName" name="fullName" className="form-input" placeholder="John Smith" required />
                    </div>
                  </div>

                  {/* Email + Phone */}
                  <div className={`${styles.formRow} ${styles.formRowDouble}`}>
                    <div className="form-group">
                      <label htmlFor="email" className="form-label">Email *</label>
                      <input type="email" id="email" name="email" className="form-input" placeholder="john@example.com" required />
                    </div>
                    <div className="form-group">
                      <label htmlFor="phone" className="form-label">Phone *</label>
                      <input type="tel" id="phone" name="phone" className="form-input" placeholder="(555) 123-4567" required />
                    </div>
                  </div>

                  {/* Address */}
                  <div className={styles.formRow}>
                    <div className="form-group">
                      <label htmlFor="address" className="form-label">Property Address *</label>
                      <input type="text" id="address" name="address" className="form-input" placeholder="123 Main Street" required />
                    </div>
                  </div>

                  {/* City, State, Zip */}
                  <div className={`${styles.formRow} ${styles.formRowDouble}`}>
                    <div className="form-group">
                      <label htmlFor="city" className="form-label">City *</label>
                      <input type="text" id="city" name="city" className="form-input" placeholder="Los Angeles" required />
                    </div>
                    <div className="form-group">
                      <label htmlFor="state" className="form-label">State *</label>
                      <select id="state" name="state" className="form-select" required defaultValue="">
                        <option value="" disabled>Select State</option>
                        <option value="CA">California</option>
                        <option value="GA">Georgia</option>
                      </select>
                    </div>
                  </div>

                  <div className={`${styles.formRow} ${styles.formRowDouble}`}>
                    <div className="form-group">
                      <label htmlFor="zip" className="form-label">Zip Code *</label>
                      <input type="text" id="zip" name="zip" className="form-input" placeholder="90001" required />
                    </div>
                    <div className="form-group">
                      <label htmlFor="timeline" className="form-label">Timeline to Sell</label>
                      <select id="timeline" name="timeline" className="form-select" defaultValue="">
                        <option value="" disabled>Select Timeline</option>
                        {timelineOptions.map((opt) => (
                          <option key={opt} value={opt}>{opt}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Notes */}
                  <div className={styles.formRow}>
                    <div className="form-group">
                      <label htmlFor="notes" className="form-label">Additional Notes</label>
                      <textarea id="notes" name="notes" className="form-textarea" placeholder="Tell us about your property — upgrades, features, or anything relevant..." rows={4} />
                    </div>
                  </div>

                  <button type="submit" className={`btn btn--gold ${styles.submitBtn}`}>
                    Request My Home Value
                  </button>

                  <div className={styles.disclaimer}>
                    <p>
                      ⚖️ Home value estimates are for informational purposes only and are not appraisals or guarantees of sale price. Actual market value may vary based on property condition, market conditions, and other factors. Airus Realty — California DRE License #02329021.
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
