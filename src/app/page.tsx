import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { getAllPosts } from '@/lib/api'
import { PostCard } from '@/components/blog/post-card'

export default async function Home() {
  const posts = await getAllPosts()
  const recentPosts = posts.slice(0, 3) // Get the 3 most recent posts

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="border-b bg-muted/40">
        <div className="container flex min-h-[400px] flex-col items-center justify-center space-y-4 text-center py-12">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
            Welcome to Our Blog
          </h1>
          <p className="max-w-[700px] text-lg text-muted-foreground sm:text-xl">
            Discover stories, thinking, and expertise from writers on any topic.
          </p>
          <Button asChild size="lg">
            <Link href="/blog">
              View All Posts
            </Link>
          </Button>
        </div>
      </section>

      {/* Recent Posts Section */}
      <section className="container py-12">
        <div className="flex items-center justify-between mb-8">
          <div className="space-y-1">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              Recent Posts
            </h2>
            <p className="text-muted-foreground">
              The latest articles and news from our blog.
            </p>
          </div>
          <Button variant="ghost" asChild>
            <Link href="/blog" className="group/link">
              View all posts{' '}
              <span className="ml-1 inline-block transition-transform group-hover/link:translate-x-0.5">
                →
              </span>
            </Link>
          </Button>
        </div>

        {posts.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {recentPosts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        ) : (
          <div className="flex min-h-[200px] items-center justify-center rounded-lg border border-dashed">
            <p className="text-muted-foreground">No posts published yet.</p>
          </div>
        )}
      </section>
    </div>
  )
}
