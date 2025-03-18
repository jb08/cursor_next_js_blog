import Link from 'next/link'
import Image from 'next/image'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { formatDate } from '@/lib/utils'
import { Post } from '@/lib/api'

interface PostCardProps {
  post: Post
}

export const PostCard = ({ post }: PostCardProps) => {
  return (
    <article className="group relative flex flex-col space-y-2">
      {post.featured_image && (
        <Link
          href={`/blog/${post.slug}`}
          className="aspect-video w-full overflow-hidden rounded-lg border bg-muted transition-colors"
        >
          <Image
            src={post.featured_image}
            alt={post.title}
            width={720}
            height={405}
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </Link>
      )}
      <div className="flex flex-col space-y-2">
        <div className="flex items-center gap-2">
          {post.categories && (
            <Badge variant="secondary" className="px-3 py-1">
              {post.categories.name}
            </Badge>
          )}
          <time
            dateTime={post.created_at}
            className="text-sm text-muted-foreground"
          >
            {formatDate(post.created_at)}
          </time>
        </div>
        <h2 className="text-2xl font-bold">
          <Link
            href={`/blog/${post.slug}`}
            className="line-clamp-2 hover:underline"
          >
            {post.title}
          </Link>
        </h2>
        <p className="line-clamp-3 text-muted-foreground">
          {post.content
            .replace(/[#*`]/g, '')
            .split('\n')
            .filter(line => line.trim())[0] || ''}
        </p>
        <Button asChild variant="ghost" className="w-fit px-0 hover:bg-transparent">
          <Link href={`/blog/${post.slug}`} className="group/link">
            Read more{' '}
            <span className="ml-1 inline-block transition-transform group-hover/link:translate-x-0.5">
              →
            </span>
          </Link>
        </Button>
      </div>
    </article>
  )
} 