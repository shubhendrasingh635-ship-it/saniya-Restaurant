import { useState, useMemo } from 'react';
import { Search, X } from 'lucide-react';
import { menuCategories, menuItems } from '@/config/menu';
import { features } from '@/config/features';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { MenuItemCard } from '@/components/sections/MenuItemCard';
import { EmptyState } from '@/components/ui/LoadingStates';


export function Menu() {
  
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [showUnavailable, setShowUnavailable] = useState(true);

  const categories = useMemo(
    () => [...menuCategories].sort((a, b) => a.displayOrder - b.displayOrder),
    []
  );

  const filteredItems = useMemo(() => {
    let items = menuItems;

    if (activeCategory !== 'all') {
      items = items.filter((item) => item.categoryId === activeCategory);
    }

    if (!showUnavailable) {
      items = items.filter((item) => item.available !== false);
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      items = items.filter(
        (item) =>
          item.name.toLowerCase().includes(q) ||
          item.description.toLowerCase().includes(q)
      );
    }

    return items;
  }, [activeCategory, searchQuery, showUnavailable]);

  const currentCategory = categories.find((c) => c.id === activeCategory);

  return (
    <section id="menu" className="py-16 md:py-24" style={{ backgroundColor: 'var(--color-surface)' }}>
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <SectionHeader
          eyebrow="Our Menu"
          title="Explore the Menu"
          subtitle="Each dish is crafted with seasonal ingredients and a passion for flavor."
        />

        {/* Search bar */}
        <div className="max-w-md mx-auto mb-8">
          <div className="relative">
            <Search
              size={18}
              className="absolute left-3 top-1/2 -translate-y-1/2"
              style={{ color: 'var(--color-text-muted)' }}
            />
            <input
              type="text"
              placeholder="Search dishes..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="input-field pl-10 pr-10"
              aria-label="Search menu items"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2"
                aria-label="Clear search"
                style={{ color: 'var(--color-text-muted)' }}
              >
                <X size={18} />
              </button>
            )}
          </div>
        </div>

        {/* Category tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3 mb-4">
          <CategoryTab
            label="All"
            active={activeCategory === 'all'}
            onClick={() => setActiveCategory('all')}
          />
          {categories.map((cat) => (
            <CategoryTab
              key={cat.id}
              label={cat.name}
              active={activeCategory === cat.id}
              onClick={() => setActiveCategory(cat.id)}
            />
          ))}
        </div>

        {/* Show unavailable toggle */}
        <div className="flex items-center justify-center gap-3 mb-10">
          <label className="flex items-center gap-2 text-sm cursor-pointer" style={{ color: 'var(--color-text-muted)' }}>
            <input
              type="checkbox"
              checked={showUnavailable}
              onChange={(e) => setShowUnavailable(e.target.checked)}
              className="w-4 h-4 rounded"
              style={{ accentColor: 'var(--color-primary)' }}
            />
            Show unavailable items
          </label>
        </div>

        {/* Category description */}
        {currentCategory?.description && activeCategory !== 'all' && !searchQuery && (
          <p className="text-center text-sm mb-8" style={{ color: 'var(--color-text-muted)' }}>
            {currentCategory.description}
          </p>
        )}

        {/* Menu grid */}
        {filteredItems.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item, idx) => (
              <div
                key={item.id}
                className="animate-fade-in-up"
                style={{ animationDelay: `${Math.min(idx * 0.06, 0.3)}s`, opacity: 0 }}
              >
                <MenuItemCard item={item} />
              </div>
            ))}
          </div>
        ) : (
          <EmptyState
            title="No Dishes Found"
            message="Try a different search term or category."
            icon={<Search size={28} />}
          />
        )}

        {/* Order CTA */}
        {features.onlineOrdering && (
          <div className="mt-12 text-center">
            <p className="text-sm mb-3" style={{ color: 'var(--color-text-muted)' }}>
              {features.delivery && features.takeaway
                ? 'Available for delivery and takeaway.'
                : features.takeaway
                  ? 'Available for takeaway.'
                  : features.delivery
                    ? 'Available for delivery.'
                    : ''}
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

function CategoryTab({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 cursor-pointer whitespace-nowrap"
      style={{
        backgroundColor: active ? 'var(--color-primary)' : 'transparent',
        color: active ? 'var(--color-background)' : 'var(--color-text-muted)',
        border: `1px solid ${active ? 'var(--color-primary)' : 'var(--color-border)'}`,
      }}
    >
      {label}
    </button>
  );
}
