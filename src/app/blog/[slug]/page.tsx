import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getPostBySlug } from '@/lib/api'
import { PostHeader } from '@/components/blog/post-header'
import { MarkdownRenderer } from '@/components/blog/markdown-renderer'

type GenerateMetadataProps = {
  params: { slug: string }
  searchParams?: { [key: string]: string | string[] | undefined }
}

// Generate metadata for SEO
export async function generateMetadata(
  { params }: GenerateMetadataProps
): Promise<Metadata> {
  const post = await getPostBySlug(params.slug)

  if (!post) {
    return {
      title: 'Post Not Found',
    }
  }

  return {
    title: post.title,
    description: post.content
      .replace(/[#*`]/g, '')
      .split('\n')
      .filter(line => line.trim())[0] || '',
    openGraph: {
      title: post.title,
      description: post.content
        .replace(/[#*`]/g, '')
        .split('\n')
        .filter(line => line.trim())[0] || '',
      type: 'article',
      ...(post.featured_image && {
        images: [
          {
            url: post.featured_image,
            width: 1200,
            height: 630,
            alt: post.title,
          },
        ],
      }),
    },
  }
}

type Props = {
  params: { slug: string }
}

export default async function BlogPostPage({ params }: Props) {
  const post = await getPostBySlug(params.slug)

  if (!post) {
    notFound()
  }

  return (
    <article className="container py-6 md:py-8">
      <PostHeader post={post} />
      <div className="mt-8 md:mt-12">
        <MarkdownRenderer content={post.content} />
      </div>
    </article>
  )
} 