import React from "react";
import { Card, CardContent } from "@/app/animasi/cardLanding4";
import { Button } from "@/app/animasi/buttonLanding4";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

const vaults = [
  {
    name: "USD++ Vault",
    icon: "/Video.svg",
  },
  {
    name: "IDRX++ Vault",
    icon: "/Video.svg",
  },
  {
    name: "EUROC++ Vault",
    icon: "/Video.svg",
  },
];

export default function Vaults() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center py-16 px-4">
      <h1 className="text-5xl font-bold mb-16 text-center">Active Vaults</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 w-full max-w-6xl">
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
                <div className="absolute inset-0 flex items-center justify-between px-4 text-sm text-gray-300">
                  <span>PAYMENT</span>
                </div>
              </div>
              <h2 className="text-xl font-semibold">{vault.name}</h2>
              <Button variant="secondary" className="mt-auto">
                Explore Vault <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="text-center mt-24">
        <h2 className="text-2xl font-semibold mb-6">Supported Assets & Integrations</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="w-14 h-14 rounded-xl bg-[#1a1a1a] border border-gray-800 flex items-center justify-center text-white text-2xl"
            >
              📦
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}