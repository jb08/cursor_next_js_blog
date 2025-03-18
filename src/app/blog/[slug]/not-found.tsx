import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function BlogPostNotFound() {
  return (
    <div className="container py-8 text-center">
      <h1 className="text-3xl font-bold mb-4">Post Not Found</h1>
      <p className="text-muted-foreground mb-8">
        We couldn&apos;t find the post you&apos;re looking for.
      </p>
      <Button asChild>
        <Link href="/blog">Back to Blog</Link>
      </Button>
    </div>
  )
} 