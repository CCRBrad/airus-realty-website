import Image from 'next/image';
import Link from 'next/link';
import Hero from '@/components/Hero';
import StatsBar from '@/components/StatsBar';
import CTABanner from '@/components/CTABanner';
import { getFeaturedAgents } from '@/data/agents';
import styles from './page.module.css';

/* --------------------------------------------------------
   DATA
   -------------------------------------------------------- */

const agentStats = [
  { value: '200+', label: 'Transactions Closed' },
  { value: '3×', label: 'Agent Growth' },
  { value: '45%', label: 'Production Increase' },
];

const calculatorCards = [
  { icon: '🏠', title: 'Mortgage Calculator', description: 'Estimate your monthly payment', href: '/calculators/mortgage-calculator' },
  { icon: '💰', title: 'Rent vs Buy', description: 'Compare renting vs owning', href: '/calculators/rent-vs-buy' },
  { icon: '📈', title: 'Seller Net Proceeds', description: 'Estimate your net from selling', href: '/calculators/seller-net-proceeds' },
];

const clientExperience = [
  { icon: '💬', title: 'Clear Communication', desc: 'Your agent keeps you informed at every step — no surprises, no guesswork.' },
  { icon: '🗺️', title: 'Step-by-Step Guidance', desc: 'From first showing to closing day, your agent walks you through every decision.' },
  { icon: '🤝', title: 'Smooth Closings', desc: 'Our agents coordinate with lenders, inspectors, and title companies so you don\'t have to.' },
  { icon: '🔑', title: 'Long-Term Relationships', desc: 'We\'re not just here for one deal — we\'re here for every move you make.' },
];

const learningCategories = [
  { icon: '🚀', label: 'New Agent Training', href: '/learning-center/new-agent-guide' },
  { icon: '🏠', label: 'Listings & Marketing', href: '/learning-center/listing-growth' },
  { icon: '🤝', label: 'Buyer Conversion', href: '/learning-center/buyer-conversion' },
  { icon: '📱', label: 'Social Media for Realtors', href: '/learning-center/social-media-strategy' },
  { icon: '📊', label: 'Market Updates', href: '/learning-center/market-insights' },
  { icon: '🔑', label: 'Buyer Guides', href: '/learning-center/buyer-education' },
  { icon: '💸', label: 'Seller Guides', href: '/learning-center/seller-education' },
];

/* --------------------------------------------------------
   PAGE
   -------------------------------------------------------- */

export default function HomePage() {
  const featuredAgents = getFeaturedAgents();

  return (
    <>
      {/* 1 — HERO (Split Layout) */}
      <Hero
        variant="home"
        badge="California DRE License #02329021"
        title={'Your Home Journey\nStarts With the\nRight Agent'}
        subtitle="Work with experienced agents who guide you through every step — from your first showing to closing day."
        primaryCTA={{ label: 'Find an Agent', href: '/agents' }}
        secondaryCTA={{ label: 'Join Airus', href: '/join' }}
        image="/images/hero-agents.png"
        imageAlt="Real estate agent handing keys to happy homebuyers"
        compliance="California DRE License #02329021 | Equal Housing Opportunity"
      />

      {/* 2 — MEET YOUR AGENTS */}
      <section className={styles.meetSection}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <div className="divider divider--center" />
            <h2>Meet Your Agents</h2>
            <p className={styles.sectionSubtitle}>
              You&apos;re not just working with a platform — you&apos;re working with real professionals.
            </p>
          </div>
          <div className={styles.meetGrid}>
            {featuredAgents.map((agent) => (
              <div key={agent.slug} className={styles.meetCard}>
                <Image
                  src={agent.photo}
                  alt={`${agent.name} — ${agent.title}`}
                  width={600}
                  height={600}
                  className={styles.meetPhoto}
                />
                <div className={styles.meetInfo}>
                  <h3 className={styles.meetName}>{agent.name}</h3>
                  <p className={styles.meetTitle}>{agent.title}</p>
                  <p className={styles.meetBio}>
                    {agent.bio.split('.').slice(0, 2).join('.') + '.'}
                  </p>
                  <Link href={`/agents/${agent.slug}`} className={styles.meetCta}>
                    Work With {agent.name.split(' ')[0]} →
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className={styles.viewAll}>
            <Link href="/agents" className="btn btn--primary">
              View All Agents
            </Link>
          </div>
        </div>
      </section>

      {/* 3 — HOW CAN WE HELP */}
      <section className="section" id="how-it-works">
        <div className="container">
          <div className={styles.sectionHeader}>
            <div className="divider divider--center" />
            <h2>How Can We Help You?</h2>
          </div>
          <div className={styles.dualGrid}>
            <Link href="/agents" className={styles.dualCard}>
              <span className={styles.dualIcon}>👔</span>
              <h3 className={styles.dualTitle}>I&apos;m an Agent</h3>
              <p className={styles.dualSub}>Grow Your Career With Airus</p>
              <span className={styles.dualArrow}>Explore →</span>
            </Link>
            <Link href="/find-homes" className={styles.dualCard}>
              <span className={styles.dualIcon}>🏠</span>
              <h3 className={styles.dualTitle}>I&apos;m Buying</h3>
              <p className={styles.dualSub}>Find Your Home With an Agent</p>
              <span className={styles.dualArrow}>Search Homes →</span>
            </Link>
            <Link href="/sell" className={styles.dualCard}>
              <span className={styles.dualIcon}>💰</span>
              <h3 className={styles.dualTitle}>I&apos;m Selling</h3>
              <p className={styles.dualSub}>Get Expert Help Selling Your Home</p>
              <span className={styles.dualArrow}>Get Started →</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 4 — BUY WITH AIRUS (Split: Image Left, Text Right) */}
      <section className={`${styles.splitSection} ${styles.altBg}`}>
        <div className="container">
          <div className={styles.splitGrid}>
            <div className={styles.splitImage}>
              <Image
                src="/images/buyer-journey.png"
                alt="Agent showing a modern home to a couple"
                width={640}
                height={640}
              />
            </div>
            <div className={styles.splitText}>
              <h2>Buy With Confidence</h2>
              <p className={styles.splitSubtitle}>
                Work with an agent who helps you find and secure the right home — with expert guidance at every step of the journey.
              </p>
              <div className={styles.bulletList}>
                <div className={styles.bulletItem}>
                  <span className={styles.bulletCheck}>✓</span>
                  Personalized home search based on your needs
                </div>
                <div className={styles.bulletItem}>
                  <span className={styles.bulletCheck}>✓</span>
                  Expert negotiation to help you get the best price
                </div>
                <div className={styles.bulletItem}>
                  <span className={styles.bulletCheck}>✓</span>
                  Coordination with lenders for a smooth closing
                </div>
                <div className={styles.bulletItem}>
                  <span className={styles.bulletCheck}>✓</span>
                  Support from first showing to move-in day
                </div>
              </div>
              <Link href="/find-homes" className="btn btn--primary">
                Start Your Home Search
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 5 — SELL WITH AIRUS (Split: Text Left, Image Right) */}
      <section className={styles.splitSection}>
        <div className="container">
          <div className={styles.splitGrid}>
            <div className={styles.splitText}>
              <h2>Sell With Strategy</h2>
              <p className={styles.splitSubtitle}>
                Your agent helps you price, market, and sell your home for the best possible result — with clear communication every step of the way.
              </p>
              <div className={styles.bulletList}>
                <div className={styles.bulletItem}>
                  <span className={styles.bulletCheck}>✓</span>
                  Strategic pricing based on real market data
                </div>
                <div className={styles.bulletItem}>
                  <span className={styles.bulletCheck}>✓</span>
                  Professional marketing and listing exposure
                </div>
                <div className={styles.bulletItem}>
                  <span className={styles.bulletCheck}>✓</span>
                  Strong negotiation to maximize your results
                </div>
                <div className={styles.bulletItem}>
                  <span className={styles.bulletCheck}>✓</span>
                  Full transaction coordination to closing
                </div>
              </div>
              <Link href="/sell" className="btn btn--primary">
                Get Your Home Estimate
              </Link>
            </div>
            <div className={styles.splitImage}>
              <Image
                src="/images/seller-success.png"
                alt="Agent and homeowner celebrating a successful sale"
                width={640}
                height={640}
              />
            </div>
          </div>
        </div>
      </section>

      {/* 6 — WHY CLIENTS CHOOSE AIRUS (Split: Image Left, Text Right) */}
      <section className={`${styles.splitSection} ${styles.altBg}`}>
        <div className="container">
          <div className={styles.splitGrid}>
            <div className={styles.splitImage}>
              <Image
                src="/images/client-experience.png"
                alt="Agent reviewing documents with clients at kitchen table"
                width={640}
                height={640}
              />
            </div>
            <div className={styles.splitText}>
              <h2>Why Clients Choose Airus Realty</h2>
              <p className={styles.splitSubtitle}>
                We combine local expertise with modern tools and a genuine commitment to your success.
              </p>
              <div className={styles.bulletList}>
                <div className={styles.bulletItem}>
                  <span className={styles.bulletCheck}>✓</span>
                  Personalized guidance tailored to your goals
                </div>
                <div className={styles.bulletItem}>
                  <span className={styles.bulletCheck}>✓</span>
                  Strong negotiation backed by real market knowledge
                </div>
                <div className={styles.bulletItem}>
                  <span className={styles.bulletCheck}>✓</span>
                  Deep local market expertise across California
                </div>
                <div className={styles.bulletItem}>
                  <span className={styles.bulletCheck}>✓</span>
                  Seamless coordination with lending and title
                </div>
              </div>
              <Link href="/contact" className="btn btn--primary">
                Talk to an Agent
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 7 — CALCULATOR HUB */}
      <section className="section">
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

      {/* 8 — CLIENT EXPERIENCE */}
      <section className={styles.clientSection}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <div className="divider divider--center" />
            <h2>What It&apos;s Like to Work With Us</h2>
            <p className={styles.sectionSubtitle}>
              Our clients don&apos;t just close deals — they feel guided, supported, and confident the entire way.
            </p>
          </div>
          <div className={styles.clientGrid}>
            {clientExperience.map((item) => (
              <div key={item.title} className={styles.clientCard}>
                <div className={styles.clientIcon}>{item.icon}</div>
                <h4 className={styles.clientTitle}>{item.title}</h4>
                <p className={styles.clientDesc}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9 — GROW YOUR BUSINESS (Recruiting) */}
      <section className={styles.recruitSection}>
        <div className="container">
          <div className={styles.recruitGrid}>
            <div className={styles.recruitImage}>
              <Image
                src="/images/team-culture.png"
                alt="Real estate team collaborating in a modern office"
                width={640}
                height={640}
              />
            </div>
            <div className={styles.recruitText}>
              <h2>Grow Your Real Estate Business With Airus</h2>
              <p className={styles.recruitSubtitle}>
                Join a brokerage focused on training, support, and long-term growth.
              </p>
              <div className={styles.recruitBullets}>
                <div className={styles.recruitBulletItem}>
                  <span className={styles.recruitBulletIcon}>✓</span>
                  Training and mentorship that leads to closings
                </div>
                <div className={styles.recruitBulletItem}>
                  <span className={styles.recruitBulletIcon}>✓</span>
                  Marketing support and personal branding
                </div>
                <div className={styles.recruitBulletItem}>
                  <span className={styles.recruitBulletIcon}>✓</span>
                  Modern systems, CRM, and automation tools
                </div>
                <div className={styles.recruitBulletItem}>
                  <span className={styles.recruitBulletIcon}>✓</span>
                  Growth-focused leadership and accountability
                </div>
              </div>
              <Link href="/join" className="btn btn--gold btn--lg">
                Explore Opportunities
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 10 — STATS */}
      <StatsBar
        stats={agentStats}
        variant="dark"
        disclaimer="*Based on internal company data"
      />

      {/* 11 — LEARNING CENTER */}
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

      {/* 12 — FINAL CTA */}
      <CTABanner
        heading="Ready to Make Your Next Move?"
        description="Whether you're buying, selling, or growing your real estate career — our agents are ready to help."
        primaryLabel="Find an Agent"
        primaryHref="/agents"
        secondaryLabel="Join Airus"
        secondaryHref="/join"
        variant="blue"
      />
    </>
  );
}
