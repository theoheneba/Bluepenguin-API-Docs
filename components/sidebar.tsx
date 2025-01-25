"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"

const navigation = [
  { name: "Home", href: "/" },
  { name: "Payment Processing", href: "/payment-processing" },
  { name: "Error Handling", href: "/error-handling" },
  { name: "API Testing", href: "/api-testing" },
]

export function Sidebar() {
  const pathname = usePathname()

  return (
    <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
      <div className="flex grow flex-col gap-y-5 overflow-y-auto border-r bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="flex h-16 shrink-0 items-center border-b px-6">
          <img className="h-8 w-auto" src="/placeholder.svg?height=32&width=32" alt="The Blu Penguin" />
          <span className="ml-2 text-xl font-semibold">The Blu Penguin</span>
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
  )
}

