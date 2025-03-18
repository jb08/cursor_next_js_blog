import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function NotFound() {
  return (
    <div className="container flex min-h-[400px] flex-col items-center justify-center space-y-4 text-center">
      <div className="space-y-2">
        <h1 className="text-4xl font-bold">Blog Section Not Found</h1>
        <p className="text-lg text-muted-foreground">
          Sorry, we couldn't find the blog section you're looking for.
        </p>
      </div>
      <Button asChild>
        <Link href="/">Back to Home</Link>
      </Button>
    </div>
  )
} 