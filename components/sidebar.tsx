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
      <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-white px-6 pb-4">
        <div className="flex h-16 shrink-0 items-center">
          <img
            className="h-8 w-auto"
            src="https://sjc.microlink.io/gtax8v1ReXQYEvbRyIdb5rUG_dvg_65XTDYD5OzQ355ZUcubRkLNrkuMga4P0QifM_C_JIBjCLUkMIgtFGQl3w.jpeg"
            alt="The Blu Penguin"
          />
        </div>
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
      </div>
    </div>
  )
}

