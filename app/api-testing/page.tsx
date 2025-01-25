"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { CodeBlock } from "@/components/code-block"

export default function ApiTestingPage() {
  const [amount, setAmount] = useState("1000")
  const [currency, setCurrency] = useState("USD")
  const [merchantId, setMerchantId] = useState("YOUR_MERCHANT_ID")
  const [callbackUrl, setCallbackUrl] = useState("https://your-website.com/payment-callback")
  const [response, setResponse] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const payload = {
      amount: Number.parseInt(amount),
      currency,
      merchant_id: merchantId,
      callback_url: callbackUrl,
    }

    try {
      const res = await fetch("http://localhost:9003/blupenguin/tms/payment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      })
      const data = await res.json()
      setResponse(JSON.stringify(data, null, 2))
    } catch (error) {
      setResponse(JSON.stringify({ error: "An error occurred while making the request" }, null, 2))
    }
  }

  return (
    <div className="max-w-3xl mx-auto space-y-8">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold">API Testing</h1>
        <p className="text-lg text-muted-foreground">Test The Blu Penguin API endpoints interactively</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Create Payment</CardTitle>
          <CardDescription>Test the payment creation endpoint</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="amount">Amount</Label>
              <Input type="number" id="amount" value={amount} onChange={(e) => setAmount(e.target.value)} required />
            </div>
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="currency">Currency</Label>
              <Input
                type="text"
                id="currency"
                value={currency}
                onChange={(e) => setCurrency(e.target.value)}
                required
              />
            </div>
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="merchantId">Merchant ID</Label>
              <Input
                type="text"
                id="merchantId"
                value={merchantId}
                onChange={(e) => setMerchantId(e.target.value)}
                required
              />
            </div>
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="callbackUrl">Callback URL</Label>
              <Input
                type="url"
                id="callbackUrl"
                value={callbackUrl}
                onChange={(e) => setCallbackUrl(e.target.value)}
                required
              />
            </div>
            <Button type="submit">Send Request</Button>
          </form>
        </CardContent>
        <CardFooter>
          <div className="w-full">
            <h3 className="font-semibold mb-2">Response:</h3>
            {response && <CodeBlock language="json" code={response} />}
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}

