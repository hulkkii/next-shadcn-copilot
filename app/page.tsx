import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function Home() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
      <div className="grid gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Welcome</CardTitle>
            <CardDescription>
              This is your new application with a professional layout
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p>Hello World! Your professional dashboard is ready.</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
