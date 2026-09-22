import { useState } from 'react';
import { restaurant } from '@/config/restaurant';
import { features } from '@/config/features';
import { Button } from '@/components/ui/Button';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { CalendarDays, CheckCircle, Phone, AlertCircle } from 'lucide-react';

interface FormData {
  name: string;
  phone: string;
  email: string;
  date: string;
  time: string;
  guests: string;
  specialRequest: string;
}

interface FormErrors {
  [key: string]: string;
}

const TIME_SLOTS = [
  '5:00 PM', '5:30 PM', '6:00 PM', '6:30 PM',
  '7:00 PM', '7:30 PM', '8:00 PM', '8:30 PM',
  '9:00 PM', '9:30 PM',
];

export function Reservation() {
  const [ref, isVisible] = useScrollReveal<HTMLDivElement>();
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    email: '',
    date: '',
    time: '',
    guests: '2',
    specialRequest: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  if (!features.reservations) return null;

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) newErrors.name = 'Please enter your name';
    if (!formData.phone.trim()) newErrors.phone = 'Please enter your phone number';
    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!formData.date) newErrors.date = 'Please select a date';
    if (!formData.time) newErrors.time = 'Please select a time';

    const guests = parseInt(formData.guests, 10);
    if (isNaN(guests) || guests < restaurant.reservation.minimumGuests || guests > restaurant.reservation.maximumGuests) {
      newErrors.guests = `Party size must be ${restaurant.reservation.minimumGuests}–${restaurant.reservation.maximumGuests}`;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      // Frontend validation passed — no backend connected yet.
      // Shows confirmation without pretending the reservation was submitted to a server.
      setSubmitted(true);
    }
  };

  const handleChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
  };

  const today = new Date().toISOString().split('T')[0];

  return (
    <section
      id="reservation"
      className="py-16 md:py-24"
      style={{
        background:
          'linear-gradient(180deg, var(--color-background) 0%, var(--color-surface) 100%)',
      }}
    >
      <div ref={ref} className={`max-w-4xl mx-auto px-4 md:px-6 reveal ${isVisible ? 'is-visible' : ''}`}>
        <div className="text-center mb-10">
          <p
            className="text-sm font-semibold uppercase tracking-[0.2em] mb-3"
            style={{ color: 'var(--color-primary)' }}
          >
            Book a Table
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Reserve Your Experience
          </h2>
          <p className="max-w-xl mx-auto" style={{ color: 'var(--color-text-muted)' }}>
            Secure your table for an unforgettable dining experience. Parties of{' '}
            {restaurant.reservation.minimumGuests}–{restaurant.reservation.maximumGuests} guests.
          </p>
        </div>

        {submitted ? (
          <div
            className="card-surface p-8 md:p-12 text-center animate-scale-in"
            style={{ borderRadius: 'var(--radius-lg)' }}
          >
            <CheckCircle size={56} style={{ color: 'var(--color-success)', margin: '0 auto' }} />
            <h3 className="text-2xl font-bold mt-4 mb-3">Reservation Request Ready</h3>
            <p className="mb-6" style={{ color: 'var(--color-text-muted)' }}>
              Your details have been validated. To confirm your reservation, please call us at{' '}
              <a
                href={`tel:${restaurant.contact.phone.replace(/\s/g, '')}`}
                style={{ color: 'var(--color-primary)', fontWeight: 600 }}
              >
                {restaurant.contact.phone}
              </a>{' '}
              or we'll contact you shortly to confirm availability.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-6 text-left">
              <DetailItem label="Name" value={formData.name} />
              <DetailItem label="Date" value={formData.date} />
              <DetailItem label="Time" value={formData.time} />
              <DetailItem label="Guests" value={formData.guests} />
            </div>
            <Button
              variant="outline"
              onClick={() => {
                setSubmitted(false);
                setFormData({
                  name: '', phone: '', email: '', date: '', time: '', guests: '2', specialRequest: '',
                });
              }}
            >
              Make Another Request
            </Button>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="card-surface p-6 md:p-8"
            style={{ borderRadius: 'var(--radius-lg)' }}
            noValidate
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
              {/* Name */}
              <FormField label="Full Name" error={errors.name} required>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => handleChange('name', e.target.value)}
                  className="input-field"
                  placeholder="John Smith"
                  aria-invalid={!!errors.name}
                />
              </FormField>

              {/* Phone */}
              <FormField label="Phone Number" error={errors.phone} required>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleChange('phone', e.target.value)}
                  className="input-field"
                  placeholder="Your phone number"
                  aria-invalid={!!errors.phone}
                />
              </FormField>

              {/* Email */}
              <FormField label="Email" error={errors.email} required>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleChange('email', e.target.value)}
                  className="input-field"
                  placeholder="john@example.com"
                  aria-invalid={!!errors.email}
                />
              </FormField>

              {/* Guests */}
              <FormField label="Number of Guests" error={errors.guests} required>
                <select
                  value={formData.guests}
                  onChange={(e) => handleChange('guests', e.target.value)}
                  className="input-field"
                  aria-invalid={!!errors.guests}
                >
                  {Array.from(
                    { length: restaurant.reservation.maximumGuests - restaurant.reservation.minimumGuests + 1 },
                    (_, i) => i + restaurant.reservation.minimumGuests
                  ).map((n) => (
                    <option key={n} value={n}>
                      {n} {n === 1 ? 'guest' : 'guests'}
                    </option>
                  ))}
                </select>
              </FormField>

              {/* Date */}
              <FormField label="Date" error={errors.date} required>
                <input
                  type="date"
                  min={today}
                  value={formData.date}
                  onChange={(e) => handleChange('date', e.target.value)}
                  className="input-field"
                  aria-invalid={!!errors.date}
                />
              </FormField>

              {/* Time */}
              <FormField label="Time" error={errors.time} required>
                <select
                  value={formData.time}
                  onChange={(e) => handleChange('time', e.target.value)}
                  className="input-field"
                  aria-invalid={!!errors.time}
                >
                  <option value="">Select time</option>
                  {TIME_SLOTS.map((slot) => (
                    <option key={slot} value={slot}>{slot}</option>
                  ))}
                </select>
              </FormField>
            </div>

            {/* Special request */}
            <div className="mt-4">
              <FormField label="Special Requests (optional)">
                <textarea
                  value={formData.specialRequest}
                  onChange={(e) => handleChange('specialRequest', e.target.value)}
                  className="input-field min-h-[80px] resize-y"
                  placeholder="Dietary restrictions, celebrations, seating preferences..."
                  rows={3}
                />
              </FormField>
            </div>

            {/* Error summary */}
            {Object.keys(errors).length > 0 && (
              <div
                className="mt-4 p-3 rounded-md flex items-center gap-2 text-sm"
                style={{
                  backgroundColor: 'rgba(192,57,43,0.1)',
                  color: 'var(--color-error)',
                }}
              >
                <AlertCircle size={18} />
                Please correct the highlighted fields above.
              </div>
            )}

            {/* Submit */}
            <div className="mt-6 flex flex-col sm:flex-row items-center gap-4">
              <Button type="submit" size="lg" className="w-full sm:w-auto">
                <CalendarDays size={18} />
                Request Reservation
              </Button>
              {restaurant.reservation.phoneBooking && (
                <a
                  href={`tel:${restaurant.reservation.phoneBooking.replace(/\s/g, '')}`}
                  className="flex items-center gap-2 text-sm font-medium"
                  style={{ color: 'var(--color-text-muted)' }}
                >
                  <Phone size={16} style={{ color: 'var(--color-primary)' }} />
                  or call {restaurant.reservation.phoneBooking}
                </a>
              )}
            </div>

            <p className="mt-4 text-xs" style={{ color: 'var(--color-text-muted)' }}>
              This is a reservation request. We'll confirm availability by phone or email.
            </p>
          </form>
        )}
      </div>
    </section>
  );
}

function FormField({
  label,
  error,
  required,
  children,
}: {
  label: string;
  error?: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label
        className="block text-sm font-medium mb-1.5"
        style={{ color: 'var(--color-heading)' }}
      >
        {label}
        {required && <span style={{ color: 'var(--color-primary)' }}> *</span>}
      </label>
      {children}
      {error && (
        <p className="mt-1 text-xs" style={{ color: 'var(--color-error)' }}>
          {error}
        </p>
      )}
    </div>
  );
}

function DetailItem({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-xs uppercase tracking-wider" style={{ color: 'var(--color-text-muted)' }}>
        {label}
      </p>
      <p className="text-sm font-medium" style={{ color: 'var(--color-heading)' }}>
        {value}
      </p>
    </div>
  );
}
