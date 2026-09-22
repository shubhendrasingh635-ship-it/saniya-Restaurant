import { UtensilsCrossed, CalendarDays, ArrowDown } from 'lucide-react';
import { restaurant } from '@/config/restaurant';
import { features } from '@/config/features';
import { Button } from '@/components/ui/Button';

export function Hero() {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-[100svh] flex items-center justify-center overflow-hidden"
      aria-label="Welcome"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={restaurant.heroImage}
          alt={restaurant.name}
          className="w-full h-full object-cover"
          fetchPriority="high"
        />
        <div
          className="absolute inset-0"
          style={{ background: restaurant.heroOverlay }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 md:px-6 text-center pt-20 pb-12">
        {/* Logo mark */}
        <div
          className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-full mb-6 animate-scale-in"
          style={{
            backgroundColor: 'rgba(255,255,255,0.08)',
            border: '2px solid var(--color-primary)',
            backdropFilter: 'blur(8px)',
            fontFamily: 'var(--font-heading)',
            color: 'var(--color-primary)',
            fontSize: '1.75rem',
            fontWeight: 700,
          }}
        >
          {restaurant.logoText}
        </div>

        <p
          className="text-sm md:text-base font-medium uppercase tracking-[0.3em] mb-4 animate-fade-in-up"
          style={{
            color: 'var(--color-primary)',
            animationDelay: '0.1s',
            opacity: 0,
          }}
        >
          {restaurant.cuisine} &middot; Est. {restaurant.establishedYear}
        </p>

        <h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 animate-fade-in-up"
          style={{
            color: '#fff',
            animationDelay: '0.2s',
            opacity: 0,
          }}
        >
          {restaurant.name}
        </h1>

        <p
          className="text-lg md:text-xl mb-3 animate-fade-in-up"
          style={{
            color: 'var(--color-primary-light)',
            fontFamily: 'var(--font-heading)',
            fontStyle: 'italic',
            animationDelay: '0.3s',
            opacity: 0,
          }}
        >
          {restaurant.tagline}
        </p>

        <p
          className="max-w-xl mx-auto text-sm md:text-base leading-relaxed mb-8 animate-fade-in-up"
          style={{
            color: 'rgba(255,255,255,0.8)',
            animationDelay: '0.4s',
            opacity: 0,
          }}
        >
          {restaurant.description}
        </p>

        {/* CTAs */}
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-3 animate-fade-in-up"
          style={{ animationDelay: '0.5s', opacity: 0 }}
        >
          <Button size="lg" onClick={() => scrollTo('#menu')}>
            <UtensilsCrossed size={18} />
            View Menu
          </Button>
          {features.reservations && (
            <Button variant="outline" size="lg" onClick={() => scrollTo('#reservation')}>
              <CalendarDays size={18} />
              Reserve a Table
            </Button>
          )}
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={() => scrollTo('#featured')}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 p-2 animate-bounce"
        aria-label="Scroll down"
        style={{ color: 'rgba(255,255,255,0.5)' }}
      >
        <ArrowDown size={24} />
      </button>
    </section>
  );
}
