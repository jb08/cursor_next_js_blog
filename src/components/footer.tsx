import Link from 'next/link'
import { Separator } from '@/components/ui/separator'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t py-8">
      <div className="container">
        <div className="flex flex-col items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} My Personal Blog
          </p>
          <Separator className="my-4" />
          <nav className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-sm">
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