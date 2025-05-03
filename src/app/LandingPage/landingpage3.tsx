'use client';

import React from 'react';

type Feature = {
  title: string;
  description: string;
  iconSrc: string;
};

const features: Feature[] = [
  {
    title: 'Active Stablecoin Vaults',
    description: 'Alway-on yield on USDC, IDRX, and EUROC via dynamic, continuously-managed strategies',
    iconSrc: '/Yield-Bearing Stabelcoin.svg', 
  },
  {
    title: 'Rolling Epochs & Evaluation',
    description: 'Strategies run non-stop across overlapping epochs',
    iconSrc: '/Srategy Auction.svg',
  },
  {
    title: 'Restaking Underwriting',
    description: 'Each strategist is backed by collateralized restake. All strategy versions and performance data are publicly visible.',
    iconSrc: '/Restaking Underwriting.svg',
  },
];

export default function Features() {
  return (
    <section className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6 py-16" id="Feat">
      {/* Glowing Title */}
      <h1 className="text-5xl md:text-5xl mb-12 text-white drop-shadow-[0_0_5px_rgba(255,255,255,0.93)] text-center duration-50">
        Our Feature
      </h1>

      {/* Feature Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-6xl mx-auto">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="relative w-full max-w-[300px] h-[300px] rounded-[24px] p-6 border border-white/20 shadow-lg backdrop-blur-md overflow-hidden bg-[#0f0f0f] hover:border-black/200 hover:w-[250px] transition-colors duration-75 "
          >
            {/* Inner Fading Effect */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.8)_30%,rgba(255,255,255,0.1)_120%)] pointer-events-none z-20 rounded-[20px] transition-all duration-300" />

            {/* Content */}
            <div className="relative z-20 flex flex-col h-full">
              <img src={feature.iconSrc} alt={feature.title} className="w-10 h-10 mb-4" />
              <h3 className="text-white font-semibold text-xl mb-5">{feature.title}</h3>
              <p className="text-sm text-gray hover:text-blue leading-relaxed">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
