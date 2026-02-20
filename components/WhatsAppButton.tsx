import { WHATSAPP } from '@/lib/constants';
import WhatsAppIcon from './icons/WhatsAppIcon';

interface Props {
  variant?: 'primary' | 'white';
  label?: string;
  className?: string;
}

export default function WhatsAppButton({
  variant = 'primary',
  label = 'QUIERO MI LICENCIA YA 🚀',
  className = '',
}: Props) {
  const base =
    'group relative w-full flex items-center justify-center gap-3 text-lg md:text-xl font-bold py-5 px-8 rounded-2xl shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 overflow-hidden';
  const styles = {
    primary: 'bg-gradient-to-r from-brand-purple to-brand-darkerPurple hover:from-brand-accent hover:to-brand-purple text-white',
    white: 'bg-white text-brand-purple hover:bg-brand-accent hover:text-white',
  };

  return (
    <a
      href={WHATSAPP.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} ${styles[variant]} ${className}`}
      aria-label={`Solicitar licencia Canva Pro por WhatsApp al número ${WHATSAPP.number}`}
    >
      <span className="absolute inset-0 w-full h-full bg-white/20 group-hover:translate-x-full transition-transform duration-700 ease-in-out skew-x-12 -ml-4" aria-hidden="true" />
      <WhatsAppIcon className="w-7 h-7 relative z-10" />
      <span className="relative z-10">{label}</span>
    </a>
  );
}
