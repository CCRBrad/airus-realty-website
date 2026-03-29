import type { Metadata } from 'next';
import Link from 'next/link';
import Hero from '@/components/Hero';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Why Airus Realty',
  description: 'Discover why buyers and sellers choose Airus Realty — strategic pricing, modern marketing, expert negotiation, and a data-driven approach to real estate.',
};

const differentiators = [
  { icon: '📊', title: 'Strategic Pricing', desc: 'We don\'t just list homes — we position them to win in the market.' },
  { icon: '📸', title: 'Modern Marketing', desc: 'Professional media, digital exposure, and targeted campaigns.' },
  { icon: '🤝', title: 'Negotiation Expertise', desc: 'We structure deals to protect your interests and maximize outcomes.' },
  { icon: '📈', title: 'Data-Driven Approach', desc: 'Decisions based on real market data, not assumptions.' },
  { icon: '⚙️', title: 'Agent Support System', desc: 'Our agents operate with systems, training, and support — not guesswork.' },
];

const processSteps = [
  { num: 1, title: 'Strategy', desc: 'We understand your goals and build a plan tailored to your market and timeline.' },
  { num: 2, title: 'Execution', desc: 'We implement marketing, outreach, and negotiation with precision and expertise.' },
  { num: 3, title: 'Results', desc: 'We focus on strong outcomes, smooth closings, and long-term relationships.' },
];

export default function WhyAirusPage() {
  return (
    <>
      {/* SECTION 1 — HERO */}
      <Hero
        variant="dark"
        title={'Why Work With\nAirus Realty'}
        subtitle="A modern real estate brokerage built around strategy, execution, and results."
        primaryCTA={{ label: 'Find an Agent', href: '/agents' }}
        secondaryCTA={{ label: 'Schedule a Consultation', href: '/contact' }}
      />

      {/* SECTION 2 — CORE VALUE PROPOSITION */}
      <section className={styles.valueSection}>
        <div className="container">
          <div className={styles.valueBox}>
            <div className="divider divider--center" />
            <h2>Real Estate Done With Strategy — Not Guesswork</h2>
            <p>
              We combine market knowledge, pricing strategy, and execution to help clients make smarter real estate decisions. Every interaction is backed by data, experience, and a commitment to your goals.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 3 — WHAT SETS AIRUS APART */}
      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <div className="divider divider--center" />
            <h2>What Sets Airus Apart</h2>
          </div>
          <div className={styles.diffGrid}>
            {differentiators.map((d) => (
              <div key={d.title} className={styles.diffCard}>
                <span className={styles.diffIcon}>{d.icon}</span>
                <h4 className={styles.diffTitle}>{d.title}</h4>
                <p className={styles.diffDesc}>{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4 — BUYER EXPERIENCE */}
      <section className={styles.section}>
        <div className="container">
          <div className={styles.experienceGrid}>
            <div className={styles.experienceText}>
              <div className="divider" />
              <h2>For Buyers</h2>
              <div className={styles.experienceList}>
                <div className={styles.experienceItem}>
                  <span className={styles.experienceCheck}>✓</span>
                  Access to on-market and off-market opportunities
                </div>
                <div className={styles.experienceItem}>
                  <span className={styles.experienceCheck}>✓</span>
                  Guidance through every step of the process
                </div>
                <div className={styles.experienceItem}>
                  <span className={styles.experienceCheck}>✓</span>
                  Competitive offer strategies
                </div>
                <div className={styles.experienceItem}>
                  <span className={styles.experienceCheck}>✓</span>
                  Local market expertise
                </div>
              </div>
              <Link href="/agents" className="btn btn--primary">
                Find a Buyer Agent
              </Link>
            </div>
            <div className={styles.experienceVisual}>
              <span className={styles.experienceVisualIcon}>🏠</span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5 — SELLER EXPERIENCE */}
      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className="container">
          <div className={styles.experienceGrid}>
            <div className={styles.experienceVisual}>
              <span className={styles.experienceVisualIcon}>💰</span>
            </div>
            <div className={styles.experienceText}>
              <div className="divider" />
              <h2>For Sellers</h2>
              <div className={styles.experienceList}>
                <div className={styles.experienceItem}>
                  <span className={styles.experienceCheck}>✓</span>
                  Accurate pricing strategy
                </div>
                <div className={styles.experienceItem}>
                  <span className={styles.experienceCheck}>✓</span>
                  High-quality marketing exposure
                </div>
                <div className={styles.experienceItem}>
                  <span className={styles.experienceCheck}>✓</span>
                  Strong negotiation execution
                </div>
                <div className={styles.experienceItem}>
                  <span className={styles.experienceCheck}>✓</span>
                  End-to-end transaction management
                </div>
              </div>
              <Link href="/sell" className="btn btn--primary">
                Sell With Airus
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6 — PROCESS */}
      <section className={`${styles.section} ${styles.sectionDark}`}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <div className="divider divider--center" />
            <h2>Our Process</h2>
            <p className={styles.sectionSubtitle}>
              A proven approach to help you achieve the best possible outcome.
            </p>
          </div>
          <div className={styles.processGrid}>
            {processSteps.map((step) => (
              <div key={step.num} className={styles.processCard}>
                <span className={styles.processNumber}>{step.num}</span>
                <h3 className={styles.processTitle}>{step.title}</h3>
                <p className={styles.processDesc}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7 — SOCIAL PROOF */}
      <section className={styles.section}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <div className="divider divider--center" />
            <h2>What Clients Say</h2>
          </div>
          <div className={styles.proofPlaceholder}>
            <p>Client testimonials coming soon.</p>
          </div>
          <p className={styles.complianceNote}>
            Individual results may vary. Past performance is not indicative of future outcomes.
          </p>
        </div>
      </section>

      {/* SECTION 8 — TEAM PREVIEW */}
      <section className={`${styles.section} ${styles.sectionAlt} ${styles.teamSection}`}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <div className="divider divider--center" />
            <h2>Work With Experienced Agents</h2>
            <p className={styles.sectionSubtitle}>
              Our team combines local market expertise with strategic thinking to help you win.
            </p>
          </div>
          <Link href="/agents" className="btn btn--primary btn--lg">
            View Our Agents
          </Link>
        </div>
      </section>

      {/* SECTION 9 — FINAL CTA */}
      <section className={styles.finalCta}>
        <div className="container">
          <h2>Ready to Make Your Move?</h2>
          <div className={styles.finalCtaButtons}>
            <Link href="/agents" className="btn btn--gold btn--lg">
              Find an Agent
            </Link>
            <Link href="/contact" className="btn btn--ghost btn--lg">
              Schedule a Consultation
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
