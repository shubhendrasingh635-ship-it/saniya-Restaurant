interface BadgeProps {
  text: string;
  variant?: 'bestseller' | 'recommended' | 'vegetarian' | 'vegan' | 'spicy' | 'unavailable';
}

const variantStyles: Record<NonNullable<BadgeProps['variant']>, { bg: string; color: string }> = {
  bestseller: { bg: 'var(--color-accent)', color: 'var(--color-background)' },
  recommended: { bg: 'var(--color-primary)', color: 'var(--color-background)' },
  vegetarian: { bg: 'var(--color-success)', color: '#fff' },
  vegan: { bg: '#2d7a3e', color: '#fff' },
  spicy: { bg: '#c0392b', color: '#fff' },
  unavailable: { bg: 'var(--color-surface-alt)', color: 'var(--color-text-muted)' },
};

export function Badge({ text, variant = 'recommended' }: BadgeProps) {
  const { bg, color } = variantStyles[variant];
  return (
    <span
      className="inline-flex items-center rounded-full px-2.5 py-1 text-xs font-semibold whitespace-nowrap"
      style={{ backgroundColor: bg, color }}
    >
      {text}
    </span>
  );
}
