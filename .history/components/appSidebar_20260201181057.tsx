import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
} from "@/components/ui/sidebar"

export function AppSidebar() {
  return (
    <Sidebar className="bg-background text-foreground h-full">
      <div className="gradient-border m-4">
        <SidebarContent className="text-6xl bg-background rounded-xl">
          test
          <SidebarGroup />
          <SidebarGroup />
        </SidebarContent>
      </div>
      <div className="gradient-border m-4">
        <SidebarFooter className="bg-background bottom-0 rounded-xl">
          Footer
        </SidebarFooter>
      </div>
    </Sidebar>
  )
}