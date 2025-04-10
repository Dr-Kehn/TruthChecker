import type { NextApiRequest, NextApiResponse } from 'next';
import { createPublicClient, http } from 'viem';
import { baseSepolia } from 'viem/chains';
import { abi } from '../../lib/constants';
import { contractAddress } from '../../lib/contract';

const client = createPublicClient({
  chain: baseSepolia,
  transport: http(`https://base-sepolia.g.alchemy.com/v2/${process.env.NEXT_PUBLIC_BASE_TESTNET_API_KEY}`),
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  console.log("API route called");
  
  const { start = '1', count = '10' } = req.query;

  try {
    console.log("Fetching submissions from contract");    
    const result = await client.readContract({
      address: contractAddress!,
      abi,
      functionName: 'getSubmissions',
      args: [BigInt(Number(start)), BigInt(Number(count))],
    });

    const [ids, submitters, contents, trueVotes, falseVotes, finalVerdicts] = result as any[];

    const submissions = ids.map((id: bigint, i: number) => ({
      id: Number(id),
      submitter: submitters[i],
      content: contents[i],
      trueVotes: Number(trueVotes[i]),
      falseVotes: Number(falseVotes[i]),
      finalVerdict: Number(finalVerdicts[i]),
    }));

    res.status(200).json(submissions);
  } catch (error: any) {
    console.error('Error fetching submissions:', error);
    console.error(error.message);
    res.status(500).json({ error: 'Failed to fetch submissions', details: error.message });
  }
}