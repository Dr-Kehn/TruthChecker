import { getDefaultConfig } from '@rainbow-me/rainbowkit';
import {
  base,
  baseSepolia,
} from 'wagmi/chains';
require('dotenv').config();

export const config = getDefaultConfig({
  appName: 'RainbowKit',
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID!,
  chains: [
    baseSepolia,
    base,
    ...(process.env.NEXT_PUBLIC_ENABLE_TESTNETS === 'true' ? [baseSepolia] : []),
  ],
  ssr: true,
});
