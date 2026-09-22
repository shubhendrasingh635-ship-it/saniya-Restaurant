import { useEffect } from 'react';
import { themePresets, applyTheme } from '@/config/theme';
import type { SectionId } from '@/types';
import { applySEO } from '@/config/seo';
import { sectionOrder } from '@/config/content';
import { features } from '@/config/features';
import { restaurant } from '@/config/restaurant';

import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { FloatingActions } from '@/components/layout/FloatingActions';

import { Hero } from '@/components/sections/Hero';
import { FeaturedDishes } from '@/components/sections/FeaturedDishes';
import { Intro } from '@/components/sections/Intro';
import { About } from '@/components/sections/About';
import { SpecialOffers } from '@/components/sections/SpecialOffers';
import { Gallery } from '@/components/sections/Gallery';
import { ChefSection } from '@/components/sections/ChefSection';
import { Reviews } from '@/components/sections/Reviews';
import { Events } from '@/components/sections/Events';
import { Menu } from '@/components/sections/Menu';
import { Reservation } from '@/components/sections/Reservation';
import { Location } from '@/components/sections/Location';
import { Contact } from '@/components/sections/Contact';

// ============================================================
// Section visibility map — features.ts gates content sections.
// ============================================================
function isSectionFeatureEnabled(id: SectionId): boolean {
  switch (id) {
    case 'gallery':
      return features.gallery;
    case 'chef':
      return features.chefSection;
    case 'reviews':
      return features.reviews;
    case 'events':
      return features.events;
    case 'offers':
      return features.specialOffers;
    case 'reservationCta':
      return features.reservations;
    case 'location':
      return features.googleMaps;
    default:
      return true;
  }
}

function renderSection(id: SectionId) {
  switch (id) {
    case 'hero':
      return <Hero />;
    case 'featured':
      return <FeaturedDishes />;
    case 'intro':
      return <Intro />;
    case 'about':
      return <About />;
    case 'offers':
      return <SpecialOffers />;
    case 'gallery':
      return <Gallery />;
    case 'chef':
      return <ChefSection />;
    case 'reviews':
      return <Reviews />;
    case 'events':
      return <Events />;
    case 'menu':
      return <Menu />;
    case 'reservationCta':
      return <Reservation />;
    case 'location':
      return <Location />;
    case 'contact':
      return <Contact />;
    default:
      return null;
  }
}

function App() {
  // Apply theme + SEO on mount
  useEffect(() => {
    applyTheme(themePresets[restaurant.theme.preset]);
    applySEO();
  }, []);

  // Update favicon to use restaurant config
  useEffect(() => {
    if (restaurant.favicon) {
      const link = document.querySelector("link[rel='icon']") as HTMLLinkElement | null;
      if (link) link.href = restaurant.favicon;
    }
  }, []);

  const visibleSections = sectionOrder.filter(
    (s) => s.enabled && isSectionFeatureEnabled(s.id)
  );

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--color-background)' }}>
      <Navbar />
      <main>
        {visibleSections.map((section) => (
          <div key={section.id}>{renderSection(section.id)}</div>
        ))}
      </main>
      <Footer />
      <FloatingActions />
    </div>
  );
}

export default App;
