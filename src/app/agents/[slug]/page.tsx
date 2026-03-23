import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { agents, getAgentBySlug } from '@/data/agents';
import CTABanner from '@/components/CTABanner';
import styles from './page.module.css';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return agents.map((agent) => ({
    slug: agent.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const agent = getAgentBySlug(slug);
  if (!agent) return { title: 'Agent Not Found' };
  return {
    title: `${agent.name} — ${agent.title}`,
    description: `${agent.name} is a licensed real estate agent with Airus Realty serving ${agent.areasServed.join(', ')}. ${agent.specialties.join(', ')}.`,
  };
}

export default async function AgentProfilePage({ params }: PageProps) {
  const { slug } = await params;
  const agent = getAgentBySlug(slug);
  if (!agent) notFound();

  return (
    <>
      <section className={styles.profileSection}>
        <div className="container">
          <Link href="/agents" className={styles.backLink}>
            ← Back to All Agents
          </Link>

          <div className={styles.profileGrid}>
            {/* Left Sidebar */}
            <div className={styles.profileSidebar}>
              <div className={styles.photoCard}>
                <Image
                  src={agent.photo}
                  alt={`${agent.name} — ${agent.title}`}
                  width={600}
                  height={600}
                  className={styles.profilePhoto}
                  priority
                />
                <div className={styles.profileQuickInfo}>
                  <h1 className={styles.profileName}>{agent.name}</h1>
                  <p className={styles.profileTitle}>{agent.title}</p>

                  <div className={styles.profileContactList}>
                    <span className={styles.profileContactItem}>
                      📞 <a href={`tel:${agent.phone}`}>{agent.phone}</a>
                    </span>
                    <span className={styles.profileContactItem}>
                      ✉️ <a href={`mailto:${agent.email}`}>{agent.email}</a>
                    </span>
                  </div>

                  <div className={styles.profileExperience}>
                    🏆 {agent.yearsExperience} {agent.yearsExperience === 1 ? 'Year' : 'Years'} of Experience
                  </div>
                </div>
              </div>

              {/* Compliance Card */}
              <div className={styles.complianceCard}>
                <p className={styles.complianceTitle}>License Information</p>
                <p className={styles.complianceItem}>{agent.name}</p>
                <p className={styles.complianceItem}>Airus Realty</p>
                {agent.dreLicense && (
                  <p className={styles.complianceItem}>DRE License #{agent.dreLicense}</p>
                )}
                <p className={styles.complianceItem}>Brokerage DRE #02329021</p>
              </div>
            </div>

            {/* Right Main Content */}
            <div className={styles.profileMain}>
              {/* Bio */}
              <div className={styles.profileBlock}>
                <h2>About {agent.name}</h2>
                <p className={styles.profileBio}>{agent.bio}</p>
              </div>

              {/* Specialties */}
              <div className={styles.profileBlock}>
                <h2>Specialties</h2>
                <div className={styles.tagGrid}>
                  {agent.specialties.map((s) => (
                    <span key={s} className={styles.tag}>{s}</span>
                  ))}
                </div>
              </div>

              {/* Areas Served */}
              <div className={styles.profileBlock}>
                <h2>Areas Served</h2>
                <div className={styles.tagGrid}>
                  {agent.areasServed.map((a) => (
                    <span key={a} className={`${styles.tag} ${styles.area}`}>{a}</span>
                  ))}
                </div>
              </div>

              {/* Contact Form */}
              <div className={styles.formCard}>
                <h2>Contact {agent.name}</h2>
                <p className={styles.formSub}>
                  Send a message and {agent.name.split(' ')[0]} will get back to you within one business day.
                </p>
                <form>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-5)' }}>
                    <div className="form-group">
                      <label className="form-label" htmlFor="profile-first">First Name</label>
                      <input className="form-input" id="profile-first" type="text" placeholder="First name" required />
                    </div>
                    <div className="form-group">
                      <label className="form-label" htmlFor="profile-last">Last Name</label>
                      <input className="form-input" id="profile-last" type="text" placeholder="Last name" required />
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="profile-email">Email</label>
                    <input className="form-input" id="profile-email" type="email" placeholder="you@email.com" required />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="profile-phone">Phone</label>
                    <input className="form-input" id="profile-phone" type="tel" placeholder="(555) 000-0000" />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="profile-message">Message</label>
                    <textarea className="form-textarea" id="profile-message" placeholder="How can I help you?" rows={5} />
                  </div>
                  <button type="submit" className="btn btn--gold btn--lg btn--full">
                    Contact {agent.name.split(' ')[0]}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABanner
        heading="Looking for a Different Agent?"
        description="Browse our full team of licensed agents ready to help you buy, sell, or invest."
        primaryLabel="View All Agents"
        primaryHref="/agents"
        secondaryLabel="Contact Us"
        secondaryHref="/contact"
        variant="blue"
      />
    </>
  );
}
