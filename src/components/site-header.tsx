import { Separator } from "../components/ui/separator"
import { SidebarTrigger } from "../components/ui/sidebar"
import ConnectWallet from "./WalletConnect"

interface SiteHeaderProps {
 title?: string;
}

export function SiteHeader({title}: SiteHeaderProps) {
  return (
    <div>

    <header className="flex p-0 m-0 shrink-0 items-center bg-[#141414] text-white gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-(--header-height)">
      <div className="flex w-full items-center gap-1 px-4 lg:gap-2 lg:px-6">
        <SidebarTrigger className="-ml-1" />
        <Separator
          orientation="vertical"
          className="mx-2 data-[orientation=vertical]:h-4"
        />
        <h1 className="font-medium lg:text-2xl text-md"> {title}</h1>
        <div className="ml-auto flex items-center gap-2">
          <ConnectWallet />
        </div>

      </div>
    </header>
        <Separator />
    </div>
  )
}
