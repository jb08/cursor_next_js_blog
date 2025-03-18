import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw'
import rehypeSanitize from 'rehype-sanitize'
import { cn } from '@/lib/utils'
import Image from 'next/image'

interface MarkdownRendererProps {
  content: string
  className?: string
}

export function MarkdownRenderer({ content, className }: MarkdownRendererProps) {
  return (
    <div className={cn('prose prose-slate dark:prose-invert max-w-none', className)}>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]} // Enables GitHub Flavored Markdown
        rehypePlugins={[
          rehypeRaw, // Enables raw HTML in markdown
          rehypeSanitize, // Sanitizes HTML to prevent XSS
        ]}
        components={{
          // Custom components for markdown elements
          h1: ({ children }) => (
            <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">{children}</h1>
          ),
          h2: ({ children }) => (
            <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">{children}</h2>
          ),
          h3: ({ children }) => (
            <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">{children}</h3>
          ),
          h4: ({ children }) => (
            <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">{children}</h4>
          ),
          p: ({ children }) => (
            <p className="leading-7 [&:not(:first-child)]:mt-6">{children}</p>
          ),
          ul: ({ children }) => (
            <ul className="my-6 ml-6 list-disc [&>li]:mt-2">{children}</ul>
          ),
          ol: ({ children }) => (
            <ol className="my-6 ml-6 list-decimal [&>li]:mt-2">{children}</ol>
          ),
          blockquote: ({ children }) => (
            <blockquote className="mt-6 border-l-2 pl-6 italic">{children}</blockquote>
          ),
          code: ({ children, className }) => {
            // Handle both inline and block code
            const isInline = !className
            return isInline ? (
              <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
                {children}
              </code>
            ) : (
              <code className={cn('relative font-mono text-sm', className)}>
                {children}
              </code>
            )
          },
          pre: ({ children }) => (
            <pre className="mb-4 mt-6 overflow-x-auto rounded-lg bg-muted p-4">
              {children}
            </pre>
          ),
          a: ({ href, children }) => (
            <a
              href={href}
              className="font-medium text-primary underline underline-offset-4"
              target={href?.startsWith('http') ? '_blank' : undefined}
              rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}
            >
              {children}
            </a>
          ),
          img: ({ src, alt }) => (
            <div className="relative aspect-video my-6">
              <Image
                src={src || ''}
                alt={alt || ''}
                fill
                className="rounded-lg object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 85vw, 1200px"
              />
            </div>
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  )
} 