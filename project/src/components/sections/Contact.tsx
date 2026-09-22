import { restaurant } from '@/config/restaurant';
import { features } from '@/config/features';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Phone, Mail, MapPin, MessageCircle, Instagram, Facebook, Youtube, Twitter } from 'lucide-react';

export function Contact() {
  const [ref, isVisible] = useScrollReveal<HTMLDivElement>();

  const contactMethods = [
    {
      icon: Phone,
      label: 'Phone',
      value: restaurant.contact.phone,
      href: `tel:${restaurant.contact.phone.replace(/\s/g, '')}`,
      enabled: true,
    },
    {
      icon: Mail,
      label: 'Email',
      value: restaurant.contact.email,
      href: `mailto:${restaurant.contact.email}`,
      enabled: true,
    },
    {
      icon: MessageCircle,
      label: 'WhatsApp',
      value: restaurant.contact.whatsapp ?? '',
      href: restaurant.contact.whatsapp
        ? `https://wa.me/${restaurant.contact.whatsapp.replace(/\D/g, '')}`
        : '',
      enabled: features.whatsapp && !!restaurant.contact.whatsapp,
    },
    {
      icon: MapPin,
      label: 'Address',
      value: `${restaurant.contact.address}, ${restaurant.contact.city}, ${restaurant.contact.state}`,
      href: restaurant.location.googleMapsUrl,
      enabled: features.googleMaps,
    },
  ].filter((m) => m.enabled);

  const socials = [
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

  return (
    <section
      id="contact"
      className="py-16 md:py-24"
      style={{ backgroundColor: 'var(--color-surface)' }}
    >
      <div ref={ref} className={`max-w-5xl mx-auto px-4 md:px-6 reveal ${isVisible ? 'is-visible' : ''}`}>
        <div className="text-center mb-10">
          <p
            className="text-sm font-semibold uppercase tracking-[0.2em] mb-3"
            style={{ color: 'var(--color-primary)' }}
          >
            Get in Touch
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Contact Us</h2>
          <p className="max-w-xl mx-auto" style={{ color: 'var(--color-text-muted)' }}>
            We'd love to hear from you. Reach out for reservations, private events, or any questions.
          </p>
        </div>

        {/* Contact methods grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
          {contactMethods.map((method, idx) => (
            <a
              key={idx}
              href={method.href}
              target={method.href.startsWith('http') ? '_blank' : undefined}
              rel="noopener noreferrer"
              className="card-surface p-5 flex items-center gap-4 transition-all duration-200 hover:shadow-lg"
              style={{ borderRadius: 'var(--radius-lg)' }}
            >
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center shrink-0"
                style={{ backgroundColor: 'var(--color-surface-alt)', color: 'var(--color-primary)' }}
              >
                <method.icon size={22} />
              </div>
              <div className="min-w-0">
                <p className="text-xs uppercase tracking-wider" style={{ color: 'var(--color-text-muted)' }}>
                  {method.label}
                </p>
                <p className="text-sm font-medium truncate" style={{ color: 'var(--color-heading)' }}>
                  {method.value}
                </p>
              </div>
            </a>
          ))}
        </div>

        {/* Social links */}
        {socials.length > 0 && (
          <div className="mt-8 text-center">
            <p className="text-sm mb-4" style={{ color: 'var(--color-text-muted)' }}>
              Follow us on social media
            </p>
            <div className="flex items-center justify-center gap-3">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-11 h-11 rounded-full flex items-center justify-center transition-all hover:scale-110"
                  style={{
                    backgroundColor: 'var(--color-surface-alt)',
                    color: 'var(--color-text)',
                  }}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
