'use client';
import React, { useState } from 'react';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function StrategyAuctionTable() {
  // Data for the row in the strategy auction table
  const data = {
    operator: "EigenYields",
    vault: "USD++",
    apy: "6.2%",
    category: "RWA",
    valueRestaked: "500,000 USD++",
    totalManageVault: "500,000 USD++",
    totalValueRestaked: "70,000 ETH",
    strategyDetails: "The vault buys these tokens and earns yield from T-bill interest",
  };

  // Modal visibility state
  const [isModalOpen, setIsModalOpen] = useState(false);

  const sharedBoxStyle = {
    backgroundImage: `radial-gradient(circle at center, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0) 80%),
      linear-gradient(180deg, rgba(46, 51, 90, 0.3) 0%, rgba(28, 27, 51, 0.3) 20%)`,
    backgroundBlendMode: 'overlay',
    backdropFilter: 'blur(16px)',
  };

  // Function to toggle modal visibility
  const handleRowClick = () => {
    setIsModalOpen(true);
  };

  // Function to close modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className={`${inter.className} w-full flex justify-center px-4 py-10`}>
      <div className="w-[1241px] space-y-3">
        <h2 className="text-2xl font-semibold text-white">Current Strategy Auction</h2>

        {/* Row Block */}
        <div
          className="grid grid-cols-7 text-sm text-white rounded-[20px] border border-gray-700 shadow-md overflow-hidden"
          style={sharedBoxStyle}
          onClick={handleRowClick} // Open Modal on row click
        >
          <div className="py-4 px-4 text-center">{data.operator}</div>
          <div className="py-4 px-4 text-center">{data.vault}</div>
          <div className="py-4 px-4 text-center">{data.category}</div>
          <div className="py-4 px-4 text-center underline">{data.apy}</div>
          <div className="py-4 px-4 text-center">{data.valueRestaked}</div>
          <div className="py-4 px-4 text-center">-</div>
          <div className="py-4 px-4 text-center">-</div>
        </div>
      </div>

      {/* Modal Pop-up */}
      {isModalOpen && (
        <div className="fixed inset-0 flex justify-center items-center z-50 bg-black bg-opacity-50">
          <div className="bg-gray-800 rounded-lg shadow-lg p-6 w-[400px]">
            <h3 className="text-xl font-semibold text-white mb-4">Details Strategy</h3>
            <div className="text-white mb-2">Operator: {data.operator}</div>
            <div className="text-white mb-2">Vault: {data.vault}</div>
            <div className="text-white mb-2">Category: {data.category}</div>
            <div className="text-white mb-2">Est. APY: {data.apy}</div>
            <div className="text-white mb-2">Strategy: {data.strategyDetails}</div>
            <div className="text-white mb-2">Total Manage Vault: {data.totalManageVault}</div>
            <div className="text-white mb-4">Total Value Restaked: {data.totalValueRestaked}</div>
            <button
              className="text-white bg-red-500 rounded px-4 py-2 w-full"
              onClick={closeModal} // Close the modal
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
