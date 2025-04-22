'use client';

import React from 'react';

type Feature = {
  title: string;
  description: string;
  iconSrc: string;
};

const features: Feature[] = [
  {
    title: 'Yield-Bearing Stablecoins',
    description: 'Earn competitive yields on your stablecoin deposits through our automated strategy selection',
    iconSrc: '/Yield-Bearing Stablecoins.svg', // ganti dengan path gambar kamu
  },
  {
    title: 'Strategy Auction',
    description: 'Permissionless auctions ensure the best performing strategies are selected for our vaults',
    iconSrc: '/Srategy Auction.svg',
  },
  {
    title: 'Restaking Underwriting',
    description: 'Additional security layer through restaked ETH collateral from strategy providers',
    iconSrc: '/Restaking Underwriting.svg',
  },
];

export default function Features() {
  return (
    <section className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6 py-16">
      {/* Glowing Title */}
      <h1 className="text-4xl md:text-5xl font-bold mb-12 text-white drop-shadow-[0_0_12px_rgba(255,255,255,0.35)] text-center">
        Our Feature
      </h1>

      {/* Feature Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="relative w-[280px] h-[240px] rounded-[24px] p-6 border border-white/10 shadow-lg backdrop-blur-md overflow-hidden bg-[#0f0f0f]"
          >
            {/* Inner Fading Effect */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.06),transparent_80%)] pointer-events-none z-0 rounded-[24px]" />

            {/* Content */}
            <div className="relative z-10 flex flex-col h-full">
              <img src={feature.iconSrc} alt={feature.title} className="w-10 h-10 mb-4" />
              <h3 className="text-white font-semibold text-lg mb-2">{feature.title}</h3>
              <p className="text-sm text-white/60">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
