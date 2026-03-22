import type { Metadata } from 'next';
import Hero from '@/components/Hero';
import FeatureCards from '@/components/FeatureCards';
import CTABanner from '@/components/CTABanner';

export const metadata: Metadata = {
  title: 'Sell Your Home',
  description: 'Sell your home with confidence. Expert pricing, marketing, and negotiation from Airus Realty agents.',
};

const sellCards = [
  { icon: '📊', title: 'Pricing Strategy', description: 'Data-driven pricing to position your home competitively and maximize your return.', href: '/calculators/seller-net-proceeds' },
  { icon: '📸', title: 'Marketing Exposure', description: 'Professional photography, social media promotion, MLS syndication, and targeted advertising.', href: '/contact' },
  { icon: '🤝', title: 'Negotiation Expertise', description: 'Skilled negotiation to protect your interests and get the best possible outcome.', href: '/contact' },
];

export default function SellPage() {
  return (
    <>
      <Hero
        variant="dark"
        title="Sell Your Home With Confidence"
        subtitle="Strategic pricing, professional marketing, and expert negotiation — our agents know how to get results."
        primaryCTA={{ label: 'Get Home Value', href: '/calculators/seller-net-proceeds' }}
        secondaryCTA={{ label: 'Talk to an Agent', href: '/contact' }}
      />

      <FeatureCards
        title="Why Sell With Airus"
        subtitle="Our agents bring the strategy, tools, and expertise to maximize your sale."
        cards={sellCards}
        columns={3}
      />

      <CTABanner
        heading="What's Your Home Worth?"
        description="Use our seller net proceeds calculator or connect with an agent for a personalized home valuation."
        primaryLabel="Estimate Net Proceeds"
        primaryHref="/calculators/seller-net-proceeds"
        secondaryLabel="Talk to an Agent"
        secondaryHref="/contact"
        variant="blue"
      />
    </>
  );
}
