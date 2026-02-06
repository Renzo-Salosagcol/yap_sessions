import { Button } from "@/components/ui/button";

export function ChatPage({ activeChat }: { activeChat: number | null }) {
  return (
    <div className="">
      <h1>Active Chat: {activeChat}</h1>
      <div className="fixed bottom-0 left-0 w-full p-4 bg-background flex flex-row items-center">
        <input type="text" placeholder="Type your message..." className="w-full p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" />
        <Button>Send  </Button>
      </div>

    </div>
  )
};