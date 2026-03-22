import type { Metadata } from 'next';
import Link from 'next/link';
import Hero from '@/components/Hero';

export const metadata: Metadata = {
  title: 'Real Estate Calculators',
  description: 'Free real estate calculators — mortgage payment estimator, rent vs buy comparison, and seller net proceeds calculator.',
};

const calculators = [
  {
    icon: '🏠',
    title: 'Mortgage Calculator',
    description: 'Estimate your monthly mortgage payment with taxes, insurance, and HOA.',
    href: '/calculators/mortgage-calculator',
  },
  {
    icon: '💰',
    title: 'Rent vs Buy Calculator',
    description: 'Compare the true cost of renting vs owning over time.',
    href: '/calculators/rent-vs-buy',
  },
  {
    icon: '📈',
    title: 'Seller Net Proceeds Calculator',
    description: 'Estimate how much you\'ll walk away with after selling your home.',
    href: '/calculators/seller-net-proceeds',
  },
];

export default function CalculatorsPage() {
  return (
    <>
      <Hero
        variant="light"
        title="Real Estate Calculators"
        subtitle="Real numbers for real decisions. Whether you're buying, selling, or comparing — start here."
      />

      <section className="section">
        <div className="container">
          <div className="grid grid--3 stagger">
            {calculators.map((calc, i) => (
              <Link
                key={i}
                href={calc.href}
                className="card"
                style={{ textDecoration: 'none', color: 'inherit', textAlign: 'center' }}
              >
                <div style={{ fontSize: '48px', marginBottom: 'var(--space-4)' }}>{calc.icon}</div>
                <h3 style={{ marginBottom: 'var(--space-2)' }}>{calc.title}</h3>
                <p className="text-muted" style={{ fontSize: 'var(--font-size-sm)' }}>{calc.description}</p>
                <span style={{
                  display: 'inline-block',
                  marginTop: 'var(--space-4)',
                  fontSize: 'var(--font-size-sm)',
                  fontWeight: 600,
                  color: 'var(--color-blue)',
                }}>
                  Try it →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
