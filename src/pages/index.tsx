"use client";
import ConnectWallet from "../components/WalletConnect";

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-100 dark:bg-black text-zinc-900 dark:text-white">
      <ConnectWallet />
      <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <h1 className="text-4xl font-bold mb-4">Hello World!</h1>
      </div>
    </main>
  );
}
