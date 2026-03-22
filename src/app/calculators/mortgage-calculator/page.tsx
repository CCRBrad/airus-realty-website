'use client';

import { useState, useMemo } from 'react';
import styles from '../calc.module.css';

export default function MortgageCalculatorPage() {
  const [homePrice, setHomePrice] = useState(400000);
  const [downPayment, setDownPayment] = useState(80000);
  const [interestRate, setInterestRate] = useState(6.5);
  const [loanTerm, setLoanTerm] = useState<15 | 30>(30);
  const [propertyTax, setPropertyTax] = useState(5000);
  const [insurance, setInsurance] = useState(1800);
  const [hoa, setHoa] = useState(0);

  const results = useMemo(() => {
    const principal = homePrice - downPayment;
    const monthlyRate = interestRate / 100 / 12;
    const numPayments = loanTerm * 12;

    let monthlyPI = 0;
    if (monthlyRate > 0) {
      monthlyPI = principal * (monthlyRate * Math.pow(1 + monthlyRate, numPayments)) / (Math.pow(1 + monthlyRate, numPayments) - 1);
    } else {
      monthlyPI = principal / numPayments;
    }

    const monthlyTax = propertyTax / 12;
    const monthlyInsurance = insurance / 12;
    const totalMonthly = monthlyPI + monthlyTax + monthlyInsurance + hoa;

    return {
      principal: Math.round(monthlyPI),
      tax: Math.round(monthlyTax),
      insurance: Math.round(monthlyInsurance),
      hoa,
      total: Math.round(totalMonthly),
    };
  }, [homePrice, downPayment, interestRate, loanTerm, propertyTax, insurance, hoa]);

  const fmt = (n: number) => '$' + n.toLocaleString();

  return (
    <div className={styles.calcPage}>
      <div className={`container ${styles.calcContainer}`}>
        <div className={styles.calcCard}>
          <div className={styles.calcHeader}>
            <h2>Mortgage Calculator</h2>
            <p>Estimate your monthly mortgage payment</p>
          </div>
          <div className={styles.calcBody}>
            <div className={styles.calcGrid}>
              {/* Home Price */}
              <div className={styles.sliderGroup}>
                <div className={styles.sliderHeader}>
                  <span className={styles.sliderLabel}>Home Price</span>
                  <span className={styles.sliderValue}>{fmt(homePrice)}</span>
                </div>
                <input type="range" className={styles.slider} min={50000} max={2000000} step={5000} value={homePrice} onChange={e => setHomePrice(+e.target.value)} />
              </div>

              {/* Down Payment */}
              <div className={styles.sliderGroup}>
                <div className={styles.sliderHeader}>
                  <span className={styles.sliderLabel}>Down Payment ({Math.round(downPayment / homePrice * 100)}%)</span>
                  <span className={styles.sliderValue}>{fmt(downPayment)}</span>
                </div>
                <input type="range" className={styles.slider} min={0} max={homePrice} step={5000} value={downPayment} onChange={e => setDownPayment(+e.target.value)} />
              </div>

              {/* Interest Rate */}
              <div className={styles.sliderGroup}>
                <div className={styles.sliderHeader}>
                  <span className={styles.sliderLabel}>Interest Rate</span>
                  <span className={styles.sliderValue}>{interestRate.toFixed(2)}%</span>
                </div>
                <input type="range" className={styles.slider} min={1} max={12} step={0.125} value={interestRate} onChange={e => setInterestRate(+e.target.value)} />
              </div>

              {/* Loan Term */}
              <div>
                <span className={styles.sliderLabel} style={{ display: 'block', marginBottom: 'var(--space-2)' }}>Loan Term</span>
                <div className={styles.toggleGroup}>
                  <button className={`${styles.toggleBtn} ${loanTerm === 30 ? styles.toggleBtnActive : ''}`} onClick={() => setLoanTerm(30)}>30 Years</button>
                  <button className={`${styles.toggleBtn} ${loanTerm === 15 ? styles.toggleBtnActive : ''}`} onClick={() => setLoanTerm(15)}>15 Years</button>
                </div>
              </div>

              {/* Property Taxes */}
              <div className={styles.sliderGroup}>
                <div className={styles.sliderHeader}>
                  <span className={styles.sliderLabel}>Property Taxes (Annual)</span>
                  <span className={styles.sliderValue}>{fmt(propertyTax)}</span>
                </div>
                <input type="range" className={styles.slider} min={0} max={25000} step={250} value={propertyTax} onChange={e => setPropertyTax(+e.target.value)} />
              </div>

              {/* Insurance */}
              <div className={styles.sliderGroup}>
                <div className={styles.sliderHeader}>
                  <span className={styles.sliderLabel}>Insurance (Annual)</span>
                  <span className={styles.sliderValue}>{fmt(insurance)}</span>
                </div>
                <input type="range" className={styles.slider} min={0} max={10000} step={100} value={insurance} onChange={e => setInsurance(+e.target.value)} />
              </div>

              {/* HOA */}
              <div className={`${styles.sliderGroup} ${styles.calcFullWidth}`}>
                <div className={styles.sliderHeader}>
                  <span className={styles.sliderLabel}>HOA (Monthly)</span>
                  <span className={styles.sliderValue}>{fmt(hoa)}</span>
                </div>
                <input type="range" className={styles.slider} min={0} max={1000} step={25} value={hoa} onChange={e => setHoa(+e.target.value)} />
              </div>
            </div>

            {/* Results */}
            <div className={styles.results}>
              <div className={styles.resultTotal}>
                <div className={styles.resultLabel}>Estimated Monthly Payment</div>
                <div className={styles.resultAmount}>{fmt(results.total)}</div>
              </div>
              <div className={styles.resultBreakdown}>
                <div className={styles.resultRow}>
                  <span className={styles.resultRowLabel}>Principal & Interest</span>
                  <span className={styles.resultRowValue}>{fmt(results.principal)}</span>
                </div>
                <div className={styles.resultRow}>
                  <span className={styles.resultRowLabel}>Property Taxes</span>
                  <span className={styles.resultRowValue}>{fmt(results.tax)}</span>
                </div>
                <div className={styles.resultRow}>
                  <span className={styles.resultRowLabel}>Insurance</span>
                  <span className={styles.resultRowValue}>{fmt(results.insurance)}</span>
                </div>
                <div className={styles.resultRow}>
                  <span className={styles.resultRowLabel}>HOA</span>
                  <span className={styles.resultRowValue}>{fmt(results.hoa)}</span>
                </div>
              </div>
            </div>

            {/* Disclaimer */}
            <div className={styles.disclaimer}>
              <p>This calculator provides estimates only and does not constitute a loan offer. Actual payments may vary based on lender, credit profile, and market conditions.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
