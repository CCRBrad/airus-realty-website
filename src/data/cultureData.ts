/* ============================================================
   CULTURE — Centralized Subpage Data
   ============================================================ */

export interface CultureSection {
  heading: string;
  content: string;
  bullets?: string[];
}

export interface CultureSubpage {
  slug: string;
  icon: string;
  title: string;
  shortDesc: string;
  heroSubtitle: string;
  sections: CultureSection[];
}

export const cultureSubpages: CultureSubpage[] = [
  {
    slug: 'training',
    icon: '🎓',
    title: 'Training & Development',
    shortDesc: 'Structured onboarding, weekly training, and mentorship programs.',
    heroSubtitle: 'From day one, you\'ll have a structured path to build your skills and grow your business.',
    sections: [
      {
        heading: 'Onboarding Plan (30 / 60 / 90 Days)',
        content: 'Every new agent at Airus follows a structured onboarding plan designed to build confidence, competence, and a pipeline of business within the first 90 days.',
        bullets: [
          'Week 1–2: Brokerage orientation, systems setup, CRM onboarding, and initial SOI outreach',
          'Month 1: Daily prospecting routines, MLS training, first open houses, and shadow sessions',
          'Month 2: Independent lead generation, listing/buyer presentation practice, and pipeline building',
          'Month 3: First client engagements, deal management training, and 6-month goal setting',
        ],
      },
      {
        heading: 'Weekly Training Structure',
        content: 'Every week includes structured learning opportunities — not optional, but built into your schedule:',
        bullets: [
          'Monday morning market brief and weekly planning session',
          'Wednesday role-play and script practice',
          'Friday deal review and problem-solving workshop',
          'Monthly guest speaker or industry topic deep-dive',
        ],
      },
      {
        heading: 'Scripts, Role Play & Mentorship',
        content: 'We provide proven scripts for prospecting, listing appointments, buyer consultations, and objection handling. Role-play sessions happen weekly so you can practice in a safe environment before performing in front of clients. Every new agent is paired with an experienced mentor for their first year.',
      },
    ],
  },
  {
    slug: 'support',
    icon: '🛡️',
    title: 'Support System',
    shortDesc: 'Hands-on leadership, transaction support, and coaching access.',
    heroSubtitle: 'Real support means real availability — not just a title on a website.',
    sections: [
      {
        heading: 'Leadership Involvement',
        content: 'Our leadership team is actively involved in the day-to-day business. You\'re not just a number at Airus — your broker and team leaders know your goals, your challenges, and your pipeline.',
        bullets: [
          'Regular 1-on-1 coaching sessions with leadership',
          'Open-door policy — reach out anytime',
          'Goal-setting and accountability check-ins monthly',
        ],
      },
      {
        heading: 'Transaction Support',
        content: 'From contract to close, you have support at every step. Our transaction coordination systems help you manage deadlines, paperwork, and communication so nothing falls through the cracks.',
        bullets: [
          'Transaction checklists and milestone tracking',
          'Document review and compliance support',
          'Coordination with title, escrow, and lenders',
        ],
      },
      {
        heading: 'Coaching Access',
        content: 'Whether you need help with a specific deal, a struggling lead, or long-term strategy, coaching is available. We provide on-demand problem solving as well as planned coaching programs for agents at every level.',
      },
    ],
  },
  {
    slug: 'marketing',
    icon: '📸',
    title: 'Marketing & Branding',
    shortDesc: 'Social media, listing marketing, and personal brand support.',
    heroSubtitle: 'Modern marketing support so your listings and your brand stand out.',
    sections: [
      {
        heading: 'Social Media Support',
        content: 'We help agents build a professional social media presence that attracts clients and builds authority.',
        bullets: [
          'Content templates and caption frameworks',
          'Canva and design tool guidance',
          'Best practices for Instagram, Facebook, and LinkedIn',
          'Monthly content calendar inspiration',
        ],
      },
      {
        heading: 'Listing Marketing',
        content: 'Every listing gets a professional marketing package designed to maximize exposure and generate showings.',
        bullets: [
          'Professional photography coordination',
          'MLS listing optimization',
          'Social media listing posts',
          'Email marketing to buyer agents',
          'Open house promotional materials',
        ],
      },
      {
        heading: 'Personal Branding',
        content: 'Your personal brand is your business. We help agents develop a consistent, professional brand identity that builds trust with clients and differentiates them in the market.',
        bullets: [
          'Brand positioning strategy',
          'Headshot and bio guidance',
          'Business card and marketing material templates',
          'Website and online profile optimization',
        ],
      },
    ],
  },
  {
    slug: 'accountability',
    icon: '🎯',
    title: 'Accountability',
    shortDesc: 'Performance tracking, activity expectations, and goal setting.',
    heroSubtitle: 'Accountability isn\'t pressure — it\'s the structure that makes growth predictable.',
    sections: [
      {
        heading: 'Tracking Performance',
        content: 'What gets measured gets managed. We help agents track the metrics that actually drive business — not just closings, but the activities that lead to closings.',
        bullets: [
          'Daily prospecting contacts tracked',
          'Weekly appointment count monitored',
          'Monthly pipeline and deal flow reviewed',
          'Quarterly production and income analysis',
        ],
      },
      {
        heading: 'Activity Expectations',
        content: 'Success in real estate comes from consistent daily activity. We set clear expectations for prospecting, follow-up, and client interaction so agents know exactly what it takes to hit their goals.',
        bullets: [
          'Daily time-blocking for lead generation',
          'Minimum prospecting contacts per week',
          'CRM follow-up cadence standards',
          'Open house and showing thresholds',
        ],
      },
      {
        heading: 'Goal Setting and Review',
        content: 'Every agent sets specific, measurable goals for production, income, and growth. These are reviewed regularly with leadership — and adjusted as needed to keep you on track.',
      },
    ],
  },
  {
    slug: 'collaboration',
    icon: '🤝',
    title: 'Collaboration',
    shortDesc: 'Team environment, referrals, and knowledge sharing.',
    heroSubtitle: 'We believe agents grow faster when they grow together.',
    sections: [
      {
        heading: 'Team Environment',
        content: 'Airus is intentionally collaborative. Agents share wins, challenges, and strategies in an environment of mutual support rather than competition.',
        bullets: [
          'Weekly team meetings with deal sharing',
          'Open-forum Q&A sessions',
          'Celebration of team and individual wins',
          'Supportive culture where asking for help is encouraged',
        ],
      },
      {
        heading: 'Referral Network',
        content: 'When an agent receives a lead outside their expertise or area, our internal referral system ensures the client is connected with the right agent — and the referring agent is compensated.',
      },
      {
        heading: 'Knowledge Sharing',
        content: 'Our agents share what works. From successful listing strategies to buyer conversion techniques, knowledge flows freely across the team. We maintain a shared resource library of templates, scripts, and best practices.',
      },
    ],
  },
  {
    slug: 'growth',
    icon: '📈',
    title: 'Growth Path',
    shortDesc: 'From new agent to top producer — clear stages of income growth.',
    heroSubtitle: 'A clear path from new agent to producing agent to top producer.',
    sections: [
      {
        heading: 'Agent Growth Stages',
        content: 'We define clear growth stages so agents know exactly where they are and what it takes to reach the next level.',
        bullets: [
          'New Agent: Focus on activity, skill building, and first closings (Year 1)',
          'Producing Agent: Consistent closings, growing SOI, and developing a niche (Year 2–3)',
          'Top Producer: High-volume production, team building, and market leadership (Year 3+)',
        ],
      },
      {
        heading: 'Income Growth',
        content: 'Real estate is one of the few industries where your income is directly tied to your effort and skill. We help agents build a predictable income through consistent lead generation, conversion, and transaction management.',
        bullets: [
          'Year 1: Foundation building — focus on skills and activity',
          'Year 2: Pipeline growth — consistent closings and referrals',
          'Year 3+: Scale — higher volume, better efficiency, team building',
        ],
      },
      {
        heading: 'Business Scaling',
        content: 'For agents who want to build beyond individual production, we support team building, assistant hiring, and operational systems that allow agents to scale their business while maintaining quality.',
      },
    ],
  },
];

/* ---- Helpers ---- */
export function getCultureSubpageBySlug(slug: string): CultureSubpage | undefined {
  return cultureSubpages.find((p) => p.slug === slug);
}
