import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CodeBlock } from "@/components/code-block"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto space-y-12">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-extrabold tracking-tight lg:text-6xl">
          <span className="gradient-text">Accept all Payment Types</span>
          <br />
          for your Business
        </h1>
        <p className="text-xl text-muted-foreground max-w-[800px] mx-auto">
          Sell in-store or online and get paid fast! Integrate our payment solutions with just a few lines of code.
        </p>
        <div className="flex justify-center gap-4">
          <Button size="lg" variant="default" asChild>
            <Link href="/payment-processing">Get Started</Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="/api-testing">Try the API</Link>
          </Button>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-3xl font-bold mb-4">Payment Solutions</h2>
          <div className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Card Machines</CardTitle>
                <CardDescription>Enhance Your Cashless Transaction Capability</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Accept all major debit and credit cards with our state-of-the-art POS terminals.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Online Payments</CardTitle>
                <CardDescription>Secure Payment Gateway Integration</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Process online payments seamlessly with our developer-friendly API.</p>
              </CardContent>
            </Card>
          </div>
        </div>
        <div className="relative h-[400px]">
          <Image
            src="https://sjc.microlink.io/Dmr3ZgsnIPx11GixtmxVRPMMytDqp3TR2LfdgY44RZkojq5LBEVaO4Y-MmtDllYvEV3EmzUwegVJbc_2vX7cew.jpeg"
            alt="Blu Penguin Card Machines"
            fill
            className="object-contain"
          />
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Quick Start</CardTitle>
          <CardDescription>Process your first payment in minutes</CardDescription>
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
          <div className="flex justify-end">
            <Button variant="accent" asChild>
              <Link href="/payment-processing">View Documentation →</Link>
            </Button>
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-6 md:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Secure Payments</CardTitle>
          </CardHeader>
          <CardContent>
            <p>State-of-the-art security measures to protect your transactions.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Fast Integration</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Developer-friendly API with comprehensive documentation.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>24/7 Support</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Round-the-clock technical support for your business needs.</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

