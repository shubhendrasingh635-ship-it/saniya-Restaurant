import { specialOffers } from '@/config/content';
import { features } from '@/config/features';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Tag, Calendar } from 'lucide-react';

export function SpecialOffers() {
  const [ref, isVisible] = useScrollReveal<HTMLDivElement>();
  if (!features.specialOffers) return null;

  const offers = specialOffers.filter((o) => o.enabled);
  if (offers.length === 0) return null;

  return (
    <section id="offers" className="py-16 md:py-24" style={{ backgroundColor: 'var(--color-surface)' }}>
      <div ref={ref} className={`max-w-7xl mx-auto px-4 md:px-6 reveal ${isVisible ? 'is-visible' : ''}`}>
        <SectionHeader
          eyebrow="Limited Time"
          title="Special Offers"
          subtitle="Exclusive experiences and seasonal promotions available now."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {offers.map((offer, idx) => (
            <article
              key={offer.id}
              className="card-surface overflow-hidden group transition-all duration-300 hover:shadow-2xl animate-fade-in-up"
              style={{ animationDelay: `${idx * 0.1}s`, opacity: 0 }}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={offer.image}
                  alt={offer.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div
                  className="absolute top-3 right-3 px-3 py-1.5 rounded-full text-xs font-bold"
                  style={{
                    backgroundColor: 'var(--color-accent)',
                    color: 'var(--color-background)',
                  }}
                >
                  <span className="flex items-center gap-1">
                    <Tag size={12} />
                    {offer.price}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2" style={{ color: 'var(--color-heading)' }}>
                  {offer.title}
                </h3>
                <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--color-text-muted)' }}>
                  {offer.description}
                </p>
                <p className="text-xs flex items-center gap-1.5" style={{ color: 'var(--color-primary)' }}>
                  <Calendar size={14} />
                  {offer.validity}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
