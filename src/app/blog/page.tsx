import { Metadata } from 'next'
import { getAllPosts } from '@/lib/api'
import { PostGrid } from '@/components/blog/post-grid'

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Read our latest blog posts and articles.',
}

export default async function BlogPage() {
  const posts = await getAllPosts()

  return (
    <main className="container py-6 md:py-8">
      <div className="space-y-2 pb-8 md:space-y-4">
        <h1 className="text-3xl font-bold md:text-4xl">Blog</h1>
        <p className="text-xl text-muted-foreground">
          Read our latest blog posts and articles.
        </p>
      </div>
      {posts.length > 0 ? (
        <PostGrid posts={posts} />
      ) : (
        <div className="flex min-h-[400px] items-center justify-center rounded-lg border border-dashed">
          <p className="text-muted-foreground">No posts published yet.</p>
        </div>
      )}
    </main>
  )
} 