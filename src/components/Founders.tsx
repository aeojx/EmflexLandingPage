import React from 'react';
import { TeamMember } from '../types/team';
import { FounderCard } from './FounderCard';

const founders: TeamMember[] = [
  {
    name: 'Ali Tabbalat',
    role: 'CEO',
    bio: "Ali is a seasoned FinTech entrepreneur and strategist with over a decade of experience driving innovation in the financial services industry, including founding and scaling successful ventures like Solfeh, a micro-lending platform, and Quiq Claim, a peer-to-peer settlement platform. He has also served as a FinTech Strategy Advisor to government entities in the UAE, where he spearheaded digital transformation initiatives. Ali's expertise extends to investment and portfolio management, where he has successfully managed $100M+ portfolios. He holds an MBA and possesses a strong understanding of the FinTech landscape, a passion for developing innovative financial solutions, and a proven ability to build high-performing teams, secure funding, and navigate complex regulatory environments.",
    linkedIn: 'https://www.linkedin.com/in/ali-tabbalat-56b8a411/',
    imageUrl: 'https://i.ibb.co/sjMg2fn/DSC07075.jpg',
    achievements: [
      'Ex-Fintech founder x2: built lending products',
      'Raised $1.2m in 7 days',
      'Managed $100m+ portfolios',
      'MBA, Wales'
    ],
    companies: [
      {
        name: 'Capital Bank',
        logo: 'https://i.ibb.co/Xs3gBLV/images-1.png'
      },
      {
        name: 'Beyond Capital',
        logo: 'https://i.ibb.co/cJWqKMC/images-removebg-preview.png'
      }
    ]
  },
  {
    name: 'Alan Abbas',
    role: 'COO',
    bio: "Alan is a driven and accomplished leader with a diverse background and a passion for technology and innovation. He spent 6 years at Amazon, where he honed his skills in various roles, from Operations Leader to Product Manager. During his time at Amazon, he consistently exceeded expectations, earning recognition as a \"Top Tier\" leader at the young age of 25. This distinction is reserved for the top 10-15% of managers. Beyond his corporate experience, Alan has demonstrated his entrepreneurial spirit and business acumen by successfully launching and managing a sports tourism startup in Dubai. In just 16 months, he bootstrapped the company to $1.19 million in sales. He holds an honors degree in Civil Engineering from the University of Waterloo.",
    linkedIn: 'https://www.linkedin.com/in/alanabbas/',
    imageUrl: 'https://i.ibb.co/Wp45Dz9/DSC06886.jpg',
    achievements: [
      'Bootstrapped solo $1.2M+ in sales',
      'Business Intelligence at Amazon',
      'Scaling 1 to 100',
      'Civil Engineering, Canada'
    ],
    companies: [
      {
        name: 'Amazon',
        logo: 'https://i.ibb.co/w0PV5rB/Logos.webp'
      }
    ]
  },
  {
    name: 'Ammar AlSomali',
    role: 'CPO',
    bio: "Ammar is a highly skilled and innovative technology leader with extensive expertise in deploying and managing APIs across the banking sector in Saudi Arabia. With a strong focus on digital transformation, he has played a pivotal role in driving innovation and streamlining integration processes for leading financial institutions. Notably, Ammar successfully spearheaded the launch of Bank AlBilad's API platform, enabling seamless connectivity and fostering a more agile ecosystem for digital product management. His deep technical knowledge, combined with a strategic approach to open banking, BaaS (Banking-as-a-Service), and payment solutions, has positioned him as a key figure in the fintech landscape.",
    linkedIn: 'https://www.linkedin.com/in/ammar-alsomali/',
    imageUrl: '/ammar.png',
    achievements: [
      "Built STC's and Bank Albilad's best in class API infrastructure",
      'Advised most KSA banks during his stint with Tarabut',
      'Sr. Manager of Solution design at Enjaz',
      'Computer Science, Brock University'
    ],
    companies: [
      {
        name: 'Bank Albilad',
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRproP6kCutqtokQaAqCV_QYI3jBu7RBP39Mg&s"
        // logo: 'https://i.ibb.co/VxKR5LM/bank-albilad.png'
      },
      {
        name: 'STC',
        logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfEU5GWjX1sdDnEiVHuhTFUVl8KarwEJ_vaA&s'
      },
      {
        name: 'Tarabut',
        logo: 'https://www.tarabut.com/hs-fs/hubfs/Primary-horizontal%20EN.png?width=566&height=79&name=Primary-horizontal%20EN.png'
      }
    ]
  }
];

export function Founders() {
  return (
    <section className="py-20 bg-white" id="founders">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Meet the Founders
          </h2>
          <p className="text-xl text-gray-600">
            Our team combines deep expertise in fintech, lending, and technology to revolutionize the financing landscape.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 max-w-7xl mx-auto">
          {founders.map((founder) => (
            <FounderCard key={founder.name} founder={founder} />
          ))}
        </div>
      </div>
    </section>
  );
}