import { PostCard } from './post-card'
import { Post } from '@/lib/api'

interface PostGridProps {
  posts: Post[]
}

export const PostGrid = ({ posts }: PostGridProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  )
} 