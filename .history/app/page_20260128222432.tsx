import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
  FieldTitle,
} from "@/components/ui/field"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

export default function Home() {
  return (
    <main className="root-page-element">
      <Card className="min-w-1/2 p-8">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">
            Welcome to  
            <span className="gradient-text"> Yap Sessions!</span>
            </CardTitle>
          <CardDescription className="text-center font-semibold mt-2">
            Yap Sessions is a
            <span className="gradient-text"> full stack web application </span>
            designed to facilitate
            <span className="gradient-text"> real-time communication </span>
            using
            <span className="gradient-text"> WebSockets</span>.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="login">
            <TabsList>
              <TabsTrigger value="login">Login</TabsTrigger>
              <TabsTrigger value="register">Register</TabsTrigger>
            </TabsList>
            <TabsContent value="login">
              Login
            </TabsContent>
            <TabsContent value="register">
              Register
            </TabsContent>
          </Tabs>
        </CardContent>
        <CardFooter></CardFooter>
      </Card>
    </main>
  );
}
