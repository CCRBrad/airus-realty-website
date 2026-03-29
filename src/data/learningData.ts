/* ============================================================
   LEARNING CENTER — Centralized Content Data
   ============================================================ */

export interface ArticleSection {
  heading: string;
  content: string;
  bullets?: string[];
}

export interface Article {
  slug: string;
  categorySlug: string;
  title: string;
  intro: string;
  readTime: string;
  sections: ArticleSection[];
  relatedSlugs: string[];
}

export interface Category {
  slug: string;
  icon: string;
  title: string;
  description: string;
  audience: string;
  articles: Article[];
  ctaLabel: string;
  ctaHref: string;
  secondaryCtaLabel?: string;
  secondaryCtaHref?: string;
}

/* ---- HELPER: slugify ---- */
function slugify(text: string): string {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

/* ---- ARTICLE FACTORY ---- */
function makeArticle(
  categorySlug: string,
  title: string,
  intro: string,
  readTime: string,
  sections: ArticleSection[],
  relatedSlugs: string[] = [],
): Article {
  return {
    slug: slugify(title),
    categorySlug,
    title,
    intro,
    readTime,
    sections,
    relatedSlugs,
  };
}

/* ============================================================
   1. NEW AGENT GUIDE
   ============================================================ */
const newAgentGuide: Category = {
  slug: 'new-agent-guide',
  icon: '🚀',
  title: 'New Agent Guide',
  description: 'Everything you need to know to launch your real estate career — from licensing to your first closing.',
  audience: 'New and aspiring real estate agents',
  ctaLabel: 'Join Airus',
  ctaHref: '/join',
  secondaryCtaLabel: 'Talk to Us',
  secondaryCtaHref: '/contact',
  articles: [
    makeArticle('new-agent-guide', 'How to Get Your Real Estate License', 'A step-by-step guide to getting your real estate license, from pre-licensing education to passing the state exam.', '8 min read', [
      { heading: 'Pre-Licensing Requirements', content: 'Before you can sit for the real estate exam, you need to complete your state\'s pre-licensing education. In California, this means completing 135 hours of approved courses covering real estate principles, practice, and one elective.', bullets: ['Research your state\'s specific hour and course requirements', 'Choose an accredited real estate school (online or in-person)', 'Budget 2–6 months for coursework depending on pace'] },
      { heading: 'Passing the State Exam', content: 'The California real estate exam consists of 150 multiple-choice questions. You need a score of 70% or higher to pass. Study strategies include practice exams, flashcards, and focused review of key concepts like property law, contracts, and financing.', bullets: ['Take multiple practice exams before your test date', 'Focus on areas where you score lowest', 'Schedule your exam as soon as you finish coursework'] },
      { heading: 'Choosing a Brokerage', content: 'Your choice of brokerage will shape the early years of your career. Look for a brokerage that offers structured training, mentorship, marketing support, and a growth-oriented culture — not just high commission splits.', bullets: ['Interview at least 3 brokerages before deciding', 'Ask about training programs and mentorship', 'Understand the commission structure and fees', 'Look for technology and marketing support'] },
      { heading: 'Getting Started', content: 'Once licensed and affiliated with a brokerage, your first priorities should be building your database, setting up your CRM, and committing to a daily prospecting schedule. Consistency in the first 90 days sets the foundation for your career.' },
    ], ['building-your-sphere-of-influence', 'your-first-90-days-checklist']),

    makeArticle('new-agent-guide', 'Building Your Sphere of Influence', 'Learn how to build and leverage your sphere of influence — the most reliable source of business for new agents.', '6 min read', [
      { heading: 'What Is Your Sphere of Influence?', content: 'Your sphere of influence (SOI) is the group of people who already know, like, and trust you. This includes family, friends, former colleagues, neighbors, and community connections. For new agents, your SOI is your single most valuable asset.' },
      { heading: 'Building Your Initial Database', content: 'Start by listing everyone you know. Most agents can identify 100–200 people when they really think about it. Load these contacts into your CRM and categorize them by relationship strength.', bullets: ['Review your phone contacts, social media connections, and email history', 'Add names from community groups, sports leagues, and religious organizations', 'Include past coworkers, classmates, and service providers', 'Aim for at least 100 contacts to start'] },
      { heading: 'Staying Top of Mind', content: 'The key to SOI marketing is consistent, valuable touchpoints. Aim for 12–36 touches per year through a mix of channels.', bullets: ['Monthly market update emails', 'Quarterly check-in calls', 'Social media engagement (comment, like, share)', 'Annual events or client appreciation gatherings', 'Handwritten notes for birthdays and milestones'] },
      { heading: 'Expanding Your Sphere', content: 'Grow your SOI by being active in your community, attending networking events, joining local organizations, and providing value before asking for business. Every person you help becomes a potential referral source.' },
    ], ['how-to-get-your-real-estate-license', 'your-first-90-days-checklist']),

    makeArticle('new-agent-guide', 'Your First 90 Days Checklist', 'A practical checklist for new agents covering the first 90 days — from setting up your business to getting your first client.', '7 min read', [
      { heading: 'Week 1–2: Foundation', content: 'Your first two weeks are about getting set up and building systems.', bullets: ['Complete brokerage onboarding and training', 'Set up your CRM and import your SOI', 'Order business cards and set up email signature', 'Create or update your social media profiles', 'Set up your daily schedule and time-block prospecting'] },
      { heading: 'Month 1: Activity', content: 'Month one is about activity — make contacts, set appointments, and learn through action.', bullets: ['Make 25+ prospecting contacts per week', 'Attend at least 2 open houses (host or visit)', 'Shadow an experienced agent on a listing appointment', 'Preview 10+ homes to build market knowledge', 'Complete all required brokerage training modules'] },
      { heading: 'Month 2: Pipeline', content: 'By month two, you should be building a pipeline of potential leads and opportunities.', bullets: ['Follow up with all SOI contacts at least once', 'Start hosting your own open houses', 'Write and send your first market update email', 'Begin posting real estate content on social media', 'Set your first listing or buyer appointment'] },
      { heading: 'Month 3: First Deals', content: 'Month three is where your consistent activity starts paying off. Aim for your first signed client — whether buyer or seller.', bullets: ['Convert at least one lead to a signed agreement', 'Submit your first offer or list your first property', 'Evaluate your lead sources and double down on what works', 'Set goals for months 4–6', 'Celebrate your progress!'] },
    ], ['how-to-get-your-real-estate-license', 'building-your-sphere-of-influence']),
  ],
};

/* ============================================================
   2. LISTING GROWTH
   ============================================================ */
const listingGrowth: Category = {
  slug: 'listing-growth',
  icon: '🏠',
  title: 'Listing Growth',
  description: 'Strategies to win more listings, market them effectively, and close at top dollar.',
  audience: 'Agents looking to grow their listing business',
  ctaLabel: 'Join Airus',
  ctaHref: '/join',
  secondaryCtaLabel: 'Talk to Us',
  secondaryCtaHref: '/contact',
  articles: [
    makeArticle('listing-growth', 'The Perfect Listing Presentation', 'How to deliver a listing presentation that wins seller confidence and secures the listing.', '7 min read', [
      { heading: 'Preparation Is Everything', content: 'The best listing presentations are won before you walk through the door. Research the property, pull comparable sales, understand the seller\'s timeline, and prepare a customized marketing plan.', bullets: ['Pull 5–10 comparable sales within 0.5 miles', 'Research the property\'s history (purchase price, improvements, tax records)', 'Prepare a market analysis showing current trends', 'Create a custom marketing plan for the property'] },
      { heading: 'Structure Your Presentation', content: 'A great listing presentation follows a clear flow: build rapport, demonstrate market knowledge, present your pricing strategy, explain your marketing plan, and close with confidence.', bullets: ['Start with questions — understand the seller\'s goals', 'Present market data before discussing price', 'Show your marketing plan with visual examples', 'Address the commission conversation directly', 'Close by asking for the business'] },
      { heading: 'Handling the Price Conversation', content: 'Sellers often want a higher price than the data supports. Use comparable sales to educate, not argue. Position yourself as the advisor who tells the truth — not the one who tells them what they want to hear.' },
      { heading: 'Following Up After the Presentation', content: 'Always follow up within 24 hours with a personalized email summarizing the key points. Include your market analysis, marketing plan, and a clear next step.' },
    ], ['pricing-strategy-that-works', 'marketing-your-listings-for-maximum-exposure']),

    makeArticle('listing-growth', 'Pricing Strategy That Works', 'Learn the data-driven pricing strategies that help homes sell faster and for more money.', '6 min read', [
      { heading: 'Why Pricing Matters More Than Marketing', content: 'The most beautifully marketed home will sit on the market if it\'s overpriced. Pricing is the single most important factor in determining how quickly a home sells and at what price.' },
      { heading: 'The Comparative Market Analysis', content: 'A solid CMA is the foundation of pricing strategy. Focus on sold comparables within the last 90 days, within 0.5 miles, and with similar characteristics.', bullets: ['Use at least 3–5 comparable sold properties', 'Adjust for differences in size, condition, and features', 'Factor in current market conditions (buyer\'s vs seller\'s market)', 'Review active and pending listings for competition'] },
      { heading: 'Pricing Psychology', content: 'Price points matter. Pricing at $499,000 instead of $505,000 captures more buyer search activity. Understand how buyers search and position the listing at a price point that maximizes exposure.' },
      { heading: 'The Cost of Overpricing', content: 'Overpriced homes take longer to sell and often sell for less than they would have if priced correctly from the start. Educate sellers on the "stale listing" effect and the importance of generating strong activity in the first two weeks.' },
    ], ['the-perfect-listing-presentation', 'marketing-your-listings-for-maximum-exposure']),

    makeArticle('listing-growth', 'Marketing Your Listings for Maximum Exposure', 'A modern marketing playbook for getting your listings in front of the right buyers.', '8 min read', [
      { heading: 'Professional Photography & Media', content: 'Every listing should have professional photography at minimum. For higher-value properties, consider drone photography, 3D virtual tours, and video walkthroughs.', bullets: ['Hire a professional real estate photographer', 'Stage or prepare the home before the shoot', 'Create a virtual tour for online viewers', 'Use drone photography for properties with notable lots or views'] },
      { heading: 'Digital Marketing', content: 'Today\'s buyers start their search online. Your digital marketing strategy should include MLS syndication, social media promotion, email campaigns, and targeted advertising.', bullets: ['Syndicate to Zillow, Realtor.com, Redfin, and 500+ sites', 'Create Instagram and Facebook posts with professional photos', 'Run targeted Facebook/Instagram ads to likely buyers', 'Send email blasts to your buyer agent network'] },
      { heading: 'Coming Soon Strategy', content: 'A "Coming Soon" campaign builds anticipation before the listing goes live. Use social media teases, email previews, and agent-to-agent outreach to generate early interest.' },
      { heading: 'Open House Execution', content: 'Open houses remain one of the best lead generation tools. Run both broker open houses (for agent feedback) and public open houses (for buyer leads). Follow up with every attendee within 24 hours.' },
    ], ['the-perfect-listing-presentation', 'pricing-strategy-that-works']),
  ],
};

/* ============================================================
   3. BUYER CONVERSION
   ============================================================ */
const buyerConversion: Category = {
  slug: 'buyer-conversion',
  icon: '🤝',
  title: 'Buyer Conversion',
  description: 'Convert more buyer leads into signed agreements and successful closings.',
  audience: 'Agents looking to improve buyer conversion rate',
  ctaLabel: 'Join Airus',
  ctaHref: '/join',
  articles: [
    makeArticle('buyer-conversion', 'The Buyer Consultation Blueprint', 'How to run a buyer consultation that builds trust, sets expectations, and secures a signed buyer agreement.', '7 min read', [
      { heading: 'Why the Consultation Matters', content: 'A proper buyer consultation sets the tone for the entire relationship. It positions you as a professional, educates the buyer on the process, and gives you the opportunity to secure a signed agreement before showing homes.' },
      { heading: 'The Consultation Structure', content: 'Start with rapport building, then transition to education. Walk through the buying process, explain your role, discuss their financing, and present your buyer agreement.', bullets: ['Ask about their timeline, needs, and must-haves', 'Explain the buying process step by step', 'Discuss pre-approval and financing options', 'Present your buyer agency agreement', 'Schedule the first showing appointment'] },
      { heading: 'Handling Common Questions', content: 'Be prepared for questions about commission, whether they need a buyer agent, and why they should sign an agreement. Answer transparently and focus on the value you bring to the transaction.' },
      { heading: 'After the Consultation', content: 'Send a follow-up email within 24 hours summarizing the discussion, their criteria, and next steps. Set up automated searches in your MLS so they start receiving listings immediately.' },
    ], ['handling-buyer-objections', 'from-lead-to-closing-in-30-days']),

    makeArticle('buyer-conversion', 'Handling Buyer Objections', 'The most common buyer objections and proven scripts to handle them with confidence.', '6 min read', [
      { heading: '"We\'re Just Looking"', content: 'Buyers who say they\'re "just looking" are often further along than they admit. Acknowledge their pace, offer to set up a search, and position yourself as a resource — not a salesperson.', bullets: ['Respond: "That makes total sense. Most of my clients start the same way."', 'Offer to send listings that match their criteria — no pressure', 'Ask: "What would the ideal home look like for you?"'] },
      { heading: '"We Want to Wait for Rates to Drop"', content: 'Address this with data. Show them the impact of waiting — home prices may increase while they wait for a rate drop, and they can always refinance later.', bullets: ['Show historical rate and price data', 'Explain the "marry the house, date the rate" concept', 'Calculate the cost of waiting (price appreciation vs rate savings)'] },
      { heading: '"We Have a Family Member Who\'s an Agent"', content: 'This is a loyalty objection, not a skill objection. Respect the relationship, but offer to be a backup resource. If their family member is in a different market, position your local expertise as complementary.' },
      { heading: '"We Already Found a House Online"', content: 'Great — this means they\'re motivated. Offer to schedule a showing and provide your professional evaluation of the property. Show the value of having representation during negotiations.' },
    ], ['the-buyer-consultation-blueprint', 'from-lead-to-closing-in-30-days']),

    makeArticle('buyer-conversion', 'From Lead to Closing in 30 Days', 'A step-by-step timeline for converting a buyer lead into a closed deal in 30 days or less.', '7 min read', [
      { heading: 'Day 1–3: Speed to Lead', content: 'The first 5 minutes matter most. Respond to every lead within 5 minutes. Make a phone call, send a text, and follow up with an email. Set up an automated search in your MLS.', bullets: ['Respond within 5 minutes of receiving the lead', 'Call first, then text, then email', 'Set up MLS auto-searches within 24 hours'] },
      { heading: 'Day 4–7: Consultation', content: 'Schedule and conduct a buyer consultation. Verify their pre-approval, understand their criteria, and set expectations for the search and offer process.' },
      { heading: 'Day 8–14: Active Showings', content: 'Show 5–10 properties in the first week of active searching. Help them narrow criteria and build urgency through education about market conditions and competition.' },
      { heading: 'Day 15–21: Offer & Negotiation', content: 'When they find the right home, move quickly. Prepare a competitive offer within hours, present the offer, and negotiate with confidence. Keep the buyer informed at every step.' },
      { heading: 'Day 22–30: Under Contract to Close', content: 'Manage the transaction from accepted offer to closing. Coordinate inspections, appraisal, and financing. Communicate proactively and solve problems before they escalate.' },
    ], ['the-buyer-consultation-blueprint', 'handling-buyer-objections']),
  ],
};

/* ============================================================
   4. SOCIAL MEDIA STRATEGY
   ============================================================ */
const socialMediaStrategy: Category = {
  slug: 'social-media-strategy',
  icon: '📱',
  title: 'Social Media Strategy',
  description: 'Build your personal brand and generate leads through social media marketing.',
  audience: 'Agents looking to grow their online presence',
  ctaLabel: 'Join Airus',
  ctaHref: '/join',
  articles: [
    makeArticle('social-media-strategy', 'Instagram for Real Estate Agents', 'How to use Instagram to build your brand, attract leads, and showcase your listings.', '7 min read', [
      { heading: 'Optimizing Your Profile', content: 'Your Instagram profile is your digital business card. Make it count with a professional photo, clear bio, and link to your website or landing page.', bullets: ['Use a professional headshot as your profile photo', 'Write a bio that includes your market area and specialty', 'Add a link to your website or Linktree', 'Switch to a Business or Creator account for analytics'] },
      { heading: 'Content Pillars for Real Estate', content: 'Successful real estate Instagram accounts post a mix of content types. Establish 4–5 content pillars and rotate among them.', bullets: ['Listings & property tours', 'Market updates & data', 'Behind-the-scenes & day-in-the-life', 'Client wins & testimonials', 'Educational tips for buyers and sellers'] },
      { heading: 'Stories and Reels', content: 'Stories and Reels get significantly more reach than static posts. Use Stories for daily engagement and Reels for discovery and growth. Show your personality, your process, and your results.' },
      { heading: 'Consistency Over Perfection', content: 'Post at least 3–5 times per week. Consistency matters more than perfection. Use scheduling tools to batch content and maintain a regular posting cadence.' },
    ], ['content-calendar-template', 'video-marketing-that-converts']),

    makeArticle('social-media-strategy', 'Content Calendar Template', 'A ready-to-use 30-day content calendar for real estate agents on social media.', '5 min read', [
      { heading: 'Week 1: Listings & Market', content: 'Start the month with strong listing content and market updates.', bullets: ['Monday: New listing showcase (carousel or reel)', 'Wednesday: Market update or stat graphic', 'Friday: Open house announcement or property tour'] },
      { heading: 'Week 2: Education & Value', content: 'Position yourself as a trusted resource with educational content.', bullets: ['Monday: Buyer tip (e.g., "3 things to know before your first showing")', 'Wednesday: Seller tip or home prep advice', 'Friday: FAQ answer or myth-busting post'] },
      { heading: 'Week 3: Personal & Community', content: 'Let your personality show and connect with your community.', bullets: ['Monday: Behind-the-scenes or "day in the life"', 'Wednesday: Local business spotlight or neighborhood guide', 'Friday: Client testimonial or closing celebration'] },
      { heading: 'Week 4: Engagement & Growth', content: 'Focus on engagement and driving action.', bullets: ['Monday: Interactive post (poll, quiz, or question)', 'Wednesday: Market commentary or hot take', 'Friday: CTA post (book a consultation, DM for info, etc.)'] },
    ], ['instagram-for-real-estate-agents', 'video-marketing-that-converts']),

    makeArticle('social-media-strategy', 'Video Marketing That Converts', 'How to use video content to generate leads, build trust, and close more deals.', '6 min read', [
      { heading: 'Why Video Wins', content: 'Video builds trust faster than any other medium. Buyers and sellers want to work with agents they feel they know — and video creates that connection before you ever meet in person.' },
      { heading: 'Top Video Types for Agents', content: 'Not all videos need to be produced masterpieces. Some of the most effective real estate videos are shot on a phone.', bullets: ['Property walk-through tours', 'Neighborhood guides ("Why I love [area]")', 'Market update commentary', 'Client testimonial interviews', '"Just sold" celebration stories', 'Quick tips and explainers (60 seconds or less)'] },
      { heading: 'Equipment & Setup', content: 'You don\'t need expensive equipment. A smartphone, natural light, and a simple editing app are all you need to create great video content.', bullets: ['Use your phone (most modern phones shoot great video)', 'Invest in a $20 phone tripod', 'Film in well-lit areas or near windows', 'Use simple editing apps like CapCut or InShot'] },
      { heading: 'Distribution Strategy', content: 'Post your videos across multiple platforms to maximize reach. Repurpose one video into a Reel, a YouTube Short, a TikTok, and a Story.' },
    ], ['instagram-for-real-estate-agents', 'content-calendar-template']),
  ],
};

/* ============================================================
   5. MARKET INSIGHTS
   ============================================================ */
const marketInsights: Category = {
  slug: 'market-insights',
  icon: '📊',
  title: 'Market Insights',
  description: 'Stay informed with current market trends, data analysis, and expert commentary.',
  audience: 'Buyers, sellers, and agents tracking market conditions',
  ctaLabel: 'Talk to Us',
  ctaHref: '/contact',
  secondaryCtaLabel: 'Find an Agent',
  secondaryCtaHref: '/agents',
  articles: [
    makeArticle('market-insights', 'Monthly Market Report', 'A summary of current market conditions including inventory, pricing trends, and days on market.', '5 min read', [
      { heading: 'Market Snapshot', content: 'Understanding current market conditions helps buyers and sellers make informed decisions. Key metrics to watch include median home price, inventory levels, days on market, and the list-price-to-sale-price ratio.' },
      { heading: 'Inventory Trends', content: 'Housing inventory directly affects pricing and competition. Low inventory favors sellers, while higher inventory gives buyers more options and negotiating power.', bullets: ['Track active listings month over month', 'Compare to the same month last year', 'Monitor new listings vs closed sales ratio', 'Watch for seasonal patterns in your market'] },
      { heading: 'Pricing Trends', content: 'Median home prices fluctuate based on supply, demand, and economic conditions. Understanding pricing trends helps agents advise clients on timing and strategy.' },
      { heading: 'What This Means for You', content: 'Whether you\'re buying, selling, or advising clients, staying informed about market conditions gives you a strategic advantage. Use this data to support your recommendations and build client confidence.' },
    ], ['interest-rate-impact-on-buying-power', 'neighborhood-market-snapshots']),

    makeArticle('market-insights', 'Interest Rate Impact on Buying Power', 'How changes in mortgage interest rates affect what buyers can afford and how agents should adjust.', '6 min read', [
      { heading: 'Understanding the Rate-Price Relationship', content: 'Every 1% increase in mortgage rates reduces buying power by approximately 10%. This means a buyer who qualified for $500,000 at 6% may only qualify for $450,000 at 7%.' },
      { heading: 'Rate Fluctuation Impact', content: 'Even small rate changes have significant dollar impacts on monthly payments and total interest paid over the life of a loan.', bullets: ['0.5% rate increase on $400K = ~$120/month more', '1% rate increase on $400K = ~$240/month more', 'On a 30-year loan, this adds up to tens of thousands in total interest'] },
      { heading: 'Strategies for Agents', content: 'When rates are higher, help buyers focus on what they can control: making competitive offers, considering rate buydowns, and understanding that they can refinance when rates improve.', bullets: ['Show buyers what they can actually buy at current rates', 'Explain temporary and permanent rate buydowns', 'Discuss the "marry the house, date the rate" philosophy', 'Partner with lenders who offer creative financing solutions'] },
      { heading: 'The Bigger Picture', content: 'Rates are one factor in a complex market. Help clients see the full picture — including local supply and demand, their personal timeline, and long-term wealth building through homeownership.' },
    ], ['monthly-market-report', 'neighborhood-market-snapshots']),

    makeArticle('market-insights', 'Neighborhood Market Snapshots', 'Hyper-local market data and trends for key neighborhoods and communities.', '5 min read', [
      { heading: 'Why Hyper-Local Data Matters', content: 'Real estate is inherently local. City-wide or county-wide statistics can mask important trends happening in individual neighborhoods. A neighborhood that\'s appreciating 15% year-over-year may be in the same city as one that\'s flat.' },
      { heading: 'Key Metrics by Neighborhood', content: 'For each neighborhood, track the same core metrics: median price, inventory, days on market, and price trends.', bullets: ['Median home price and year-over-year change', 'Number of active listings', 'Average days on market', 'List-to-sale price ratio', 'Number of sales per month'] },
      { heading: 'Using Neighborhood Data', content: 'Use these snapshots in your listing presentations, buyer consultations, and market update content. Clients trust agents who demonstrate deep local knowledge with specific data.' },
      { heading: 'Building Authority', content: 'Consistently sharing neighborhood-level data positions you as the local expert. Create a monthly or quarterly neighborhood report and share it on social media, email, and your website.' },
    ], ['monthly-market-report', 'interest-rate-impact-on-buying-power']),
  ],
};

/* ============================================================
   6. BUYER EDUCATION
   ============================================================ */
const buyerEducation: Category = {
  slug: 'buyer-education',
  icon: '🔑',
  title: 'Buyer Education',
  description: 'Guides to help homebuyers navigate the process with confidence.',
  audience: 'First-time and experienced homebuyers',
  ctaLabel: 'Find an Agent',
  ctaHref: '/agents',
  secondaryCtaLabel: 'Mortgage Calculator',
  secondaryCtaHref: '/calculators/mortgage-calculator',
  articles: [
    makeArticle('buyer-education', 'First-Time Homebuyer Guide', 'Everything first-time buyers need to know — from saving for a down payment to getting the keys.', '10 min read', [
      { heading: 'Are You Ready to Buy?', content: 'Before diving into the homebuying process, assess your financial readiness. Consider your credit score, savings, employment stability, and monthly budget for housing costs.', bullets: ['Check your credit score (aim for 620+ for conventional, 580+ for FHA)', 'Calculate how much you can afford (28% rule: housing should be ≤28% of gross income)', 'Save for a down payment (3–20% of purchase price)', 'Build an emergency fund (3–6 months of expenses)'] },
      { heading: 'Getting Pre-Approved', content: 'Pre-approval is the first concrete step toward homeownership. It tells you how much you can borrow and shows sellers you\'re a serious buyer.', bullets: ['Gather documents: pay stubs, tax returns, bank statements, W-2s', 'Contact 2–3 lenders to compare rates and programs', 'Understand the difference between pre-qualification and pre-approval', 'Get your pre-approval letter before you start house hunting'] },
      { heading: 'Finding Your Home', content: 'Work with a buyer\'s agent who understands your needs and knows the local market. Define your must-haves vs nice-to-haves, and be prepared to compromise on some items.' },
      { heading: 'Making an Offer', content: 'When you find the right home, your agent will help you craft a competitive offer. This includes the purchase price, contingencies, earnest money deposit, and proposed timeline.' },
      { heading: 'Closing Day', content: 'Closing is the final step. You\'ll sign documents, pay your closing costs, and receive the keys to your new home. Your agent and lender will guide you through every detail.' },
    ], ['understanding-the-mortgage-process', 'what-to-expect-at-closing']),

    makeArticle('buyer-education', 'Understanding the Mortgage Process', 'A clear explanation of the mortgage process from application to funding.', '7 min read', [
      { heading: 'Types of Mortgages', content: 'There are several types of mortgage loans, each with different requirements, down payments, and rate structures.', bullets: ['Conventional: 3–20% down, requires good credit', 'FHA: 3.5% down, more flexible credit requirements', 'VA: 0% down for eligible veterans and service members', 'USDA: 0% down for eligible rural areas', 'Jumbo: For loan amounts above conforming limits'] },
      { heading: 'The Application Process', content: 'The mortgage application involves submitting financial documentation to your lender. They\'ll verify your income, assets, credit, and employment to determine your eligibility and loan amount.' },
      { heading: 'Underwriting', content: 'After you\'re under contract, the lender submits your loan to underwriting. The underwriter reviews all documentation, orders an appraisal, and makes the final approval decision. This process typically takes 2–4 weeks.', bullets: ['Respond to underwriter requests quickly', 'Don\'t make large purchases or open new credit accounts', 'Keep your employment situation stable', 'Be transparent about any financial changes'] },
      { heading: 'Closing & Funding', content: 'Once your loan is approved, you\'ll schedule a closing date. At closing, you\'ll sign your loan documents, pay your down payment and closing costs, and receive the keys to your new home.' },
    ], ['first-time-homebuyer-guide', 'what-to-expect-at-closing']),

    makeArticle('buyer-education', 'What to Expect at Closing', 'A step-by-step guide to the closing process so you arrive prepared and confident.', '5 min read', [
      { heading: 'Before Closing Day', content: 'In the days before closing, you\'ll complete a final walk-through of the property, review your closing disclosure, and wire your funds to the title company.', bullets: ['Schedule your final walk-through 24–48 hours before closing', 'Review the Closing Disclosure (CD) at least 3 days before closing', 'Confirm the wire transfer amount and account details with your title company', 'Bring a valid photo ID to closing'] },
      { heading: 'At the Closing Table', content: 'Closing typically takes 1–2 hours. You\'ll be signing legal documents including the mortgage note, deed of trust, and title documents. Your agent and/or attorney will be there to answer questions.' },
      { heading: 'Your Closing Costs', content: 'Closing costs typically run 2–5% of the purchase price. These include lender fees, title insurance, prepaid items (taxes, insurance), and any prorated expenses.', bullets: ['Lender origination fees', 'Appraisal and inspection fees', 'Title insurance and escrow fees', 'Prepaid property taxes and homeowner\'s insurance', 'Recording fees'] },
      { heading: 'After Closing', content: 'Congratulations! After closing, you\'ll receive your keys and official ownership of your new home. Keep all closing documents in a safe place — you\'ll need them for tax purposes and future reference.' },
    ], ['first-time-homebuyer-guide', 'understanding-the-mortgage-process']),
  ],
};

/* ============================================================
   7. SELLER EDUCATION
   ============================================================ */
const sellerEducation: Category = {
  slug: 'seller-education',
  icon: '💸',
  title: 'Seller Education',
  description: 'Resources to help sellers prepare, price, and sell their home effectively.',
  audience: 'Homeowners preparing to sell',
  ctaLabel: 'Sell With Airus',
  ctaHref: '/sell',
  secondaryCtaLabel: 'Get Home Value',
  secondaryCtaHref: '/sell/home-value',
  articles: [
    makeArticle('seller-education', 'How to Prepare Your Home for Sale', 'A practical guide to preparing your home for the market to attract more buyers and maximize your price.', '7 min read', [
      { heading: 'Declutter and Depersonalize', content: 'Buyers need to envision themselves in your home. Remove personal photos, excess furniture, and clutter to create a clean, open space that appeals to the widest range of buyers.', bullets: ['Remove at least 50% of items from closets and cabinets', 'Pack up personal photos and memorabilia', 'Clear countertops, shelves, and surfaces', 'Consider renting a storage unit for excess items'] },
      { heading: 'Repairs That Matter', content: 'Not all repairs deliver the same return on investment. Focus on items that buyers notice and inspectors flag.', bullets: ['Fix leaky faucets, running toilets, and dripping pipes', 'Repair or replace damaged flooring', 'Touch up paint — neutral colors photograph best', 'Ensure all lights, outlets, and switches work', 'Address any deferred maintenance items'] },
      { heading: 'Curb Appeal', content: 'First impressions are formed before buyers walk through the door. Invest in your home\'s exterior presentation.', bullets: ['Mow, edge, and tidy the landscaping', 'Power wash the driveway and walkways', 'Paint or stain the front door', 'Add fresh mulch or seasonal plants', 'Ensure the exterior is clean and well-maintained'] },
      { heading: 'Professional Staging', content: 'Staged homes sell faster and for more money. If a full staging isn\'t in the budget, consider partial staging for key rooms — living room, master bedroom, and kitchen.' },
    ], ['understanding-net-proceeds', 'timeline-from-listing-to-closing']),

    makeArticle('seller-education', 'Understanding Net Proceeds', 'Learn what net proceeds means and what costs to expect when selling your home.', '6 min read', [
      { heading: 'What Are Net Proceeds?', content: 'Net proceeds are the amount of money you walk away with after all costs of selling are deducted from your sale price. This is different from your sale price — and often significantly lower than sellers expect.' },
      { heading: 'Common Costs of Selling', content: 'Several costs reduce your final proceeds from the sale.', bullets: ['Agent commissions (typically 5–6% of sale price)', 'Mortgage payoff (remaining loan balance + any prepayment penalties)', 'Closing costs (title, escrow, transfer taxes — typically 1–3%)', 'Home warranty (if offered to buyer, typically $400–$600)', 'Repairs and credits (from inspection negotiations)', 'Moving costs'] },
      { heading: 'Using a Net Proceeds Calculator', content: 'A net proceeds calculator helps you estimate what you\'ll walk away with based on your sale price, remaining mortgage balance, and expected costs. Use our calculator to run the numbers for your situation.' },
      { heading: 'Important Disclaimer', content: 'Net proceeds estimates are for informational purposes only. Actual proceeds will vary based on the final sale price, negotiated terms, and closing costs. Consult with your agent and a financial advisor for personalized guidance.' },
    ], ['how-to-prepare-your-home-for-sale', 'timeline-from-listing-to-closing']),

    makeArticle('seller-education', 'Timeline: From Listing to Closing', 'What to expect from the moment you list your home to the day you hand over the keys.', '6 min read', [
      { heading: 'Week 1–2: Pre-Listing Preparation', content: 'Before going live, your agent will prepare the marketing package, coordinate photography, and finalize the pricing strategy.', bullets: ['Complete home preparations and staging', 'Professional photography and media production', 'Marketing materials and MLS listing drafted', 'Coming soon campaign (if applicable)'] },
      { heading: 'Week 2–4: Active on Market', content: 'Once live, your listing will be syndicated across hundreds of websites. Your agent will coordinate showings, open houses, and feedback.', bullets: ['MLS listing goes live', 'Showings and open houses begin', 'Agent collects and shares buyer feedback', 'Marketing campaigns run across digital channels'] },
      { heading: 'Week 4–6: Offers and Negotiation', content: 'When offers come in, your agent will review each one, negotiate terms, and help you accept the strongest offer that meets your goals.' },
      { heading: 'Week 6–10: Under Contract to Close', content: 'From accepted offer to closing, expect inspections, appraisal, buyer financing, and final walk-through. Your agent manages the timeline and solves problems as they arise.', bullets: ['Buyer inspections (typically within 7–10 days)', 'Appraisal ordered by buyer\'s lender', 'Any negotiated repairs completed', 'Buyer\'s loan receives final approval', 'Final walk-through and closing'] },
    ], ['how-to-prepare-your-home-for-sale', 'understanding-net-proceeds']),
  ],
};

/* ============================================================
   ALL CATEGORIES
   ============================================================ */
export const categories: Category[] = [
  newAgentGuide,
  listingGrowth,
  buyerConversion,
  socialMediaStrategy,
  marketInsights,
  buyerEducation,
  sellerEducation,
];

/* ============================================================
   HELPER FUNCTIONS
   ============================================================ */
export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}

export function getArticleBySlug(categorySlug: string, articleSlug: string): Article | undefined {
  const category = getCategoryBySlug(categorySlug);
  if (!category) return undefined;
  return category.articles.find((a) => a.slug === articleSlug);
}

export function getArticlesByCategory(categorySlug: string): Article[] {
  const category = getCategoryBySlug(categorySlug);
  return category ? category.articles : [];
}

export function getRelatedCategories(currentSlug: string, count = 3): Category[] {
  return categories.filter((c) => c.slug !== currentSlug).slice(0, count);
}

export function getAllArticles(): Article[] {
  return categories.flatMap((c) => c.articles);
}

export function getRelatedArticles(article: Article): Article[] {
  const allArticles = getAllArticles();
  return article.relatedSlugs
    .map((slug) => allArticles.find((a) => a.slug === slug))
    .filter((a): a is Article => !!a);
}
