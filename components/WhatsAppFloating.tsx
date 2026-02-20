'use client';

import { WHATSAPP } from '@/lib/constants';
import WhatsAppIcon from './icons/WhatsAppIcon';

export default function WhatsAppFloating() {
  return (
    <a
      href={WHATSAPP.url}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 glow-green group"
      aria-label="Contactar por WhatsApp para comprar Canva Pro"
    >
      <WhatsAppIcon className="w-8 h-8" />
      <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center animate-bounce" aria-hidden="true">
        1
      </span>
    </a>
  );
}
