'use client';
import React from "react";
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function DepositPanel() {
  const vaults = [
    { name: "USD++", balance: "$50,000" },
    { name: "IDRX++", balance: "$35,000" },
    { name: "EUROC++", balance: "$39,532" },
  ];

  return (
    <div className={`${inter.className} bg-black flex justify-center items-center px-4 py-10 mt-[-50px]`}>
      <div
        className="relative flex flex-col rounded-[40px] w-[1241px] p-5 shadow-lg border border-gray-700 text-white space-y-6"
        style={{
          backgroundImage: `
            radial-gradient(circle at center, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0) 80%),
            linear-gradient(180deg, rgba(46, 51, 90, 0.3) 0%, rgba(28, 27, 51, 0.3) 20%)
          `,
          backgroundBlendMode: 'overlay',
          backdropFilter: 'blur(16px)',
        }}
      >
        <h2 className="text-2xl font-semibold">Deposit</h2>

        {/* Total Value Locked boxes */}
        <div className="grid md:grid-cols-3 gap-4">
          {[1, 2, 3].map((_, i) => (
            <div
              key={i}
              className="border border-gray-700 rounded-xl px-4 py-3 text-left"
            >
              <p className="text-sm text-gray-400">Total Value Locked</p>
              <p className="text-xl font-semibold mt-1">$124,532.00</p>
            </div>
          ))}
        </div>

        {/* Token List */}
        <div className="space-y-4">
          {vaults.map((vault) => (
            <div
              key={vault.name}
              className="flex items-center justify-between border border-gray-700 rounded-xl px-4 py-4"
            >
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-purple-500" />
                <span className="font-medium">{vault.name}</span>
              </div>
              <div className="flex items-center gap-6">
                <span className="text-lg font-semibold">{vault.balance}</span>
                <button className="bg-transparent hover:bg-gray-600 border border-white px-4 py-1.5 rounded-md text-sm transition">
                  Deposit
                </button>
                <button className="bg-transparent hover:bg-gray-600 border border-white px-4 py-1.5 rounded-md text-sm transition">
                  Withdraw
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}