
"use client"

// import Header from "@/app/navbar&footer/header";
import Footer from "@/app/navbar&footer/footer";
import '@rainbow-me/rainbowkit/styles.css';
import {
  getDefaultConfig,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import { WagmiProvider } from 'wagmi';
import {
  monadTestnet,
} from 'wagmi/chains';
import {
  QueryClientProvider,
  QueryClient,
} from "@tanstack/react-query";

const queryClient = new QueryClient();


const config = getDefaultConfig({
  appName: 'My RainbowKit App',
  projectId: 'YOUR_PROJECT_ID',
  chains: [monadTestnet],
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
