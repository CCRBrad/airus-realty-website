import styles from './StatsBar.module.css';

interface Stat {
    value: string;
    label: string;
}

interface StatsBarProps {
    stats: Stat[];
    variant?: 'dark' | 'light';
    disclaimer?: string;
}

export default function StatsBar({ stats, variant = 'dark', disclaimer }: StatsBarProps) {
    return (
        <>
            <div className={`${styles.bar} ${styles[variant]}`}>
                <div className="container">
                    <div className={styles.grid}>
                        {stats.map((stat, i) => (
                            <div key={i} className={styles.stat}>
                                <div className={styles.value}>{stat.value}</div>
                                <div className={styles.label}>{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {disclaimer && (
                <div className={`${styles.disclaimer} ${variant === 'dark' ? styles.dark : ''}`} style={variant === 'dark' ? { background: 'var(--color-navy)', color: 'var(--color-gray-500)' } : {}}>
                    <p style={{ margin: 0 }}>{disclaimer}</p>
                </div>
            )}
        </>
    );
}
