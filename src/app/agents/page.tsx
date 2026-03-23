import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Hero from '@/components/Hero';
import CTABanner from '@/components/CTABanner';
import { agents, getFeaturedAgents, getNewAgents } from '@/data/agents';
import type { Agent } from '@/data/agents';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Meet the Team',
  description:
    'Meet the Airus Realty team — a group of driven agents focused on helping clients win and building real estate businesses the right way.',
};

/* ---- Agent Card Component ---- */
function AgentCard({ agent, badgeLabel, badgeVariant }: { agent: Agent; badgeLabel?: string; badgeVariant?: 'featured' | 'new' }) {
  return (
    <div className={styles.agentCard} id={`agent-${agent.slug}`}>
      <div className={styles.agentPhotoWrap}>
        <Image
          src={agent.photo}
          alt={`${agent.name} — ${agent.title}`}
          width={600}
          height={600}
          className={styles.agentPhoto}
        />
        {badgeLabel && (
          <span className={`${styles.featuredBadge} ${badgeVariant === 'new' ? styles.rising : ''}`}>
            {badgeLabel}
          </span>
        )}
      </div>
      <div className={styles.agentInfo}>
        <h3 className={styles.agentName}>{agent.name}</h3>
        <p className={styles.agentTitle}>{agent.title}</p>

        <div className={styles.agentContact}>
          <span className={styles.agentContactItem}>
            📞 <a href={`tel:${agent.phone}`}>{agent.phone}</a>
          </span>
          <span className={styles.agentContactItem}>
            ✉️ <a href={`mailto:${agent.email}`}>{agent.email}</a>
          </span>
        </div>

        <div className={styles.specialtyTags}>
          {agent.specialties.map((s) => (
            <span key={s} className={styles.specialtyTag}>{s}</span>
          ))}
        </div>

        <Link href={`/agents/${agent.slug}`} className={styles.viewProfileBtn}>
          View Profile →
        </Link>
      </div>
    </div>
  );
}

/* ---- Culture Pillars ---- */
const culturePillars = [
  { icon: '🤝', title: 'Collaboration', desc: 'A team-first environment where agents support each other and share wins.' },
  { icon: '🎓', title: 'Mentorship', desc: 'Experienced agents mentor new ones — because growth is a team sport.' },
  { icon: '🛡️', title: 'Support', desc: 'TC support, marketing, coaching, and systems so you can focus on selling.' },
  { icon: '📈', title: 'Performance', desc: 'Track your numbers, hit your goals, and celebrate the results.' },
];

/* ---- Page ---- */
export default function AgentsPage() {
  const featured = getFeaturedAgents();
  const rising = getNewAgents();
  const allAgents = agents;

  return (
    <>
      {/* Hero */}
      <Hero
        variant="dark"
        badge="Our Team"
        title={'Meet the Airus\nRealty Team'}
        subtitle="A group of driven agents focused on helping clients win and building real estate businesses the right way."
        primaryCTA={{ label: 'Work With an Agent', href: '#directory' }}
        secondaryCTA={{ label: 'Join Airus', href: '/join' }}
      />

      {/* Top Producers */}
      <section className={styles.highlightSection}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className={styles.highlightBadge}>⭐ Top Producers</span>
            <h2>Trusted by Clients, Proven by Results</h2>
            <p className={styles.sectionSubtitle}>
              Our top-producing agents combine deep market expertise with a relentless commitment to client success.
            </p>
          </div>
          <div className={styles.agentGrid}>
            {featured.map((agent) => (
              <AgentCard key={agent.slug} agent={agent} badgeLabel="Top Producer" badgeVariant="featured" />
            ))}
          </div>
        </div>
      </section>

      {/* Full Directory */}
      <section className={styles.directorySection} id="directory">
        <div className="container">
          <div className={styles.sectionHeader}>
            <div className="divider divider--center" />
            <h2>Agent Directory</h2>
            <p className={styles.sectionSubtitle}>
              Browse our full roster of licensed agents ready to help you buy, sell, or invest.
            </p>
          </div>
          <div className={styles.agentGrid}>
            {allAgents.map((agent) => (
              <AgentCard key={agent.slug} agent={agent} />
            ))}
          </div>
        </div>
      </section>

      {/* New Agents Growing Fast */}
      <section className={styles.highlightSection}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className={`${styles.highlightBadge} ${styles.newAgent}`}>🚀 Growing Fast</span>
            <h2>New Agents Making Moves</h2>
            <p className={styles.sectionSubtitle}>
              These agents are just getting started — and they&apos;re already building momentum.
            </p>
          </div>
          <div className={styles.agentGrid}>
            {rising.map((agent) => (
              <AgentCard key={agent.slug} agent={agent} badgeLabel="Rising Star" badgeVariant="new" />
            ))}
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section className={styles.cultureSection}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <div className="divider divider--center" />
            <h2>Built on Growth, Not Just Transactions</h2>
            <p className={styles.sectionSubtitle}>
              The Airus culture is what makes agents stay — and what makes clients trust us.
            </p>
          </div>
          <div className={styles.cultureGrid}>
            {culturePillars.map((p) => (
              <div key={p.title} className={styles.cultureCard}>
                <div className={styles.cultureIcon}>{p.icon}</div>
                <h4 className={styles.cultureTitle}>{p.title}</h4>
                <p className={styles.cultureDesc}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recruiting CTA */}
      <section className={styles.recruitSection}>
        <div className="container">
          <h2>Want to Be Featured Here?</h2>
          <p className={styles.recruitSubtitle}>
            Join a brokerage built for growth, not just transactions.
          </p>
          <div className={styles.recruitActions}>
            <Link href="/join" className="btn btn--gold btn--lg">
              Join Airus Realty
            </Link>
            <Link href="/contact" className="btn btn--ghost btn--lg">
              Schedule a Call
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <CTABanner
        heading="Ready to Work With an Airus Agent?"
        description="Whether you're buying, selling, or investing — our agents are ready to help you win."
        primaryLabel="Contact an Agent"
        primaryHref="/contact"
        secondaryLabel="Join the Team"
        secondaryHref="/join"
        variant="blue"
      />
    </>
  );
}
