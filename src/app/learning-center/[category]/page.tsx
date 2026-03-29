import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { categories, getCategoryBySlug, getRelatedCategories } from '@/data/learningData';
import CTABanner from '@/components/CTABanner';
import styles from './page.module.css';

/* ---- Static Params for ISR ---- */
export function generateStaticParams() {
  return categories.map((c) => ({ category: c.slug }));
}

/* ---- Dynamic Metadata ---- */
export async function generateMetadata({ params }: { params: Promise<{ category: string }> }): Promise<Metadata> {
  const { category: slug } = await params;
  const cat = getCategoryBySlug(slug);
  if (!cat) return { title: 'Learning Center' };
  return {
    title: `${cat.title} — Learning Center`,
    description: cat.description,
  };
}

/* ---- Page ---- */
export default async function CategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const { category: slug } = await params;
  const category = getCategoryBySlug(slug);
  if (!category) notFound();

  const relatedCats = getRelatedCategories(slug, 3);
  const featuredArticle = category.articles[0];
  const otherArticles = category.articles.slice(1);

  return (
    <>
      {/* Breadcrumb */}
      <div className={styles.breadcrumb}>
        <div className="container">
          <nav className={styles.breadcrumbInner}>
            <Link href="/learning-center">Learning Center</Link>
            <span className={styles.breadcrumbSep}>›</span>
            <span>{category.title}</span>
          </nav>
        </div>
      </div>

      {/* Intro */}
      <section className={styles.introSection}>
        <div className="container">
          <div className={styles.introContent}>
            <p className={styles.introAudience}>For {category.audience}</p>
            <h1 className={styles.introTitle}>{category.icon} {category.title}</h1>
            <p className={styles.introDesc}>{category.description}</p>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      {featuredArticle && (
        <section className={styles.featuredSection}>
          <div className="container">
            <Link
              href={`/learning-center/${category.slug}/${featuredArticle.slug}`}
              className={styles.featuredCard}
            >
              <div>
                <span className={styles.featuredBadge}>Featured Guide</span>
                <h2 className={styles.featuredTitle}>{featuredArticle.title}</h2>
                <p className={styles.featuredIntro}>{featuredArticle.intro}</p>
                <span className={styles.featuredMeta}>{featuredArticle.readTime} · Read Now →</span>
              </div>
              <div className={styles.featuredIcon}>{category.icon}</div>
            </Link>
          </div>
        </section>
      )}

      {/* Article Grid */}
      {otherArticles.length > 0 && (
        <section className={styles.articleSection}>
          <div className="container">
            <div className={styles.sectionHeader}>
              <div className="divider divider--center" />
              <h2>More in {category.title}</h2>
            </div>
            <div className={styles.articleGrid}>
              {otherArticles.map((article) => (
                <Link
                  key={article.slug}
                  href={`/learning-center/${category.slug}/${article.slug}`}
                  className={styles.articleCard}
                >
                  <h3 className={styles.articleCardTitle}>{article.title}</h3>
                  <p className={styles.articleCardIntro}>{article.intro}</p>
                  <div className={styles.articleCardMeta}>
                    <span className={styles.articleCardTime}>{article.readTime}</span>
                    <span className={styles.articleCardArrow}>Read →</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Related Categories */}
      <section className={styles.relatedSection}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <div className="divider divider--center" />
            <h2>Explore More Topics</h2>
          </div>
          <div className={styles.relatedGrid}>
            {relatedCats.map((rc) => (
              <Link
                key={rc.slug}
                href={`/learning-center/${rc.slug}`}
                className={styles.relatedCard}
              >
                <span className={styles.relatedIcon}>{rc.icon}</span>
                <div>
                  <h4 className={styles.relatedTitle}>{rc.title}</h4>
                  <p className={styles.relatedDesc}>{rc.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTABanner
        heading="Ready to Take the Next Step?"
        description={`Explore more resources or connect with the Airus team.`}
        primaryLabel={category.ctaLabel}
        primaryHref={category.ctaHref}
        secondaryLabel={category.secondaryCtaLabel}
        secondaryHref={category.secondaryCtaHref}
        variant="blue"
      />
    </>
  );
}
