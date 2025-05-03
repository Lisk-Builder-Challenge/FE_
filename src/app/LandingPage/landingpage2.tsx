import React from "react";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-[#0a0a23] to-black text-white flex flex-col items-center justify-center px-6 py-5">
      <h2 className="text-4xl md:text-5xl mb-12 text-white drop-shadow-[0_0_5px_rgba(255,255,255,0.93)] text-center duration-50">Why yielDrift</h2>

      <h1 className="text-4xl md:text-5xl text-center mb-10 text-white/90">
        Redefining Yield <br /> for Decentralized Builders.
      </h1>

      <div>
        <Image
          src="/svg2/lurB.png"
          alt="Background Aura"
          width={1000}
          height={1000}
          className="absolute -z-10 opacity-50"
        />
      </div>


      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-7 mb-8">
        {[
          "Decentralized, Not Custodial",
          "Restaking-Backed Safety",
          "Multi-Strategy Vaults",
          "Always-On Yield",
          "Rolling Epoch Evaluations",
          "Permissionless Strategy Evolution",
        ].map((item) => (
          <span
            key={item}
            className="border border-gray-500 bg-gray-700/50 rounded-md px-4 py-2 text-sm text-gray-200 backdrop-blur-md hover:bg-white/10 transition text-center"
          >
            {item}
          </span>
        ))}
      </div>

      <div className="max-w-2xl text-center text-white/70 space-y-6">
        <p>
          Most stablecoin platforms are passive. They freeze capital, rely on monthly rotations, and offer limited insight into what’s driving your returns. We believe yield should flow continuously — open, competitive, and accountable.

        </p>

        <p className="font-medium text-white">
          yielDrift introduces a new model: Strategists operate non-stop. <br />
          Restakers back them. Users remain in full control.
        </p>

        <p>
          With rolling epochs, strategies stay active — no restarts, no downtime. Performance is evaluated rutin, and poor managers are slashed, protecting the vault and rewarding users. Restakers back strategists and can move support anytime, creating a dynamic, merit-based system. Users earn from a live, evolving set of strategies — backed by decentralized trust, not centralized control. With support for stablecoins like USDC++, IDRX++, and EUROC++, yield flows continuously in your preferred currency.
        </p>

        <p className="font-medium text-white/90">
          This is DeFi yield — always on, performance-driven, and built for the future.
        </p>

        <p className="font-semibold text-white/90 text-lg">
          Welcome to the next era of decentralized finance.
        </p>
      </div>
    </main>
  );
}
