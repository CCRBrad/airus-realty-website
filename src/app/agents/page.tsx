import type { Metadata } from 'next';
import Hero from '@/components/Hero';
import FeatureCards from '@/components/FeatureCards';
import CTABanner from '@/components/CTABanner';

export const metadata: Metadata = {
  title: 'Why Agents Choose Airus',
  description: 'Discover why real estate agents are choosing Airus Realty — training, leads, marketing, technology, and a clear path to growth.',
};

const platformCards = [
  { icon: '📊', title: 'CRM + Lead Pipeline', description: 'Track leads, automate follow-up, and manage your entire pipeline in one place.', href: '/training#crm' },
  { icon: '🏡', title: 'Listing Marketing', description: 'Professional listing presentations, social graphics, and email campaigns.', href: '/training#marketing' },
  { icon: '📱', title: 'Brand Building', description: 'Personal branding templates, social media strategy, and content calendars.', href: '/training#social' },
  { icon: '🎓', title: 'Training & Coaching', description: 'Live coaching, on-demand courses, and mentorship that leads to closings.', href: '/training#coaching' },
  { icon: '📋', title: 'Scripts & Playbooks', description: 'Proven scripts for prospecting, objections, and closing — tested in real deals.', href: '/training#scripts' },
  { icon: '📝', title: 'Transaction Support', description: 'TC support and coordination so you focus on clients, not paperwork.', href: '/training' },
];

export default function AgentsPage() {
  return (
    <>
      <Hero
        variant="dark"
        badge="For Real Estate Agents"
        title={'Why Agents Are\nChoosing Airus'}
        subtitle="We don't just offer a brokerage — we offer a system for growth. Real training, real tools, and real support."
        primaryCTA={{ label: 'Join Airus', href: '/join' }}
        secondaryCTA={{ label: 'See the Platform', href: '#platform' }}
      />

      <div id="platform">
        <FeatureCards
          title="The Airus Agent Platform"
          subtitle="Everything you need to generate leads, close deals, and build your brand."
          cards={platformCards}
          columns={3}
        />
      </div>

      <CTABanner
        heading="Ready to Grow Your Business?"
        description="Join the brokerage that invests in your growth — with training, technology, and mentorship."
        primaryLabel="Join Airus"
        primaryHref="/join"
        secondaryLabel="Schedule a Call"
        secondaryHref="/contact"
        variant="blue"
      />
    </>
  );
}
