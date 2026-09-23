import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Youtube, Twitter } from 'lucide-react';
import { restaurant } from '@/config/restaurant';
import { features } from '@/config/features';
import { getVisibleNavItems } from '@/config/navigation';

export function Footer() {
  const navItems = getVisibleNavItems();
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    features.instagram && restaurant.social.instagram && {
      icon: Instagram,
      href: restaurant.social.instagram,
      label: 'Instagram',
    },
    restaurant.social.facebook && {
      icon: Facebook,
      href: restaurant.social.facebook,
      label: 'Facebook',
    },
    restaurant.social.youtube && {
      icon: Youtube,
      href: restaurant.social.youtube,
      label: 'YouTube',
    },
    restaurant.social.x && {
      icon: Twitter,
      href: restaurant.social.x,
      label: 'X',
    },
  ].filter(Boolean) as { icon: typeof Instagram; href: string; label: string }[];

  const days: { key: keyof typeof restaurant.hours; label: string }[] = [
    { key: 'monday', label: 'Monday' },
    { key: 'tuesday', label: 'Tuesday' },
    { key: 'wednesday', label: 'Wednesday' },
    { key: 'thursday', label: 'Thursday' },
    { key: 'friday', label: 'Friday' },
    { key: 'saturday', label: 'Saturday' },
    { key: 'sunday', label: 'Sunday' },
  ];

  return (
    <footer
      className="border-t"
      style={{
        backgroundColor: 'var(--color-surface)',
        borderColor: 'var(--color-border)',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <span
                className="flex items-center justify-center w-10 h-10 rounded-lg text-xl font-bold"
                style={{
                  backgroundColor: 'var(--color-primary)',
                  color: 'var(--color-background)',
                  fontFamily: 'var(--font-heading)',
                }}
              >
                {restaurant.logoText}
              </span>
              <span
                className="text-xl font-bold"
                style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-heading)' }}
              >
                {restaurant.name}
              </span>
            </div>
            <p
              className="text-sm leading-relaxed mb-4"
              style={{ color: 'var(--color-text-muted)' }}
            >
              {restaurant.tagline} — {restaurant.cuisine} cuisine since {restaurant.establishedYear}.
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="p-2 rounded-full transition-all hover:scale-110"
                  style={{
                    backgroundColor: 'var(--color-surface-alt)',
                    color: 'var(--color-text)',
                  }}
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <nav aria-label="Footer navigation">
            <h3
              className="text-sm font-semibold uppercase tracking-wider mb-4"
              style={{ color: 'var(--color-heading)' }}
            >
              Explore
            </h3>
            <ul className="space-y-3">
              {navItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={item.href}
                    className="text-sm transition-colors hover:opacity-80"
                    style={{ color: 'var(--color-text-muted)' }}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Hours */}
          <div>
            <h3
              className="text-sm font-semibold uppercase tracking-wider mb-4 flex items-center gap-2"
              style={{ color: 'var(--color-heading)' }}
            >
              <Clock size={16} style={{ color: 'var(--color-primary)' }} />
              Opening Hours
            </h3>
            <ul className="space-y-2">
              {days.map((day) => (
                <li key={day.key} className="flex justify-between text-sm">
                  <span style={{ color: 'var(--color-text-muted)' }}>{day.label}</span>
                  <span style={{ color: 'var(--color-text)' }}>
                    {restaurant.hours[day.key]}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3
              className="text-sm font-semibold uppercase tracking-wider mb-4"
              style={{ color: 'var(--color-heading)' }}
            >
              Contact
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm">
                <MapPin size={16} className="mt-0.5 shrink-0" style={{ color: 'var(--color-primary)' }} />
                <span style={{ color: 'var(--color-text-muted)' }}>
                  {restaurant.contact.address}, {restaurant.contact.city},{' '}
                  {restaurant.contact.state} {restaurant.contact.postalCode}
                </span>
              </li>
              <li>
                <a
                  href={`tel:${restaurant.contact.phone.replace(/\s/g, '')}`}
                  className="flex items-center gap-2 text-sm transition-colors"
                  style={{ color: 'var(--color-text-muted)' }}
                >
                  <Phone size={16} style={{ color: 'var(--color-primary)' }} />
                  {restaurant.contact.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${restaurant.contact.email}`}
                  className="flex items-center gap-2 text-sm transition-colors"
                  style={{ color: 'var(--color-text-muted)' }}
                >
                  <Mail size={16} style={{ color: 'var(--color-primary)' }} />
                  {restaurant.contact.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div
          className="mt-12 pt-6 border-t flex flex-col md:flex-row justify-between items-center gap-4"
          style={{ borderColor: 'var(--color-border)' }}
        >
          <p className="text-xs" style={{ color: 'var(--color-text-muted)' }}>
            &copy; {currentYear} {restaurant.legalName}. All rights reserved.
          </p>
          {features.newsletter && <NewsletterForm />}
        </div>
      </div>
    </footer>
  );
}

function NewsletterForm() {
  return (
    <form
      className="flex items-center gap-2"
      onSubmit={(e) => {
        e.preventDefault();
        const input = e.currentTarget.querySelector('input');
        if (input) {
          input.value = '';
          input.placeholder = 'Subscribed!';
        }
      }}
    >
      <input
        type="email"
        required
        placeholder="Email for updates"
        className="input-field text-sm py-2 px-3 max-w-[200px]"
        aria-label="Newsletter email"
      />
      <button
        type="submit"
        className="btn-primary text-sm px-4 py-2 whitespace-nowrap"
      >
        Subscribe
      </button>
    </form>
  );
}
