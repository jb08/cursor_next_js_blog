import { Skeleton } from '@/components/ui/skeleton'

export default function Loading() {
  return (
    <article className="container py-6 md:py-8">
      <div className="space-y-8">
        <div className="space-y-3">
          <Skeleton className="h-6 w-24" />
          <Skeleton className="h-14 w-full max-w-2xl" />
          <Skeleton className="h-4 w-48" />
        </div>
        <Skeleton className="aspect-video w-full rounded-lg" />
      </div>
      <div className="mt-8 space-y-4 md:mt-12">
        {Array.from({ length: 3 }).map((_, i) => (
          <div key={i} className="space-y-2">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-[90%]" />
            <Skeleton className="h-4 w-[80%]" />
          </div>
        ))}
      </div>
    </article>
  )
} 