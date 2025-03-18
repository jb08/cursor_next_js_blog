import { Skeleton } from '@/components/ui/skeleton'

export default function Loading() {
  return (
    <main className="container py-6 md:py-8">
      <div className="space-y-2 pb-8 md:space-y-4">
        <Skeleton className="h-8 w-32" />
        <Skeleton className="h-6 w-96" />
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="flex flex-col space-y-2">
            <Skeleton className="aspect-video rounded-lg" />
            <Skeleton className="h-4 w-24" />
            <Skeleton className="h-6 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-2/3" />
          </div>
        ))}
      </div>
    </main>
  )
} 