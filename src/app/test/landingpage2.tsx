import React from "react";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-[#0a0a23] to-black text-white flex flex-col items-center justify-center px-6 py-5">
      <h2 className="text-4xl md:text-2xl text-gray-400 mb-7">Why yielDrift</h2>

      <h1 className="text-4xl md:text-5xl text-center mb-10 text-white/90">
        Redefining Yield <br /> for Decentralized Builders.
      </h1>

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-7 mb-8">
        {[
          "Decentralized, Not Custodial",
          "Restaking-Backed Safety",
          "Multi-Asset Vaults",
          "Automated Yield Allocation",
          "Open Participation",
          "Transparent Strategy Auction",
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
          Most stablecoin platforms are passive. They chase safe returns, lock your capital, and offer
          little visibility into how your money is used. Meanwhile, yield is often controlled by a few insiders or opaque
          funds. We believe that yield should be open, competitive, and transparent.
        </p>

        <p className="font-medium text-white">
          Our platform introduces a new model:<br />
          Strategists compete. Restakers underwrite. Users stay in control.
        </p>

        <p>
          Through monthly auctions, yield strategies are selected based on merit—not connections. Operators pitch how
          they’ll allocate your capital across top protocols. The winning strategy earns your trust—and your vault.
          Backed by restakers using LRTs, capital is protected by a decentralized network, not a single party. And because
          we support multi-stablecoin vaults, you can grow your wealth in USDC++, EUROC++, or IDRX++, while staying
          within your preferred currency.
        </p>

        <p className="font-medium text-white/90">
          This is yield, rebuilt for Web3—where users earn, strategists compete, and value flows back to the people who
          power the protocol.
        </p>

        <p className="font-semibold text-white/90 text-lg">
          Welcome to the next era of decentralized finance.
        </p>
      </div>
    </main>
  );
}
