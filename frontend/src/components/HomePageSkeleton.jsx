export default function HomePageSkeleton() {
  return (
    <main className="space-y-16">
      {/* Header */}
      <div className="h-20 bg-gray-200 dark:bg-[#141B2D] animate-pulse" />

      {/* Featured Section */}
      <section className="c-container space-y-8">
        <div className="h-8 w-1/3 bg-gray-200 dark:bg-[#141B2D] rounded animate-pulse" />
        <div className="grid lg:grid-cols-2 gap-8">
          {[1, 2].map((i) => (
            <div
              key={i}
              className="h-60 w-full bg-gray-200 dark:bg-[#141B2D] rounded animate-pulse"
            />
          ))}
        </div>
        <div className="h-44 w-full bg-gray-200 dark:bg-[#141B2D] rounded animate-pulse" />
      </section>

      {/* All Posts Section */}
      <section className="c-container space-y-8">
        <div className="h-8 w-1/3 bg-gray-200 dark:bg-[#141B2D] rounded animate-pulse" />
        <div className="grid grid-cols-2 gap-6">
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className="h-40 w-full bg-gray-200 dark:bg-[#141B2D] rounded animate-pulse"
            />
          ))}
        </div>
      </section>
    </main>
  );
}
