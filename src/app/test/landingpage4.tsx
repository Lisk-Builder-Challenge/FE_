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
      <h2 className="text-center text-4xl font-bold mb-16">How It Works</h2>
      <div className="flex flex-col md:flex-row justify-center items-center gap-8 max-w-7xl mx-auto relative">
        {steps.map((step, index) => (
          <div
            key={step.id}
            className="relative bg-gray-900 rounded-2xl shadow-md p-6 w-full max-w-xs flex flex-col items-center text-center"
          >
            <div className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center font-bold mb-4">
              {step.id}
            </div>
            <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
            <p className="text-sm text-gray-300">{step.description}</p>

            {/* Panah antar langkah hanya untuk layar md ke atas */}
            {index < steps.length - 1 && (
              <div className="hidden md:block absolute top-1/2 right-[-30px] transform -translate-y-1/2 text-2xl text-white">
                →
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowItWorks;
