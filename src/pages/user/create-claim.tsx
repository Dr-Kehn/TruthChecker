import React, { useState } from "react";
import { AppSidebar } from "../../components/app-sidebar";
import { SiteHeader2 } from "../../components/site-header2";
import { SidebarInset, SidebarProvider } from "../../components/ui/sidebar";
import { FlagImg } from "@/components/flag-img";
import { FlagClaimForm } from "@/components/flag-form";
import { ClaimSubmitted } from "@/components/claim-sucess";
import App from "@/components/my-claims";

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
        <SiteHeader2 title="Flag Claims" />
        {
            step !== 1 ? <ClaimSubmitted/> : <FlagClaimForm setStep={setStep} />
        }

      </SidebarInset>
    </SidebarProvider>
  );
};

export default CreateFlag;
