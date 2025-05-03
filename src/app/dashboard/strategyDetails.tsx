"use client";

import {
  Dialog,
  DialogContent,
  //DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/app/animasi/dialog";
//import { ChevronDown } from "lucide-react";
//import { useState } from "react";
import { EllipsisVertical } from 'lucide-react';
import Dropdown from "@/app/animasi/dropdown";
import DropdownGroup from "@/app/animasi/dropdownGroup";

interface PlatformDetail {
  name: string;
}

interface StrategyDetailsProps {
  operator: string;
  vault: string;
  category: string;
  apy: string;
  strategy: string;
  totalManageVault: string;
  valueRestaked: string;
  platforms: PlatformDetail[];
  assetDetails: string;
}

export function StrategyDetails({
  operator,
  vault,
  category,
  apy,
  strategy,
  totalManageVault,
  valueRestaked,
  platforms,
  assetDetails,
}: StrategyDetailsProps) {
  //const [showPlatformDetails, setShowPlatformDetails] = useState(false);
  //const [showAssetDetails, setShowAssetDetails] = useState(false);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="text-gray-400 hover:text-white transition-colors">
            <EllipsisVertical className="ml-12"/>
        </button>
      </DialogTrigger>

      {/* Details Content */}
      <DialogContent className="!w-[630px] max-w-none min-h-[500px] p-5 bg-black/80 rounded-[40px] shadow-[0px_30px_60px_0px_rgba(0,0,0,0.10)] shadow-[0px_15px_30px_0px_rgba(0,0,0,0.05)] shadow-[0px_5px_10px_0px_rgba(0,0,0,0.05)] shadow-[inset_0px_0px_100px_0px_rgba(204,215,255,0.15)] outline outline-1 outline-offset-[-1px] outline-white/20 backdrop-blur-[10px] border-none">
        <div className="self-stretch flex-1 flex flex-col justify-start items-start gap-5">
            <DialogTitle className="self-stretch justify-start text-Foreground-Primary text-3xl font-medium font-['Inter']">Details Strategy</DialogTitle>
              
              <div className="space-y-2.5">
                <div className="w-[590px] p-1.5 rounded-md outline outline-[0.75px] outline-offset-[-0.75px] outline-white/10">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400/70 text-lg font-medium">Operator</span>
                    <span className="text-white text-2xl font-medium">{operator}</span>
                  </div>
                </div>

                <div className="w-[590px] p-1.5 rounded-md outline outline-[0.75px] outline-offset-[-0.75px] outline-white/10">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400/70 text-lg font-medium">Vault</span>
                    <span className="text-white text-2xl font-medium">{vault}</span>
                  </div>
                </div>

                <div className="w-[590px] p-1.5 rounded-md outline outline-[0.75px] outline-offset-[-0.75px] outline-white/10">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400/70 text-lg font-medium">Est. APY</span>
                    <span className="text-white text-2xl font-medium">{apy}</span>
                  </div>
                </div>

                <div className="w-[590px] p-1.5 rounded-md outline outline-[0.75px] outline-offset-[-0.75px] outline-white/10">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400/70 text-lg font-medium">Category</span>
                    <span className="text-white text-2xl font-medium">{category}</span>
                  </div>
                </div>

                <div className="w-[590px] h-16 p-1.5 rounded-md outline outline-[0.75px] outline-offset-[-0.75px] outline-white/10">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400/70 text-lg font-medium">Strategy</span>
                    <span className="text-white text-base w-64 text-right">{strategy}</span>
                  </div>
                </div>

                <div className="w-[590px] p-1.5 rounded-md outline outline-[0.75px] outline-offset-[-0.75px] outline-white/10">
                  <div className="flex justify-between items-center">
                    <span className="text-white text-lg font-medium">Total Manage Vault</span>
                    <span className="text-gray-400/70 text-3xl font-medium">{totalManageVault}</span>
                  </div>
                </div>

                <div className="w-[590px] p-1.5 rounded-md outline outline-[0.75px] outline-offset-[-0.75px] outline-white/10">
                  <div className="flex justify-between items-center">
                    <span className="text-white text-lg font-medium">Total Value Restaked</span>
                    <span className="text-gray-400/70 text-3xl font-medium">{valueRestaked}</span>
                  </div>
                </div>
              </div>
            
            {/* Dropdown for Platform and Asset Details */}
              <DropdownGroup>
                <Dropdown buttonText="See Platform Details">
                <div className="text-white text-base font-medium space-y-2">
                    {platforms.map((platform, index) => (
                    <div key={index} className="py-1 px-2 hover:bg-white/10 rounded transition-colors cursor-pointer">
                        {platform.name}
                    </div>
                    ))}
                </div>
                </Dropdown>
                
                <Dropdown buttonText="See Asset Details">
                <div className="text-white text-base font-medium">
                    {assetDetails}
                </div>
                </Dropdown>
              </DropdownGroup>
        </div>
      </DialogContent>
    </Dialog>
  );
}