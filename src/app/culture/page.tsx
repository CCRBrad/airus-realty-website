import type { Metadata } from 'next';
import Link from 'next/link';
import Hero from '@/components/Hero';
import { cultureSubpages } from '@/data/cultureData';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Culture — Airus Realty',
  description: 'A brokerage built for growth. Discover the training, support, and systems that help Airus agents build successful real estate businesses.',
};

const beliefs = [
  { icon: '🏢', text: 'Real estate is a business — and should be treated like one' },
  { icon: '🎓', text: 'Agents should be trained, not left to figure it out' },
  { icon: '⚙️', text: 'Growth comes from systems and execution' },
  { icon: '📅', text: 'Consistency beats motivation' },
  { icon: '🛡️', text: 'Support creates results' },
];

const differentiators = [
  { icon: '🎓', title: 'Structured Training', desc: 'Clear systems and processes for agents at every level.' },
  { icon: '🛡️', title: 'Real Support', desc: 'Hands-on guidance, not just access to tools.' },
  { icon: '📸', title: 'Modern Approach', desc: 'Marketing, content, and strategy built for today\'s market.' },
  { icon: '📈', title: 'Business-Focused', desc: 'We help agents build businesses, not just close deals.' },
];

const thrives = [
  'New agents who want structure',
  'Agents stuck at the next level',
  'Agents who want systems and accountability',
  'Agents who want to grow long-term',
];

const ninetyDays = [
  { badge: 'Week 1–2', title: 'Onboarding', desc: 'Orientation, systems setup, CRM, and first outreach activities.' },
  { badge: 'Month 1', title: 'Foundation', desc: 'Prospecting routines, open houses, shadow sessions, and skill building.' },
  { badge: 'Month 2', title: 'Pipeline', desc: 'Lead generation, listing presentations, and building your pipeline.' },
  { badge: 'Month 3', title: 'First Deals', desc: 'Signed clients, submitted offers, and celebrating progress.' },
];

const schedule = [
  { time: '8:00 AM', label: 'Morning planning & goal review' },
  { time: '9:00 AM', label: 'Prospecting & lead generation block' },
  { time: '11:00 AM', label: 'Client appointments & showings' },
  { time: '1:00 PM', label: 'Lunch & industry learning' },
  { time: '2:00 PM', label: 'Follow-up calls & CRM updates' },
  { time: '3:30 PM', label: 'Training session or role-play' },
  { time: '5:00 PM', label: 'End-of-day review & next-day prep' },
];

export default function CulturePage() {
  return (
    <>
      {/* SECTION 1 — HERO */}
      <Hero
        variant="dark"
        title={'A Brokerage Built\nfor Growth'}
        subtitle="Airus Realty is designed for agents who want structure, support, and a clear path to building a successful real estate business."
        primaryCTA={{ label: 'Join Airus', href: '/join' }}
        secondaryCTA={{ label: 'Schedule a Call', href: '/contact' }}
      />

      {/* SECTION 2 — WHAT WE BELIEVE */}
      <section className={styles.section}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <div className="divider divider--center" />
            <h2>What We Believe</h2>
          </div>
          <div className={styles.believeGrid}>
            {beliefs.map((b) => (
              <div key={b.text} className={styles.believeItem}>
                <span className={styles.believeIcon}>{b.icon}</span>
                {b.text}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3 — WHAT MAKES AIRUS DIFFERENT */}
      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <div className="divider divider--center" />
            <h2>What Makes Airus Different</h2>
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

      {/* SECTION 4 — WHO THRIVES AT AIRUS */}
      <section className={`${styles.section} ${styles.sectionDark}`}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <div className="divider divider--center" />
            <h2>Who Thrives at Airus</h2>
            <p className={styles.sectionSubtitle}>
              If any of these describe you, Airus might be the right fit.
            </p>
          </div>
          <div className={styles.thrivesGrid}>
            {thrives.map((t) => (
              <div key={t} className={styles.thrivesCard}>
                <h4>{t}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5 — CULTURE PILLARS (ICON GRID) */}
      <section className={styles.section}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <div className="divider divider--center" />
            <h2>Our Culture in Action</h2>
            <p className={styles.sectionSubtitle}>
              Each pillar of our culture has depth. Click to explore how it works at Airus.
            </p>
          </div>
          <div className={styles.pillarGrid}>
            {cultureSubpages.map((pillar) => (
              <Link
                key={pillar.slug}
                href={`/culture/${pillar.slug}`}
                className={styles.pillarCard}
              >
                <span className={styles.pillarIcon}>{pillar.icon}</span>
                <h4 className={styles.pillarTitle}>{pillar.title}</h4>
                <p className={styles.pillarDesc}>{pillar.shortDesc}</p>
                <span className={styles.pillarArrow}>Explore →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6 — DAY IN THE LIFE */}
      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className="container">
          <div className={styles.dayGrid}>
            <div className={styles.dayText}>
              <div className="divider" />
              <h2>What It Looks Like to Be an Airus Agent</h2>
              <p>
                Our agents follow structured daily routines that prioritize lead generation, client service, and professional development.
              </p>
              <div className={styles.dayList}>
                <div className={styles.dayItem}>
                  <span className={styles.dayCheck}>✓</span>
                  Structured daily schedule with time-blocking
                </div>
                <div className={styles.dayItem}>
                  <span className={styles.dayCheck}>✓</span>
                  Dedicated lead generation time each morning
                </div>
                <div className={styles.dayItem}>
                  <span className={styles.dayCheck}>✓</span>
                  Ongoing training and skill development
                </div>
                <div className={styles.dayItem}>
                  <span className={styles.dayCheck}>✓</span>
                  Support access whenever you need it
                </div>
              </div>
            </div>
            <div className={styles.dayVisual}>
              <h3 style={{ marginBottom: 'var(--space-6)', color: 'var(--color-gold)', fontSize: 'var(--font-size-lg)' }}>
                Sample Agent Day
              </h3>
              <div className={styles.daySchedule}>
                {schedule.map((item) => (
                  <div key={item.time} className={styles.scheduleItem}>
                    <span className={styles.scheduleTime}>{item.time}</span>
                    <span className={styles.scheduleLabel}>{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7 — FIRST 90 DAYS */}
      <section className={styles.ninetySection}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <div className="divider divider--center" />
            <h2>What You Can Expect in Your First 90 Days</h2>
            <p className={styles.sectionSubtitle}>
              A structured plan to get you from onboarding to your first closings.
            </p>
          </div>
          <div className={styles.ninetyGrid}>
            {ninetyDays.map((item) => (
              <div key={item.badge} className={styles.ninetyCard}>
                <span className={styles.ninetyBadge}>{item.badge}</span>
                <h4 className={styles.ninetyTitle}>{item.title}</h4>
                <p className={styles.ninetyDesc}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 8 — SOCIAL PROOF */}
      <section className={`${styles.section} ${styles.sectionDark}`}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <div className="divider divider--center" />
            <h2>Built for Real Growth</h2>
          </div>
          <div className={styles.proofPlaceholder}>
            <p>Agent testimonials coming soon.</p>
          </div>
        </div>
      </section>

      {/* SECTION 9 — FINAL CTA */}
      <section className={styles.finalCta}>
        <div className="container">
          <h2>Ready to Build Your Business?</h2>
          <div className={styles.finalCtaButtons}>
            <Link href="/join" className="btn btn--gold btn--lg">
              Join Airus
            </Link>
            <Link href="/contact" className="btn btn--secondary btn--lg">
              Talk to Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
