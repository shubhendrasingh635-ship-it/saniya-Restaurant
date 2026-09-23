import { useState, useMemo, useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';
import { gallery, galleryImages } from '@/config/content';
import { features } from '@/config/features';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import type { ImageCategory } from '@/types';

const categoryFilters: { id: ImageCategory | 'all'; label: string }[] = [
  { id: 'all', label: 'All' },
  { id: 'interior', label: 'Interior' },
  { id: 'food', label: 'Food' },
  { id: 'drinks', label: 'Drinks' },
  { id: 'ambience', label: 'Ambience' },
  { id: 'exterior', label: 'Exterior' },
  { id: 'chef', label: 'Chef' },
  { id: 'events', label: 'Events' },
];

export function Gallery() {
  const [ref, isVisible] = useScrollReveal<HTMLDivElement>();
  const [activeFilter, setActiveFilter] = useState<ImageCategory | 'all'>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredImages = useMemo(() => {
    const sorted = [...galleryImages].sort((a, b) => a.displayOrder - b.displayOrder);
    if (activeFilter === 'all') return sorted;
    return sorted.filter((img) => img.category === activeFilter);
  }, [activeFilter]);

  const closeLightbox = useCallback(() => setLightboxIndex(null), []);
  const goPrev = useCallback(
    () =>
      setLightboxIndex((prev) =>
        prev === null ? null : (prev - 1 + filteredImages.length) % filteredImages.length
      ),
    [filteredImages.length]
  );
  const goNext = useCallback(
    () =>
      setLightboxIndex((prev) =>
        prev === null ? null : (prev + 1) % filteredImages.length
      ),
    [filteredImages.length]
  );

  useEffect(() => {
    if (lightboxIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') goPrev();
      if (e.key === 'ArrowRight') goNext();
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [lightboxIndex, closeLightbox, goPrev, goNext]);

  if (!features.gallery) return null;

  return (
    <section id="gallery" className="py-16 md:py-24">
      <div ref={ref} className={`max-w-7xl mx-auto px-4 md:px-6 reveal ${isVisible ? 'is-visible' : ''}`}>
        <SectionHeader
          eyebrow={gallery.eyebrow}
          title={gallery.title}
          subtitle={gallery.subtitle}
        />

        {/* Category filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          {categoryFilters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className="px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200 cursor-pointer"
              style={{
                backgroundColor:
                  activeFilter === filter.id ? 'var(--color-primary)' : 'transparent',
                color:
                  activeFilter === filter.id
                    ? 'var(--color-background)'
                    : 'var(--color-text-muted)',
                border: `1px solid ${activeFilter === filter.id ? 'var(--color-primary)' : 'var(--color-border)'}`,
              }}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Masonry grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 md:gap-6">
          {filteredImages.map((image, idx) => (
            <button
              key={image.id}
              onClick={() => setLightboxIndex(idx)}
              className="group relative mb-4 md:mb-6 block w-full overflow-hidden rounded-lg cursor-pointer"
              style={{ borderRadius: 'var(--radius-lg)' }}
              aria-label={`View image: ${image.title ?? image.alt}`}
            >
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                style={{ display: 'block' }}
              />
              {/* Overlay */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4"
                style={{ background: 'linear-gradient(180deg, transparent 40%, rgba(0,0,0,0.75) 100%)' }}
              >
                <div className="flex items-center justify-between w-full">
                  <div className="text-left">
                    {image.title && (
                      <p className="text-white text-sm font-semibold">{image.title}</p>
                    )}
                    <p className="text-white/70 text-xs uppercase tracking-wider">{image.category}</p>
                  </div>
                  <ZoomIn size={20} className="text-white" />
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && filteredImages[lightboxIndex] && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center animate-fade-in"
          style={{ backgroundColor: 'rgba(0,0,0,0.92)' }}
          onClick={closeLightbox}
        >
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 p-3 rounded-full z-10"
            aria-label="Close lightbox"
            style={{ backgroundColor: 'rgba(255,255,255,0.1)', color: '#fff' }}
          >
            <X size={24} />
          </button>

          {/* Prev */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              goPrev();
            }}
            className="absolute left-2 md:left-6 p-3 rounded-full z-10"
            aria-label="Previous image"
            style={{ backgroundColor: 'rgba(255,255,255,0.1)', color: '#fff' }}
          >
            <ChevronLeft size={28} />
          </button>

          {/* Image */}
          <div
            className="max-w-4xl w-full px-12 md:px-16"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={filteredImages[lightboxIndex].src}
              alt={filteredImages[lightboxIndex].alt}
              className="w-full max-h-[75vh] object-contain rounded-lg animate-scale-in"
            />
            <div className="text-center mt-4">
              {filteredImages[lightboxIndex].title && (
                <p className="text-white text-lg font-semibold">
                  {filteredImages[lightboxIndex].title}
                </p>
              )}
              <p className="text-white/60 text-sm">
                {filteredImages[lightboxIndex].alt}
              </p>
              <p className="text-white/40 text-xs mt-1">
                {lightboxIndex + 1} of {filteredImages.length}
              </p>
            </div>
          </div>

          {/* Next */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              goNext();
            }}
            className="absolute right-2 md:right-6 p-3 rounded-full z-10"
            aria-label="Next image"
            style={{ backgroundColor: 'rgba(255,255,255,0.1)', color: '#fff' }}
          >
            <ChevronRight size={28} />
          </button>
        </div>
      )}
    </section>
  );
}
