"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"
import { Menu } from "lucide-react"

export function Header({ onMenuClick }: { onMenuClick: () => void }) {
  return (
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="flex h-14 items-center px-4 lg:px-8">
          <Button variant="ghost" size="icon" className="mr-4 lg:hidden" onClick={onMenuClick}>
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle menu</span>
          </Button>
          <div className="flex flex-1 items-center justify-between space-x-4">
            <nav className="flex items-center space-x-6">
              <Link href="/" className="font-medium">
                Developer Documentation
              </Link>
              <Link href="/payment-processing" className="text-foreground/60 hover:text-foreground">
                Payment Processing
              </Link>
              <Link href="/error-handling" className="text-foreground/60 hover:text-foreground">
                Error Handling
              </Link>
              <Link href="/api-testing" className="text-foreground/60 hover:text-foreground">
                API Testing
              </Link>
            </nav>
            <div className="flex items-center space-x-4">
              <Button variant="default" className="hidden lg:flex">
                Sign Up
              </Button>
              <ModeToggle />
            </div>
          </div>
        </div>
      </header>
  )
}

