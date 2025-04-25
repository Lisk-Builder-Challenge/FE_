'use client';
import React from 'react';
import { Inter } from 'next/font/google';
const inter = Inter({ subsets: ['latin'] });

const sharedBoxStyle = {
  backgroundImage: `
    radial-gradient(circle at center, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0) 80%),
    linear-gradient(180deg, rgba(46, 51, 90, 0.3) 0%, rgba(28, 27, 51, 0.3) 20%)
  `,
  backgroundBlendMode: 'overlay',
  backdropFilter: 'blur(16px)',
  border: '1px solid rgba(255, 255, 255, 0.2)',
};

export default function DepositBox() {
  return (
    <div
      className={`${inter.className} w-[1241px] rounded-[40px] p-5 mx-auto mt-10 text-white`}
      style={{
        ...sharedBoxStyle,
        boxShadow: '0px 30px 60px 0px rgba(0, 0, 0, 0.10)',
      }}
    >
      <h2 className="text-2xl font-semibold mb-4">Deposit</h2>

      <div className="flex gap-6 mb-6">
        {/* Input Section */}
        <div className="flex flex-col gap-3 w-1/2">
          <div className="bg-black/10 border border-white/10 rounded-lg px-4 py-3 flex items-center justify-between">
            <div>
              <p className="text-sm font-medium">USDC</p>
              <p className="text-sm text-gray-400">Balance: 0.00</p>
            </div>
            <p className="text-lg font-semibold">0.00</p>
          </div>
          <div className="bg-black/10 border border-white/10 rounded-lg px-4 py-3 flex items-center justify-between">
            <div>
              <p className="text-sm font-medium">USD++</p>
              <p className="text-sm text-gray-400">Balance: 0.00</p>
            </div>
            <p className="text-lg font-semibold">0.00</p>
          </div>
        </div>

        {/* Preview Section */}
        <div
          className="w-1/2 px-4 py-3 rounded-lg space-y-3"
          style={{
            ...sharedBoxStyle,
            borderRadius: '12px',
            padding: '16px',
          }}
        >
          <h3 className="font-semibold text-white text-base">Transaction Preview</h3>
          <div className="flex justify-between text-sm text-gray-300">
            <span>Estimated APY</span>
            <span className="text-white font-medium">8.2%</span>
          </div>
          <div className="flex justify-between text-sm text-gray-300">
            <span>Network Fee</span>
            <span className="text-white font-medium">-$2.50</span>
          </div>
          <div className="flex justify-between text-sm text-gray-300">
            <span>Min. Deposit</span>
            <span className="text-white font-medium">$100</span>
          </div>
        </div>
      </div>

      {/* Confirm Button */}
      <button
        className="w-full py-3 rounded-xl text-sm font-medium text-white"
        style={{
          backgroundImage: `
            radial-gradient(circle at center, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0) 80%),
            linear-gradient(180deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.05) 100%)
          `,
          backdropFilter: 'blur(12px)',
          border: '1px solid rgba(255,255,255,0.1)',
        }}
      >
        Confirm Deposit
      </button>
    </div>
  );
}