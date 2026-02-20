import Image from 'next/image';
import { SITE_CONFIG, IMAGES } from '@/lib/constants';

export default function Header() {
  return (
    <header className="bg-white/90 backdrop-blur-md border-b border-slate-100 py-3 relative z-40">
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2" aria-label={`${SITE_CONFIG.name} - Inicio`}>
          <Image
            src={IMAGES.logo}
            alt={IMAGES.logoAlt}
            width={40}
            height={40}
            className="w-10 h-10 object-contain"
            priority
          />
          <span className="font-black text-xl md:text-2xl tracking-tight gradient-text hidden sm:inline">
            DIGITAL TECHSAC
          </span>
        </a>
        <nav aria-label="Navegación principal" className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600">
          <a href="#funciones" className="hover:text-brand-purple transition-colors">Funciones</a>
          <a href="#testimonios" className="hover:text-brand-purple transition-colors">Testimonios</a>
          <a href="#preguntas-frecuentes" className="hover:text-brand-purple transition-colors">FAQ</a>
          <a href="#contacto" className="hover:text-brand-purple transition-colors">Contacto</a>
        </nav>
      </div>
    </header>
  );
}
