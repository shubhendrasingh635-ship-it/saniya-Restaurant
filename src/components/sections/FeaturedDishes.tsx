import { Flame, Leaf, Award, Clock } from 'lucide-react';
import { menuItems } from '@/config/menu';
import { MenuItemCard } from '@/components/sections/MenuItemCard';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Button } from '@/components/ui/Button';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export function FeaturedDishes() {
  const [ref, isVisible] = useScrollReveal<HTMLDivElement>();
  const featured = menuItems
    .filter((item) => item.bestseller || item.recommended)
    .slice(0, 3);

  const highlights = [
    { icon: Flame, label: 'Freshly Prepared' },
    { icon: Leaf, label: 'Locally Sourced' },
    { icon: Award, label: 'Award Winning' },
    { icon: Clock, label: 'Open 6 Days' },
  ];

  return (
    <section id="featured" className="py-16 md:py-24">
      <div ref={ref} className={`max-w-7xl mx-auto px-4 md:px-6 reveal ${isVisible ? 'is-visible' : ''}`}>
        <SectionHeader
          eyebrow="Most Loved"
          title="Featured Dishes"
          subtitle="The signature plates our guests return for again and again."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {featured.map((item, idx) => (
            <div
              key={item.id}
              className="animate-fade-in-up"
              style={{ animationDelay: `${idx * 0.1}s`, opacity: 0 }}
            >
              <MenuItemCard item={item} featured />
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-10">
          <Button variant="outline" onClick={() => document.querySelector('#menu')?.scrollIntoView({ behavior: 'smooth' })}>
            View Full Menu
          </Button>
        </div>

        {/* Quick highlights */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {highlights.map((hl, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center text-center gap-2 p-4"
            >
              <hl.icon size={28} style={{ color: 'var(--color-primary)' }} />
              <span
                className="text-sm font-medium"
                style={{ color: 'var(--color-text-muted)' }}
              >
                {hl.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
