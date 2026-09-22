import { restaurant } from '@/config/restaurant';
import { features } from '@/config/features';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { MapPin, Phone, Clock } from 'lucide-react';

export function Intro() {
  const [ref, isVisible] = useScrollReveal<HTMLDivElement>();

  return (
    <section className="py-16 md:py-24" style={{ backgroundColor: 'var(--color-surface)' }}>
      <div
        ref={ref}
        className={`max-w-5xl mx-auto px-4 md:px-6 text-center reveal ${isVisible ? 'is-visible' : ''}`}
      >
        <p
          className="text-sm font-semibold uppercase tracking-[0.2em] mb-4"
          style={{ color: 'var(--color-primary)' }}
        >
          {restaurant.restaurantType}
        </p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 max-w-3xl mx-auto leading-tight">
          A Celebration of {restaurant.cuisine} Cuisine
        </h2>
        <p
          className="text-base md:text-lg leading-relaxed max-w-2xl mx-auto"
          style={{ color: 'var(--color-text-muted)' }}
        >
          {restaurant.description}
        </p>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
          <div className="flex flex-col items-center gap-2 p-4">
            <MapPin size={24} style={{ color: 'var(--color-primary)' }} />
            <span className="text-sm font-medium" style={{ color: 'var(--color-heading)' }}>
              {restaurant.contact.city}, {restaurant.contact.state}
            </span>
          </div>
          <div className="flex flex-col items-center gap-2 p-4">
            <Clock size={24} style={{ color: 'var(--color-primary)' }} />
            <span className="text-sm font-medium" style={{ color: 'var(--color-heading)' }}>
              Open 6 Days a Week
            </span>
          </div>
          <div className="flex flex-col items-center gap-2 p-4">
            <Phone size={24} style={{ color: 'var(--color-primary)' }} />
            <span className="text-sm font-medium" style={{ color: 'var(--color-heading)' }}>
              {features.reservations ? 'Reservations Available' : 'Walk-ins Welcome'}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
