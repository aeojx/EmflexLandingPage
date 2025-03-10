import React from 'react';
import { AdvisorMember } from '../types/team';
import { AdvisorCard } from './AdvisorCard';

const advisors: AdvisorMember[] = [
  {
    name: 'Vilhelm Hedberg',
    role: 'Growth Advisor',
    bio: "Founder of ekar, which grossed $100M+ becoming the #1 app in KSA's iOS and Android Free Stores (1M+ downloads). Vilhelm raised $66M+ in the region.",
    imageUrl: '/vilhelm.png',
    companies: [
      {
        name: 'ekar',
        logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXcQ4kPLwjcVAFEOz2A9pPw5H7YicrCrJ_Rdhnm33aquepMgIyIPSJ-z8Ohb0oFc8x9w&usqp=CAU'
      }
    ]
  },
  {
    name: 'Mohammad Al Dhabaan',
    role: 'Banking Advisor',
    bio: "Key roles at Bank Aljazira, Arab National Bank, Alawwal Bank, and Banque Saudi Fransi, leveraging industry networks to drive partnerships, growth, and regulatory navigation.",
    imageUrl: '/mohammad.png',
    companies: [
      {
        name: 'Bank Aljazira',
        logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR19IahLgqdSAUjGEkaEeLGWysuoiCdfpvHqQ&s'
      },
      {
        name: 'BSF',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Banque_Saudi_Fransi_Logo.svg/2560px-Banque_Saudi_Fransi_Logo.svg.png'
      },
      {
        name: 'Arab National Bank',
        logo: 'https://anb.com.sa/image/layout_set_logo?img_id=1212212&t=1740680312248'
      },
      {
        name: 'SAB',
        logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHV6VC6DMaaA0dL7429wdMKyXGr0C_Koktsg&s'
      }
    ]
  },
  {
    name: 'Hazm Jamjoom',
    role: 'Auto Industry Advisor',
    bio: "CEO of Taajeer Group's Automotive Sector and Board Member at Taajer Finance with 30 years C-suite experience in KSA Auto Industry.",
    imageUrl: '/hazm.png',
    companies: [
      {
        name: 'Abdul Latif Jameel',
        logo: 'https://appian.com/adobe/dynamicmedia/deliver/dm-aid--eb044849-cb99-4336-9116-c45808a3ad6e/logo-abdul-latif-jameel.png?width=1200&quality=85&preferwebp=true'
      },
      {
        name: 'Nissan',
        logo: 'https://cdn.freebiesupply.com/logos/large/2x/nissan-6-logo-png-transparent.png'
      },
      {
        name: 'Hyundai',
        logo: 'https://dealerimages.dealereprocess.com/image/upload/2026576.jpg'
      },
    ]
  },
  {
    name: 'Antler',
    role: 'Investor',
    bio: "The world's most active angel and seed-stage investor. Antler is present in 30 cities and has made over 1,300 investments into early-stage startups.",
    imageUrl: '/antler.png',
    companies: []
  }
];

export function Advisors() {
  return (
    <section className="py-20 bg-gray-50" id="advisors">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Backed By Industry Veterans
          </h2>
          <p className="text-xl text-gray-600">
            Our advisors bring decades of experience in fintech, banking, and automotive industries to guide our vision and strategy.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-12 max-w-7xl mx-auto">
          {advisors.map((advisor) => (
            <AdvisorCard key={advisor.name} advisor={advisor} />
          ))}
        </div>
      </div>
    </section>
  );
}