'use client';
import React from "react";
import { Inter } from 'next/font/google';
import Image from "next/image";

const inter = Inter({ subsets: ['latin'] });

const sharedBoxStyle = {
  backgroundImage: `
    radial-gradient(circle at center, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0) 20%),
    linear-gradient(180deg, rgba(46, 51, 90, 0.3) 0%, rgba(28, 27, 51, 0.3) 100%)
  `,
  backgroundBlendMode: 'overlay',
  backdropFilter: 'blur(16px)',
  border: '1px solid rgba(255, 255, 255, 0.2)',
};

export default function VaultCard() {
  return (
    <div className={`${inter.className} flex justify-center items-center bg-black px-6 py-10`}>
      <div
        className="flex w-[1241px] h-[290px] rounded-[40px] p-6 text-white"
        style={{ ...sharedBoxStyle, boxShadow: '0px 30px 60px rgba(0, 0, 0, 0.1)' }}
      >
        {/* Kiri */}
        <div className="flex flex-col justify-between flex-1 pr-8">
          <div>
            <h2 className="text-2xl font-semibold">USD++ Vault</h2>
            <p className="text-gray-400 mt-1">
              Earn real yield from multiple DeFi protocols while maintaining stable exposure to USD
            </p>
          </div>
          <div className="flex items-center gap-3 mt-6">
            <span className="h-3 w-3 rounded-full bg-blue-500" />
            <span className="text-base font-medium">Active</span>
          </div>
          <div className="flex gap-4 mt-4">
            {['Deposit', 'Withdraw', 'Restake'].map((label) => (
              <button
                key={label}
                className="border border-white/30 px-6 py-2 rounded-md text-sm transition bg-transparent hover:bg-white hover:text-black active:bg-white/10"
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* Kanan - hanya statistik, tanpa shape */}
        <div className="flex flex-col justify-end items-end flex-1">
        <div className="px-8 py-3 rounded-2xl backdrop-blur-md border border-white/10 bg-black/40 shadow-md bg-[url('/vault1.png')] bg-no-repeat bg-auto bg-left-top h-[200px]">
            {/* <div className="">
                <Image
                    src={"/vault1.png"}
                    alt="vault1"
                    width={500}
                    height={500}
                    className="w-[15vw] h-[10vw] flex mx-auto"
                />
            </div> */}
            <div className="flex justify-center gap-8 text-center bg-transparent items-end self-end">
              <div>
                <p className="text-lg font-semibold">8.2%</p>
                <p className="text-gray-400 text-sm">Current APY</p>
              </div>
              <div>
                <p className="text-lg font-semibold">$12.5M</p>
                <p className="text-gray-400 text-sm">TVL</p>
              </div>
              <div>
                <p className="text-lg font-semibold">$5,234</p>
                <p className="text-gray-400 text-sm">Your Balance</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}