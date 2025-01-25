import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CodeBlock } from "@/components/code-block"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function PaymentProcessingPage() {
  return (
    <div className="max-w-3xl mx-auto space-y-8">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold">Payment Processing</h1>
        <p className="text-lg text-muted-foreground">Learn how to process payments using The Blu Penguin API</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Initiating a Payment</CardTitle>
          <CardDescription>Send a POST request to create a payment token</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            <strong>Endpoint:</strong> <code>/payment</code>
          </p>
          <p>
            <strong>Method:</strong> POST
          </p>
          <Tabs defaultValue="curl">
            <TabsList>
              <TabsTrigger value="curl">cURL</TabsTrigger>
              <TabsTrigger value="javascript">JavaScript</TabsTrigger>
              <TabsTrigger value="python">Python</TabsTrigger>
              <TabsTrigger value="php">PHP</TabsTrigger>
            </TabsList>
            <TabsContent value="curl">
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
            </TabsContent>
            <TabsContent value="javascript">
              <CodeBlock
                language="javascript"
                code={`const response = await fetch('http://localhost:9003/blupenguin/tms/payment', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    amount: 1000,
    currency: 'USD',
    merchant_id: 'YOUR_MERCHANT_ID',
    callback_url: 'https://your-website.com/payment-callback',
  }),
});

const data = await response.json();
console.log(data);`}
              />
            </TabsContent>
            <TabsContent value="python">
              <CodeBlock
                language="python"
                code={`import requests

url = "http://localhost:9003/blupenguin/tms/payment"
payload = {
    "amount": 1000,
    "currency": "USD",
    "merchant_id": "YOUR_MERCHANT_ID",
    "callback_url": "https://your-website.com/payment-callback"
}

response = requests.post(url, json=payload)
data = response.json()
print(data)`}
              />
            </TabsContent>
            <TabsContent value="php">
              <CodeBlock
                language="php"
                code={`<?php
$url = 'http://localhost:9003/blupenguin/tms/payment';
$data = array(
    'amount' => 1000,
    'currency' => 'USD',
    'merchant_id' => 'YOUR_MERCHANT_ID',
    'callback_url' => 'https://your-website.com/payment-callback'
);

$options = array(
    'http' => array(
        'header'  => "Content-type: application/json\r\n",
        'method'  => 'POST',
        'content' => json_encode($data)
    )
);

$context  = stream_context_create($options);
$result = file_get_contents($url, false, $context);
$response = json_decode($result);
print_r($response);
?>`}
              />
            </TabsContent>
          </Tabs>
          <p>
            <strong>Response:</strong>
          </p>
          <CodeBlock
            language="json"
            code={`{
  "token": "pmt_123456789",
  "redirect_url": "http://localhost:9003/blupenguin/tms/process?token=pmt_123456789"
}`}
          />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Redirecting to TheBluPenguin</CardTitle>
        </CardHeader>
        <CardContent>
          <p>
            After receiving the payment token, redirect your customer to the URL provided in the{" "}
            <code>redirect_url</code> parameter of the response.
          </p>
          <Tabs defaultValue="javascript">
            <TabsList>
              <TabsTrigger value="javascript">JavaScript</TabsTrigger>
              <TabsTrigger value="php">PHP</TabsTrigger>
            </TabsList>
            <TabsContent value="javascript">
              <CodeBlock
                language="javascript"
                code={`// Example redirect in JavaScript
window.location.href = response.redirect_url;`}
              />
            </TabsContent>
            <TabsContent value="php">
              <CodeBlock
                language="php"
                code={`<?php
// Example redirect in PHP
header("Location: " . $response->redirect_url);
exit();
?>`}
              />
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Confirmation Callback</CardTitle>
          <CardDescription>Receive payment confirmation on your server</CardDescription>
        </CardHeader>
        <CardContent>
          <p>
            Once the client completes the payment, TheBluPenguin will send a POST request to your callback URL with the
            transaction details.
          </p>
          <p className="mt-2">
            <strong>Example callback data:</strong>
          </p>
          <CodeBlock
            language="json"
            code={`{
  "transaction_id": "txn_987654321",
  "status": "success",
  "amount": 1000,
  "currency": "USD",
  "merchant_id": "YOUR_MERCHANT_ID"
}`}
          />
          <p className="mt-4">
            Ensure your callback URL is set up to handle this incoming data and update your system accordingly.
          </p>
          <Tabs defaultValue="nodejs">
            <TabsList>
              <TabsTrigger value="nodejs">Node.js</TabsTrigger>
              <TabsTrigger value="php">PHP</TabsTrigger>
            </TabsList>
            <TabsContent value="nodejs">
              <CodeBlock
                language="javascript"
                code={`const express = require('express');
const app = express();
app.use(express.json());

app.post('/payment-callback', (req, res) => {
  const { transaction_id, status, amount, currency, merchant_id } = req.body;
  
  // Process the payment confirmation
  console.log('Payment confirmed:', transaction_id, status);

  // Update your database or perform any necessary actions

  res.sendStatus(200);
});

app.listen(3000, () => console.log('Server running on port 3000'));`}
              />
            </TabsContent>
            <TabsContent value="php">
              <CodeBlock
                language="php"
                code={`<?php
// Retrieve the request body
$json = file_get_contents('php://input');
$data = json_decode($json, true);

// Extract payment details
$transaction_id = $data['transaction_id'];
$status = $data['status'];
$amount = $data['amount'];
$currency = $data['currency'];
$merchant_id = $data['merchant_id'];

// Process the payment confirmation
echo "Payment confirmed: " . $transaction_id . " " . $status;

// Update your database or perform any necessary actions

// Respond with a 200 OK status
http_response_code(200);
?>`}
              />
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
}

