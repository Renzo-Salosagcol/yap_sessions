import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
} from "@/components/ui/sidebar"

export function AppSidebar() {
  return (
    <Sidebar className="bg-background text-foreground">
      <div className="gradient-border m-4 rounded-xl">
        <SidebarContent className="text-6xl bg-background rounde-xl">
          test
          <SidebarGroup />
          <SidebarGroup />
        </SidebarContent>
      </div>
      <SidebarFooter className="bg-background"/>
    </Sidebar>
  )
}