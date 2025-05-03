
"use client"

// import Header from "@/app/navbar&footer/header";
import Footer from "@/app/navbar&footer/footer";
import '@rainbow-me/rainbowkit/styles.css';
import {
  getDefaultConfig,
  RainbowKitProvider,
  //Chain,
} from '@rainbow-me/rainbowkit';
import { WagmiProvider } from 'wagmi';
import {
  //monadTestnet,
} from 'wagmi/chains';
import {
  QueryClientProvider,
  QueryClient,
} from "@tanstack/react-query";
import { defineChain } from "viem";

const queryClient = new QueryClient();

const pharosDevnet = defineChain({
  id: 50002,
  name: 'PharosDevnet',
  nativeCurrency: {
      decimals: 18,
      name: 'Ether',
      symbol: 'ETH',
  },
  rpcUrls: {
      default: {
          http: ['https://devnet.dplabs-internal.com'],
          webSocket: ['https://grafana.dplabs-internal.com/']
      },
  },
  blockExplorers: {
      default: {
          name: 'Explorer',
          url: 'https://pharosscan.xyz/'
      }
  },
});

export { pharosDevnet };

const config = getDefaultConfig({
  appName: 'My RainbowKit App',
  projectId: 'YOUR_PROJECT_ID',
  chains: [ pharosDevnet],
  ssr: true, // If your dApp uses server side rendering (SSR)
});

export default function Main({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
     <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider>
          {/* <Header />  */}
              {/* Main content */}
              {children}
            <Footer/>      
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>

    </>
  );
}
