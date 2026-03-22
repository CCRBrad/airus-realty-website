import type { Metadata } from 'next';
import Link from 'next/link';
import Hero from '@/components/Hero';
import CTABanner from '@/components/CTABanner';

export const metadata: Metadata = {
  title: 'Learning Center',
  description: 'Learn. Grow. Win. Real estate guides, training, and market insights for agents, buyers, and sellers.',
};

const categories = [
  {
    id: 'new-agent',
    icon: '🚀',
    title: 'New Agent Guide',
    description: 'Everything you need to know to launch your real estate career — from licensing to your first closing.',
    articles: ['How to Get Your Real Estate License', 'Building Your Sphere of Influence', 'Your First 90 Days Checklist'],
  },
  {
    id: 'listings',
    icon: '🏠',
    title: 'Listing Growth',
    description: 'Strategies to win more listings, market them effectively, and close at top dollar.',
    articles: ['The Perfect Listing Presentation', 'Pricing Strategy That Works', 'Marketing Your Listings for Maximum Exposure'],
  },
  {
    id: 'buyers',
    icon: '🤝',
    title: 'Buyer Conversion',
    description: 'Convert more buyer leads into signed agreements and successful closings.',
    articles: ['The Buyer Consultation Blueprint', 'Handling Buyer Objections', 'From Lead to Closing in 30 Days'],
  },
  {
    id: 'social',
    icon: '📱',
    title: 'Social Media Strategy',
    description: 'Build your personal brand and generate leads through social media marketing.',
    articles: ['Instagram for Real Estate Agents', 'Content Calendar Template', 'Video Marketing That Converts'],
  },
  {
    id: 'market',
    icon: '📊',
    title: 'Market Insights',
    description: 'Stay informed with current market trends, data analysis, and expert commentary.',
    articles: ['Monthly Market Report', 'Interest Rate Impact on Buying Power', 'Neighborhood Market Snapshots'],
  },
  {
    id: 'buyer-guides',
    icon: '🔑',
    title: 'Buyer Education',
    description: 'Guides to help homebuyers navigate the process with confidence.',
    articles: ['First-Time Homebuyer Guide', 'Understanding the Mortgage Process', 'What to Expect at Closing'],
  },
  {
    id: 'seller-guides',
    icon: '💸',
    title: 'Seller Education',
    description: 'Resources to help sellers prepare, price, and sell their home effectively.',
    articles: ['How to Prepare Your Home for Sale', 'Understanding Net Proceeds', 'Timeline: From Listing to Closing'],
  },
];

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
                key={cat.id}
                id={cat.id}
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
                </div>
                <div>
                  <h4 style={{ fontSize: 'var(--font-size-sm)', fontWeight: 700, color: 'var(--color-gray-500)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 'var(--space-3)' }}>
                    Featured Articles
                  </h4>
                  <ul style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
                    {cat.articles.map((article, i) => (
                      <li key={i}>
                        <Link
                          href={`/learning-center#${cat.id}`}
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
                          {article}
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
