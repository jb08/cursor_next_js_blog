import Link from 'next/link'
import { Separator } from '@/components/ui/separator'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t py-8 md:py-10">
      <div className="container px-6 md:px-8">
        <div className="flex flex-col items-center gap-8 md:flex-row md:justify-between md:gap-4">
          <div className="order-2 md:order-1">
            <p className="text-center text-sm text-muted-foreground md:text-left">
              © {currentYear} My Personal Blog. All rights reserved.
            </p>
          </div>
          <nav className="order-1 md:order-2 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-sm">
            <Link
              href="/blog"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              Blog
            </Link>
            <Link
              href="https://twitter.com"
              className="text-muted-foreground transition-colors hover:text-foreground"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter
            </Link>
            <Link
              href="https://github.com"
              className="text-muted-foreground transition-colors hover:text-foreground"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  )
} 