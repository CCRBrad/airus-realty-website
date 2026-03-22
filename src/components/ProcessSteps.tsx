import styles from './ProcessSteps.module.css';

interface Step {
    number: number;
    title: string;
    description: string;
}

interface ProcessStepsProps {
    title: string;
    subtitle?: string;
    steps: Step[];
}

export default function ProcessSteps({ title, subtitle, steps }: ProcessStepsProps) {
    return (
        <section className={styles.section}>
            <div className="container">
                <div className={styles.header}>
                    <div className="divider divider--center" />
                    <h2>{title}</h2>
                    {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
                </div>
                <div className={styles.grid}>
                    {steps.map((step) => (
                        <div key={step.number} className={styles.step}>
                            <div className={styles.number}>{step.number}</div>
                            <h3 className={styles.stepTitle}>{step.title}</h3>
                            <p className={styles.stepDescription}>{step.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
