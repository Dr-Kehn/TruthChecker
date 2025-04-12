import React, { useState } from "react";
import { AppSidebar } from "../../components/app-sidebar";
import { SidebarInset, SidebarProvider } from "../../components/ui/sidebar";
import { FlagClaimForm } from "../../components/flag-form";
import { ClaimSubmitted } from "../../components/claim-sucess";
import { SiteHeader } from "../../components/site-header";

const CreateFlag: React.FC = () => {
    const [step, setStep] = useState(1)
  return (
    <SidebarProvider
      style={
        {
          "--sidebar-width": "calc(var(--spacing) * 72)",
          "--header-height": "calc(var(--spacing) * 12)",
        } as React.CSSProperties
      }
      className="p-0 m-0">
      <AppSidebar variant="inset" />
      <SidebarInset className=" p-0 m-0">
        <SiteHeader title="Flag Claims" />
        <div className="flex flex-1 flex-col bg-[#141414] text-white px-4 py-4">

        {
            step !== 1 ? <ClaimSubmitted/> : <FlagClaimForm setStep={setStep} />
        }
        </div>

      </SidebarInset>
    </SidebarProvider>
  );
};

export default CreateFlag;
