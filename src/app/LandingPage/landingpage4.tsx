import React from "react";

type Step = {
  id: number;
  title: string;
  description: string;
};

const steps: Step[] = [
  {
    id: 1,
    title: "Deposit Stablecoin",
    description: "Choose your preferred stablecoin vault",
  },
  {
    id: 2,
    title: "Operators Submit Strategies",
    description: "Competitive yield strategies are proposed",
  },
  {
    id: 3,
    title: "Restakers Underwrite",
    description: "Selected strategies are secured by ETH",
  },
  {
    id: 4,
    title: "Funds Allocated",
    description: "Vault allocates user funds based on the selected strategy",
  },
  {
    id: 5,
    title: "Yield Accrual & Rebalancing",
    description:
      "Yield is accrued and Capital is rebalanced into the new winning strategy or You can withdraw",
  },
];

const HowItWorks: React.FC = () => {
  return (
    <div className="bg-black text-white py-16 px-4">
      <h2 className="text-4xl md:text-5xl mb-12 text-center drop-shadow-[0_0_5px_rgba(255,255,255,0.93)]">
        How It Works
      </h2>
      <div className="flex justify-center items-center gap-4 max-w-7xl mx-auto">
        <div className="flex items-center space-x-8">
          {steps.map((step, index) => (
            <div key={step.id} className="flex flex-col items-center text-center space-y-4">
              <div className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center font-bold text-xl mb-4">
                {step.id}
              </div>
              <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
              <p className="text-sm text-gray-300">{step.description}</p>

              {/* Arrow only visible on larger screens */}
              {index < steps.length - 1 && (
                <div className="hidden md:block text-2xl text-white">
                  →
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
