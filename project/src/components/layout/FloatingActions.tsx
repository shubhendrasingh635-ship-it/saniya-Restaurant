import { useEffect, useState } from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { restaurant } from '@/config/restaurant';
import { features } from '@/config/features';

export function FloatingActions() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const actions: { icon: typeof Phone; href: string; label: string; bg: string }[] = [];

  if (features.whatsapp && restaurant.contact.whatsapp) {
    actions.push({
      icon: MessageCircle,
      href: `https://wa.me/${restaurant.contact.whatsapp.replace(/\D/g, '')}`,
      label: 'Chat on WhatsApp',
      bg: '#25D366',
    });
  }

  actions.push({
    icon: Phone,
    href: `tel:${restaurant.contact.phone.replace(/\s/g, '')}`,
    label: 'Call restaurant',
    bg: 'var(--color-primary)',
  });

  if (actions.length === 0) return null;

  return (
    <div
      className={`fixed bottom-5 right-5 z-40 flex flex-col gap-3 transition-all duration-300 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
    >
      {actions.map((action, idx) => (
        <a
          key={idx}
          href={action.href}
          target={action.href.startsWith('http') ? '_blank' : undefined}
          rel="noopener noreferrer"
          aria-label={action.label}
          className="w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-transform hover:scale-110"
          style={{ backgroundColor: action.bg, color: '#fff' }}
        >
          <action.icon size={22} />
        </a>
      ))}
    </div>
  );
}
