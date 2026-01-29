import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default function Home() {
  return (
    <main className="root-page-element">
      <Card className="min-w-1/2">
        <CardHeader>
          <CardTitle>
            Welcome to 
            <span className="gradient-text"> Yap Sessions!</span>
            </CardTitle>
          <CardDescription>
            Yap Sessions is a <span className="gradient-text">full stack web application</span> designed to facilitate <span className="gradient-text">real-time communication</span> using <span className="gradient-text">WebSockets</span>.
          </CardDescription>
        </CardHeader>
        <CardContent></CardContent>
        <CardFooter></CardFooter>
      </Card>
    </main>
  );
}
