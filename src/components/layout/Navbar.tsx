import { useEffect, useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { restaurant } from '@/config/restaurant';
import { getVisibleNavItems } from '@/config/navigation';
import { features } from '@/config/features';
import { useActiveSection } from '@/hooks/useActiveSection';
import { Button } from '@/components/ui/Button';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = getVisibleNavItems();
  const activeSection = useActiveSection(
    navItems.map((item) => item.href.replace('#', ''))
  );

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          backgroundColor: scrolled ? 'var(--color-background)' : 'transparent',
          borderBottom: scrolled
            ? '1px solid var(--color-border)'
            : '1px solid transparent',
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
        }}
      >
        <nav className="max-w-7xl mx-auto px-4 md:px-6 h-16 md:h-20 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => handleNavClick('#home')}
            className="flex items-center gap-2 cursor-pointer"
            aria-label={`${restaurant.name} home`}
          >
            <span
              className="flex items-center justify-center w-9 h-9 md:w-10 md:h-10 rounded-lg text-lg md:text-xl font-bold"
              style={{
                backgroundColor: 'var(--color-primary)',
                color: 'var(--color-background)',
                fontFamily: 'var(--font-heading)',
              }}
            >
              {restaurant.logoText}
            </span>
            <span
              className="text-lg md:text-xl font-bold tracking-tight"
              style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-heading)' }}
            >
              {restaurant.name}
            </span>
          </button>

          {/* Desktop nav */}
          <ul className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.replace('#', '');
              return (
                <li key={item.id}>
                  <button
                    onClick={() => handleNavClick(item.href)}
                    className="text-sm font-medium tracking-wide transition-colors duration-200 cursor-pointer relative py-2"
                    style={{
                      color: isActive
                        ? 'var(--color-primary)'
                        : 'var(--color-text)',
                    }}
                  >
                    {item.label}
                    <span
                      className="absolute -bottom-0.5 left-0 h-0.5 transition-all duration-300"
                      style={{
                        width: isActive ? '100%' : '0%',
                        backgroundColor: 'var(--color-primary)',
                      }}
                    />
                  </button>
                </li>
              );
            })}
          </ul>

          {/* Desktop actions */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={`tel:${restaurant.contact.phone.replace(/\s/g, '')}`}
              className="flex items-center gap-2 text-sm font-medium transition-colors"
              style={{ color: 'var(--color-text)' }}
            >
              <Phone size={16} style={{ color: 'var(--color-primary)' }} />
              {restaurant.contact.phone}
            </a>
            {features.reservations && (
              <Button size="sm" onClick={() => handleNavClick('#reservation')}>
                Reserve
              </Button>
            )}
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden p-2 -mr-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? (
              <X size={24} style={{ color: 'var(--color-heading)' }} />
            ) : (
              <Menu size={24} style={{ color: 'var(--color-heading)' }} />
            )}
          </button>
        </nav>
      </header>

      {/* Mobile menu overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 lg:hidden animate-fade-in"
          style={{ backgroundColor: 'var(--color-background)' }}
        >
          <div className="flex flex-col items-center justify-center min-h-screen gap-2 px-6">
            {navItems.map((item, idx) => {
              const isActive = activeSection === item.href.replace('#', '');
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.href)}
                  className="text-2xl font-semibold py-3 transition-colors"
                  style={{
                    fontFamily: 'var(--font-heading)',
                    color: isActive
                      ? 'var(--color-primary)'
                      : 'var(--color-heading)',
                    animation: `fadeInUp 0.4s ease-out ${idx * 0.05}s both`,
                  }}
                >
                  {item.label}
                </button>
              );
            })}
            <div className="mt-8 flex flex-col items-center gap-4 w-full max-w-xs">
              {features.reservations && (
                <Button
                  className="w-full"
                  onClick={() => handleNavClick('#reservation')}
                >
                  Reserve a Table
                </Button>
              )}
              <a
                href={`tel:${restaurant.contact.phone.replace(/\s/g, '')}`}
                className="flex items-center gap-2 text-base"
                style={{ color: 'var(--color-text-muted)' }}
              >
                <Phone size={18} style={{ color: 'var(--color-primary)' }} />
                {restaurant.contact.phone}
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
