import { useEffect, useState } from 'react';
import { AlertCircle, CheckCircle2, Loader2, Phone, Send } from 'lucide-react';
import { SERVICES } from '../../data/services';
import { SITE_CONFIG } from '../../data/site';
import { cn } from '../../lib/utils';
import { Button } from './Button';

interface QuoteFormProps {
  defaultServiceSlug?: string;
  className?: string;
}

interface FormState {
  name: string;
  phone: string;
  city: string;
  service: string;
  message: string;
}

interface FormErrors {
  name?: string;
  phone?: string;
  city?: string;
  service?: string;
  message?: string;
}

export function QuoteForm({ defaultServiceSlug = '', className }: QuoteFormProps) {
  const [form, setForm] = useState<FormState>({
    name: '',
    phone: '',
    city: '',
    service: defaultServiceSlug || SERVICES[0].slug,
    message: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (defaultServiceSlug) {
      setForm((prev) => ({ ...prev, service: defaultServiceSlug }));
    }
  }, [defaultServiceSlug]);

  const validate = (): FormErrors => {
    const nextErrors: FormErrors = {};
    if (!form.name.trim() || form.name.trim().length < 2) {
      nextErrors.name = 'Please enter your name.';
    }
    const digits = form.phone.replace(/\D/g, '');
    if (digits.length < 10) {
      nextErrors.phone = 'Please enter a valid 10-digit phone number.';
    }
    if (!form.city.trim()) {
      nextErrors.city = 'Please enter your city or town in Eastern Nebraska.';
    }
    if (!form.service) {
      nextErrors.service = 'Please select a service.';
    }
    if (!form.message.trim() || form.message.trim().length < 10) {
      nextErrors.message = 'Please share a brief note on your project size or scope.';
    }
    return nextErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setSubmitting(true);

    window.setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 650);
  };

  const selectedServiceName =
    SERVICES.find((s) => s.slug === form.service)?.name || 'Concrete Project';

  if (submitted) {
    return (
      <div
        className={cn(
          'p-6 sm:p-8 rounded-md metallic-bevel-green bg-[#121513] text-left',
          className
        )}
        role="status"
        aria-live="polite"
      >
        <div className="w-11 h-11 rounded-sm bg-[#2FB30F]/20 border border-[#7CFF3A]/45 flex items-center justify-center text-[#7CFF3A] mb-5">
          <CheckCircle2 className="w-6 h-6" aria-hidden="true" />
        </div>
        <h3 className="font-display text-3xl font-bold uppercase tracking-tight text-[#F2F5F1]">
          Estimate Request Received
        </h3>
        <p className="mt-3 text-sm sm:text-base text-[#9AA39C] leading-relaxed">
          Thank you, <span className="text-[#F2F5F1] font-medium">{form.name}</span>. Your
          request for <span className="text-[#7CFF3A] font-medium">{selectedServiceName}</span> in{' '}
          <span className="text-[#F2F5F1] font-medium">{form.city}</span> has been noted.
          Want to lock in an on-site walkthrough right away? Give us a call directly.
        </p>

        <div className="mt-6 flex flex-wrap items-center gap-3">
          <Button href={SITE_CONFIG.phoneHref} variant="primary" size="md">
            <Phone className="w-4 h-4" aria-hidden="true" />
            <span>Call {SITE_CONFIG.phoneDisplay}</span>
          </Button>
          <Button
            type="button"
            variant="secondary"
            size="md"
            onClick={() => {
              setSubmitted(false);
              setForm({
                name: '',
                phone: '',
                city: '',
                service: SERVICES[0].slug,
                message: '',
              });
            }}
          >
            Submit Another Request
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className={cn('p-6 sm:p-8 rounded-md metallic-bevel-card space-y-5', className)}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label
            htmlFor="quote-name"
            className="block text-xs font-semibold uppercase tracking-wider text-[#DCE5DB] mb-2"
          >
            Name <span className="text-[#7CFF3A]">*</span>
          </label>
          <input
            id="quote-name"
            type="text"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            placeholder="Your full name"
            aria-invalid={Boolean(errors.name)}
            className={cn(
              'w-full px-4 py-3 rounded-sm bg-[#0D100E] border text-sm text-[#F2F5F1] placeholder:text-[#9AA39C]/50 focus:outline-none focus:ring-2 focus:ring-[#7CFF3A]/60 transition-colors',
              errors.name ? 'border-red-500/70' : 'border-[#F2F5F1]/12 focus:border-[#7CFF3A]'
            )}
          />
          {errors.name && (
            <p className="mt-1.5 flex items-center gap-1.5 text-xs text-red-400">
              <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
              <span>{errors.name}</span>
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="quote-phone"
            className="block text-xs font-semibold uppercase tracking-wider text-[#DCE5DB] mb-2"
          >
            Phone <span className="text-[#7CFF3A]">*</span>
          </label>
          <input
            id="quote-phone"
            type="tel"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            placeholder="402-555-0199"
            aria-invalid={Boolean(errors.phone)}
            className={cn(
              'w-full px-4 py-3 rounded-sm bg-[#0D100E] border text-sm text-[#F2F5F1] placeholder:text-[#9AA39C]/50 focus:outline-none focus:ring-2 focus:ring-[#7CFF3A]/60 transition-colors',
              errors.phone ? 'border-red-500/70' : 'border-[#F2F5F1]/12 focus:border-[#7CFF3A]'
            )}
          />
          {errors.phone && (
            <p className="mt-1.5 flex items-center gap-1.5 text-xs text-red-400">
              <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
              <span>{errors.phone}</span>
            </p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label
            htmlFor="quote-city"
            className="block text-xs font-semibold uppercase tracking-wider text-[#DCE5DB] mb-2"
          >
            City / Town <span className="text-[#7CFF3A]">*</span>
          </label>
          <input
            id="quote-city"
            type="text"
            value={form.city}
            onChange={(e) => setForm({ ...form, city: e.target.value })}
            placeholder="Omaha, Lincoln, Fremont..."
            aria-invalid={Boolean(errors.city)}
            className={cn(
              'w-full px-4 py-3 rounded-sm bg-[#0D100E] border text-sm text-[#F2F5F1] placeholder:text-[#9AA39C]/50 focus:outline-none focus:ring-2 focus:ring-[#7CFF3A]/60 transition-colors',
              errors.city ? 'border-red-500/70' : 'border-[#F2F5F1]/12 focus:border-[#7CFF3A]'
            )}
          />
          {errors.city && (
            <p className="mt-1.5 flex items-center gap-1.5 text-xs text-red-400">
              <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
              <span>{errors.city}</span>
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="quote-service"
            className="block text-xs font-semibold uppercase tracking-wider text-[#DCE5DB] mb-2"
          >
            Service Needed <span className="text-[#7CFF3A]">*</span>
          </label>
          <select
            id="quote-service"
            value={form.service}
            onChange={(e) => setForm({ ...form, service: e.target.value })}
            aria-invalid={Boolean(errors.service)}
            className={cn(
              'w-full px-4 py-3 rounded-sm bg-[#0D100E] border text-sm text-[#F2F5F1] focus:outline-none focus:ring-2 focus:ring-[#7CFF3A]/60 transition-colors',
              errors.service ? 'border-red-500/70' : 'border-[#F2F5F1]/12 focus:border-[#7CFF3A]'
            )}
          >
            {SERVICES.map((svc) => (
              <option key={svc.slug} value={svc.slug} className="bg-[#121513] text-[#F2F5F1]">
                {svc.name}
              </option>
            ))}
          </select>
          {errors.service && (
            <p className="mt-1.5 flex items-center gap-1.5 text-xs text-red-400">
              <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
              <span>{errors.service}</span>
            </p>
          )}
        </div>
      </div>

      <div>
        <label
          htmlFor="quote-message"
          className="block text-xs font-semibold uppercase tracking-wider text-[#DCE5DB] mb-2"
        >
          Project Details <span className="text-[#7CFF3A]">*</span>
        </label>
        <textarea
          id="quote-message"
          rows={4}
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          placeholder="Approximate dimensions, tear-out needed, residential or commercial..."
          aria-invalid={Boolean(errors.message)}
          className={cn(
            'w-full px-4 py-3 rounded-sm bg-[#0D100E] border text-sm text-[#F2F5F1] placeholder:text-[#9AA39C]/50 focus:outline-none focus:ring-2 focus:ring-[#7CFF3A]/60 transition-colors resize-y',
            errors.message ? 'border-red-500/70' : 'border-[#F2F5F1]/12 focus:border-[#7CFF3A]'
          )}
        />
        {errors.message && (
          <p className="mt-1.5 flex items-center gap-1.5 text-xs text-red-400">
            <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
            <span>{errors.message}</span>
          </p>
        )}
      </div>

      <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <Button
          type="submit"
          variant="primary"
          size="lg"
          disabled={submitting}
          className="w-full sm:w-auto"
        >
          {submitting ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" aria-hidden="true" />
              <span>Sending Request...</span>
            </>
          ) : (
            <>
              <Send className="w-4 h-4" aria-hidden="true" />
              <span>Request Free Estimate</span>
            </>
          )}
        </Button>

        <p className="text-xs text-[#9AA39C]">
          Prefer to talk now? Call{' '}
          <a
            href={SITE_CONFIG.phoneHref}
            className="text-[#7CFF3A] font-semibold hover:underline"
          >
            {SITE_CONFIG.phoneDisplay}
          </a>
        </p>
      </div>
    </form>
  );
}
