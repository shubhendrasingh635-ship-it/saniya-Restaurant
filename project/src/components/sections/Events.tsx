import { events } from '@/config/content';
import { features } from '@/config/features';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Button } from '@/components/ui/Button';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

export function Events() {
  const [ref, isVisible] = useScrollReveal<HTMLDivElement>();
  if (!features.events) return null;

  const activeEvents = events.filter((e) => e.enabled);
  if (activeEvents.length === 0) return null;

  return (
    <section id="events" className="py-16 md:py-24">
      <div ref={ref} className={`max-w-7xl mx-auto px-4 md:px-6 reveal ${isVisible ? 'is-visible' : ''}`}>
        <SectionHeader
          eyebrow="Upcoming"
          title="Events & Experiences"
          subtitle="Join us for exclusive dinners, live music, and culinary celebrations."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {activeEvents.map((event, idx) => (
            <article
              key={event.id}
              className="card-surface overflow-hidden group transition-all duration-300 hover:shadow-2xl animate-fade-in-up"
              style={{ animationDelay: `${idx * 0.1}s`, opacity: 0 }}
            >
              <div className="relative h-52 overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div
                  className="absolute inset-0"
                  style={{ background: 'linear-gradient(180deg, transparent 50%, rgba(0,0,0,0.7) 100%)' }}
                />
                <div className="absolute bottom-3 left-4 right-4">
                  <p className="text-white text-sm font-medium flex items-center gap-2">
                    <Calendar size={14} style={{ color: 'var(--color-primary-light)' }} />
                    {event.date}
                  </p>
                  {event.time && (
                    <p className="text-white/80 text-xs flex items-center gap-2 mt-1">
                      <Clock size={12} />
                      {event.time}
                    </p>
                  )}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2" style={{ color: 'var(--color-heading)' }}>
                  {event.title}
                </h3>
                <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--color-text-muted)' }}>
                  {event.description}
                </p>
                {event.bookingUrl ? (
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={() => document.querySelector(event.bookingUrl!)?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    Reserve a Spot
                    <ArrowRight size={14} />
                  </Button>
                ) : (
                  <p className="text-xs font-medium" style={{ color: 'var(--color-primary)' }}>
                    Walk-in welcome
                  </p>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
