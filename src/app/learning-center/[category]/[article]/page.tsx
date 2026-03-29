import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { categories, getCategoryBySlug, getArticleBySlug, getRelatedArticles } from '@/data/learningData';
import CTABanner from '@/components/CTABanner';
import styles from './page.module.css';

/* ---- Static Params ---- */
export function generateStaticParams() {
  return categories.flatMap((cat) =>
    cat.articles.map((article) => ({
      category: cat.slug,
      article: article.slug,
    }))
  );
}

/* ---- Dynamic Metadata ---- */
export async function generateMetadata({ params }: { params: Promise<{ category: string; article: string }> }): Promise<Metadata> {
  const { category: catSlug, article: artSlug } = await params;
  const article = getArticleBySlug(catSlug, artSlug);
  const cat = getCategoryBySlug(catSlug);
  if (!article || !cat) return { title: 'Learning Center' };
  return {
    title: `${article.title} — ${cat.title}`,
    description: article.intro,
  };
}

/* ---- Page ---- */
export default async function ArticlePage({ params }: { params: Promise<{ category: string; article: string }> }) {
  const { category: catSlug, article: artSlug } = await params;
  const category = getCategoryBySlug(catSlug);
  const article = getArticleBySlug(catSlug, artSlug);
  if (!category || !article) notFound();

  const relatedArticles = getRelatedArticles(article);

  return (
    <>
      {/* Breadcrumb */}
      <div className={styles.breadcrumb}>
        <div className="container">
          <nav className={styles.breadcrumbInner}>
            <Link href="/learning-center">Learning Center</Link>
            <span className={styles.breadcrumbSep}>›</span>
            <Link href={`/learning-center/${category.slug}`}>{category.title}</Link>
            <span className={styles.breadcrumbSep}>›</span>
            <span>{article.title}</span>
          </nav>
        </div>
      </div>

      {/* Article Header */}
      <header className={styles.articleHeader}>
        <div className="container">
          <div className={styles.headerContent}>
            <Link href={`/learning-center/${category.slug}`} className={styles.categoryBadge}>
              {category.icon} {category.title}
            </Link>
            <h1 className={styles.articleTitle}>{article.title}</h1>
            <p className={styles.articleIntro}>{article.intro}</p>
            <div className={styles.articleMeta}>
              <span>📖 {article.readTime}</span>
              <span className={styles.metaDot} />
              <span>Airus Learning Center</span>
            </div>
          </div>
        </div>
      </header>

      {/* Article Body */}
      <section className={styles.articleBody}>
        <div className="container">
          <div className={styles.bodyGrid}>
            {/* Main Content */}
            <main className={styles.mainContent}>
              {article.sections.map((section, idx) => (
                <div key={idx} className={styles.articleSection}>
                  <h2 className={styles.sectionHeading}>{section.heading}</h2>
                  <p className={styles.sectionContent}>{section.content}</p>
                  {section.bullets && section.bullets.length > 0 && (
                    <ul className={styles.sectionBullets}>
                      {section.bullets.map((bullet, bIdx) => (
                        <li key={bIdx} className={styles.bulletItem}>
                          <span className={styles.bulletCheck}>✓</span>
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </main>

            {/* Sidebar */}
            <aside className={styles.sidebar}>
              {/* Related Articles */}
              {relatedArticles.length > 0 && (
                <div className={styles.sidebarCard}>
                  <h4 className={styles.sidebarTitle}>Related Articles</h4>
                  {relatedArticles.map((ra) => (
                    <Link
                      key={ra.slug}
                      href={`/learning-center/${ra.categorySlug}/${ra.slug}`}
                      className={styles.sidebarLink}
                    >
                      {ra.title}
                    </Link>
                  ))}
                </div>
              )}

              {/* Category CTA */}
              <div className={styles.sidebarCard}>
                <h4 className={styles.sidebarTitle}>Take Action</h4>
                <Link href={category.ctaHref} className="btn btn--primary btn--full" style={{ marginBottom: 'var(--space-3)' }}>
                  {category.ctaLabel}
                </Link>
                {category.secondaryCtaLabel && category.secondaryCtaHref && (
                  <Link href={category.secondaryCtaHref} className="btn btn--secondary btn--full">
                    {category.secondaryCtaLabel}
                  </Link>
                )}
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Related Articles Section */}
      {relatedArticles.length > 0 && (
        <section className={styles.relatedSection}>
          <div className="container">
            <div className={styles.sectionHeader}>
              <div className="divider divider--center" />
              <h2>Continue Reading</h2>
            </div>
            <div className={styles.relatedGrid}>
              {relatedArticles.map((ra) => (
                <Link
                  key={ra.slug}
                  href={`/learning-center/${ra.categorySlug}/${ra.slug}`}
                  className={styles.relatedCard}
                >
                  <h4 className={styles.relatedCardTitle}>{ra.title}</h4>
                  <p className={styles.relatedCardIntro}>{ra.intro}</p>
                  <span className={styles.relatedCardMeta}>{ra.readTime} · Read →</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <CTABanner
        heading="Ready to Take the Next Step?"
        description="Connect with the Airus team and put this knowledge into action."
        primaryLabel={category.ctaLabel}
        primaryHref={category.ctaHref}
        secondaryLabel={category.secondaryCtaLabel}
        secondaryHref={category.secondaryCtaHref}
        variant="blue"
      />
    </>
  );
}
