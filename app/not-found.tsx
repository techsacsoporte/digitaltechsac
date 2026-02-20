import Link from 'next/link';
import { SITE_CONFIG } from '@/lib/constants';

export const metadata = {
  title: 'Página no encontrada',
  description: `La página que buscas no existe en ${SITE_CONFIG.name}. Vuelve al inicio para ver nuestra oferta de Canva Pro.`,
};

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-slate-50 px-4">
      <div className="text-center max-w-md">
        <h1 className="text-8xl font-black gradient-text mb-4">404</h1>
        <h2 className="text-2xl font-bold mb-4 text-slate-800">Página no encontrada</h2>
        <p className="text-slate-600 mb-8">
          La página que buscas no existe. Vuelve al inicio para ver nuestra oferta de Canva Pro EDU por $19.900 COP.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-brand-purple text-white font-bold py-3 px-6 rounded-xl hover:bg-brand-darkerPurple transition-colors"
        >
          ← Volver al inicio
        </Link>
      </div>
    </main>
  );
}
