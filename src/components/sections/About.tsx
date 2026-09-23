import { aboutInfo, chefInfo } from '@/config/content';
import { restaurant } from '@/config/restaurant';
import { features } from '@/config/features';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Award, CheckCircle } from 'lucide-react';

export function About() {
  const [ref, isVisible] = useScrollReveal<HTMLDivElement>();

  return (
    <section id="about" className="py-16 md:py-24">
      <div ref={ref} className={`max-w-7xl mx-auto px-4 md:px-6 reveal ${isVisible ? 'is-visible' : ''}`}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Images */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img
                  src={aboutInfo.images[0]}
                  alt="Restaurant interior"
                  loading="lazy"
                  className="w-full h-48 md:h-64 object-cover rounded-lg"
                  style={{ borderRadius: 'var(--radius-lg)' }}
                />
                <img
                  src={chefInfo.image}
                  alt={chefInfo.name}
                  loading="lazy"
                  className="w-full h-40 md:h-52 object-cover rounded-lg"
                  style={{ borderRadius: 'var(--radius-lg)' }}
                />
              </div>
              <div className="pt-8">
                <img
                  src={aboutInfo.images[1]}
                  alt="Kitchen at work"
                  loading="lazy"
                  className="w-full h-40 md:h-52 object-cover rounded-lg mb-4"
                  style={{ borderRadius: 'var(--radius-lg)' }}
                />
                {/* Stats card */}
                <div
                  className="card-surface p-5"
                  style={{ borderRadius: 'var(--radius-lg)' }}
                >
                  <div className="grid grid-cols-2 gap-4">
                    {aboutInfo.stats.map((stat, idx) => (
                      <div key={idx} className="text-center">
                        <p
                          className="text-2xl font-bold"
                          style={{ color: 'var(--color-primary)', fontFamily: 'var(--font-heading)' }}
                        >
                          {stat.value}
                        </p>
                        <p className="text-xs mt-1" style={{ color: 'var(--color-text-muted)' }}>
                          {stat.label}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Text content */}
          <div>
            <p
              className="text-sm font-semibold uppercase tracking-[0.2em] mb-3"
              style={{ color: 'var(--color-primary)' }}
            >
              Our Story
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              The Heart Behind {restaurant.name}
            </h2>

            <div className="space-y-4 mb-8">
              <p className="text-base leading-relaxed" style={{ color: 'var(--color-text-muted)' }}>
                {aboutInfo.story}
              </p>
              <p className="text-base leading-relaxed" style={{ color: 'var(--color-text-muted)' }}>
                {aboutInfo.philosophy}
              </p>
            </div>

            {/* Awards */}
            <div className="space-y-2 mb-6">
              <h3 className="text-sm font-semibold uppercase tracking-wider mb-3 flex items-center gap-2" style={{ color: 'var(--color-heading)' }}>
                <Award size={18} style={{ color: 'var(--color-primary)' }} />
                Recognition
              </h3>
              {aboutInfo.awards.map((award, idx) => (
                <div key={idx} className="flex items-start gap-2">
                  <CheckCircle size={16} className="mt-0.5 shrink-0" style={{ color: 'var(--color-primary)' }} />
                  <span className="text-sm" style={{ color: 'var(--color-text-muted)' }}>
                    {award}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
