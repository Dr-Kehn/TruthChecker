import * as React from "react"
import { NavMain } from "../components/nav-main"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "../components/ui/sidebar"
import Image from "next/image"
import logo from "../assets/truth-check-logo.svg"
import { LuFileUp } from "react-icons/lu";
import { MdOutlineDashboard } from "react-icons/md";
import { IoSearchOutline } from "react-icons/io5";
import { CiCloudOn } from "react-icons/ci";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { LiaLanguageSolid } from "react-icons/lia";
import Link from "next/link"

const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Dashboard",
      url: "/user/dashboard",
      icon: () => <MdOutlineDashboard />,
    },
    {
      title: "Instant Check",
      url: "/user/submit-claim",
      icon: () => <LuFileUp />,
    },
    {
      title: "Explore Claims",
      url: "/user/explore-claim",
      icon: () => <IoSearchOutline />,
    },
    {
      title: "Flag Claim",
      url: "/user/flag-claim",
      icon: () => <CiCloudOn />,
    },
    {
      title: "Help",
      url: "/user/help",
      icon: () => <IoIosHelpCircleOutline />,
    },
    {
      title: "Language",
      url: "#",
      icon: () => <LiaLanguageSolid />,
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="offcanvas" {...props} className="bg-[#202020]">
      <SidebarHeader className="bg-[#202020]">
        <SidebarMenu className="bg-[#202020]">
          <SidebarMenuItem className="bg-[#202020]">
            <SidebarMenuButton
              asChild
              className="data-[slot=sidebar-menu-button]:!p-1.5 hover:bg-[#202020]"
            >
              <Link href="/">
                <Image  src={logo} alt="logo"  width={150} height={150}/>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent className="bg-[#202020]">
        <NavMain items={data.navMain} />
      </SidebarContent>
      {/* <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter> */}
    </Sidebar>
  )
}
