export function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(' ');
}

export function formatPhoneLink(phone: string): string {
  const digits = phone.replace(/\D/g, '');
  return `tel:+1${digits.length === 10 ? digits : digits.slice(-10)}`;
}
