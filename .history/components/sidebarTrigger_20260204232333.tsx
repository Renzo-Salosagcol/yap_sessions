import { useSidebar } from "@/components/ui/sidebar"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"

export function SidebarTrigger() {
  const { toggleSidebar } = useSidebar()

  return <Button variant="ghost" className="p-0 m-2 text-background hover:bg-auto" onClick={toggleSidebar}><Menu /></Button>
}