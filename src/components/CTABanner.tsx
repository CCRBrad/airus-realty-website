import Link from 'next/link';
import styles from './CTABanner.module.css';

interface CTABannerProps {
    heading: string;
    description: string;
    primaryLabel: string;
    primaryHref: string;
    secondaryLabel?: string;
    secondaryHref?: string;
    variant?: 'blue' | 'light';
}

export default function CTABanner({
    heading,
    description,
    primaryLabel,
    primaryHref,
    secondaryLabel,
    secondaryHref,
    variant = 'blue',
}: CTABannerProps) {
    return (
        <section className={`${styles.banner} ${styles[variant]}`}>
            <div className="container">
                <div className={styles.inner}>
                    <h2 className={styles.heading}>{heading}</h2>
                    <p className={styles.description}>{description}</p>
                    <div className={styles.actions}>
                        <Link
                            href={primaryHref}
                            className={`btn ${variant === 'blue' ? 'btn--gold' : 'btn--primary'} btn--lg`}
                        >
                            {primaryLabel}
                        </Link>
                        {secondaryLabel && secondaryHref && (
                            <Link
                                href={secondaryHref}
                                className={`btn ${variant === 'blue' ? 'btn--ghost' : 'btn--secondary'} btn--lg`}
                            >
                                {secondaryLabel}
                            </Link>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
