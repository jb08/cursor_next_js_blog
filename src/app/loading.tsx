import { Skeleton } from '@/components/ui/skeleton'

export default function Loading() {
  return (
    <div className="flex flex-col">
      {/* Hero Section Loading */}
      <section className="border-b bg-muted/40">
        <div className="container flex min-h-[400px] flex-col items-center justify-center space-y-4 text-center py-12">
          <Skeleton className="h-12 w-[250px] sm:h-14 sm:w-[300px] md:h-16 md:w-[400px] lg:h-20 lg:w-[500px]" />
          <Skeleton className="h-6 w-[200px] sm:h-7 sm:w-[250px]" />
          <Skeleton className="h-10 w-[120px]" />
        </div>
      </section>

      {/* Recent Posts Section Loading */}
      <section className="container py-12">
        <div className="flex items-center justify-between mb-8">
          <div className="space-y-1">
            <Skeleton className="h-8 w-[200px]" />
            <Skeleton className="h-5 w-[300px]" />
          </div>
          <Skeleton className="h-10 w-[120px]" />
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="flex flex-col space-y-2">
              <Skeleton className="aspect-video rounded-lg" />
              <Skeleton className="h-4 w-24" />
              <Skeleton className="h-6 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-2/3" />
            </div>
          ))}
        </div>
      </section>
    </div>
  )
} 