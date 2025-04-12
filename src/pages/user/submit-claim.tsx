"use client";
import React from "react";
import { AppSidebar } from "../../components/app-sidebar";
import { SiteHeader } from "../../components/site-header";
import { SidebarInset, SidebarProvider } from "../../components/ui/sidebar";
import primary from "../../assets/primary.png";

const SubmitClaim: React.FC = () => {
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

                <div className="flex gap-1 items-center"> 
                  <input
                    type="text"
                    placeholder="Enter claim or paste URL claim here. "
                    className="input-field"
                  />

                  <button type="submit">
                    <img
                      src={typeof primary === "string" ? primary : primary.src}
                      alt="Submit"
                      className="h-14 w-13 flex cursor-pointer"
                    />
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
