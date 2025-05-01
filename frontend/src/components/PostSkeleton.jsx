export default function PostSkeleton() {
  return (
    <main className="mt-8 c-container flex flex-wrap lg:flex-nowrap lg:flex-row gap-8">
      {/* Sidebar skeleton */}
      <aside className="order-last lg:order-first lg:shrink-0 lg:w-[342px]">
        <div
          className="mb-8 h-6 w-1/2 dark:bg-[#141B2D] bg-gray-200
ay-300 rounded animate-pulse"
        />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-1 gap-8">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="space-y-2 animate-pulse">
              <div
                className="h-24 dark:bg-[#141B2D] bg-gray-200
ay-300 rounded"
              />
              <div
                className="h-4 w-3/4  dark:bg-[#141B2D] bg-gray-200
ay-300
ay-300 rounded"
              />
              <div
                className="h-4 w-2/3 dark:bg-[#141B2D] bg-gray-200
ay-300 rounded"
              />
            </div>
          ))}
        </div>
      </aside>

      {/* Main content skeleton */}
      <article className="flex-1 space-y-4 animate-pulse">
        <div
          className="h-4 w-1/3 dark:bg-[#141B2D] bg-gray-200
ay-300 rounded"
        />
        <div
          className="h-10 w-2/3 dark:bg-[#141B2D] bg-gray-200
ay-300 rounded"
        />
        <div
          className="h-[600px] w-full dark:bg-[#141B2D] bg-gray-200
ay-300 rounded pt-8"
        />
        <div className="space-y-2 pt-4">
          {Array.from({ length: 4 }).map((_, i) => (
            <div
              key={i}
              className="h-4 dark:bg-[#141B2D] bg-gray-200
ay-300 rounded w-full"
            />
          ))}
        </div>
      </article>
    </main>
  );
}
