import type { Metadata } from 'next';
import Hero from '@/components/Hero';
import FeatureCards from '@/components/FeatureCards';
import CTABanner from '@/components/CTABanner';

export const metadata: Metadata = {
  title: 'Training & Tools',
  description: 'The Airus Agent Platform — CRM, lead generation, marketing, coaching, scripts, and transaction support. Everything you need to close more deals.',
};

const toolCards = [
  { icon: '📊', title: 'CRM + Lead Pipeline System', description: 'Manage contacts, track leads, and automate follow-up so nothing falls through the cracks.', href: '/join' },
  { icon: '🏡', title: 'Listing Marketing Engine', description: 'Professional listing presentations, social graphics, and email campaigns — done for you.', href: '/join' },
  { icon: '📱', title: 'Social Media & Brand Building', description: 'Templates, content calendars, and strategy — grow your personal brand on autopilot.', href: '/join' },
  { icon: '🎓', title: 'Training & Coaching Programs', description: 'Live coaching, on-demand courses, and mentorship that leads to closings, not just certificates.', href: '/join' },
  { icon: '📋', title: 'Scripts, Playbooks & Systems', description: 'Proven scripts for prospecting, objections, and closings — tested in real transactions.', href: '/join' },
  { icon: '📝', title: 'Transaction Management Support', description: 'TC support and transaction coordination so you can focus on clients, not paperwork.', href: '/join' },
];

export default function TrainingPage() {
  return (
    <>
      <Hero
        variant="dark"
        badge="The Airus Platform"
        title={'Training & Tools\nBuilt for Results'}
        subtitle="Everything you need to generate leads, close deals, and build your brand — in one platform."
        primaryCTA={{ label: 'Join Airus', href: '/join' }}
        secondaryCTA={{ label: 'Schedule a Demo', href: '/contact' }}
      />

      <FeatureCards
        title="What's Included"
        subtitle="Every tool, system, and resource you need — from day one."
        cards={toolCards}
        columns={3}
      />

      <CTABanner
        heading="Ready to See It in Action?"
        description="Schedule a confidential call and we'll walk you through the entire platform."
        primaryLabel="Schedule a Call"
        primaryHref="/contact"
        secondaryLabel="Join Airus"
        secondaryHref="/join"
        variant="blue"
      />
    </>
  );
}
