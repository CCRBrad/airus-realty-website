'use client';

import { useState, useMemo } from 'react';
import styles from '../calc.module.css';

export default function SellerNetProceedsPage() {
  const [homeValue, setHomeValue] = useState(500000);
  const [mortgageBalance, setMortgageBalance] = useState(300000);
  const [commissionRate, setCommissionRate] = useState(5);
  const [closingCostRate, setClosingCostRate] = useState(2);
  const [repairs, setRepairs] = useState(5000);

  const results = useMemo(() => {
    const commission = homeValue * (commissionRate / 100);
    const closingCosts = homeValue * (closingCostRate / 100);
    const totalCosts = commission + closingCosts + repairs;
    const netProceeds = homeValue - mortgageBalance - totalCosts;

    return {
      homeValue,
      mortgageBalance,
      commission: Math.round(commission),
      closingCosts: Math.round(closingCosts),
      repairs,
      totalCosts: Math.round(totalCosts),
      netProceeds: Math.round(netProceeds),
    };
  }, [homeValue, mortgageBalance, commissionRate, closingCostRate, repairs]);

  const fmt = (n: number) => {
    const prefix = n < 0 ? '-' : '';
    return prefix + '$' + Math.abs(n).toLocaleString();
  };

  return (
    <div className={styles.calcPage}>
      <div className={`container ${styles.calcContainer}`}>
        <div className={styles.calcCard}>
          <div className={styles.calcHeader}>
            <h2>Seller Net Proceeds Calculator</h2>
            <p>Estimate how much you&apos;ll walk away with after selling</p>
          </div>
          <div className={styles.calcBody}>
            <div className={styles.calcGrid}>
              <div className={styles.sliderGroup}>
                <div className={styles.sliderHeader}>
                  <span className={styles.sliderLabel}>Estimated Home Value</span>
                  <span className={styles.sliderValue}>{fmt(homeValue)}</span>
                </div>
                <input type="range" className={styles.slider} min={100000} max={3000000} step={10000} value={homeValue} onChange={e => setHomeValue(+e.target.value)} />
              </div>

              <div className={styles.sliderGroup}>
                <div className={styles.sliderHeader}>
                  <span className={styles.sliderLabel}>Remaining Mortgage</span>
                  <span className={styles.sliderValue}>{fmt(mortgageBalance)}</span>
                </div>
                <input type="range" className={styles.slider} min={0} max={homeValue} step={5000} value={mortgageBalance} onChange={e => setMortgageBalance(+e.target.value)} />
              </div>

              <div className={styles.sliderGroup}>
                <div className={styles.sliderHeader}>
                  <span className={styles.sliderLabel}>Agent Commission</span>
                  <span className={styles.sliderValue}>{commissionRate}% ({fmt(results.commission)})</span>
                </div>
                <input type="range" className={styles.slider} min={0} max={8} step={0.5} value={commissionRate} onChange={e => setCommissionRate(+e.target.value)} />
              </div>

              <div className={styles.sliderGroup}>
                <div className={styles.sliderHeader}>
                  <span className={styles.sliderLabel}>Closing Costs</span>
                  <span className={styles.sliderValue}>{closingCostRate}% ({fmt(results.closingCosts)})</span>
                </div>
                <input type="range" className={styles.slider} min={0} max={5} step={0.25} value={closingCostRate} onChange={e => setClosingCostRate(+e.target.value)} />
              </div>

              <div className={`${styles.sliderGroup} ${styles.calcFullWidth}`}>
                <div className={styles.sliderHeader}>
                  <span className={styles.sliderLabel}>Repairs / Credits</span>
                  <span className={styles.sliderValue}>{fmt(repairs)}</span>
                </div>
                <input type="range" className={styles.slider} min={0} max={50000} step={500} value={repairs} onChange={e => setRepairs(+e.target.value)} />
              </div>
            </div>

            {/* Results */}
            <div className={styles.results}>
              <div className={styles.resultTotal}>
                <div className={styles.resultLabel}>Estimated Net Proceeds</div>
                <div className={`${styles.resultAmount} ${results.netProceeds >= 0 ? styles.positive : styles.negative}`}>
                  {fmt(results.netProceeds)}
                </div>
              </div>
              <div className={styles.resultBreakdown}>
                <div className={styles.resultRow}>
                  <span className={styles.resultRowLabel}>Home Value</span>
                  <span className={styles.resultRowValue}>{fmt(results.homeValue)}</span>
                </div>
                <div className={styles.resultRow}>
                  <span className={styles.resultRowLabel}>Mortgage Payoff</span>
                  <span className={`${styles.resultRowValue} ${styles.negative}`}>-{fmt(results.mortgageBalance)}</span>
                </div>
                <div className={styles.resultRow}>
                  <span className={styles.resultRowLabel}>Commission</span>
                  <span className={`${styles.resultRowValue} ${styles.negative}`}>-{fmt(results.commission)}</span>
                </div>
                <div className={styles.resultRow}>
                  <span className={styles.resultRowLabel}>Closing Costs</span>
                  <span className={`${styles.resultRowValue} ${styles.negative}`}>-{fmt(results.closingCosts)}</span>
                </div>
                <div className={styles.resultRow}>
                  <span className={styles.resultRowLabel}>Repairs / Credits</span>
                  <span className={`${styles.resultRowValue} ${styles.negative}`}>-{fmt(results.repairs)}</span>
                </div>
                <div className={styles.resultRow} style={{ background: 'var(--color-blue-ghost)', borderColor: 'var(--color-blue-pale)' }}>
                  <span className={styles.resultRowLabel} style={{ fontWeight: 700 }}>Total Costs</span>
                  <span className={`${styles.resultRowValue} ${styles.negative}`}>-{fmt(results.totalCosts)}</span>
                </div>
              </div>
            </div>

            <div className={styles.disclaimer}>
              <p>Estimates only. Final proceeds may vary based on actual sale price, negotiation, title fees, prorations, and other transaction-specific costs. Consult with your real estate agent for a detailed net sheet.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
