"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { Button } from "@/app/animasi/button";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black relative overflow-hidden text-white px-6">
      {/* Background Aura */}
      <div className="absolute inset-0 z-5 flex items-start justify-center">
        <div className="relative w-full h-full -translate-y-30">
                <Image
          src="/svgLP1/Ellipse.svg"
          alt="Background Aura"
          layout="fill"
          objectFit="contain"
          className="opacity-50 float-left-animation"
        />
        </div>
      </div>
      

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-3xl mt-10">
        {/* Heading */}
        <h1
        className="text-4xl md:text-5xl font-bold leading-tight mb-6 bg-clip-text text-transparent"
        style={{
            backgroundImage: 'linear-gradient(70deg, white 5%, #cccccc 10%, #666666 60%, black 99.7%)',
        }}
        >
        Earn Yield, Stay Stable —<br />
        Powered by Auctions
        </h1>

        {/* Subheading */}
        <p className="text-gray-400 text-lg mb-8 max-w-xl mx-auto">
        Earn yield on USDC, IDRX, or EUROC through<br />
        permissionless, competitive manager strategies.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap gap-4 mb-20">
          <Button
            variant="default"
            onClick={() => router.push("/dashboard")}
            className="flex items-center gap-2 px-6 py-3 text-md bg-gradient-to-t from-gray-800 to-black text-white border border-gray-700 hover:from-gray-600 hover:to-gray-800 rounded-md"
          >
            LAUNCH APP <ArrowRight size={16} />
          </Button>
          <Button
            variant="outline"
            onClick={() => router.push("/vault")}
            className="flex items-center gap-2 px-6 py-3 text-md border-white text-white hover:bg-white hover:text-black rounded-md"
          >
            EXPLORE VAULT <ArrowRight size={16} />
          </Button>
        </div>

        
        {/* Phone + Floating Hexagons */}
        <div className="relative w-[595px] h-[350px] overflow-hidden mb-20">

        {/* iPhone setengah */}
            <Image
                src="/svgLP1/iPhone.svg"
                alt="Phone Mockup"
                width={280}
                height={300}
                className="object-cover mx-auto"
            />

            {/* Hexagon ngambang */}
            <div className="absolute top-10 left-12 transform translate-x-40">
                <Image
                src="/svgLP1/segi6.svg"
                alt="Floating Hexagon 1"
                width={388}
                height={40}
                />
            </div>

            {/* Gradient tepat di bawah iPhone */}
            <div className="absolute left-1/2 top-[100%] w-[600px] h-[150px] transform -translate-x-1/2 -translate-y-1/2 z-10 drop-shadow-[0_-100px_0_50px_rgba(255,255,255,8)]">
                <Image
                    src="/svgLP1/Gradient.svg"
                    alt="Gradient Cut"
                    layout="fill"
                    className="opacity-500"
                />
            </div>
        </div>
      </div>
    </div>
  );
}
