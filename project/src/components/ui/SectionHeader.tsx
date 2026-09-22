import type { ReactNode } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  center?: boolean;
  children?: ReactNode;
}

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  center = true,
  children,
}: SectionHeaderProps) {
  const [ref, isVisible] = useScrollReveal<HTMLElement>();

  return (
    <header
      ref={ref}
      className={`reveal ${isVisible ? 'is-visible' : ''} ${center ? 'text-center mx-auto max-w-2xl' : 'max-w-2xl'} mb-12 md:mb-16`}
    >
      {eyebrow && (
        <p
          className="text-sm font-semibold uppercase tracking-[0.2em] mb-3"
          style={{ color: 'var(--color-primary)' }}
        >
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">{title}</h2>
      {subtitle && (
        <p
          className="text-base md:text-lg"
          style={{ color: 'var(--color-text-muted)' }}
        >
          {subtitle}
        </p>
      )}
      {children}
    </header>
  );
}
