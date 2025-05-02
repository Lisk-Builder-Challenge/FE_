'use client';
import React, { useState } from "react";
import { Inter } from 'next/font/google';
const inter = Inter({ subsets: ['latin'] });

export default function VaultDashboard() {
  const [activeToken, setActiveToken] = useState("USD++");

  const tokens = ["USD++", "IDRX++", "EUROC++"];

  return (
    <div className={'${inter.className} min-h-screen bg-black text-white px-6 py-10 flex flex-col items-center gap-20'}>
      <div className="text-center space-y-8 max-w-4xl">
        <h1 className="text-4xl md:text-6xl font-semibold leading-tight gap-50">
          Let’s build the decentralized <span className="text-gray-300">BlackRock</span> — <span className="text-white">together.</span>
        </h1>
        <p className="text-gray-400 text-lg">
          A next-gen stablecoin vault platform that rewards users, empowers strategists, and is underwritten by restakers through liquid restaking tokens (LRTs). All powered by strategy auctions and transparent governance.
        </p>
      </div>

      {/* Card Success Mode */}
      <div  
        className="relative flex flex-col rounded-[40px] w-[1241px] h-[194px] p-5 shadow-lg border border-gray-700 text-white"
        style={{
            backgroundImage: 'linear-gradient(to bottom, rgba(46, 51, 90, 0) 44%, rgba(66, 30, 134, 0.8) 100%)',
            boxShadow: `
              0px 30px 60px 0px rgba(0, 0, 0, 0.10),
              0px 15px 30px 0px rgba(0, 0, 0, 0.05),
              0px 5px 10px 0px rgba(0, 0, 0, 0.05),
              inset 0px 0px 100px 0px rgba(204, 215, 255, 0.15)
            `,
            backdropFilter: 'blur(10px)',
        }}
      >
        <div className="flex justify-between items-center mb-14">
          <h2 className="text-2xl font-medium">Success Mode</h2>
          <div className="flex gap-2">
            {tokens.map((token) => (
              <button
                key={token}
                onClick={() => setActiveToken(token)}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition border-1 ${
                  activeToken === token
                    ? "bg-gray-400 text-white z-20"
                    : "bg-transparent hover:bg-gray-600"
                }`}
              >
                {token}
              </button>
            ))}
          </div>
        </div>

        {/* Konten statistik */}
        <div className="grid md:grid-cols-4 gap-6 text-white">
          <div className="text-left flex flex-col justify-end">
            <p className="text-sm text-gray-400">Total Value Locked</p>
            <p className="text-xl font-semibold mt-1">$124,532.00</p>
          </div>
          <div className="text-left flex flex-col justify-end">
            <p className="text-sm text-gray-400">Total Return</p>
            <p className="text-xl font-semibold  mt-1">$24,532.00</p>
          </div>
          <div className="text-left flex flex-col justify-end">
            <p className="text-sm text-gray-400">Current APY</p>
            <p className="text-xl font-semibold  mt-1">6,2%</p>
          </div>
          <div className="text-left flex flex-col justify-end">
            <p className="text-sm text-gray-400">Users</p>
            <p className="text-xl font-semibold  mt-1">224,532.00</p>
          </div>
        </div>
      </div>
    </div>
  );
}