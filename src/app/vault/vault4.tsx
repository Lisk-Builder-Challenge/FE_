'use client';
import React from 'react';
import { Inter } from 'next/font/google';
const inter = Inter({ subsets: ['latin'] });

const historyData = [
  {
    id: '0xb4d...0e8',
    value: 'Rp10.000',
    idrxPlus: '1.000',
    date: '23 Agustus 2025',
    status: 'Deposit',
  },
  {
    id: '0xa1c...3d9',
    value: 'Rp25.000',
    idrxPlus: '2.500',
    date: '24 Agustus 2025',
    status: 'Deposit',
  },
  {
    id: '0xde9...f3b',
    value: 'Rp7.500',
    idrxPlus: '750',
    date: '25 Agustus 2025',
    status: 'Withdrawal',
  },
  {
    id: '0xabc...1ef',
    value: 'Rp12.000',
    idrxPlus: '1.200',
    date: '26 Agustus 2025',
    status: 'Deposit',
  },
  {
    id: '0x987...2cd',
    value: 'Rp5.000',
    idrxPlus: '500',
    date: '27 Agustus 2025',
    status: 'Withdrawal',
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
    <div className={`${inter.className} w-[1240px] mx-auto mt-8 text-white`}>
      <h2 className="text-5xl font-bold text-center relative animated-gradient-text"
          style={{
            lineHeight: '1.2',
            paddingBottom: '0.25em',
            overflow: 'visible',
          }}>
          Action History
          </h2>

      {/* Header */}
      <div
          className="grid grid-cols-5 text-md font-large text-gray-300 rounded-[20px] border border-gray-700 shadow-md space-y-5 "
          style={sharedBoxStyle}
        >
          <div className="text-center mt-3">ID</div>
          <div className="text-center mt-3">IDRX</div>
          <div className="text-center mt-3">IDRX++</div>
          <div className="text-center mt-3">Date</div>
          <div className="text-center mt-3">Status</div>
      </div>
        

      {/* Data Row */}

      <div
        className="w-full p-1 space-y-0.05 mt-4"
        style={{
          ...sharedBoxStyle,
          borderRadius: '20px',
        }}
      >
        {historyData.map((item, index) => (
          <div
            key={index}
            className="grid grid-cols-5 text-base items-center px-6 h-[100px] "
          >
            <div className="text-center">{item.id}</div>
            <div className="text-center">{item.value}</div>
            <div className="text-center">{item.idrxPlus}</div>
            <div className="text-center">{item.date}</div>
            <div className="flex justify-center">
              <button className="bg-white text-black text-base px-4 py-0.5 rounded-full">
                {item.status}
              </button>
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        .animated-gradient-text {
          background: linear-gradient(120deg, #ffffff 0%, #999999 50%, #000000 100%);
          background-size: 300% 300%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: shimmerText 10s ease-in-out infinite;
        }

        @keyframes shimmerText {
          0% {
            background-position: 200% 0%;
          }
          100% {
            background-position: -100% 0%;
          }
        }
      `}</style>
      


    </div>
  );
}