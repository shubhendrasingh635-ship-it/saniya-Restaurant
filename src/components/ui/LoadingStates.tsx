export function LoadingSpinner({ label = 'Loading...' }: { label?: string }) {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      role="status"
      aria-live="polite"
    >
      <div
        className="w-10 h-10 rounded-full border-2 border-transparent animate-spin"
        style={{
          borderTopColor: 'var(--color-primary)',
          borderRightColor: 'var(--color-primary)',
        }}
      />
      <span
        className="mt-4 text-sm"
        style={{ color: 'var(--color-text-muted)' }}
      >
        {label}
      </span>
    </div>
  );
}

export function SkeletonCard() {
  return (
    <div
      className="card-surface overflow-hidden"
      style={{
        background:
          'linear-gradient(90deg, var(--color-surface) 25%, var(--color-surface-alt) 50%, var(--color-surface) 75%)',
        backgroundSize: '200% 100%',
        animation: 'shimmer 1.5s infinite',
      }}
    >
      <div className="w-full h-48" />
      <div className="p-4 space-y-3">
        <div className="h-4 w-2/3 rounded" style={{ background: 'var(--color-border)' }} />
        <div className="h-3 w-full rounded" style={{ background: 'var(--color-border)' }} />
        <div className="h-3 w-1/2 rounded" style={{ background: 'var(--color-border)' }} />
      </div>
    </div>
  );
}

export function EmptyState({
  title,
  message,
  icon,
}: {
  title: string;
  message: string;
  icon?: React.ReactNode;
}) {
  return (
    <div className="flex flex-col items-center justify-center py-16 text-center">
      {icon && (
        <div
          className="mb-4 p-4 rounded-full"
          style={{ background: 'var(--color-surface-alt)', color: 'var(--color-text-muted)' }}
        >
          {icon}
        </div>
      )}
      <h3 className="text-xl font-semibold mb-2" style={{ color: 'var(--color-heading)' }}>
        {title}
      </h3>
      <p className="max-w-sm" style={{ color: 'var(--color-text-muted)' }}>
        {message}
      </p>
    </div>
  );
}
