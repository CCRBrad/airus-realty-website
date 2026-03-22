import Link from 'next/link';
import Hero from '@/components/Hero';
import FeatureCards from '@/components/FeatureCards';
import StatsBar from '@/components/StatsBar';
import ProcessSteps from '@/components/ProcessSteps';
import CTABanner from '@/components/CTABanner';
import styles from './page.module.css';

/* --------------------------------------------------------
   DATA
   -------------------------------------------------------- */

const agentStats = [
  { value: '200+', label: 'Transactions Closed' },
  { value: '3×', label: 'Agent Growth' },
  { value: '45%', label: 'Production Increase' },
];

const platformModules = [
  { icon: '📊', title: 'CRM + Lead Pipeline System', desc: 'Manage contacts, track leads, and automate follow-up so nothing falls through the cracks.' },
  { icon: '🏡', title: 'Listing Marketing Engine', desc: 'Professional listing presentations, social graphics, and email campaigns — done for you.' },
  { icon: '📱', title: 'Social Media & Brand Building', desc: 'Templates, content calendars, and strategy — grow your personal brand on autopilot.' },
  { icon: '🎓', title: 'Training & Coaching Programs', desc: 'Live coaching, on-demand courses, and mentorship that leads to closings, not just certificates.' },
  { icon: '📋', title: 'Scripts, Playbooks & Systems', desc: 'Proven scripts for prospecting, objections, and closings — tested in real transactions.' },
  { icon: '📝', title: 'Transaction Management Support', desc: 'TC support and transaction coordination so you can focus on clients, not paperwork.' },
];

const calculatorCards = [
  { icon: '🏠', title: 'Mortgage Calculator', description: 'Estimate your monthly payment', href: '/calculators/mortgage-calculator' },
  { icon: '💰', title: 'Rent vs Buy', description: 'Compare renting vs owning', href: '/calculators/rent-vs-buy' },
  { icon: '📈', title: 'Seller Net Proceeds', description: 'Estimate your net from selling', href: '/calculators/seller-net-proceeds' },
];

const comparisonRows = [
  { feature: 'Agent Development', airus: 'Structured growth system', other: 'No structure' },
  { feature: 'Support Level', airus: 'Full support + mentorship', other: 'Independence only' },
  { feature: 'Technology', airus: 'Modern CRM + automation', other: 'Outdated systems' },
  { feature: 'Training', airus: 'Real coaching → closings', other: 'Minimal guidance' },
  { feature: 'Marketing', airus: 'Done-for-you branding', other: 'Figure it out' },
];

const learningCategories = [
  { icon: '🚀', label: 'New Agent Training', href: '/learning-center#new-agent' },
  { icon: '🏠', label: 'Listings & Marketing', href: '/learning-center#listings' },
  { icon: '🤝', label: 'Buyer Conversion', href: '/learning-center#buyers' },
  { icon: '📱', label: 'Social Media for Realtors', href: '/learning-center#social' },
  { icon: '📊', label: 'Market Updates', href: '/learning-center#market' },
  { icon: '🔑', label: 'Buyer Guides', href: '/learning-center#buyer-guides' },
  { icon: '💸', label: 'Seller Guides', href: '/learning-center#seller-guides' },
];

const vpPoints = [
  'Real Training That Leads to Closings',
  'Marketing + Personal Branding Support',
  'Built-In Lead Generation Systems',
  'Transaction Coordination & Support',
  'Modern CRM + Automation Tools',
  'Mentorship + Coaching',
  'Growth Path for New & Experienced Agents',
];

const growthSteps = [
  { number: 1, title: 'Your First Deal', description: 'Get trained, get leads, and close your first transaction with full support.' },
  { number: 2, title: 'Build Momentum', description: 'Scale to 5-10 deals with marketing systems, coaching, and accountability.' },
  { number: 3, title: 'Lead & Grow', description: 'Build a team, mentor others, and grow your real estate business to the next level.' },
];

/* --------------------------------------------------------
   PAGE
   -------------------------------------------------------- */

export default function HomePage() {
  return (
    <>
      {/* 1 — HERO */}
      <Hero
        variant="home"
        badge="California DRE License #02329021"
        title={'Build Your Real Estate\nBusiness With Airus Realty'}
        subtitle="A modern brokerage built for agents who want more — more support, more tools, and more growth."
        primaryCTA={{ label: 'Join Airus', href: '/join' }}
        secondaryCTA={{ label: 'See How It Works', href: '#how-it-works' }}
        compliance="California DRE License #02329021 | Equal Housing Opportunity"
      />

      {/* 2 — DUAL PATH */}
      <section className="section" id="how-it-works">
        <div className="container">
          <div className={styles.sectionHeader}>
            <div className="divider divider--center" />
            <h2>How Can We Help You?</h2>
          </div>
          <div className={styles.dualGrid}>
            <Link href="/join" className={styles.dualCard}>
              <span className={styles.dualIcon}>👔</span>
              <h3 className={styles.dualTitle}>I&apos;m an Agent</h3>
              <p className={styles.dualSub}>Grow Your Career With Airus</p>
              <span className={styles.dualArrow}>Explore →</span>
            </Link>
            <Link href="/find-homes" className={styles.dualCard}>
              <span className={styles.dualIcon}>🏠</span>
              <h3 className={styles.dualTitle}>I&apos;m Buying</h3>
              <p className={styles.dualSub}>Find Your Home</p>
              <span className={styles.dualArrow}>Search Homes →</span>
            </Link>
            <Link href="/sell" className={styles.dualCard}>
              <span className={styles.dualIcon}>💰</span>
              <h3 className={styles.dualTitle}>I&apos;m Selling</h3>
              <p className={styles.dualSub}>Estimate Your Home Value</p>
              <span className={styles.dualArrow}>Get Started →</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 3 — AGENT VALUE PROPOSITION */}
      <section className={styles.vpSection}>
        <div className="container">
          <div className={styles.vpInner}>
            <div className="divider divider--center" />
            <h2>Why Agents Are Choosing Airus</h2>
            <p className={styles.sectionSubtitle}>
              We don&apos;t just offer a brokerage — we offer a system for growth.
            </p>
            <div className={styles.vpGrid}>
              {vpPoints.map((point, i) => (
                <div key={i} className={styles.vpItem}>
                  <span className={styles.vpCheck}>✓</span>
                  <span className={styles.vpText}>{point}</span>
                </div>
              ))}
            </div>
            <div className={styles.viewAll}>
              <Link href="/agents" className="btn btn--primary">
                Explore the Airus Platform
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4 — PLATFORM / TOOLS */}
      <section className="section">
        <div className="container">
          <div className={styles.sectionHeader}>
            <div className="divider divider--center" />
            <h2>The Airus Agent Platform</h2>
            <p className={styles.sectionSubtitle}>
              Everything you need to generate leads, close deals, and build your brand — in one place.
            </p>
          </div>
          <div className={styles.platformGrid}>
            {platformModules.map((mod, i) => (
              <div key={i} className={styles.platformCard}>
                <span className={styles.platformIcon}>{mod.icon}</span>
                <div>
                  <h3 className={styles.platformTitle}>{mod.title}</h3>
                  <p className={styles.platformDesc}>{mod.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className={styles.viewAll}>
            <Link href="/training" className="btn btn--secondary">
              See Everything You Get
            </Link>
          </div>
        </div>
      </section>

      {/* 5 — CALCULATOR HUB */}
      <section className="section section--light">
        <div className="container">
          <div className={styles.sectionHeader}>
            <div className="divider divider--center" />
            <h2>Real Estate Tools to Make Smarter Decisions</h2>
            <p className={styles.sectionSubtitle}>
              Whether you&apos;re buying or selling, start with real numbers.
            </p>
          </div>
          <div className={styles.calcGrid}>
            {calculatorCards.map((card, i) => (
              <Link key={i} href={card.href} className={styles.calcCard}>
                <span className={styles.calcIcon}>{card.icon}</span>
                <h3 className={styles.calcTitle}>{card.title}</h3>
                <p className={styles.calcDesc}>{card.description}</p>
                <span className={styles.calcArrow}>Try it →</span>
              </Link>
            ))}
          </div>
          <div className={styles.viewAll}>
            <Link href="/calculators" className="btn btn--secondary">
              Explore All Calculators
            </Link>
          </div>
        </div>
      </section>

      {/* 6 — RECRUITING COMPARISON */}
      <section className="section section--dark">
        <div className="container">
          <div className={styles.sectionHeader}>
            <div className="divider divider--center" />
            <h2 style={{ color: 'var(--color-white)' }}>Not All Brokerages Are Built the Same</h2>
            <p className={styles.sectionSubtitle} style={{ color: 'var(--color-gray-400)' }}>
              If you&apos;re serious about growing your business, you&apos;re in the right place.
            </p>
          </div>
          <div className={styles.compareTable}>
            <div className={styles.compareHeader}>
              <div className={styles.compareFeature}></div>
              <div className={styles.compareAirus}>Airus Realty</div>
              <div className={styles.compareOther}>Other Brokerages</div>
            </div>
            {comparisonRows.map((row, i) => (
              <div key={i} className={styles.compareRow}>
                <div className={styles.compareFeature}>{row.feature}</div>
                <div className={styles.compareAirus}>
                  <span className={styles.checkIcon}>✓</span> {row.airus}
                </div>
                <div className={styles.compareOther}>
                  <span className={styles.xIcon}>✗</span> {row.other}
                </div>
              </div>
            ))}
          </div>
          <div className={styles.viewAll}>
            <Link href="/join" className="btn btn--gold" style={{ marginTop: 'var(--space-6)' }}>
              Join Airus Realty
            </Link>
          </div>
        </div>
      </section>

      {/* 7 — AGENT SUCCESS METRICS */}
      <StatsBar
        stats={agentStats}
        variant="dark"
        disclaimer="*Based on internal company data"
      />

      {/* 8 — CONSUMER TRUST */}
      <section className={styles.trustSection}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <div className="divider divider--center" />
            <h2>Helping Buyers and Sellers Win</h2>
          </div>
          <div className={styles.trustGrid}>
            <div className={styles.trustCard}>
              <div className={styles.trustIcon}>🏠</div>
              <h3 className={styles.trustTitle}>Buy With Airus</h3>
              <p className={styles.trustDesc}>
                Our agents guide you through every step — from finding the right home to getting the keys.
              </p>
            </div>
            <div className={styles.trustCard}>
              <div className={styles.trustIcon}>💰</div>
              <h3 className={styles.trustTitle}>Sell With Airus</h3>
              <p className={styles.trustDesc}>
                Strategic pricing, professional marketing, and expert negotiation to maximize your results.
              </p>
            </div>
            <div className={styles.trustCard}>
              <div className={styles.trustIcon}>📍</div>
              <h3 className={styles.trustTitle}>Local Expertise</h3>
              <p className={styles.trustDesc}>
                Our agents know the neighborhoods, the market trends, and how to position you for success.
              </p>
            </div>
          </div>
          <div className={styles.trustActions}>
            <Link href="/find-homes" className="btn btn--primary">
              Find an Agent
            </Link>
            <Link href="/find-homes" className="btn btn--secondary">
              Search Homes
            </Link>
          </div>
        </div>
      </section>

      {/* 9 — LEARNING CENTER PREVIEW */}
      <section className="section">
        <div className="container">
          <div className={styles.sectionHeader}>
            <div className="divider divider--center" />
            <h2>Learn. Grow. Win.</h2>
            <p className={styles.sectionSubtitle}>
              Resources for agents, buyers, and sellers to stay informed and ahead.
            </p>
          </div>
          <div className={styles.lcGrid}>
            {learningCategories.map((cat, i) => (
              <Link key={i} href={cat.href} className={styles.lcItem}>
                <span className={styles.lcIcon}>{cat.icon}</span>
                <span className={styles.lcLabel}>{cat.label}</span>
                <span className={styles.lcArrow}>→</span>
              </Link>
            ))}
          </div>
          <div className={styles.viewAll}>
            <Link href="/learning-center" className="btn btn--secondary">
              Explore Learning Center
            </Link>
          </div>
        </div>
      </section>

      {/* 9b — GROWTH PATH */}
      <ProcessSteps
        title="Your Growth Path at Airus"
        subtitle="From first deal to building your own team."
        steps={growthSteps}
      />

      {/* 10 — FINAL CTA */}
      <CTABanner
        heading="Ready to Take Your Business to the Next Level?"
        description="Join the brokerage that invests in your growth — with real training, real tools, and real support."
        primaryLabel="Join Airus"
        primaryHref="/join"
        secondaryLabel="Schedule a Confidential Call"
        secondaryHref="/contact"
        variant="blue"
      />
    </>
  );
}
