"use client"

import { useState } from "react"
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

export function Sidebar({
                            isOpen,
                            setIsOpen,
                        }: {
    isOpen: boolean
    setIsOpen: (open: boolean) => void
}) {
    const pathname = usePathname()

    return (
        <div
            className={cn(
                "fixed inset-y-0 left-0 z-40 w-64 transform transition-transform duration-200 ease-in-out",
                isOpen ? "translate-x-0" : "-translate-x-full",
                "lg:translate-x-0 lg:w-64",
            )}
        >
            <div className="flex h-full flex-col bg-[#0F1629]/95 backdrop-blur supports-[backdrop-filter]:bg-[#0F1629]/80">
                <div className="flex h-14 shrink-0 items-center px-4">
                    <img
                        className="h-8 w-auto"
                        src="https://sjc.microlink.io/gtax8v1ReXQYEvbRyIdb5rUG_dvg_65XTDYD5OzQ355ZUcubRkLNrkuMga4P0QifM_C_JIBjCLUkMIgtFGQl3w.jpeg"
                        alt="The Blu Penguin"
                    />
                </div>
                <ScrollArea className="flex-1">
                    <nav className="flex flex-1 flex-col px-4 py-4">
                        <ul role="list" className="flex flex-1 flex-col gap-y-4">
                            <li>
                                <ul role="list" className="space-y-1">
                                    {navigation.map((item) => (
                                        <li key={item.name}>
                                            <Button
                                                variant="ghost"
                                                className={cn(
                                                    "w-full justify-start text-white/70 hover:text-white hover:bg-white/10",
                                                    pathname === item.href && "bg-white/10 text-white font-semibold",
                                                )}
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

