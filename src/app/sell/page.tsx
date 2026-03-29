import type { Metadata } from 'next';
import Link from 'next/link';
import Hero from '@/components/Hero';
import FeatureCards from '@/components/FeatureCards';
import CTABanner from '@/components/CTABanner';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Sell Your Home',
  description: 'Sell your home with confidence. Expert pricing, marketing, and negotiation from Airus Realty agents.',
};

const sellCards = [
  { icon: '📊', title: 'Pricing Strategy', description: 'Data-driven pricing to position your home competitively and maximize your return.', href: '/sell/home-value' },
  { icon: '📸', title: 'Marketing Exposure', description: 'Professional photography, social media promotion, MLS syndication, and targeted advertising.', href: '/sell#marketing' },
  { icon: '🤝', title: 'Negotiation Expertise', description: 'Skilled negotiation to protect your interests and get the best possible outcome.', href: '/contact' },
];

export default function SellPage() {
  return (
    <>
      <Hero
        variant="dark"
        title="Sell Your Home With Confidence"
        subtitle="Strategic pricing, professional marketing, and expert negotiation — our agents know how to get results."
        primaryCTA={{ label: 'Get Home Value', href: '/sell/home-value' }}
        secondaryCTA={{ label: 'Talk to an Agent', href: '/contact' }}
      />

      <FeatureCards
        title="Why Sell With Airus"
        subtitle="Our agents bring the strategy, tools, and expertise to maximize your sale."
        cards={sellCards}
        columns={3}
      />

      {/* Conversion Block — Two Cards */}
      <section className={styles.conversionSection}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <div className="divider divider--center" />
            <h2>What Would You Like to Know?</h2>
            <p className={styles.sectionSubtitle}>
              Two quick tools to help you understand your position.
            </p>
          </div>
          <div className={styles.conversionGrid}>
            {/* Card 1 — Home Value */}
            <Link href="/sell/home-value" className={styles.conversionCard}>
              <span className={styles.conversionIcon}>🏡</span>
              <h3 className={styles.conversionTitle}>Get Your Home Value</h3>
              <p className={styles.conversionDesc}>
                Receive a personalized estimate based on your property and local market activity.
              </p>
              <span className={styles.conversionCta}>Get Home Value →</span>
            </Link>

            {/* Card 2 — Net Proceeds */}
            <Link href="/calculators/seller-net-proceeds" className={styles.conversionCard}>
              <span className={styles.conversionIcon}>💰</span>
              <h3 className={styles.conversionTitle}>Estimate Net Proceeds</h3>
              <p className={styles.conversionDesc}>
                See what you could walk away with after commissions, loan payoff, and closing costs.
              </p>
              <span className={styles.conversionCta}>Estimate Net Proceeds →</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Marketing Anchor Section */}
      <section className={styles.marketingSection} id="marketing">
        <div className="container">
          <div className={styles.marketingGrid}>
            <div className={styles.marketingText}>
              <div className="divider" />
              <h2>Marketing That Gets Results</h2>
              <p>
                When you list with Airus, your home gets the exposure it deserves — from professional media to targeted digital campaigns.
              </p>
              <div className={styles.marketingList}>
                <div className={styles.marketingItem}>
                  <span className={styles.marketingCheck}>✓</span>
                  Professional photography & virtual tours
                </div>
                <div className={styles.marketingItem}>
                  <span className={styles.marketingCheck}>✓</span>
                  MLS syndication to hundreds of sites
                </div>
                <div className={styles.marketingItem}>
                  <span className={styles.marketingCheck}>✓</span>
                  Social media promotion & paid campaigns
                </div>
                <div className={styles.marketingItem}>
                  <span className={styles.marketingCheck}>✓</span>
                  Email marketing to buyer agents
                </div>
                <div className={styles.marketingItem}>
                  <span className={styles.marketingCheck}>✓</span>
                  Print materials & open house support
                </div>
              </div>
            </div>
            <div className={styles.marketingVisual}>
              <h3 style={{ fontSize: 'var(--font-size-xl)', fontWeight: 700, color: 'var(--color-white)' }}>
                Your Listing, Maximum Exposure
              </h3>
              <div className={styles.marketingStatGrid}>
                <div className={styles.marketingStat}>
                  <strong>500+</strong>
                  <span>Listing Sites</span>
                </div>
                <div className={styles.marketingStat}>
                  <strong>Pro</strong>
                  <span>Photography</span>
                </div>
                <div className={styles.marketingStat}>
                  <strong>Social</strong>
                  <span>Campaigns</span>
                </div>
                <div className={styles.marketingStat}>
                  <strong>Email</strong>
                  <span>Marketing</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABanner
        heading="What's Your Home Worth?"
        description="Use our seller net proceeds calculator or request a personalized home valuation from an Airus agent."
        primaryLabel="Estimate Net Proceeds"
        primaryHref="/calculators/seller-net-proceeds"
        secondaryLabel="Get Home Value"
        secondaryHref="/sell/home-value"
        variant="blue"
      />
    </>
  );
}
