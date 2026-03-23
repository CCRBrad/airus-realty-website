'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './Header.module.css';

const navItems = [
  {
    label: 'Find Homes',
    href: '/find-homes',
  },
  {
    label: 'Sell',
    href: '/sell',
  },
  {
    label: 'Agents',
    href: '/agents',
    children: [
      { label: 'Meet the Team', href: '/agents' },
      { label: 'Why Airus', href: '/agents#directory' },
      { label: 'Join Airus', href: '/join' },
    ],
  },
  {
    label: 'Training & Tools',
    href: '/training',
    children: [
      { label: 'Training Overview', href: '/training' },
      { label: 'CRM & Lead Pipeline', href: '/training#crm' },
      { label: 'Marketing Engine', href: '/training#marketing' },
      { label: 'Scripts & Playbooks', href: '/training#scripts' },
      { label: 'Coaching Programs', href: '/training#coaching' },
    ],
  },
  {
    label: 'Calculators',
    href: '/calculators',
    children: [
      { label: 'Mortgage Calculator', href: '/calculators/mortgage-calculator' },
      { label: 'Rent vs Buy', href: '/calculators/rent-vs-buy' },
      { label: 'Seller Net Proceeds', href: '/calculators/seller-net-proceeds' },
      { label: 'All Calculators', href: '/calculators' },
    ],
  },
  {
    label: 'Learning Center',
    href: '/learning-center',
    children: [
      { label: 'New Agent Guide', href: '/learning-center#new-agent' },
      { label: 'Listing & Marketing', href: '/learning-center#listings' },
      { label: 'Buyer Conversion', href: '/learning-center#buyers' },
      { label: 'Social Media Strategy', href: '/learning-center#social' },
      { label: 'Market Insights', href: '/learning-center#market' },
      { label: 'Buyer Guides', href: '/learning-center#buyer-guides' },
      { label: 'Seller Guides', href: '/learning-center#seller-guides' },
    ],
  },
  {
    label: 'Culture',
    href: '/culture',
  },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.inner}>
        {/* Logo */}
        <Link href="/" className={styles.logo} onClick={() => setMobileOpen(false)}>
          <span className={styles.logoText}>
            Airus <span className={styles.logoTextBold}>Realty</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className={styles.desktopNav}>
          {navItems.map((item) => (
            <div
              key={item.label}
              className={styles.navItem}
              onMouseEnter={() => setActiveDropdown(item.label)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link href={item.href} className={styles.navLink}>
                {item.label}
                {item.children && (
                  <svg className={styles.chevron} width="10" height="6" viewBox="0 0 10 6" fill="none">
                    <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
              </Link>
              {item.children && activeDropdown === item.label && (
                <div className={styles.dropdown}>
                  <div className={styles.dropdownInner}>
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className={styles.dropdownLink}
                        onClick={() => setActiveDropdown(null)}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Desktop CTAs */}
        <div className={styles.desktopCtas}>
          <Link href="/contact" className={`btn btn--secondary btn--sm`}>
            Talk to Us
          </Link>
          <Link href="/join" className={`btn btn--gold btn--sm`}>
            JOIN AIRUS
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className={`${styles.hamburger} ${mobileOpen ? styles.hamburgerOpen : ''}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className={styles.mobileMenu}>
          <nav className={styles.mobileNav}>
            {navItems.map((item) => (
              <div key={item.label} className={styles.mobileNavItem}>
                <div className={styles.mobileNavTop}>
                  <Link
                    href={item.href}
                    className={styles.mobileNavLink}
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.label}
                  </Link>
                  {item.children && (
                    <button
                      className={`${styles.mobileChevron} ${mobileExpanded === item.label ? styles.mobileChevronOpen : ''}`}
                      onClick={() => setMobileExpanded(mobileExpanded === item.label ? null : item.label)}
                      aria-label={`Expand ${item.label}`}
                    >
                      <svg width="12" height="7" viewBox="0 0 12 7" fill="none">
                        <path d="M1 1L6 6L11 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>
                  )}
                </div>
                {item.children && mobileExpanded === item.label && (
                  <div className={styles.mobileSubnav}>
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className={styles.mobileSubLink}
                        onClick={() => setMobileOpen(false)}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
          <div className={styles.mobileCtas}>
            <Link href="/join" className="btn btn--gold btn--full" onClick={() => setMobileOpen(false)}>
              JOIN AIRUS
            </Link>
            <Link href="/contact" className="btn btn--secondary btn--full" onClick={() => setMobileOpen(false)}>
              Talk to Us
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
