'use client';

import { useState, useMemo } from 'react';
import styles from '../calc.module.css';

export default function RentVsBuyPage() {
  const [monthlyRent, setMonthlyRent] = useState(2000);
  const [homePrice, setHomePrice] = useState(400000);
  const [downPayment, setDownPayment] = useState(80000);
  const [interestRate, setInterestRate] = useState(6.5);
  const [loanTerm] = useState(30);
  const [propertyTax, setPropertyTax] = useState(5000);
  const [insurance, setInsurance] = useState(1800);
  const [yearsStaying, setYearsStaying] = useState(7);

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
    const monthlyOwn = monthlyPI + monthlyTax + monthlyInsurance;

    const totalRent = monthlyRent * yearsStaying * 12;
    const totalOwn = monthlyOwn * yearsStaying * 12 + downPayment;

    // Simplified equity: assume 3% annual appreciation
    const futureValue = homePrice * Math.pow(1.03, yearsStaying);
    const equityBuilt = futureValue - principal + downPayment;

    // Break-even: when total rent > total buy cost
    let breakEven = 0;
    for (let y = 1; y <= 30; y++) {
      const rentCost = monthlyRent * y * 12;
      const ownCost = monthlyOwn * y * 12 + downPayment;
      if (rentCost >= ownCost) {
        breakEven = y;
        break;
      }
    }

    return {
      monthlyRent,
      monthlyOwn: Math.round(monthlyOwn),
      totalRent: Math.round(totalRent),
      totalOwn: Math.round(totalOwn),
      equityBuilt: Math.round(equityBuilt),
      breakEven,
      buyWins: totalOwn < totalRent,
    };
  }, [monthlyRent, homePrice, downPayment, interestRate, loanTerm, propertyTax, insurance, yearsStaying]);

  const fmt = (n: number) => '$' + n.toLocaleString();

  return (
    <div className={styles.calcPage}>
      <div className={`container ${styles.calcContainer}`}>
        <div className={styles.calcCard}>
          <div className={styles.calcHeader}>
            <h2>Rent vs Buy Calculator</h2>
            <p>Compare the true cost of renting vs owning</p>
          </div>
          <div className={styles.calcBody}>
            <div className={styles.calcGrid}>
              <div className={styles.sliderGroup}>
                <div className={styles.sliderHeader}>
                  <span className={styles.sliderLabel}>Monthly Rent</span>
                  <span className={styles.sliderValue}>{fmt(monthlyRent)}</span>
                </div>
                <input type="range" className={styles.slider} min={500} max={8000} step={50} value={monthlyRent} onChange={e => setMonthlyRent(+e.target.value)} />
              </div>

              <div className={styles.sliderGroup}>
                <div className={styles.sliderHeader}>
                  <span className={styles.sliderLabel}>Home Price</span>
                  <span className={styles.sliderValue}>{fmt(homePrice)}</span>
                </div>
                <input type="range" className={styles.slider} min={100000} max={2000000} step={10000} value={homePrice} onChange={e => setHomePrice(+e.target.value)} />
              </div>

              <div className={styles.sliderGroup}>
                <div className={styles.sliderHeader}>
                  <span className={styles.sliderLabel}>Down Payment ({Math.round(downPayment / homePrice * 100)}%)</span>
                  <span className={styles.sliderValue}>{fmt(downPayment)}</span>
                </div>
                <input type="range" className={styles.slider} min={0} max={homePrice * 0.5} step={5000} value={downPayment} onChange={e => setDownPayment(+e.target.value)} />
              </div>

              <div className={styles.sliderGroup}>
                <div className={styles.sliderHeader}>
                  <span className={styles.sliderLabel}>Interest Rate</span>
                  <span className={styles.sliderValue}>{interestRate.toFixed(2)}%</span>
                </div>
                <input type="range" className={styles.slider} min={2} max={12} step={0.125} value={interestRate} onChange={e => setInterestRate(+e.target.value)} />
              </div>

              <div className={styles.sliderGroup}>
                <div className={styles.sliderHeader}>
                  <span className={styles.sliderLabel}>Property Taxes (Annual)</span>
                  <span className={styles.sliderValue}>{fmt(propertyTax)}</span>
                </div>
                <input type="range" className={styles.slider} min={0} max={25000} step={250} value={propertyTax} onChange={e => setPropertyTax(+e.target.value)} />
              </div>

              <div className={styles.sliderGroup}>
                <div className={styles.sliderHeader}>
                  <span className={styles.sliderLabel}>Insurance (Annual)</span>
                  <span className={styles.sliderValue}>{fmt(insurance)}</span>
                </div>
                <input type="range" className={styles.slider} min={0} max={10000} step={100} value={insurance} onChange={e => setInsurance(+e.target.value)} />
              </div>

              <div className={`${styles.sliderGroup} ${styles.calcFullWidth}`}>
                <div className={styles.sliderHeader}>
                  <span className={styles.sliderLabel}>Years You Plan to Stay</span>
                  <span className={styles.sliderValue}>{yearsStaying} years</span>
                </div>
                <input type="range" className={styles.slider} min={1} max={30} step={1} value={yearsStaying} onChange={e => setYearsStaying(+e.target.value)} />
              </div>
            </div>

            {/* Comparison Results */}
            <div className={styles.compareResults}>
              <div className={styles.compareCards}>
                <div className={`${styles.compareCard} ${!results.buyWins ? styles.winner : ''}`}>
                  <div className={styles.compareCardLabel}>Renting</div>
                  <div className={styles.compareCardAmount}>{fmt(results.monthlyRent)}<span className={styles.compareCardSub}>/mo</span></div>
                  <div className={styles.compareCardSub}>Total over {yearsStaying} years: {fmt(results.totalRent)}</div>
                </div>
                <div className={`${styles.compareCard} ${results.buyWins ? styles.winner : ''}`}>
                  <div className={styles.compareCardLabel}>Buying</div>
                  <div className={styles.compareCardAmount}>{fmt(results.monthlyOwn)}<span className={styles.compareCardSub}>/mo</span></div>
                  <div className={styles.compareCardSub}>Total over {yearsStaying} years: {fmt(results.totalOwn)}</div>
                </div>
              </div>

              <div className={styles.results} style={{ marginTop: 'var(--space-6)' }}>
                <div className={styles.resultBreakdown}>
                  <div className={styles.resultRow}>
                    <span className={styles.resultRowLabel}>Equity Built</span>
                    <span className={`${styles.resultRowValue} ${styles.positive}`}>{fmt(results.equityBuilt)}</span>
                  </div>
                  {results.breakEven > 0 && (
                    <div className={styles.resultRow}>
                      <span className={styles.resultRowLabel}>Break-even Point</span>
                      <span className={styles.resultRowValue}>{results.breakEven} years</span>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className={styles.disclaimer}>
              <p>Results are estimates only and not financial advice. Calculations assume 3% annual home appreciation. Actual results will vary based on market conditions, maintenance costs, and other factors.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
