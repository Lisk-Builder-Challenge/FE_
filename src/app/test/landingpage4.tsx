import React from "react";

const steps = [
  {
    number: 1,
    title: "Deposit Stablecoin",
    description: "Choose your preferred stablecoin vault",
  },
  {
    number: 2,
    title: "Operators Submit Strategies",
    description: "Competitive yield strategies are proposed",
  },
  {
    number: 3,
    title: "Restakers Underwrite",
    description: "Selected strategies are secured by ETH",
  },
  {
    number: 4,
    title: "Funds Allocated",
    description: "Vault allocates user funds based on the selected strategy",
  },
  {
    number: 5,
    title: "Yield Accrual & Rebalancing",
    description:
      "Yield is accrued and Capital is rebalanced into the new winning strategy or You can withdraw",
  },
];

export default function HowItWorks() {
  return (
    <div className="bg-white py-16 px-8 text-center">
      <h2 className="text-2xl font-semibold mb-12 text-[#000000]">How It Works</h2>
      <div className="flex flex-col md:flex-row justify-center items-start md:items-center gap-8">
        {steps.map((step) => (
          <div key={step.number} className="flex flex-col items-center max-w-xs">
            <div className="bg-black text-white rounded-full w-10 h-10 flex items-center justify-center text-sm font-medium mb-4">
              {step.number}
            </div>
            <h3 className="font-medium text-lg mb-1 text-[#000000]">{step.title}</h3>
            <p className="text-gray-500 text-sm">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
