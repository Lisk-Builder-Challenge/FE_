'use client';

import { CheckCircle, Gavel, Lock } from 'lucide-react';

export default function FeaturesSection() {
  const features = [
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: 'Yield-Bearing Stablecoins',
      description:
        'Earn competitive yields on your stablecoin deposits through our automated strategy selection.',
    },
    {
      icon: <Gavel className="w-8 h-8" />,
      title: 'Strategy Auction',
      description:
        'Permissionless auctions ensure the best performing strategies are selected for our vaults.',
    },
    {
      icon: <Lock className="w-8 h-8" />,
      title: 'Restaking Underwriting',
      description:
        'Additional security layer through restaked ETH collateral from strategy providers.',
    },
  ];

  return (
    <section className="bg-gray-100 py-12 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {features.map((feature, idx) => (
          <div key={idx} className="bg-white p-6 rounded-xl shadow">
            <div className="text-black mb-4">{feature.icon}</div>
            <h3 className="text-lg font-semibold mb-2 text-[#000000]">{feature.title}</h3>
            <p className="text-sm text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
