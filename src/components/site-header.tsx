import Link from 'next/link'

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <Link href="/" className="font-bold">My Personal Blog</Link>
        <nav className="flex items-center space-x-6 ml-6">
          <Link href="/blog" className="text-muted-foreground hover:text-foreground">
            Blog
          </Link>
        </nav>
      </div>
    </header>
  )
} 