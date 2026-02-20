import Image from 'next/image';
import { SITE_CONFIG, SOCIAL, IMAGES } from '@/lib/constants';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-brand-dark text-slate-400 py-10 px-4" role="contentinfo">
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 text-center md:text-left">
        <div>
          <div className="flex items-center gap-2 justify-center md:justify-start mb-4">
            <Image src={IMAGES.logo} alt={IMAGES.logoAlt} width={32} height={32} className="w-8 h-8" />
            <span className="text-xl font-black gradient-text">DIGITAL TECHSAC</span>
          </div>
          <p className="text-sm max-w-md leading-relaxed">
            Soluciones digitales accesibles para potenciar la creatividad de emprendedores, estudiantes y creadores de contenido en toda Colombia.
          </p>
          <nav aria-label="Enlaces del sitio" className="mt-4 flex gap-4 text-xs justify-center md:justify-start">
            <a href="#funciones" className="hover:text-brand-accent transition-colors">Funciones</a>
            <a href="#testimonios" className="hover:text-brand-accent transition-colors">Testimonios</a>
            <a href="#preguntas-frecuentes" className="hover:text-brand-accent transition-colors">FAQ</a>
            <a href="#contacto" className="hover:text-brand-accent transition-colors">Contacto</a>
          </nav>
        </div>

        <div className="flex flex-col md:items-end justify-center">
          <div className="flex justify-center md:justify-end gap-4 mb-4">
            <a href={SOCIAL.instagram} target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 rounded-full hover:bg-white/10 transition-colors hover:text-brand-accent" aria-label="Digital TechSac en Instagram">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.07 1.645.07 4.85 0 3.204-.012 3.584-.07 4.85-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.85-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.85 0-3.204.013-3.583.07-4.85.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z" />
                <path d="M12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a3.999 3.999 0 110-7.998 3.999 3.999 0 010 7.998zm6.406-10.845a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z" />
              </svg>
            </a>
            <a href={SOCIAL.facebook} target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 rounded-full hover:bg-white/10 transition-colors hover:text-brand-accent" aria-label="Digital TechSac en Facebook">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M24 12.073c0-6.627-5.373-10.999-12-10.999s-12 4.372-12 10.999c0 5.99 4.388 10.954 10.125 11.854v-8.385h-3.047v-3.469h3.047v-2.646c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.234 2.686.234v2.953h-1.514c-1.491 0-1.956.925-1.956 1.874v2.254h3.328l-.532 3.469h-2.796v8.385c5.738-.9 10.125-5.864 10.125-11.854z" />
              </svg>
            </a>
          </div>
          <p className="text-xs text-slate-500">Soporte y Ventas 24/7 vía WhatsApp</p>
          <p className="text-xs text-slate-500 mt-1">Licencias educativas oficiales para Colombia</p>
        </div>
      </div>

      <div className="border-t border-slate-800 mt-8 pt-6 text-center text-xs text-slate-600 space-y-1">
        <p>© {year} {SITE_CONFIG.name} Colombia. Todos los derechos reservados.</p>
        <p>Este sitio no está afiliado con Canva Pty Ltd. Somos revendedores independientes de licencias educativas legítimas.</p>
      </div>
    </footer>
  );
}
