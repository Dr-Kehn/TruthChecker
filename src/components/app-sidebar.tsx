import * as React from "react"
import {
  IconUsers,
} from "@tabler/icons-react"

import { NavMain } from "@/components/nav-main"
import { NavUser } from "@/components/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import Image from "next/image"
import logo from "@/assets/truth-check-logo.svg"
import { LuFileUp } from "react-icons/lu";
import { MdOutlineDashboard } from "react-icons/md";
import { IoSearchOutline } from "react-icons/io5";
import { CiCloudOn } from "react-icons/ci";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { LiaLanguageSolid } from "react-icons/lia";

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
      title: "Submit Claims",
      url: "#",
      icon: () => <LuFileUp />,
    },
    {
      title: "Explore Claims",
      url: "#",
      icon: () => <IoSearchOutline />,
    },
    {
      title: "Public Review",
      url: "#",
      icon: () => <CiCloudOn />,
    },
    {
      title: "Help",
      url: "#",
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
              <a href="/user/dashboard">
                <Image  src={logo} alt="logo"  width={150} height={150}/>
              </a>
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
