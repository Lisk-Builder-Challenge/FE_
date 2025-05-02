'use client';
import React from "react";
import { Inter } from 'next/font/google';
import { Card, CardContent } from "@/app/animasi/cardLanding4";
import { Button } from "@/app/animasi/buttonLanding4";
import Image from "next/image";

const inter = Inter({ subsets: ['latin'] });

export default function Portofolio() {
  const vaults = [
    { name: 'USD++', balance: '$50,000', icon: '/Video.svg' },
    { name: 'IDRX++', balance: '$50,000', icon: '/Video.svg' },
    { name: 'EUROC++', balance: '$50,000', icon: '/Video.svg' },
  ];

  const cardData = [
    { label: "Total Value Locked", value: "$124,532.00" },
    { label: "Total Deposits", value: "$200,000.00" },
    { label: "Total Withdrawals", value: "$75,468.00" },
  ];

  return (
    <div className={`${inter.className} bg-black flex justify-center items-center px-4 py-10 mt-[-150]`}>
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
        <h2 className="text-2xl font-semibold">Your Portofolio</h2>

        {/* Total Value Locked boxes */}
        <div className="grid md:grid-cols-3 gap-4">
          {cardData.map((item, i) => (
            <div
              key={i}
              className="border border-gray-700 rounded-xl px-4 py-3 text-left"
            >
              <p className="text-sm text-gray-400">{item.label}</p>
              <p className="text-xl font-semibold mt-1">{item.value}</p>
            </div>
          ))}
        </div>

        {/* Token List */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 w-full max-w-7xl drop-shadow-[0_0_5px_rgba(255,255,255,0.93)]">
          {vaults.map((vault) => (
            <Card
              key={vault.name}
              className="bg-gradient-to-b from-[#1e1e1e] to-[#111] border border-[#2a2a2a] rounded-2xl shadow-xl hover:shadow-2xl transition duration-300"
            >
              <CardContent className="p-6 flex flex-col items-start gap-6">
                <div className="w-full h-20 bg-[#2d2d2d] rounded-2xl overflow-hidden relative">
                  <Image
                    src={vault.icon}
                    alt="vault background"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg opacity-60"
                  />
                  <div className="absolute inset-0 flex items-center justify-between px-4 text-sm drop-shadow-[0_0_5px_rgba(255,255,255,0.93)]">
                    <span>PAYMENT</span>
                  </div>
                </div>
                
                <div className="self-stretch self-stretch py-2 inline-flex flex-col justify-start items-start gap-5">
                    <div className="self-stretch inline-flex justify-between items-center">
                        <div className="justify-start text-Foreground-Primary text-2xl font-medium font-['Inter'] [text-shadow:_0px_0px_20px_rgb(255_255_255_/_0.50)]">IDRX++</div>
                        <div className="justify-start text-Foreground-Primary text-2xl font-medium font-['Inter'] [text-shadow:_0px_0px_20px_rgb(255_255_255_/_0.50)]">$50,000</div>
                    </div>

                    {/* Button Deposit dan Withdraw */}
                    <div className="inline-flex justify-start items-start gap-5">
                        <Button variant="outline" className="px-4 py-2 rounded-lg outline outline-1 outline-offset-[-1px] outline-white/60 flex justify-start items-center gap-3">
                          Deposit
                        </Button>
                        <Button variant="outline" className="px-4 py-2 rounded-lg outline outline-1 outline-offset-[-1px] outline-white/60 flex justify-start items-center gap-3">
                          Withdraw  
                        </Button>
                    </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

      </div>
    </div>
  );
}