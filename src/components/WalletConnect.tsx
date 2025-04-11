'use client';
import { ConnectButton } from '@rainbow-me/rainbowkit';


export default function ConnectWallet() {
  return (
    <div className="flex text-sm justify-end p-4">
      <ConnectButton />
    </div>
  );
}
