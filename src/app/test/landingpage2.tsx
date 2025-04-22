import React from "react";

export default function WhyUsSection() {
  return (
    <section className="bg-white py-16 px-6 text-center ">
      <h2 className="text-2xl mb-2 text-[#000000]">Why US?</h2>
      <h1 className="text-4xl font-semibold mb-6 text-[#000000]">
        Redefining Yield <br /> for Decentralized Builders.
      </h1>

      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {[
          "Decentralized, Not Custodial",
          "Restaking-Backed Safety",
          "Multi-Asset Vaults",
          "Automated Yield Allocation",
          "Open Participation",
          "Transparent Strategy Auction",
        ].map((label, index) => (
          <span
            key={index}
            className="bg-gray-100 text-sm text-gray-800 px-4 py-2 rounded-full shadow"
          >
            {label}
          </span>
        ))}
      </div>

      <p className="max-w-3xl mx-auto mb-4 text-gray-700">
        Most stablecoin platforms are passive. They chase safe returns, lock your capital,
        and offer little visibility into how your money is used. Meanwhile, yield is often
        controlled by a few insiders or opaque funds. We believe that yield should be
        open, competitive, and transparent.
      </p>

      <p className="max-w-3xl mx-auto mb-4 text-gray-700">
        Our platform introduces a new model: <br />
        Strategists compete. Restakers underwrite. Users stay in control.
      </p>

      <p className="max-w-3xl mx-auto mb-4 text-gray-700">
        Through monthly auctions, yield strategies are selected based on merit—not
        connections. Operators pitch how they'll allocate your capital across top
        protocols. The winning strategy earns your trust—and your vault. Backed by
        restakers using LRTs, capital is protected by a decentralized network, not a
        single party.
      </p>

      <p className="max-w-3xl mx-auto mb-4 text-gray-700">
        And because we support multi-stablecoin vaults, you can grow your wealth in
        USDC++, EUROC++, or IDRX++, while staying within your preferred currency.
      </p>

      <p className="max-w-3xl mx-auto text-gray-700">
        This is yield, rebuilt for Web3—<br />
        where users earn, strategists compete, and value flows back to the people who
        power the protocol.
      </p>

      <p className="mt-6 text-gray-500">Welcome to the next era of decentralized finance.</p>
    </section>
  );
}
