"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { SearchIcon } from "lucide-react"

export function Search() {
  const [query, setQuery] = useState("")

  return (
    <div className="relative w-full max-w-sm">
      <Input
        type="search"
        placeholder="Search documentation..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="pr-8"
      />
      <Button size="icon" variant="ghost" className="absolute right-0 top-0 h-full px-3 hover:bg-transparent">
        <SearchIcon className="h-4 w-4 text-muted-foreground" />
        <span className="sr-only">Search</span>
      </Button>
    </div>
  )
}

