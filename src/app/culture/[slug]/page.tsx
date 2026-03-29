import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Hero from '@/components/Hero';
import CTABanner from '@/components/CTABanner';
import { cultureSubpages, getCultureSubpageBySlug } from '@/data/cultureData';
import styles from './page.module.css';

/* ---- Static Params ---- */
export function generateStaticParams() {
  return cultureSubpages.map((p) => ({ slug: p.slug }));
}

/* ---- Dynamic Metadata ---- */
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const page = getCultureSubpageBySlug(slug);
  if (!page) return { title: 'Culture' };
  return {
    title: `${page.title} — Airus Culture`,
    description: page.heroSubtitle,
  };
}

/* ---- Page ---- */
export default async function CultureSubpage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = getCultureSubpageBySlug(slug);
  if (!page) notFound();

  const otherPillars = cultureSubpages.filter((p) => p.slug !== slug);

  return (
    <>
      {/* Breadcrumb */}
      <div className={styles.breadcrumb}>
        <div className="container">
          <nav className={styles.breadcrumbInner}>
            <Link href="/culture">Culture</Link>
            <span className={styles.breadcrumbSep}>›</span>
            <span>{page.title}</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <Hero
        variant="dark"
        title={page.title}
        subtitle={page.heroSubtitle}
        primaryCTA={{ label: 'Join Airus', href: '/join' }}
        secondaryCTA={{ label: 'Schedule a Call', href: '/contact' }}
      />

      {/* Content Sections */}
      <section className={styles.contentSection}>
        <div className="container">
          <div className={styles.contentGrid}>
            {page.sections.map((section, idx) => (
              <div key={idx} className={styles.block}>
                <h2 className={styles.blockHeading}>{section.heading}</h2>
                <p className={styles.blockContent}>{section.content}</p>
                {section.bullets && section.bullets.length > 0 && (
                  <div className={styles.blockBullets}>
                    {section.bullets.map((bullet, bIdx) => (
                      <div key={bIdx} className={styles.bulletItem}>
                        <span className={styles.bulletCheck}>✓</span>
                        {bullet}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Other Culture Pillars */}
      <section className={styles.pillarsSection}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <div className="divider divider--center" />
            <h2>Explore More of Our Culture</h2>
          </div>
          <div className={styles.pillarsGrid}>
            {otherPillars.map((pillar) => (
              <Link
                key={pillar.slug}
                href={`/culture/${pillar.slug}`}
                className={styles.pillarCard}
              >
                <span className={styles.pillarIcon}>{pillar.icon}</span>
                <div>
                  <h4 className={styles.pillarTitle}>{pillar.title}</h4>
                  <p className={styles.pillarDesc}>{pillar.shortDesc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTABanner
        heading="Ready to Build Your Business?"
        description="Join Airus and get the training, support, and systems to grow your real estate career."
        primaryLabel="Join Airus"
        primaryHref="/join"
        secondaryLabel="Talk to Us"
        secondaryHref="/contact"
        variant="blue"
      />
    </>
  );
}
