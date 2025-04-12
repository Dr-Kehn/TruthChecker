import React from "react";
import { AppSidebar } from "../../components/app-sidebar";
import { SiteHeader } from "../../components/site-header";
import { SidebarInset, SidebarProvider } from "../../components/ui/sidebar";
import { HelpHeader } from "../../components/help-header";
import { Accordion } from "../../components/accordion";

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

        <div className="help-page">
          <HelpHeader />
          <Accordion />
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
};

export default Help;
