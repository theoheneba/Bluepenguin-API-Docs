import { Github } from "lucide-react"
import Link from "next/link"

export function Footer() {
    return (
        <footer className="border-t py-4 px-8">
            <div className="flex items-center justify-between text-sm text-muted-foreground">
                <div>
                    Developed by{" "}
                    <Link
                        href="https://celeteck.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-primary transition-colors"
                    >
                        Celeteck
                    </Link>
                </div>
                <Link
                    href="https://github.com/theoheneba/Bluepenguin-API-Docs"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 hover:text-primary transition-colors"
                >
                    <Github className="h-4 w-4" />
                    <span className="sr-only">GitHub repository</span>
                </Link>
            </div>
        </footer>
    )
}

