'use client';
import React, { useState } from "react";
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function VaultDashboard() {
  const [activeToken, setActiveToken] = useState("IDRX++");

  const sharedBoxStyle = {
    backgroundImage: `
      radial-gradient(circle at center, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0) 80%),
      linear-gradient(180deg, rgba(46, 51, 90, 0.3) 0%, rgba(28, 27, 51, 0.3) 20%)
    `,
    backgroundBlendMode: 'overlay',
    backdropFilter: 'blur(16px)',
  };

  return (
    <div className={`${inter.className} min-h-screen bg-black text-white px-6 py-12 flex flex-col items-center gap-16`}>
      <div className="text-center space-y-6 max-w-4xl">
        <h1 className="text-4xl md:text-6xl font-semibold leading-tight">
          Let’s build the decentralized <span className="text-gray-300">BlackRock</span> — <span className="text-white">together.</span>
        </h1>
        <p className="text-gray-400 text-lg">
          A next-gen stablecoin vault platform that rewards users, empowers strategists, and is underwritten by restakers through liquid restaking tokens (LRTs). All powered by multi strategies and transparent governance.
        </p>
      </div>

      {/* Portofolio & Platform Section */}
      <div
        className="p-5 rounded-[40px] outline outline-1 outline-offset-[-1px] outline-white/10 backdrop-blur-[10px] inline-flex flex-col justify-start items-start gap-2.5 overflow-hidden"
        style={sharedBoxStyle}
      >
        <div className="w-[1241px] flex flex-col justify-start items-start gap-2.5">
          <div className="self-stretch inline-flex justify-start items-center gap-40">
            {/* Portfolio */}
            <div className="flex-1 h-36 px-2.5 inline-flex flex-col justify-center items-start gap-9">
              <div className="text-xl font-semibold text-white">Portfolio</div>
              <div className="self-stretch inline-flex justify-between items-center">
                {[
                  { label: "Your Balance", value: "$124,532.00" },
                  { label: "Average APY", value: "12.4%" },
                  { label: "Pending Yield", value: "$3,241.00" },
                ].map((item, i) => (
                  <div key={i} className="inline-flex flex-col justify-start items-start gap-[2px]">
                    <div className="text-gray-400 text-sm">{item.label}</div>
                    <div className="text-white text-xl font-medium">{item.value}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Platform */}
            <div className="w-[666px] h-36 px-2.5 inline-flex flex-col justify-center items-end gap-9">
              <div className="text-xl font-semibold text-white">Platform</div>
              <div className="self-stretch inline-flex justify-between items-center">
                {[
                  { label: "TVL", value: "$124,532.00" },
                  { label: "Active Liquidity", value: "$532.00" },
                  { label: "Total Return", value: "$24,532.00" },
                  { label: "Current APY", value: "6.2%" },
                  { label: "Users", value: "224,532" },
                ].map((item, i) => (
                  <div key={i} className="inline-flex flex-col justify-start items-start gap-[2px]">
                    <div className="text-gray-400 text-sm">{item.label}</div>
                    <div className="text-white text-xl font-medium">{item.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}