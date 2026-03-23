export interface Agent {
  slug: string;
  name: string;
  title: string;
  phone: string;
  email: string;
  photo: string;
  bio: string;
  specialties: string[];
  areasServed: string[];
  yearsExperience: number;
  dreLicense?: string;
  featured?: boolean;
  newAgent?: boolean;
}

export const agents: Agent[] = [
  {
    slug: 'marcus-chen',
    name: 'Marcus Chen',
    title: 'Realtor® | Sales Associate',
    phone: '(310) 555-0147',
    email: 'marcus@airusrealty.com',
    photo: '/agents/marcus-chen.png',
    bio: 'Marcus brings over 8 years of real estate experience specializing in luxury residential properties across Los Angeles. Known for his sharp negotiation skills and deep market knowledge, Marcus consistently ranks among the top producers at Airus Realty. He takes a client-first approach, ensuring every buyer and seller he works with receives personalized attention and expert guidance from the first consultation to closing day.',
    specialties: ['Luxury Homes', 'Buyer Representation', 'Investment Properties'],
    areasServed: ['Los Angeles', 'Beverly Hills', 'Santa Monica', 'West Hollywood'],
    yearsExperience: 8,
    dreLicense: '02145678',
    featured: true,
  },
  {
    slug: 'sophia-ramirez',
    name: 'Sophia Ramirez',
    title: 'Realtor® | Sales Associate',
    phone: '(949) 555-0283',
    email: 'sophia@airusrealty.com',
    photo: '/agents/sophia-ramirez.png',
    bio: 'Sophia is a dynamic real estate professional with a passion for helping first-time homebuyers navigate the market with confidence. With 6 years of experience in Orange County, she combines deep local expertise with a genuine commitment to client education. Sophia believes every family deserves a home, and she works tirelessly to make that dream a reality — whether it\'s a starter condo or a forever home.',
    specialties: ['First-Time Buyers', 'Residential Sales', 'Relocation'],
    areasServed: ['Irvine', 'Newport Beach', 'Costa Mesa', 'Laguna Beach'],
    yearsExperience: 6,
    dreLicense: '02198765',
    featured: true,
  },
  {
    slug: 'david-okonkwo',
    name: 'David Okonkwo',
    title: 'Realtor® | Sales Associate',
    phone: '(213) 555-0391',
    email: 'david@airusrealty.com',
    photo: '/agents/david-okonkwo.png',
    bio: 'David is a results-driven agent who specializes in investment properties and multi-family homes. With a background in finance and 10 years of real estate experience, he helps investors build wealth through strategic property acquisitions. David\'s analytical approach and understanding of market trends make him the go-to agent for clients looking to maximize their return on investment.',
    specialties: ['Investment Properties', 'Multi-Family', 'Commercial'],
    areasServed: ['Downtown LA', 'Inglewood', 'Culver City', 'South Bay'],
    yearsExperience: 10,
    dreLicense: '02087654',
    featured: true,
  },
  {
    slug: 'jessica-park',
    name: 'Jessica Park',
    title: 'Realtor® | Sales Associate',
    phone: '(818) 555-0512',
    email: 'jessica@airusrealty.com',
    photo: '/agents/jessica-park.png',
    bio: 'Jessica is a rising star at Airus Realty, having closed over 15 transactions in her first 18 months. With a background in marketing and a natural ability to connect with clients, she brings fresh energy and innovative strategies to every deal. Jessica leverages social media, digital marketing, and the full Airus platform to deliver exceptional results for her clients.',
    specialties: ['Buyer Representation', 'Seller Listing Agent', 'Social Media Marketing'],
    areasServed: ['San Fernando Valley', 'Burbank', 'Glendale', 'Pasadena'],
    yearsExperience: 2,
    dreLicense: '02234567',
    newAgent: true,
  },
  {
    slug: 'ryan-mitchell',
    name: 'Ryan Mitchell',
    title: 'Realtor® | Sales Associate',
    phone: '(562) 555-0674',
    email: 'ryan@airusrealty.com',
    photo: '/agents/ryan-mitchell.png',
    bio: 'Ryan serves the Long Beach and South Bay markets with 5 years of dedicated real estate experience. He specializes in helping sellers maximize their home\'s value through strategic pricing, professional staging, and targeted marketing campaigns. Ryan\'s attention to detail and commitment to transparency have earned him a strong reputation and a growing base of repeat clients and referrals.',
    specialties: ['Seller Listing Agent', 'Home Staging', 'Market Analysis'],
    areasServed: ['Long Beach', 'Torrance', 'Redondo Beach', 'Manhattan Beach'],
    yearsExperience: 5,
    dreLicense: '02176543',
  },
  {
    slug: 'amara-johnson',
    name: 'Amara Johnson',
    title: 'Realtor® | Sales Associate',
    phone: '(909) 555-0835',
    email: 'amara@airusrealty.com',
    photo: '/agents/amara-johnson.png',
    bio: 'Amara joined Airus Realty with a mission: to make homeownership accessible in the Inland Empire. In just one year, she has quickly established herself as a trusted advisor for buyers and sellers in San Bernardino and Riverside counties. Amara\'s enthusiasm, work ethic, and dedication to her community make her a natural fit for the Airus culture of growth and collaboration.',
    specialties: ['First-Time Buyers', 'VA Loans', 'Community Development'],
    areasServed: ['Riverside', 'San Bernardino', 'Ontario', 'Rancho Cucamonga'],
    yearsExperience: 1,
    dreLicense: '02289012',
    newAgent: true,
  },
];

export function getAgentBySlug(slug: string): Agent | undefined {
  return agents.find((a) => a.slug === slug);
}

export function getFeaturedAgents(): Agent[] {
  return agents.filter((a) => a.featured);
}

export function getNewAgents(): Agent[] {
  return agents.filter((a) => a.newAgent);
}
