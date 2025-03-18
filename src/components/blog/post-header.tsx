import Image from 'next/image'
import { Badge } from '@/components/ui/badge'
import { formatDate } from '@/lib/utils'
import { Post } from '@/lib/api'

interface PostHeaderProps {
  post: Post
}

export const PostHeader = ({ post }: PostHeaderProps) => {
  const formattedDate = formatDate(post.created_at)

  return (
    <header className="space-y-8">
      <div className="space-y-3">
        {post.categories && (
          <Badge variant="outline" className="px-3 py-1">
            {post.categories.name}
          </Badge>
        )}
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight lg:text-5xl">
          {post.title}
        </h1>
        <time
          dateTime={post.created_at}
          className="block text-muted-foreground"
        >
          {formattedDate}
        </time>
      </div>
      {post.featured_image && (
        <div className="aspect-video relative rounded-lg overflow-hidden border bg-muted">
          <Image
            src={post.featured_image}
            alt={post.title}
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 85vw, 1200px"
            quality={95}
          />
        </div>
      )}
    </header>
  )
} 