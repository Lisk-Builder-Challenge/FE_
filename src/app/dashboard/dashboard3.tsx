'use client';
import React from 'react';
import { Inter } from 'next/font/google';
import { EllipsisVertical } from 'lucide-react';
import { StrategyDetails } from './strategyDetails';

const inter = Inter({ subsets: ['latin'] });

export default function StrategyAuctionTable() {
  const data = {
    operator: "EigenYields",
    vault: "USD++",
    category: "RWA",
    apy: "6.1%",
    valueRestaked: "221 ETH",
    stakers: "10",
    quorum: "Qualified",
    strategy: 'The vault buys these tokens and earns yield from T-bill interest',
      totalManageVault: '500,000 USD++',
      platforms: [
        { name: 'Ondo Finance' },
        { name: 'Maple Finance RWA' },
        { name: 'OpenEden' },
        { name: 'Backed.fi' }
      ],
      assetDetails: 'Tokenized U.S. Treasury Bills available on-chain'
  };

  const data2 = {
    operator: " ",
    vault: " ",
    category: " ",
    apy: " ",
    valueRestaked: " ",
    stakers: " ",
    quorum: " "
  };

  const sharedBoxStyle = {
    backgroundImage: `
      radial-gradient(circle at center, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0) 80%),
      linear-gradient(180deg, rgba(46, 51, 90, 0.3) 0%, rgba(28, 27, 51, 0.3) 20%)
    `,
    backgroundBlendMode: 'overlay',
    backdropFilter: 'blur(16px)',
  };

  return (
    <div className={`${inter.className} w-full flex justify-center px-4 py-10`}>
      <div className="w-[1241px] space-y-3">
        <h2 className="text-2xl font-semibold text-white">Current Strategy Auction</h2>
  
        {/* Header */}
        <div
          className="grid grid-cols-8 text-sm font-medium text-gray-300 rounded-[20px] border border-gray-700 shadow-md overflow-hidden"
          style={sharedBoxStyle}
        >
          <div className="py-3 px-4 text-center">Operator</div>
          <div className="py-3 px-4 text-center">Vault</div>
          <div className="py-3 px-4 text-center">Category</div>
          <div className="py-3 px-4 text-center">Est. APY</div>
          <div className="py-3 px-4 text-center">Total Value Restaked</div>
          <div className="py-3 px-4 text-center">Stakers</div>
          <div className="py-3 px-4 text-center">Quorum</div>
          <div className="py-3 px-4 text-center">Details</div>
        </div>

        {/* Data row */}
        <div
          className="grid grid-cols-8 text-sm text-white rounded-[20px] border border-gray-700 shadow-md overflow-hidden"
          style={sharedBoxStyle}
        >
          <div className="py-4 px-4 text-center">{data.operator}</div>
          <div className="py-4 px-4 text-center">{data.vault}</div>
          <div className="py-4 px-4 text-center">{data.category}</div>
          <div className="py-4 px-4 text-center">{data.apy}</div>
          <div className="py-4 px-4 text-center">{data.valueRestaked}</div>
          <div className="py-4 px-4 text-center">{data.stakers}</div>
          <div className="py-4 px-4 text-center">{data.quorum}</div>
          <div className="py-4 px-4"><StrategyDetails {...data} /></div>
          
          <div className="py-4 px-4 text-center">{data2.operator}</div>
          <div className="py-4 px-4 text-center">{data2.vault}</div>
          <div className="py-4 px-4 text-center">{data2.category}</div>
          <div className="py-4 px-4 text-center underline">{data2.apy}</div>
          <div className="py-4 px-4 text-center">{data2.valueRestaked}</div>
          <div className="py-4 px-4 text-center">{data2.stakers}</div>
          <div className="py-4 px-4 text-center">{data2.quorum}</div>
        </div>
      </div>
    </div>
  );
}