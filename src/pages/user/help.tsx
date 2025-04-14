"use client";
import React from "react";
import { AppSidebar } from "../../components/app-sidebar";
import { SidebarInset, SidebarProvider } from "../../components/ui/sidebar";
import { HelpHeader } from "../../components/help-header";
import { Accordion } from "../../components/accordion";
import { SiteHeader } from "../../components/site-header";

const Help: React.FC = () => {
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
        <SiteHeader title="Help" />

        <div className="flex flex-1 flex-col justify-center pt-20 bg-[#141414] text-white">
          <div className="@container/main flex flex-1 flex-col gap-2">
            <div className="flex flex-col gap-4 h-fit lg:px-8 px-2 py-8 rounded-2xl md:gap-6 md:py-6 bg-[#1F1F1F] mx-2 ">
              <HelpHeader />
              <div className="px-2 lg:px-6">
                <Accordion />
              </div>
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
};

export default Help;
