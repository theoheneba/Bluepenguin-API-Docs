"use client"

import { useState } from "react"
import { Sidebar } from "@/components/sidebar"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export function ClientLayout({ children }: { children: React.ReactNode }) {
    const [sidebarOpen, setSidebarOpen] = useState(false)

    return (
        <div className="flex min-h-screen bg-[#0F1629]">
            <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />
            <div className="flex-1 flex flex-col lg:pl-64">
                <Header onMenuClick={() => setSidebarOpen(true)} />
                <main className="flex-1 p-8">{children}</main>
                <Footer />
            </div>
        </div>
    )
}

