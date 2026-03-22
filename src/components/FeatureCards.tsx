import Link from 'next/link';
import styles from './FeatureCards.module.css';

interface Card {
    icon: string;
    title: string;
    description: string;
    href: string;
}

interface FeatureCardsProps {
    title: string;
    subtitle?: string;
    cards: Card[];
    columns?: 3 | 4;
    alt?: boolean;
}

export default function FeatureCards({
    title,
    subtitle,
    cards,
    columns = 3,
    alt = false,
}: FeatureCardsProps) {
    return (
        <section className={`${styles.section} ${alt ? styles.alt : ''}`}>
            <div className="container">
                <div className={styles.header}>
                    <div className="divider divider--center" />
                    <h2>{title}</h2>
                    {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
                </div>
                <div className={`${styles.grid} ${columns === 3 ? styles.cols3 : styles.cols4}`}>
                    {cards.map((card, i) => (
                        <Link key={i} href={card.href} className={styles.card}>
                            <span className={styles.icon}>{card.icon}</span>
                            <h3 className={styles.cardTitle}>{card.title}</h3>
                            <p className={styles.cardDescription}>{card.description}</p>
                            <span className={styles.arrow}>Learn More →</span>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
