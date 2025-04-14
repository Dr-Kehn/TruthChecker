"use client";
import React from "react";
import { AppSidebar } from "../../components/app-sidebar";
import { SiteHeader } from "../../components/site-header";
import { SidebarInset, SidebarProvider } from "../../components/ui/sidebar";
import primary from "../../assets/primary.png";
import { contractAddress } from "../../lib/contract";
import { useState, useEffect } from "react";
import { useAccount, useWriteContract } from "wagmi";
import { abi } from "../../lib/constants";
import { toast } from "react-toastify";
import { FiExternalLink } from "react-icons/fi";
import Image from "next/image";
import { baseSepolia } from "viem/chains";

const SubmitClaim: React.FC = () => {
  const [content, setContent] = useState("");
  const [error, setError] = useState("");
  const {
    writeContract,
    isPending,
    data: hash,
    error: writeError,
    isSuccess,
  } = useWriteContract();
  const { address } = useAccount();

  // Monitor transaction status
  useEffect(() => {
    if (writeError) {
      console.error("Transaction error:", writeError);
      setError(writeError.message || "Transaction failed");
    }
  }, [writeError]);

  // handle content submission
  const handleSubmit = async () => {
    if (!address) {
      toast.error("Please connect your wallet", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: true,
        draggable: true,
      });
      return;
    }

    if (!content) return;

    try {
      setError("");
      writeContract({
        address: contractAddress,
        abi,
        functionName: "submitContent",
        args: [content],
        account: address,
        chain: baseSepolia,
      });

      setContent("");
    } catch (err: any) {
      console.error("Submission preparation failed:", err);
      setError(err.message || "Failed to prepare transaction");
    }
  };

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
      <SidebarInset className=" p-0 m-0">
        <SiteHeader title="Submit Claims " />
        <div className="flex flex-1 flex-col justify-center pt-40 bg-[#141414] text-white">
          <div className="@container/main flex flex-1 flex-col gap-8 mx-4">
            <div className="flex flex-col gap-6 px-10 w-fit justify-center mx-auto rounded-2xl py-20 bg-[#1F1F1F]">
              <h2 className="title "> Claim Submission</h2>
              <p className="subtitle">
                Effectively submit claims with confidence reducing errors and
                frustrations.
              </p>

              <p className="w-fit">
                {error && (
                  <div className="mb-4 p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-900 text-red-700 dark:text-red-400 rounded-lg">
                    <p className="w-full break-words overflow-wrap break-word word-break break-word">
                      {error.slice(0, 27)}
                    </p>
                  </div>
                )}

                {hash && (
                  <div className="mb-4 p-3 bg-green-50 flex items-center gap-3 dark:bg-green-900/20 border border-green-200 dark:border-green-900 text-green-700 dark:text-green-400 rounded-lg">
                    Claim submitted!{" "}
                    <a
                      href={`https://sepolia.basescan.org/tx/${hash}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline flex items-center gap-2"
                    >
                      {hash.slice(0, 5)}...{hash.slice(-8)}
                      <FiExternalLink className="cursor-pointer" />
                    </a>
                  </div>
                )}
              </p>

              <div className="flex gap-1 items-center">
                <input
                  type="text"
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  placeholder="Enter claim or paste URL claim here. "
                  className="input-field focus:ring-blue-500 focus:border-blue-500 focus:ring-2"
                />

                <button
                  onClick={handleSubmit}
                  disabled={isPending || !content.trim()}
                >
                  {isPending ? (
                    <>
                      <svg
                        className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25 ml-4 p-6"
                          cx="20"
                          cy="20"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                    </>
                  ) : (
                    <Image
                      src={typeof primary === "string" ? primary : primary.src}
                      alt="Submit"
                      className="h-14 w-13 flex cursor-pointer"
                      width={40}
                      height={40}
                    />
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
};

export default SubmitClaim;
