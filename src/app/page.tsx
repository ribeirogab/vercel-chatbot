import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

export default function Home() {
  return (
    <div className="flex h-screen items-center justify-center bg-slate-50">
      <Card className="h-[440px] w-[700px]">
        <CardHeader>
          <CardTitle>Chat AI</CardTitle>
          <CardDescription>
            Using Vercel SDK to create a chatbot.
          </CardDescription>
        </CardHeader>

        <CardContent>
          <p>Mensagem</p>
        </CardContent>

        <CardFooter>
          <p>form</p>
        </CardFooter>
      </Card>
    </div>
  );
}
