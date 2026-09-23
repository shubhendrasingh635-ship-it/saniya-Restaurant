import { chefInfo } from '@/config/content';
import { features } from '@/config/features';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Award, UtensilsCrossed } from 'lucide-react';

export function ChefSection() {
  const [ref, isVisible] = useScrollReveal<HTMLDivElement>();
  if (!features.chefSection) return null;

  return (
    <section id="chef" className="py-16 md:py-24">
      <div ref={ref} className={`max-w-7xl mx-auto px-4 md:px-6 reveal ${isVisible ? 'is-visible' : ''}`}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative order-2 lg:order-1">
            <img
              src={chefInfo.image}
              alt={chefInfo.name}
              loading="lazy"
              className="w-full h-[400px] md:h-[500px] object-cover"
              style={{ borderRadius: 'var(--radius-lg)' }}
            />
            {/* Signature dish badge */}
            {chefInfo.signatureDish && (
              <div
                className="absolute -bottom-4 left-4 md:left-8 px-5 py-3 max-w-[240px]"
                style={{
                  backgroundColor: 'var(--color-surface)',
                  border: '1px solid var(--color-border)',
                  borderRadius: 'var(--radius-md)',
                }}
              >
                <p className="text-xs uppercase tracking-wider mb-1" style={{ color: 'var(--color-text-muted)' }}>
                  Signature Dish
                </p>
                <p className="text-sm font-semibold flex items-center gap-2" style={{ color: 'var(--color-heading)' }}>
                  <UtensilsCrossed size={16} style={{ color: 'var(--color-primary)' }} />
                  {chefInfo.signatureDish}
                </p>
              </div>
            )}
          </div>

          {/* Text */}
          <div className="order-1 lg:order-2">
            <p
              className="text-sm font-semibold uppercase tracking-[0.2em] mb-3"
              style={{ color: 'var(--color-primary)' }}
            >
              Meet the Chef
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2">{chefInfo.name}</h2>
            <p className="text-lg mb-6" style={{ color: 'var(--color-primary-light)', fontFamily: 'var(--font-heading)', fontStyle: 'italic' }}>
              {chefInfo.title}
            </p>
            <p className="text-base leading-relaxed mb-6" style={{ color: 'var(--color-text-muted)' }}>
              {chefInfo.bio}
            </p>

            {chefInfo.awards && chefInfo.awards.length > 0 && (
              <div className="space-y-2">
                <h3 className="text-sm font-semibold uppercase tracking-wider mb-3 flex items-center gap-2" style={{ color: 'var(--color-heading)' }}>
                  <Award size={18} style={{ color: 'var(--color-primary)' }} />
                  Awards & Recognition
                </h3>
                {chefInfo.awards.map((award, idx) => (
                  <p key={idx} className="text-sm pl-6 relative" style={{ color: 'var(--color-text-muted)' }}>
                    <span
                      className="absolute left-0 top-1.5 w-1.5 h-1.5 rounded-full"
                      style={{ backgroundColor: 'var(--color-primary)' }}
                    />
                    {award}
                  </p>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
