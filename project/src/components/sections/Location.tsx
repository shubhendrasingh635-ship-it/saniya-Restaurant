import { restaurant } from '@/config/restaurant';
import { features } from '@/config/features';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { MapPin, Clock, Navigation } from 'lucide-react';

export function Location() {
  const [ref, isVisible] = useScrollReveal<HTMLDivElement>();
  if (!features.googleMaps) return null;

  const days: { key: keyof typeof restaurant.hours; label: string }[] = [
    { key: 'monday', label: 'Monday' },
    { key: 'tuesday', label: 'Tuesday' },
    { key: 'wednesday', label: 'Wednesday' },
    { key: 'thursday', label: 'Thursday' },
    { key: 'friday', label: 'Friday' },
    { key: 'saturday', label: 'Saturday' },
    { key: 'sunday', label: 'Sunday' },
  ];

  const today = new Date().toLocaleDateString('en-US', { weekday: 'long' }).toLowerCase();

  return (
    <section id="location" className="py-16 md:py-24">
      <div ref={ref} className={`max-w-7xl mx-auto px-4 md:px-6 reveal ${isVisible ? 'is-visible' : ''}`}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12">
          {/* Map */}
          <div className="order-2 lg:order-1">
            <div
              className="w-full h-full min-h-[300px] md:min-h-[400px] overflow-hidden rounded-lg"
              style={{ borderRadius: 'var(--radius-lg)', border: '1px solid var(--color-border)' }}
            >
              <iframe
                title={`Map of ${restaurant.name}`}
                src={restaurant.location.embedMapUrl}
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '300px' }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Info */}
          <div className="order-1 lg:order-2">
            <p
              className="text-sm font-semibold uppercase tracking-[0.2em] mb-3"
              style={{ color: 'var(--color-primary)' }}
            >
              Find Us
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Location & Hours</h2>

            {/* Address */}
            <div className="flex items-start gap-3 mb-5">
              <MapPin size={22} className="mt-0.5 shrink-0" style={{ color: 'var(--color-primary)' }} />
              <div>
                <p className="font-medium" style={{ color: 'var(--color-heading)' }}>
                  {restaurant.contact.address}
                </p>
                <p className="text-sm" style={{ color: 'var(--color-text-muted)' }}>
                  {restaurant.contact.city}, {restaurant.contact.state}{' '}
                  {restaurant.contact.postalCode}, {restaurant.contact.country}
                </p>
                <a
                  href={restaurant.location.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium mt-2 transition-colors"
                  style={{ color: 'var(--color-primary)' }}
                >
                  <Navigation size={14} />
                  Get Directions
                </a>
              </div>
            </div>

            {/* Hours */}
            <div className="mb-5">
              <h3 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider mb-3" style={{ color: 'var(--color-heading)' }}>
                <Clock size={16} style={{ color: 'var(--color-primary)' }} />
                Opening Hours
              </h3>
              <ul className="space-y-2">
                {days.map((day) => {
                  const isToday = day.label.toLowerCase() === today;
                  const isClosed = restaurant.hours[day.key] === 'Closed';
                  return (
                    <li
                      key={day.key}
                      className="flex justify-between items-center py-1.5 px-3 rounded-md text-sm"
                      style={{
                        backgroundColor: isToday ? 'var(--color-surface-alt)' : 'transparent',
                      }}
                    >
                      <span
                        style={{
                          color: isToday ? 'var(--color-primary)' : 'var(--color-text-muted)',
                          fontWeight: isToday ? 600 : 400,
                        }}
                      >
                        {day.label}
                        {isToday && ' (Today)'}
                      </span>
                      <span
                        style={{
                          color: isClosed ? 'var(--color-error)' : 'var(--color-text)',
                        }}
                      >
                        {restaurant.hours[day.key]}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
