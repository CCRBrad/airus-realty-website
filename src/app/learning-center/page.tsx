import type { Metadata } from 'next';
import Link from 'next/link';
import Hero from '@/components/Hero';
import CTABanner from '@/components/CTABanner';
import { categories } from '@/data/learningData';

export const metadata: Metadata = {
  title: 'Learning Center',
  description: 'Learn. Grow. Win. Real estate guides, training, and market insights for agents, buyers, and sellers.',
};

export default function LearningCenterPage() {
  return (
    <>
      <Hero
        variant="light"
        title="Learn. Grow. Win."
        subtitle="Real estate resources for agents, buyers, and sellers — tips, strategies, and market intelligence."
      />

      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gap: 'var(--space-6)' }}>
            {categories.map((cat) => (
              <div
                key={cat.slug}
                id={cat.slug}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr',
                  gap: 'var(--space-6)',
                  padding: 'var(--space-8)',
                  background: 'var(--color-white)',
                  borderRadius: 'var(--radius-xl)',
                  border: '1px solid var(--color-gray-200)',
                }}
              >
                <div>
                  <div style={{ fontSize: '32px', marginBottom: 'var(--space-3)' }}>{cat.icon}</div>
                  <h3>{cat.title}</h3>
                  <p className="text-muted">{cat.description}</p>
                  <Link
                    href={`/learning-center/${cat.slug}`}
                    className="btn btn--primary btn--sm"
                    style={{ marginTop: 'var(--space-3)' }}
                  >
                    Explore Category →
                  </Link>
                </div>
                <div>
                  <h4 style={{ fontSize: 'var(--font-size-sm)', fontWeight: 700, color: 'var(--color-gray-500)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 'var(--space-3)' }}>
                    Featured Articles
                  </h4>
                  <ul style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
                    {cat.articles.map((article) => (
                      <li key={article.slug}>
                        <Link
                          href={`/learning-center/${cat.slug}/${article.slug}`}
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 'var(--space-2)',
                            padding: 'var(--space-3) var(--space-4)',
                            background: 'var(--color-off-white)',
                            borderRadius: 'var(--radius-md)',
                            fontSize: 'var(--font-size-sm)',
                            fontWeight: 500,
                            color: 'var(--color-gray-700)',
                            textDecoration: 'none',
                            transition: 'background 0.2s, color 0.2s',
                          }}
                        >
                          <span style={{ color: 'var(--color-blue)' }}>→</span>
                          {article.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        heading="Want to Contribute or Learn More?"
        description="Our learning center is always growing. Join Airus and get access to exclusive training and resources."
        primaryLabel="Join Airus"
        primaryHref="/join"
        secondaryLabel="Contact Us"
        secondaryHref="/contact"
        variant="blue"
      />
    </>
  );
}
