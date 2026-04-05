import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Hero from '@/components/Hero';
import StatsBar from '@/components/StatsBar';
import CTABanner from '@/components/CTABanner';
import { getFeaturedAgents } from '@/data/agents';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Join Airus Realty — Build a Real Estate Business That Actually Grows',
  description: 'Training. Mentorship. Systems. Real support from people who are in the business with you. Explore opportunities at Airus Realty.',
};

const mentorDescriptions: Record<string, string> = {
  'marcus-chen': 'With 8+ years in luxury real estate, Marcus mentors agents on high-value negotiations, client acquisition, and building a pipeline that produces consistently.',
  'sophia-ramirez': 'Sophia specializes in coaching new agents through their first transactions — from lead conversion to closing — with a focus on confidence and client communication.',
  'david-okonkwo': 'David brings 10 years of investment expertise and teaches agents how to think analytically, evaluate deals, and build wealth-focused client relationships.',
};

const timelineColumns = [
  {
    phase: 'First 30 Days',
    items: [
      'Onboarding and training',
      'CRM and pipeline setup',
      'Scripts and structure to guide conversations',
    ],
  },
  {
    phase: '60–90 Days',
    items: [
      'First deals in motion',
      'Confidence in client conversations',
      'Consistent activity and momentum',
    ],
  },
  {
    phase: '6–12 Months',
    items: [
      'Predictable closings',
      'Strong personal brand',
      'A business that continues to grow',
    ],
  },
];

const whatYouGet = [
  { icon: '🎓', title: 'Training & Mentorship', desc: 'Weekly sessions, real deal breakdowns, and guidance that actually helps you close.' },
  { icon: '⚡', title: 'Systems & Tools', desc: 'CRM, automation, and processes designed to keep you organized and efficient.' },
  { icon: '📱', title: 'Marketing Support', desc: 'Help building your brand, creating content, and attracting clients.' },
  { icon: '🤝', title: 'Deal Support', desc: 'Guidance throughout your transactions so nothing falls through the cracks.' },
  { icon: '📈', title: 'Accountability & Growth', desc: 'Structure and leadership that keeps you moving forward.' },
];

const thriveItems = [
  'Want to grow your business',
  'Are open to coaching and mentorship',
  'Want structure and direction',
  'Are serious about closing deals',
];

const notFitItems = [
  'Prefer to work completely on your own',
  'Aren\'t looking to grow or improve',
  'Don\'t want guidance or accountability',
];

export default function JoinPage() {
  const leaders = getFeaturedAgents();

  return (
    <>
      {/* SECTION 1: HERO */}
      <Hero
        variant="dark"
        badge="Join Airus Realty"
        title={'Build a Real Estate Business\nThat Actually Grows'}
        subtitle="Training. Mentorship. Systems. Real support from people who are in the business with you."
        primaryCTA={{ label: 'Explore Opportunities', href: '/contact' }}
        secondaryCTA={{ label: 'Meet the Team', href: '/agents' }}
      />

      {/* SECTION 2: POSITIONING */}
      <section className={styles.positionSection}>
        <div className="container">
          <div className={styles.positionInner}>
            <h2>Most Brokerages Don&apos;t Help You Grow. We Do.</h2>
            <div className={styles.positionBody}>
              <p>
                Most agents enter real estate excited, motivated, and ready to succeed.
              </p>
              <p>
                But what they actually get is little direction, limited support, and no clear path forward.
                At Airus Realty, we built a different kind of brokerage.
                One focused on helping you grow, close deals, and build a business that lasts.
              </p>
            </div>
            <div className={styles.positionBullets}>
              <div className={styles.positionBullet}>
                <span className={styles.bulletCheck}>✓</span>
                Structured training that leads to real closings
              </div>
              <div className={styles.positionBullet}>
                <span className={styles.bulletCheck}>✓</span>
                Hands-on mentorship from experienced agents
              </div>
              <div className={styles.positionBullet}>
                <span className={styles.bulletCheck}>✓</span>
                Systems that simplify your day-to-day business
              </div>
              <div className={styles.positionBullet}>
                <span className={styles.bulletCheck}>✓</span>
                A culture built around growth, not just transactions
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: LEADERSHIP */}
      <section className={styles.leaderSection}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <div className="divider divider--center" />
            <h2>Learn From People Who Actually Produce</h2>
            <p className={styles.sectionSubtitle}>
              You&apos;re not just joining a brokerage. You&apos;re learning from people who are actively in the business and know what it takes to win.
            </p>
          </div>
          <div className={styles.leaderGrid}>
            {leaders.map((agent) => (
              <div key={agent.slug} className={styles.leaderCard}>
                <div className={styles.leaderPhotoWrap}>
                  <Image
                    src={agent.photo}
                    alt={agent.name}
                    width={400}
                    height={400}
                    className={styles.leaderPhoto}
                  />
                </div>
                <div className={styles.leaderInfo}>
                  <h3 className={styles.leaderName}>{agent.name}</h3>
                  <p className={styles.leaderTitle}>{agent.title}</p>
                  <p className={styles.leaderDesc}>
                    {mentorDescriptions[agent.slug] || agent.bio.slice(0, 160) + '...'}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: TRANSFORMATION — FIRST 90 DAYS */}
      <section className={styles.timelineSection}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <div className="divider divider--center" />
            <h2>What Your First 90 Days Could Look Like</h2>
          </div>
          <div className={styles.timelineGrid}>
            {timelineColumns.map((col, i) => (
              <div key={i} className={styles.timelineCol}>
                <div className={styles.timelinePhase}>{col.phase}</div>
                <ul className={styles.timelineList}>
                  {col.items.map((item, j) => (
                    <li key={j} className={styles.timelineItem}>
                      <span className={styles.bulletCheck}>✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: WHAT YOU GET */}
      <section className={styles.getSection}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <div className="divider divider--center" />
            <h2>Everything You Need to Win</h2>
          </div>
          <div className={styles.getGrid}>
            {whatYouGet.map((item, i) => (
              <div key={i} className={styles.getCard}>
                <span className={styles.getIcon}>{item.icon}</span>
                <h3 className={styles.getTitle}>{item.title}</h3>
                <p className={styles.getDesc}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: PROOF — STATS */}
      <StatsBar
        stats={[
          { value: '200+', label: 'Transactions Closed' },
          { value: '3×', label: 'Agent Growth' },
          { value: '45%', label: 'Production Increase' },
        ]}
        variant="dark"
        disclaimer="Based on internal company data"
      />

      {/* SECTION 7: WHO THIS IS FOR */}
      <section className={styles.fitSection}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <div className="divider divider--center" />
            <h2>Is Airus Right for You?</h2>
          </div>
          <div className={styles.fitGrid}>
            <div className={styles.fitCol}>
              <h3 className={styles.fitColTitle}>
                <span className={styles.fitIconGood}>✓</span>
                You&apos;ll Thrive Here If You:
              </h3>
              <ul className={styles.fitList}>
                {thriveItems.map((item, i) => (
                  <li key={i} className={styles.fitItem}>
                    <span className={styles.fitCheckGood}>✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className={`${styles.fitCol} ${styles.fitColNot}`}>
              <h3 className={styles.fitColTitle}>
                <span className={styles.fitIconNot}>✕</span>
                This May Not Be the Right Fit If You:
              </h3>
              <ul className={styles.fitList}>
                {notFitItems.map((item, i) => (
                  <li key={i} className={styles.fitItem}>
                    <span className={styles.fitCheckNot}>✕</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 8: FINAL CTA */}
      <CTABanner
        heading="You Don't Need to Commit. Just See What's Possible."
        description="Have a conversation, learn how we operate, and decide if it's the right fit for you."
        primaryLabel="Talk to Us"
        primaryHref="/contact"
        secondaryLabel="Meet the Team"
        secondaryHref="/agents"
        variant="blue"
      />

      {/* STICKY CTA (Mobile + Desktop) */}
      <div className={styles.stickyCta}>
        <Link href="/contact" className={styles.stickyBtn}>
          Explore Opportunities
        </Link>
      </div>
    </>
  );
}
