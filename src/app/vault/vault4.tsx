'use client';
import React from 'react';
import { Inter } from 'next/font/google';
const inter = Inter({ subsets: ['latin'] });

const historyData = [
  {
    id: '0xb4d...0e8',
    value: '$100',
    date: '23 Agustus 2025',
    status: 'Deposit',
  },
];



const sharedBoxStyle = {
  backgroundImage: `
    radial-gradient(circle at center, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0) 80%),
    linear-gradient(180deg, rgba(46, 51, 90, 0.3) 0%, rgba(28, 27, 51, 0.3) 20%)
  `,
  backgroundBlendMode: 'overlay',
  backdropFilter: 'blur(16px)',
  border: '1px solid rgba(255, 255, 255, 0.2)',
};

export default function ActionHistory() {
  return (
    <div className={`${inter.className} w-[1240px] mx-auto mt-10 text-white`}>
      <h2 className="text-2xl font-semibold mb-4">Action History</h2>

      {/* Header */}
      <div
        className="grid grid-cols-4 text-base text-gray-300 font-medium items-center px-6"
        style={{
          ...sharedBoxStyle,
          height: '40px',
          borderRadius: '10px',
        }}
      >
        <div className="text-center">ID</div>
        <div className="text-center">Value</div>
        <div className="text-center">Date</div>
        <div className="text-center">Status</div>
      </div>

      {/* Data Row */}
      {historyData.map((item, index) => (
        <div
          key={index}
          className="grid grid-cols-4 text-base items-center mt-2 px-6"
          style={{
            ...sharedBoxStyle,
            height: '100px',
            borderRadius: '10px',
          }}
        >
          <div className="text-center">{item.id}</div>
          <div className="text-center">{item.value}</div>
          <div className="text-center">{item.date}</div>
          <div className="flex justify-center">
            <button className="bg-white text-black text-base px-4 py-0.5 rounded-full">
              {item.status}
            </button>
          </div>
        </div>
      ))}

    </div>
  );
}