"use client";
import React from "react";
import { Button } from "@/app/animasi/button";
import { useRouter } from "next/navigation"; 
import Image from "next/image";

const HeroSection = () => {
  const router = useRouter();
  return (
    <section className="min-h-screen flex items-center justify-between bg-black text-white px-35 py-10 relative overflow-hidden">
      <div className="max-w-3xl z-10">
        <h1 className="text-4xl md:text-5xl lg:text-4.5xl leading-tight mb-10">
          Always-On Yield <br />
          Dynamically Managed <br />
          Powered by Rolling Epochs
        </h1>
        <p className="text-gray-400 text-lg mb-10">
          Earn yield on IDRX with live, evolving strategies — no idle capital, no monthly freeze.<br />
          Strategy managers operate continuously with transparent, periodic evaluations.
        </p>
        <div className="flex gap-4">
          <Button
            variant="default"
            onClick={() => router.push("/dashboard")}
            className="px-6 py-3 text-md bg-gradient-to-t from-gray-800 to-black text-white border border-gray hover:from-gray-500 hover:to-gray-800"
          >
            LAUNCH APP
          </Button>
          <Button
            variant="outline"
            onClick={() => router.push("/vault")}
            className="px-6 py-3 text-md border-white text-white to-gray-800 hover:from-gray-700"
          >
            EXPLORE VAULT
          </Button>
        </div>
      </div>
      <div className="absolute right-50 bottom-30 z-0">
        <Image
          src= "/Globe Asset.svg" 
          alt="globe" 
          className="w-[300px] md:w-[575px] h-auto opacity-70 object-contain translate-x-50 translate-y-20"
        />
      </div>
    </section>
  );
};

export default HeroSection;
