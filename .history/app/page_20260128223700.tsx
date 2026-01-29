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
      <div className="min-w-1/2 p-8 gradient-border">
        <Card className="w-full h-full">
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
          <CardContent className="w-full">
            <Tabs defaultValue="login"
              className="w-full"
            >
              <TabsList className="w-full justify-center mb-4">
                <TabsTrigger value="login"
                >
                  Login
                </TabsTrigger>
                <TabsTrigger value="register">
                  Register
                </TabsTrigger>
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
      </div>
    </main>
  );
}
