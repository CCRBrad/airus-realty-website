import type { Metadata } from 'next';
import Hero from '@/components/Hero';
import FeatureCards from '@/components/FeatureCards';
import CTABanner from '@/components/CTABanner';

export const metadata: Metadata = {
  title: 'Culture',
  description: 'At Airus Realty, culture isn\'t a perk — it\'s the foundation. Growth-minded agents, collaborative spirit, and a commitment to excellence.',
};

const cultureCards = [
  { icon: '🚀', title: 'Growth Mindset', description: 'We believe every agent can grow — and we build the systems to make it happen.', href: '/join' },
  { icon: '🤝', title: 'Collaboration Over Competition', description: 'Our agents support each other. When one wins, we all win.', href: '/join' },
  { icon: '💡', title: 'Innovation First', description: 'Modern tools, fresh strategies, and a willingness to do things differently.', href: '/training' },
  { icon: '🎯', title: 'Accountability', description: 'We set goals, track progress, and hold each other to a higher standard.', href: '/join' },
  { icon: '🛡️', title: 'Integrity', description: 'Honest advice, transparent operations, and doing what\'s right for clients.', href: '/join' },
  { icon: '⚡', title: 'Speed of Execution', description: 'In real estate, timing matters. We move fast without cutting corners.', href: '/join' },
];

export default function CulturePage() {
  return (
    <>
      <Hero
        variant="dark"
        title={'This Is Airus Culture'}
        subtitle="We're building something different — a brokerage where agents actually want to be. Where growth is real, support is genuine, and the culture drives results."
        primaryCTA={{ label: 'Join the Team', href: '/join' }}
        secondaryCTA={{ label: 'Meet Our Agents', href: '/agents' }}
      />

      <FeatureCards
        title="What We Believe"
        subtitle="Our values aren't just words on a wall — they're how we operate every day."
        cards={cultureCards}
        columns={3}
      />

      <CTABanner
        heading="Want to Be Part of Something Bigger?"
        description="Join a brokerage that cares about your growth as much as you do."
        primaryLabel="Join Airus"
        primaryHref="/join"
        secondaryLabel="Talk to Us"
        secondaryHref="/contact"
        variant="blue"
      />
    </>
  );
}
