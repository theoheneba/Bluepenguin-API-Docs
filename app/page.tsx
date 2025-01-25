import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CodeBlock } from "@/components/code-block"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="space-y-4">
        <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">The Blu Penguin Payment Gateway API</h1>
        <p className="text-lg text-muted-foreground">Simple and secure payment processing for your business</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Quick Start</CardTitle>
          <CardDescription>Get started with The Blu Penguin API in minutes</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <CodeBlock
            language="bash"
            code={`curl -X POST http://localhost:9003/blupenguin/tms/payment \\
  -H "Content-Type: application/json" \\
  -d '{
    "amount": 1000,
    "currency": "USD",
    "merchant_id": "YOUR_MERCHANT_ID",
    "callback_url": "https://your-website.com/payment-callback"
  }'`}
          />
          <p>
            This example shows how to create a payment using the Blu Penguin API. For more details, check out the{" "}
            <Link href="/payment-processing" className="font-medium text-primary underline underline-offset-4">
              Payment Processing
            </Link>{" "}
            guide.
          </p>
        </CardContent>
      </Card>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Payment Processing</CardTitle>
            <CardDescription>Learn how to process payments</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Discover how to initiate payments, handle callbacks, and manage transactions using our API.</p>
            <Button asChild className="mt-4">
              <Link href="/payment-processing">Learn More</Link>
            </Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Error Handling</CardTitle>
            <CardDescription>Understand and manage errors</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Learn about common error codes, troubleshooting tips, and best practices for handling API errors.</p>
            <Button asChild className="mt-4">
              <Link href="/error-handling">Explore Errors</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

