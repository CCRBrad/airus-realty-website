'use client';

import { useState } from 'react';
import styles from './FAQ.module.css';

interface FAQItem {
    question: string;
    answer: string;
}

interface FAQProps {
    title?: string;
    subtitle?: string;
    items: FAQItem[];
}

export default function FAQ({ title = 'Frequently Asked Questions', subtitle, items }: FAQProps) {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section className={styles.section}>
            <div className="container">
                <div className={styles.header}>
                    <div className="divider divider--center" />
                    <h2>{title}</h2>
                    {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
                </div>
                <div className={styles.list}>
                    {items.map((item, i) => (
                        <div key={i} className={styles.item}>
                            <button
                                className={styles.question}
                                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                                aria-expanded={openIndex === i}
                            >
                                {item.question}
                                <svg
                                    className={`${styles.chevron} ${openIndex === i ? styles.chevronOpen : ''}`}
                                    viewBox="0 0 20 20"
                                    fill="none"
                                >
                                    <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                            {openIndex === i && (
                                <div className={styles.answer}>
                                    {item.answer}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
