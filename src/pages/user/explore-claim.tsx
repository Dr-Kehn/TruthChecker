"use client";
import { AppSidebar } from "../../components/app-sidebar";
import { SiteHeader } from "../../components/site-header";
import { SidebarInset, SidebarProvider } from "../../components/ui/sidebar";
import {
  CheckCircle,
  XCircle,
  ThumbsUp,
  MessageCircle,
  Share2,
} from "lucide-react";
import { useEffect, useState } from "react";
import { useReadContract, useAccount, useWriteContract } from "wagmi";
import { abi } from "../../lib/constants";
import { contractAddress } from "../../lib/contract";
import { toast } from "react-toastify";

export default function Page() {
  const [total, setTotal] = useState(0);
  const [facts, setFacts] = useState<any[]>([]);
  const [page, setPage] = useState(1);
  const perPage = 1;
  const { address } = useAccount();

  const { data } = useReadContract({
    abi,
    address: contractAddress,
    functionName: "getTotalSubmissions",
  });

  const { writeContract, isSuccess, data: hash } = useWriteContract();

  useEffect(() => {
    if (typeof data === "bigint") setTotal(Number(data));
  }, [data]);

  const fetchFacts = async () => {
    const start = (page - 1) * perPage + 1;
    try {
      const res = await fetch(
        `/api/get-submissions?start=${start}&count=${perPage}`
      );
      if (!res.ok) {
        console.error("API error:", res.status, await res.text());
        return;
      }
      const parsed = await res.json();
      setFacts(parsed);
    } catch (err) {
      console.error("Fetch error:", err);
    }
  };

  useEffect(() => {
    if (total > 0) fetchFacts();
  }, [total, page]);

  const handleVote = async (id: number, vote: boolean) => {
    if (!address) {
      toast.error("Wallet not connected", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: true,
        draggable: true,
      });
      return;
    }

    const votedFact = facts.find((f) => f.id === id);
    if (votedFact && votedFact.submitter === address) {
      toast.error("You cannot vote on your own submission", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: true,
        draggable: true,
      });
      return;
    }

    try {
      writeContract({
        address: contractAddress,
        abi,
        functionName: "vote",
        args: [BigInt(id), vote],
        account: address
      });

      if (hash) {
        toast.success("Vote successful", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: true,
          draggable: true,
        });
      }

      setTimeout(async () => {
        await fetchFacts();
      }, 2000);

    } catch (err) {
      console.error("Voting failed:", err);
      toast.error("An error occured while voting", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: true,
        draggable: true,
      });
    }
  };

  const totalPages = Math.ceil(total / perPage);

  return (
    <SidebarProvider
      style={
        {
          "--sidebar-width": "calc(var(--spacing) * 72)",
          "--header-height": "calc(var(--spacing) * 12)",
        } as React.CSSProperties
      }
      className="p-0 m-0"
    >
      <AppSidebar variant="inset" />
      <SidebarInset className="p-0 m-0">
        <SiteHeader title="Dashboard" />

        {/* dashboard section */}

        <div className="flex flex-1 flex-col px-6 bg-[#141414] pb-10 text-white">
          <div className="@container/main flex flex-1 flex-col gap-2">
            <h1 className="flex flex-col gap-4 py-4 md:gap-6 md:py-6 ml-6 mt-4 lg:text-4xl text-2xl">
              How much is Nysc Copper&apos;s monthly salary?
            </h1>
            <div className="flex flex-col gap-4 h-fit lg:px-8 px-2 py-8 rounded-2xl md:gap-6 md:py-6 bg-[#1F1F1F] mx-2">
              <h2 className="flex flex-col gap-4 py-4 md:gap-6 md:py-4 ml-6 text-lg">
                As of March 2025, the monthly allowance for National Youth
                Service Corps (NYSC) members in Nigeria has been increased to
                N77,000. This adjustment aligns with the new national minimum
                wage and reflects the government&apos;s commitment to enhancing the
                welfare of corps members.....
              </h2>
            </div>

            <div>
              <p className="mx-4 mt-6 text-xl font-medium mb-4">
                Claim Results
              </p>

              <div className="mx-4 flex flex-col lg:flex-row gap-6">
                <div className="flex-1 bg-[#1F1F1F] rounded-lg overflow-hidden border border-[#2c2c2c]">
                  <div className="flex items-start">
                    <div className="w-2 self-stretch bg-green-500"></div>

                    <div className="flex-1 p-4">
                      <div className="flex items-center gap-2 mb-3">
                        <CheckCircle className="text-green-500" size={20} />
                        <h3 className="font-medium text-green-400">Verified</h3>
                      </div>

                      {/* Progress section */}
                      <div className="mb-1 flex justify-between text-sm">
                        <span className="text-green-400">
                          Verification Score
                        </span>
                        <span className="text-green-400">86%</span>
                      </div>

                      {/* Green progress bar */}
                      <div className="w-full bg-[#2c2c2c] rounded-full h-2">
                        <div
                          className="bg-green-500 h-2 rounded-full"
                          style={{ width: "86%" }}
                        ></div>
                      </div>

                      <p className="pt-2">2398 votes</p>
                    </div>
                  </div>
                </div>

                <div className="flex-1 bg-[#1F1F1F] rounded-lg overflow-hidden border border-[#2c2c2c]">
                  <div className="flex items-start">
                    <div className="w-2 self-stretch bg-red-500"></div>

                    <div className="flex-1 p-4">
                      <div className="flex items-center gap-2 mb-3">
                        <XCircle className="text-red-500" size={20} />
                        <h3 className="font-medium text-gray-400">
                          Unverified
                        </h3>
                      </div>

                      {/* Progress section */}
                      <div className="mb-1 flex justify-between text-sm">
                        <span className="text-gray-400">
                          Verification Score
                        </span>
                        <span className="text-gray-400">42%</span>
                      </div>

                      <div className="w-full bg-[#2c2c2c] rounded-full h-2">
                        <div
                          className="bg-red-500 h-2 rounded-full"
                          style={{ width: "42%" }}
                        ></div>
                      </div>

                      <p className="pt-2">300 votes</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Claims */}
            <div>
              <p className="mx-4 mt-6 text-xl font-medium mb-4">
                Other related claims
              </p>

              <div className="mx-4 flex flex-col gap-6">
                {facts.length === 0 ? (
                  <div className="text-center p-10">
                    <p className="text-zinc-500 dark:text-zinc-400">
                      No claims found or still loading...
                    </p>
                  </div>
                ) : (
                  <>
                    {facts.map((fact) => (
                      <div
                        className="flex-1 bg-[#1F1F1F] rounded-lg overflow-hidden border border-[#2c2c2c] p-4"
                        key={fact.id}
                      >
                        {/* Header with user info and verification badge */}
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center gap-3">
                            {/* User avatar placeholder (hexagon from image) */}
                            <div className="bg-teal-500 text-white p-2 rounded-md">
                              <svg
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M21 16.5V7.5C20.9999 7.03531 20.8827 6.57989 20.659 6.17341C20.4353 5.76693 20.1126 5.42434 19.725 5.175L12 0.875L4.275 5.175C3.88745 5.42434 3.56473 5.76693 3.34098 6.17341C3.11723 6.57989 3.00005 7.03531 3 7.5V16.5C3.00005 16.9647 3.11723 17.4201 3.34098 17.8266C3.56473 18.2331 3.88745 18.5757 4.275 18.825L12 23.125L19.725 18.825C20.1126 18.5757 20.4353 18.2331 20.659 17.8266C20.8827 17.4201 20.9999 16.9647 21 16.5Z"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            </div>
                            <div>
                              <span className="font-medium">
                                {fact.submitter.slice(0, 6)}...
                                {fact.submitter.slice(-6)}
                              </span>
                              <span className="text-gray-400 text-sm ml-2">
                                {/* 12 hours ago */}
                              </span>
                            </div>
                          </div>
                          <div className="px-3 py-1 rounded-full text-xs flex items-center gap-1">
                            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                            <span>
                              {
                                ["Pending", "✅ True", "❌ False"][
                                  fact.finalVerdict
                                ]
                              }
                            </span>
                          </div>
                        </div>

                        {/* Claim content */}
                        <div className="mb-4">
                          <p className="text-gray-200">{fact.content}</p>
                        </div>

                        {/* Engagement metrics */}
                        <div className="flex flex-wrap gap-4 pt-2 border-t border-[#2c2c2c]">
                          <button className="flex items-center gap-2 text-gray-300 py-2 hover:text-white cursor-pointer transition-colors">
                            <ThumbsUp
                              size={18}
                              onClick={() => handleVote(fact.id, true)}
                            />
                            <span>{fact.trueVotes}</span>
                          </button>
                          <button className="flex items-center gap-2 text-gray-300 py-2 cursor-pointer hover:text-white transition-colors">
                            <ThumbsUp
                              size={18}
                              className="rotate-180"
                              onClick={() => handleVote(fact.id, false)}
                            />
                            <span>{fact.falseVotes}</span>
                          </button>
                          <button className="flex items-center gap-2 text-gray-300 py-2 hover:text-white transition-colors">
                            <MessageCircle size={18} />
                            <span>0</span>
                          </button>
                          <button className="flex items-center gap-2 text-gray-300 py-2 hover:text-white transition-colors">
                            <Share2 size={18} />
                            <span>Share</span>
                          </button>
                        </div>
                      </div>
                    ))}
                  </>
                )}

                {/* pagination section */}

                <div className="flex justify-between items-center mt-6">
                  <button
                    onClick={() => setPage((p) => Math.max(1, p - 1))}
                    disabled={page === 1}
                    className="bg-blue-900 text-sm px-3 py-1 rounded disabled:opacity-50 cursor-pointer"
                  >
                    Previous
                  </button>
                  <span className="text-sm">
                    Page {page} of {totalPages}
                  </span>
                  <button
                    onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                    disabled={page === totalPages}
                    className="bg-blue-900  text-sm px-3 py-1 rounded disabled:opacity-5 cursor-pointer"
                  >
                    Next
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* dashboard section */}
      </SidebarInset>
    </SidebarProvider>
  );
}
