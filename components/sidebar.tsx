"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { ChevronRight, ChevronLeft } from "lucide-react"

const navigation = [
  { name: "Home", href: "/" },
  { name: "Payment Processing", href: "/payment-processing" },
  { name: "Error Handling", href: "/error-handling" },
  { name: "API Testing", href: "/api-testing" },
]

export function Sidebar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(true)

  return (
    <>
      <div
        className={cn(
          "fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transition-transform duration-300 ease-in-out transform",
          isOpen ? "translate-x-0" : "-translate-x-full",
        )}
      >
        <div className="flex h-full flex-col">
          <div className="flex h-16 shrink-0 items-center justify-between px-4">
            <img
              className="h-8 w-auto"
              src="https://sjc.microlink.io/gtax8v1ReXQYEvbRyIdb5rUG_dvg_65XTDYD5OzQ355ZUcubRkLNrkuMga4P0QifM_C_JIBjCLUkMIgtFGQl3w.jpeg"
              alt="The Blu Penguin"
            />
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)} className="lg:hidden">
              <ChevronLeft className="h-4 w-4" />
            </Button>
          </div>
          <ScrollArea className="flex-1 px-3">
            <nav className="flex flex-1 flex-col">
              <ul role="list" className="flex flex-1 flex-col gap-y-7">
                <li>
                  <ul role="list" className="-mx-2 space-y-1">
                    {navigation.map((item) => (
                      <li key={item.name}>
                        <Button
                          variant={pathname === item.href ? "secondary" : "ghost"}
                          className={cn("w-full justify-start", pathname === item.href && "font-semibold")}
                          asChild
                        >
                          <Link href={item.href}>{item.name}</Link>
                        </Button>
                      </li>
                    ))}
                  </ul>
                </li>
              </ul>
            </nav>
          </ScrollArea>
        </div>
      </div>
      {!isOpen && (
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setIsOpen(true)}
          className="fixed top-4 left-4 z-50 lg:hidden"
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      )}
    </>
  )
}

