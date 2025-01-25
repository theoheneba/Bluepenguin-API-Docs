"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { SearchIcon } from "lucide-react"
import Link from "next/link"

const searchIndex = [
  { title: "Introduction", href: "/" },
  { title: "Payment Processing", href: "/payment-processing" },
  { title: "Error Handling", href: "/error-handling" },
  { title: "API Testing", href: "/api-testing" },
  { title: "Create Payment", href: "/payment-processing#create-payment" },
  { title: "Callback Handling", href: "/payment-processing#callback-handling" },
  { title: "Error Codes", href: "/error-handling#error-codes" },
  { title: "Troubleshooting", href: "/error-handling#troubleshooting" },
]

export function Search() {
  const [query, setQuery] = useState("")
  const [results, setResults] = useState<typeof searchIndex>([])

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    const filtered = searchIndex.filter((item) => item.title.toLowerCase().includes(query.toLowerCase()))
    setResults(filtered)
  }

  return (
    <div className="relative">
      <form onSubmit={handleSearch} className="flex w-full items-center space-x-2">
        <Input type="search" placeholder="Search..." value={query} onChange={(e) => setQuery(e.target.value)} />
        <Button type="submit" size="icon">
          <SearchIcon className="h-4 w-4" />
        </Button>
      </form>
      {results.length > 0 && (
        <div className="absolute top-full left-0 right-0 z-10 mt-2 bg-white border rounded-md shadow-lg">
          <ul className="py-2">
            {results.map((result) => (
              <li key={result.href}>
                <Link href={result.href} className="block px-4 py-2 hover:bg-gray-100" onClick={() => setResults([])}>
                  {result.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

