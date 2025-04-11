import { AppSidebar } from "@/components/app-sidebar";
import { ChartAreaInteractive } from "@/components/chart-area-interactive";
import { DataTable } from "@/components/data-table";
import { SectionCards } from "@/components/section-cards";
import { SiteHeader } from "@/components/site-header";
import { Button } from "@/components/ui/button";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useAccount, useWriteContract } from "wagmi";

export default function Page() {
  const { address } = useAccount();

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
        <SiteHeader />

        {/* dashboard section */}

        {!address ? (
          <div className="bg-[#141414] h-full text-white">
            <div className="my-55 flex  justify-center items-center ">
              <div className="flex flex-col gap-10 px-4 lg:px-6 justify-center items-center">
                <h1 className="lg:text-6xl text-4xl text-center">
                  Together we check facts
                </h1>
                <h2 className="lg:text-3xl text-2xl text-center">
                  Join a community fighting fake news in Nigeria with a
                  decentralized platform
                </h2>

                <div className="flex gap-2 items-center justify-center">
                  <Button
                    variant={"outline"}
                    size={"lg"}
                    className=" border-[#3845FF] text-[#3845FF]"
                  >
                    View Claims
                  </Button>
                  <div className="text-sm">
                    <ConnectButton />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex flex-1 flex-col bg-[#141414] text-white">
            <div className="@container/main flex flex-1 flex-col gap-2">
            <h1 className="flex flex-col gap-4 py-4 md:gap-6 md:py-6 ml-6 lg:text-4xl text-2xl" >Welcome, Truthtician!</h1>
              <div className="flex flex-col gap-4 h-fit lg:px-8 px-2 py-8 rounded-2xl md:gap-6 md:py-6 bg-[#1F1F1F] mx-2 ">
                <h2 className="flex flex-col gap-4 py-4 md:gap-6 md:py-4 ml-6 text-lg">My Activity</h2>
                <SectionCards />
                <div className="px-2 lg:px-6">
                  <ChartAreaInteractive />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* dashboard section */}
      </SidebarInset>
    </SidebarProvider>
  );
}
