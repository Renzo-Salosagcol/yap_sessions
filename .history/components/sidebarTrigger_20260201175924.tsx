import { useSidebar } from "@/components/ui/sidebar"

export function SidebarTrigger() {
  const { toggleSidebar } = useSidebar()

  return <button onClick={toggleSidebar}>Toggle Sidebar</button>
}