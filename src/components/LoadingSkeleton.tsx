export default function LoadingSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {Array.from({ length: 6 }).map((_, i) => (
        <div
          key={i}
          className="bg-white rounded-2xl border-2 border-border/50 overflow-hidden"
        >
          {/* Top bar */}
          <div className="h-1.5 w-full bg-gradient-to-r from-border-light via-border to-border-light bg-[length:200%_100%] animate-shimmer" />

          <div className="p-6">
            {/* Logo + Name */}
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-border-light via-border to-border-light bg-[length:200%_100%] animate-shimmer shrink-0" />
              <div className="flex-1">
                <div className="h-5 w-3/4 bg-gradient-to-r from-border-light via-border to-border-light bg-[length:200%_100%] animate-shimmer rounded-md mb-2" />
                <div className="h-3 w-1/2 bg-gradient-to-r from-border-light via-border to-border-light bg-[length:200%_100%] animate-shimmer rounded-md" />
              </div>
            </div>

            {/* Benefit */}
            <div className="rounded-xl p-3 mb-4 bg-border-light/50">
              <div className="h-3 w-1/3 bg-gradient-to-r from-border-light via-border to-border-light bg-[length:200%_100%] animate-shimmer rounded-md mb-2" />
              <div className="h-5 w-2/3 bg-gradient-to-r from-border-light via-border to-border-light bg-[length:200%_100%] animate-shimmer rounded-md" />
            </div>

            {/* Lines */}
            <div className="space-y-2 mb-4">
              <div className="h-3 w-full bg-gradient-to-r from-border-light via-border to-border-light bg-[length:200%_100%] animate-shimmer rounded-md" />
              <div className="h-3 w-5/6 bg-gradient-to-r from-border-light via-border to-border-light bg-[length:200%_100%] animate-shimmer rounded-md" />
              <div className="h-3 w-4/6 bg-gradient-to-r from-border-light via-border to-border-light bg-[length:200%_100%] animate-shimmer rounded-md" />
            </div>

            {/* Tags */}
            <div className="flex gap-2 mb-4">
              <div className="h-6 w-16 bg-gradient-to-r from-border-light via-border to-border-light bg-[length:200%_100%] animate-shimmer rounded-md" />
              <div className="h-6 w-14 bg-gradient-to-r from-border-light via-border to-border-light bg-[length:200%_100%] animate-shimmer rounded-md" />
            </div>

            {/* Button */}
            <div className="h-10 w-full bg-gradient-to-r from-border-light via-border to-border-light bg-[length:200%_100%] animate-shimmer rounded-xl" />
          </div>
        </div>
      ))}
    </div>
  );
}
