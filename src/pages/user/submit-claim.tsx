import React from 'react'
import { AppSidebar } from "../../components/app-sidebar"
import { SiteHeader2 } from "../../components/site-header2"
import { SidebarInset, SidebarProvider } from "../../components/ui/sidebar"
import { ClaimBox } from "../../components/claim-box"



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
        <AppSidebar  variant="inset"/>
        <SidebarInset className=" p-0 m-0" >
            <SiteHeader2 title="Instant Claims "/>

            <ClaimBox />
        </SidebarInset>
    </SidebarProvider>
  )
}

export default SubmitClaim




