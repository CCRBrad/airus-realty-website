import Link from 'next/link';
import styles from './Hero.module.css';

interface HeroProps {
    badge?: string;
    title: string;
    subtitle: string;
    primaryCTA?: { label: string; href: string };
    secondaryCTA?: { label: string; href: string };
    variant?: 'home' | 'dark' | 'light';
    align?: 'center' | 'left';
    trustBadges?: string[];
    compliance?: string;
    children?: React.ReactNode;
}

export default function Hero({
    badge,
    title,
    subtitle,
    primaryCTA,
    secondaryCTA,
    variant = 'dark',
    align = 'center',
    trustBadges,
    compliance,
    children,
}: HeroProps) {
    return (
        <section className={`${styles.hero} ${styles[variant]} ${align === 'center' ? styles.alignCenter : styles.alignLeft}`}>
            <div className={styles.bg} />
            <div className="container">
                <div className={styles.content}>
                    {badge && <span className={styles.badge}>{badge}</span>}
                    <h1 className={styles.title}>
                        {title.split('\n').map((line, i, arr) => (
                            <span key={i}>{line}{i < arr.length - 1 && <br />}</span>
                        ))}
                    </h1>
                    <p className={styles.subtitle}>{subtitle}</p>
                    <div className={styles.actions}>
                        {primaryCTA && (
                            <Link href={primaryCTA.href} className="btn btn--gold btn--lg">
                                {primaryCTA.label}
                            </Link>
                        )}
                        {secondaryCTA && (
                            <Link
                                href={secondaryCTA.href}
                                className={`btn ${variant === 'light' ? 'btn--secondary' : 'btn--ghost'} btn--lg`}
                            >
                                {secondaryCTA.label}
                            </Link>
                        )}
                    </div>
                    {trustBadges && trustBadges.length > 0 && (
                        <div className={styles.trustRow}>
                            {trustBadges.map((b, i) => (
                                <span key={i} className={styles.trustBadge}>{b}</span>
                            ))}
                        </div>
                    )}
                    {compliance && (
                        <p className={styles.compliance}>{compliance}</p>
                    )}
                    {children}
                </div>
            </div>
        </section>
    );
}
