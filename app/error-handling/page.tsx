import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CodeBlock } from "@/components/code-block"

export default function ErrorHandlingPage() {
  return (
    <div className="max-w-3xl mx-auto space-y-8">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold">Error Handling</h1>
        <p className="text-lg text-muted-foreground">
          Learn how to handle errors and troubleshoot issues with The Blu Penguin API
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Error Responses</CardTitle>
          <CardDescription>Understanding API error structures</CardDescription>
        </CardHeader>
        <CardContent>
          <p>When an error occurs, the API will return a JSON response with an error object:</p>
          <CodeBlock
            language="json"
            code={`{
  "error": {
    "code": "invalid_request",
    "message": "The request was unacceptable, often due to missing a required parameter."
  }
}`}
          />
          <h3 className="font-semibold mt-4 mb-2">Common Error Codes</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong>invalid_request</strong>: The request was unacceptable, often due to missing a required parameter.
            </li>
            <li>
              <strong>authentication_error</strong>: No valid API key provided.
            </li>
            <li>
              <strong>rate_limit_exceeded</strong>: Too many requests hit the API too quickly.
            </li>
            <li>
              <strong>internal_server_error</strong>: Something went wrong on The Blu Penguin's end.
            </li>
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Troubleshooting</CardTitle>
          <CardDescription>Common issues and their solutions</CardDescription>
        </CardHeader>
        <CardContent>
          <h3 className="font-semibold mb-2">1. Payment not processing</h3>
          <p>If payments are not processing, check the following:</p>
          <ul className="list-disc list-inside space-y-2 mb-4">
            <li>Ensure you're using the correct API endpoint for the environment (test/production)</li>
            <li>Verify that all required parameters are included in your request</li>
            <li>Check that your API key is valid and has the necessary permissions</li>
          </ul>

          <h3 className="font-semibold mb-2">2. Callback not received</h3>
          <p>If you're not receiving callbacks, try these steps:</p>
          <ul className="list-disc list-inside space-y-2 mb-4">
            <li>Confirm that the callback URL provided in your request is correct and accessible</li>
            <li>Check your server logs for any errors in processing incoming requests</li>
            <li>Ensure your firewall is not blocking incoming requests from The Blu Penguin's IP addresses</li>
          </ul>

          <h3 className="font-semibold mb-2">3. Rate limiting issues</h3>
          <p>If you're experiencing rate limiting:</p>
          <ul className="list-disc list-inside space-y-2">
            <li>Implement exponential backoff in your requests</li>
            <li>Consider caching responses where appropriate to reduce API calls</li>
            <li>Contact support if you need a higher rate limit for your account</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}

