import Link from 'next/link';
import Image from 'next/image';
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
    image?: string;
    imageAlt?: string;
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
    image,
    imageAlt,
    children,
}: HeroProps) {
    const hasSplitImage = !!image && variant === 'home';
    const heroAlign = hasSplitImage ? 'left' : align;
    return (
        <section className={`${styles.hero} ${styles[variant]} ${heroAlign === 'center' ? styles.alignCenter : styles.alignLeft} ${hasSplitImage ? styles.heroSplit : ''}`}>
            <div className={styles.bg} />
            <div className="container">
                <div className={hasSplitImage ? styles.splitGrid : undefined}>
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
                    {hasSplitImage && (
                        <div className={styles.heroImageWrap}>
                            <Image
                                src={image}
                                alt={imageAlt || ''}
                                width={640}
                                height={640}
                                className={styles.heroImage}
                                priority
                            />
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}
