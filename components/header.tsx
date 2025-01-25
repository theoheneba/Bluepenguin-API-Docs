"use client"

import { ThemeToggle } from "./theme-toggle"
import { Button } from "./ui/button"
import { Search } from "./search"
import Image from "next/image"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="mr-4 flex items-center flex-1">
          <a className="mr-6 flex items-center space-x-2" href="/">
            <Image
              src="https://sjc.microlink.io/gtax8v1ReXQYEvbRyIdb5rUG_dvg_65XTDYD5OzQ355ZUcubRkLNrkuMga4P0QifM_C_JIBjCLUkMIgtFGQl3w.jpeg"
              alt="The Blu Penguin Logo"
              width={180}
              height={40}
              className="object-contain"
            />
            <span className="hidden font-bold sm:inline-block">Developer Documentation</span>
          </a>
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
            <a className="transition-colors hover:text-accent" href="/payment-processing">
              Payment Processing
            </a>
            <a className="transition-colors hover:text-accent" href="/error-handling">
              Error Handling
            </a>
            <a className="transition-colors hover:text-accent" href="/api-testing">
              API Testing
            </a>
          </nav>
        </div>
        <div className="flex items-center justify-end space-x-2">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            <Search />
          </div>
          <nav className="flex items-center space-x-2">
            <ThemeToggle />
            <Button variant="accent" asChild>
              <a href="https://www.theblupenguin.com/signup" target="_blank" rel="noopener noreferrer">
                Sign Up
              </a>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  )
}

