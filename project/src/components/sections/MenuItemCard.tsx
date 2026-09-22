import { UtensilsCrossed } from 'lucide-react';
import type { MenuItem } from '@/types';
import { Badge } from '@/components/ui/Badge';
import { Star, Leaf, Flame, Clock } from 'lucide-react';

interface MenuItemCardProps {
  item: MenuItem;
  featured?: boolean;
}

export function MenuItemCard({ item, featured = false }: MenuItemCardProps) {
  const isUnavailable = item.available === false;

  return (
    <article
      className={`card-surface overflow-hidden group transition-all duration-300 hover:shadow-2xl ${
        featured ? 'h-full' : ''
      } ${isUnavailable ? 'opacity-60' : ''}`}
      style={{ borderRadius: 'var(--radius-lg)' }}
    >
      {/* Image */}
      <div className="relative overflow-hidden h-48 md:h-56">
        <img
          src={item.image}
          alt={item.imageAlt ?? item.name}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {/* Badges over image */}
        <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
          {item.bestseller && <Badge text="Bestseller" variant="bestseller" />}
          {item.recommended && <Badge text="Recommended" variant="recommended" />}
        </div>
        {isUnavailable && (
          <div className="absolute top-3 right-3">
            <Badge text="Unavailable" variant="unavailable" />
          </div>
        )}
        {/* Dietary indicators */}
        <div className="absolute bottom-3 right-3 flex gap-1.5">
          {item.vegetarian && (
            <span
              className="w-7 h-7 rounded-full flex items-center justify-center"
              style={{ backgroundColor: 'var(--color-success)', color: '#fff' }}
              title="Vegetarian"
            >
              <Leaf size={14} />
            </span>
          )}
          {item.vegan && (
            <span
              className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold"
              style={{ backgroundColor: '#2d7a3e', color: '#fff' }}
              title="Vegan"
            >
              V
            </span>
          )}
          {item.spicy && (
            <span
              className="w-7 h-7 rounded-full flex items-center justify-center"
              style={{ backgroundColor: '#c0392b', color: '#fff' }}
              title="Spicy"
            >
              <Flame size={14} />
            </span>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="flex items-start justify-between gap-3 mb-2">
          <h3 className="text-lg font-semibold leading-tight" style={{ color: 'var(--color-heading)' }}>
            {item.name}
          </h3>
          <span
            className="text-lg font-bold whitespace-nowrap"
            style={{ color: 'var(--color-primary)', fontFamily: 'var(--font-heading)' }}
          >
            {item.currency}{item.price}
          </span>
        </div>

        <p className="text-sm leading-relaxed mb-3" style={{ color: 'var(--color-text-muted)' }}>
          {item.description}
        </p>

        {/* Meta */}
        <div className="flex items-center gap-4 text-xs" style={{ color: 'var(--color-text-muted)' }}>
          {item.preparationTime && (
            <span className="flex items-center gap-1">
              <Clock size={13} />
              {item.preparationTime}
            </span>
          )}
          {item.allergens && item.allergens.length > 0 && (
            <span className="flex items-center gap-1">
              <UtensilsCrossed size={13} />
              {item.allergens.join(', ')}
            </span>
          )}
        </div>
      </div>
    </article>
  );
}
