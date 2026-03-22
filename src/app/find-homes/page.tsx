import type { Metadata } from 'next';
import Hero from '@/components/Hero';
import CTABanner from '@/components/CTABanner';

export const metadata: Metadata = {
  title: 'Find Homes',
  description: 'Search for homes with Airus Realty. Browse listings, use filters, and find your dream home with expert guidance.',
};

export default function FindHomesPage() {
  return (
    <>
      <Hero
        variant="light"
        title="Find Your Dream Home"
        subtitle="Browse listings, explore neighborhoods, and work with an Airus agent who knows your market."
        primaryCTA={{ label: 'Talk to an Agent', href: '/contact' }}
        secondaryCTA={{ label: 'Mortgage Calculator', href: '/calculators/mortgage-calculator' }}
      />

      <section className="section">
        <div className="container" style={{ textAlign: 'center' }}>
          <div className="divider divider--center" />
          <h2>Home Search Coming Soon</h2>
          <p className="text-muted text-lg" style={{ maxWidth: '600px', margin: '0 auto var(--space-8)' }}>
            Our IDX-powered home search is being set up. In the meantime, connect with one of our agents to get personalized listings sent directly to you.
          </p>

          <div style={{
            maxWidth: '800px',
            margin: '0 auto',
            padding: 'var(--space-16) var(--space-8)',
            background: 'var(--color-off-white)',
            borderRadius: 'var(--radius-xl)',
            border: '1px solid var(--color-gray-200)',
          }}>
            <div style={{ fontSize: '64px', marginBottom: 'var(--space-6)' }}>🏠</div>
            <h3>IDX Search Integration</h3>
            <p className="text-muted" style={{ marginBottom: 'var(--space-6)' }}>
              Full search with filters, map view, and MLS data will be live shortly.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 'var(--space-4)', maxWidth: '500px', margin: '0 auto' }}>
              <div className="card card--flat" style={{ padding: 'var(--space-4)', textAlign: 'center' }}>
                <strong>🔍 Search Filters</strong>
                <p className="text-sm text-muted" style={{ marginTop: 'var(--space-1)' }}>Price, beds, baths, type</p>
              </div>
              <div className="card card--flat" style={{ padding: 'var(--space-4)', textAlign: 'center' }}>
                <strong>🗺️ Map View</strong>
                <p className="text-sm text-muted" style={{ marginTop: 'var(--space-1)' }}>Interactive neighborhood map</p>
              </div>
              <div className="card card--flat" style={{ padding: 'var(--space-4)', textAlign: 'center' }}>
                <strong>📋 Saved Searches</strong>
                <p className="text-sm text-muted" style={{ marginTop: 'var(--space-1)' }}>Get alerts on new listings</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABanner
        heading="Want Listings Sent to You?"
        description="Tell us what you're looking for and we'll send you curated listings that match your criteria."
        primaryLabel="Talk to an Agent"
        primaryHref="/contact"
        secondaryLabel="Calculate Your Budget"
        secondaryHref="/calculators/mortgage-calculator"
        variant="blue"
      />
    </>
  );
}
