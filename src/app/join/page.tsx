import type { Metadata } from 'next';
import Link from 'next/link';
import Hero from '@/components/Hero';
import FAQ from '@/components/FAQ';
import CTABanner from '@/components/CTABanner';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Join Airus Realty',
  description: 'Join a modern real estate brokerage built for agents who want to grow faster and close more. Training, leads, marketing, support, and systems.',
};

const whoCards = [
  { icon: '🌱', title: 'New Agents', desc: 'Just got your license? We\'ll give you the training, mentorship, and leads to get your career started right.' },
  { icon: '📈', title: 'Producing Agents', desc: 'Already closing deals? Plug into our systems, marketing, and technology to scale your production.' },
  { icon: '👥', title: 'Team Builders', desc: 'Ready to build a team? Our platform gives you the tools, training, and support to grow and lead.' },
];

const getItems = [
  { icon: '🎓', label: 'Training', desc: 'Live coaching, scripts, and systems that lead to closings' },
  { icon: '🎯', label: 'Leads', desc: 'Built-in lead generation systems and conversion tools' },
  { icon: '📱', label: 'Marketing', desc: 'Personal branding, social media, and listing marketing done for you' },
  { icon: '🤝', label: 'Support', desc: 'Transaction coordination, mentorship, and accountability' },
  { icon: '⚡', label: 'Systems', desc: 'CRM, automation, playbooks, and everything you need in one place' },
];

const growthSteps = [
  { number: 1, label: 'First Deal', desc: 'Close your first transaction' },
  { number: 2, label: '5 Deals', desc: 'Build consistent momentum' },
  { number: 3, label: '10 Deals', desc: 'Scale your production' },
  { number: 4, label: 'Build a Team', desc: 'Lead and grow others' },
];

const faqItems = [
  { question: 'What are the commission splits?', answer: 'Our commission structure is competitive and designed to reward production. We offer flexible split options that improve as your production grows. Schedule a confidential call to discuss specifics.' },
  { question: 'Are there monthly fees?', answer: 'We keep our fee structure simple and transparent. There are no hidden costs. We\'ll walk you through everything during your confidential call.' },
  { question: 'Do you provide leads?', answer: 'Yes. We provide built-in lead generation systems including online leads, CRM tools, and conversion training. Our agents have access to multiple lead sources and the training to convert them.' },
  { question: 'What kind of support do you offer?', answer: 'Full support — including transaction coordination, marketing assistance, technology setup, one-on-one coaching, group training, and mentorship programs. New agents get extra hands-on guidance.' },
  { question: 'What training programs are available?', answer: 'We offer comprehensive training including new agent bootcamps, advanced listing strategies, buyer conversion systems, social media marketing, scripts and objection handling, and ongoing coaching.' },
  { question: 'Can I bring my current listings?', answer: 'Absolutely. You can transfer your current listings and pipeline when you join. We\'ll help make the transition seamless.' },
];

export default function JoinPage() {
  return (
    <>
      {/* Hero */}
      <Hero
        variant="dark"
        badge="Airus Realty"
        title="Join Airus Realty"
        subtitle="Built for agents who want to grow faster and close more."
        primaryCTA={{ label: 'Schedule a Confidential Call', href: '/contact' }}
        secondaryCTA={{ label: 'See What You Get', href: '#what-you-get' }}
      />

      {/* Who This Is For */}
      <section className={styles.whoSection}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <div className="divider divider--center" />
            <h2>Who This Is For</h2>
          </div>
          <div className={styles.whoGrid}>
            {whoCards.map((card, i) => (
              <div key={i} className={styles.whoCard}>
                <div className={styles.whoIcon}>{card.icon}</div>
                <h3 className={styles.whoTitle}>{card.title}</h3>
                <p className={styles.whoDesc}>{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className={styles.getSection} id="what-you-get">
        <div className="container">
          <div className={styles.sectionHeader}>
            <div className="divider divider--center" />
            <h2>What You Get</h2>
          </div>
          <div className={styles.getGrid}>
            {getItems.map((item, i) => (
              <div key={i} className={styles.getItem}>
                <span className={styles.getIcon}>{item.icon}</span>
                <div>
                  <div className={styles.getLabel}>{item.label}</div>
                  <div className={styles.getDesc}>{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Growth Path */}
      <section className={styles.growthSection}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <div className="divider divider--center" />
            <h2>Your Growth Path</h2>
            <p className={styles.sectionSubtitle}>
              A clear trajectory from your first deal to building your own team.
            </p>
          </div>
          <div className={styles.growthPath}>
            {growthSteps.map((step, i) => (
              <div key={i} className={styles.growthStep}>
                {i > 0 && <span className={styles.growthArrow}>→</span>}
                <div className={styles.growthNumber}>{step.number}</div>
                <div className={styles.growthLabel}>{step.label}</div>
                <div className={styles.growthDesc}>{step.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQ
        title="Frequently Asked Questions"
        subtitle="Answers to common questions about joining Airus Realty."
        items={faqItems}
      />

      {/* Lead Form */}
      <section className={styles.formSection}>
        <div className="container">
          <div className={styles.formCard}>
            <h3 className={styles.formTitle}>Let&apos;s Talk</h3>
            <p className={styles.formSub}>Fill out the form and we&apos;ll schedule your confidential call.</p>
            <form>
              <div className="form-group">
                <label className="form-label" htmlFor="join-name">Full Name</label>
                <input className="form-input" id="join-name" type="text" placeholder="Your name" required />
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="join-email">Email</label>
                <input className="form-input" id="join-email" type="email" placeholder="you@email.com" required />
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="join-phone">Phone</label>
                <input className="form-input" id="join-phone" type="tel" placeholder="(555) 000-0000" required />
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="join-experience">Experience Level</label>
                <select className="form-select" id="join-experience" required>
                  <option value="">Select your experience</option>
                  <option value="new">New Agent (0-1 years)</option>
                  <option value="intermediate">Producing Agent (1-5 years)</option>
                  <option value="experienced">Experienced Agent (5+ years)</option>
                  <option value="team">Team Builder</option>
                </select>
              </div>
              <button type="submit" className="btn btn--gold btn--lg btn--full" style={{ marginTop: 'var(--space-4)' }}>
                Schedule a Confidential Call
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTABanner
        heading="Ready to Grow?"
        description="Join the brokerage that invests in your success — with real training, real tools, and real results."
        primaryLabel="Join Airus"
        primaryHref="/contact"
        secondaryLabel="Explore the Platform"
        secondaryHref="/training"
        variant="blue"
      />
    </>
  );
}
