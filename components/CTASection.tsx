import { PRICING } from '@/lib/constants';
import WhatsAppButton from './WhatsAppButton';

export default function CTASection() {
  return (
    <section id="contacto" className="py-20 px-4 bg-gradient-to-br from-brand-dark to-brand-purple text-center relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden opacity-20 pointer-events-none" aria-hidden="true">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-brand-accent blur-3xl rounded-full animate-pulse-slow" />
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-brand-purple blur-3xl rounded-full animate-pulse-slow" style={{ animationDelay: '1s' }} />
      </div>

      <div className="max-w-3xl mx-auto relative z-10">
        <h2 className="text-3xl md:text-5xl font-black text-white mb-6">
          ¿Listo para dejar de sufrir con la{' '}
          <br className="hidden md:block" />
          versión gratuita?
        </h2>
        <p className="text-xl text-purple-100 mb-10">
          No dejes pasar esta oportunidad. 1 año de Canva Pro EDU al mejor precio, ${PRICING.current.toLocaleString('es-CO')} COP. Activa hoy y los mejores diseños son tuyos.
        </p>

        <div className="max-w-md mx-auto">
          <WhatsAppButton variant="white" label="SOLICITAR MI ACTIVACIÓN AHORA" />
          <p className="text-purple-200 text-sm mt-4">
            Garantía de satisfacción: si no funciona, te devolvemos tu dinero.
          </p>
        </div>
      </div>
    </section>
  );
}
