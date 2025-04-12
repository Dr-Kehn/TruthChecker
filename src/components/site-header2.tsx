import { Separator } from "../components/ui/separator"
import { SidebarTrigger } from "../components/ui/sidebar"
import wallet from "@/assets/wallet.png"
import bell from "@/assets/bell.png"
import ghost from "@/assets/ghost.png"
import ConnectWallet from "./WalletConnect"
import { LuWallet } from "react-icons/lu";


interface SiteHeaderProps {
 title?: string;
}

export function SiteHeader2({title}: SiteHeaderProps) {
  return (
    <div>

    <header className="flex p-4 m-0 shrink-0 items-center bg-[#141414] text-white gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-(--header-height)">
      <div className="flex w-full items-center gap-1 px-4 lg:gap-2 lg:px-6">
        <SidebarTrigger className="-ml-1" />
        <Separator
          orientation="vertical"
          className="mx-2 data-[orientation=vertical]:h-4"
        />
        <h1 className="font-medium lg:text-2xl text-md"> {title}</h1>
        <div className="ml-auto flex items-center gap-2">
          <img src={ typeof bell === 'string' ? bell : bell.src }/>
          <button className="flex p-1  gap-2 flex-row justify-center items-center" style={{backgroundColor: "#3845FF", borderRadius: "5px" }}><LuWallet />Wallet</button>
          <img src={typeof ghost === 'string' ? ghost : ghost.src }  />       
           </div>

      </div>
    </header>
        <Separator />
    </div>
  )
}
