import { reviews } from '@/config/content';
import { features } from '@/config/features';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Star, Quote } from 'lucide-react';

export function Reviews() {
  const [ref, isVisible] = useScrollReveal<HTMLDivElement>();
  if (!features.reviews) return null;

  const avgRating =
    reviews.length > 0
      ? (reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length).toFixed(1)
      : '0.0';

  return (
    <section
      id="reviews"
      className="py-16 md:py-24"
      style={{ backgroundColor: 'var(--color-surface)' }}
    >
      <div ref={ref} className={`max-w-7xl mx-auto px-4 md:px-6 reveal ${isVisible ? 'is-visible' : ''}`}>
        <SectionHeader
          eyebrow="Guest Experiences"
          title="What Our Guests Say"
          subtitle={`Rated ${avgRating} out of 5 from ${reviews.length}+ verified reviews.`}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, idx) => (
            <article
              key={review.id}
              className="card-surface p-6 animate-fade-in-up"
              style={{ animationDelay: `${idx * 0.08}s`, opacity: 0 }}
            >
              <Quote size={32} style={{ color: 'var(--color-primary)', opacity: 0.3 }} />

              {/* Stars */}
              <div className="flex gap-1 mt-3 mb-3">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    fill={i < review.rating ? 'var(--color-accent)' : 'none'}
                    style={{
                      color: i < review.rating ? 'var(--color-accent)' : 'var(--color-border)',
                    }}
                  />
                ))}
              </div>

              <p className="text-sm leading-relaxed mb-5" style={{ color: 'var(--color-text)' }}>
                &ldquo;{review.review}&rdquo;
              </p>

              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold"
                  style={{
                    backgroundColor: 'var(--color-primary)',
                    color: 'var(--color-background)',
                  }}
                >
                  {review.customerName.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-semibold" style={{ color: 'var(--color-heading)' }}>
                    {review.customerName}
                  </p>
                  <p className="text-xs" style={{ color: 'var(--color-text-muted)' }}>
                    {new Date(review.date).toLocaleDateString('en-US', {
                      month: 'long',
                      year: 'numeric',
                    })}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
