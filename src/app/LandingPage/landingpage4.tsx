"use client";

import { useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

type Step = {
  id: number;
  title: string;
  description: string;
};

const steps: Step[] = [
  {
    id: 1,
    title: "Deposit Stablecoin",
    description: "Choose a vault based on USDC, IDRX, or EUROC to start earning yield",
  },
  {
    id: 2,
    title: "Strategies Register & Operate",
    description: "Strategy managers actively manage funds according to the restake support they receive",
  },
  {
    id: 3,
    title: "Restakers Underwrite",
    description: "Restaker provide support with ETH as collateral-ensuring strategy accountability",
  },
  {
    id: 4,
    title: "Continuous Allocation",
    description: "Funds are allocated proportionally to active startegies, with no need for freezing or monthly rotation",
  },
  {
    id: 5,
    title: "Periodic Evaluation & Slashing",
    description:
      "Each epoc, strategy performance is evaluated. Poor-performing managers are slashed, and funds are auto-reallocated",
  },
];

const HowItWorks = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current) {
        if (window.innerWidth < 768) {
          containerRef.current.classList.remove("flex-row");
          containerRef.current.classList.add("flex-col");
        } else {
          containerRef.current.classList.remove("flex-col");
          containerRef.current.classList.add("flex-row");
        }
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="bg-black text-white mt-[-40] py-16 px-4 relative overflow-hidden" id="how">
      <div className="absolute inset-0 flex justify-center mt-20">
        <Image
          src="/Tutorials.svg"
          alt="Background"
          width={1200}
          height={1080}
        />
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <h2 className="text-4xl md:text-5xl mb-12 text-center font-bold drop-shadow-[0_0_5px_rgba(255,255,255,0.93)]">
          How It Works
        </h2>
        
        <div className="flex justify-center w-full overflow-x-auto pb-4 md:pb-0">
          <div 
            ref={containerRef}
            className="flex flex-row md:items-start gap-6 min-w-max md:min-w-0 justify-center"
          >
            {steps.map((step, index) => (
              <div key={step.id} className="flex flex-col items-center relative justify-between">
                <div className="flex flex-col items-center text-center w-48 md:w-[200px] px-4">
                  <div className="w-14 h-14 rounded-full bg-white text-black flex items-center justify-center font-bold text-xl mb-4 z-10">
                    {step.id}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-300">{step.description}</p>
                </div>
                
                {index < steps.length - 1 && (
                  <div className="flex absolute top-20 left-[calc(100%_-_2px)] z-0 items-center">
                    <ArrowRight className="text-white w-6 h-6" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
