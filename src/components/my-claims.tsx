import React from "react";
import { FiFileText } from "react-icons/fi";
import { useSearchParams } from "next/navigation";
import { FlagImg } from "./flag-img";
import { AppSidebar } from "../components/app-sidebar";
import { SidebarInset, SidebarProvider } from "../components/ui/sidebar";
import { SiteHeader } from "./site-header";

interface Claim {
  title: string;
  description: string;
}

interface MyClaimsProps {
  claims: Claim[];
}

const MyClaims: React.FC<MyClaimsProps> = ({ claims }) => {
  return (
    <>
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
          <SiteHeader title="Flag Claim" />
          {claims.length > 0 ? (
            <div className="flex flex-1 flex-col bg-[#141414] text-white px-4 py-4">
              <div className="m-6">
                <h1 className="lg:text-4xl text-2xl font-bold mb-6 mx-4">
                  My Claims
                </h1>

                <div className="space-y-4">
                  {claims.map((claim, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-4 mx-4 p-2 rounded-lg shadow-sm border border-gray-200"
                    >
                      <div className="shrink-0">
                        <FiFileText className="w-10 h-10 bg-blue-500 text-white rounded-sm p-2" />
                      </div>
                      <div className="flex flex-col ">
                        <h2 className="text-lg flex-1 font-semibold text-gray-700 mb-1">
                          {claim.title}
                        </h2>
                        <p className="text-gray-600">{claim.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <FlagImg />
          )}
        </SidebarInset>
      </SidebarProvider>
    </>
  );
};

// Example usage:
const App: React.FC = () => {
  const searchParams = useSearchParams();

  const hasData = searchParams.get("hasData");
  const claimsData: Claim[] = [
    ...(hasData
      ? [
          {
            title: "Claim Title 0379CT",
            description:
              "This claim is already being handled. Sit tight, we will take it from here",
          },
        ]
      : []),
    // Add more claims as needed
  ];

  return <MyClaims claims={claimsData} />;
};

export default App;
