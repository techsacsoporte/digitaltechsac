import Image from "next/image";
import { PRICING, IMAGES } from "@/lib/constants";
import WhatsAppButton from "./WhatsAppButton";

export default function HeroSection() {
  return (
    <section
      className="pt-12 pb-16 md:pt-20 md:pb-24 px-4 overflow-hidden"
      aria-labelledby="hero-heading"
    >
      <div className="max-w-6xl mx-auto text-center relative z-10">
        {/* Trust badge */}
        <div className="inline-flex items-center gap-2 bg-green-50 border border-green-200 text-green-800 px-4 py-2 rounded-full text-sm font-bold mb-8 animate-bounce-slow shadow-sm">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clipRule="evenodd"
            />
          </svg>
          <span>Sin Riesgos: Activamos Primero, Pagas Después</span>
        </div>

        {/* H1 — keyword-rich pero natural */}
        <h1
          id="hero-heading"
          className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight"
        >
          Diseña como <span className="gradient-text">Profesional</span>{" "}
          <br className="hidden md:block" />
          <span className="text-slate-700">sin pagar mensualidades caras</span>
        </h1>

        {/* Subtítulo SEO — long-tail keywords */}
        <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
          Obtén tu <strong>Licencia Oficial de Canva Pro EDU</strong> 1 Año, con
          acceso a <strong>IA</strong>, <strong>Quitafondos</strong>,{" "}
          <strong>Plantillas Premium</strong>. No Necesitas Otro Diseño a{" "}
          <strong>${PRICING.current.toLocaleString("es-CO")}</strong> y acepta{" "}
          <strong>Nequi, DaviPlata y Bancolombia</strong>.
        </p>

        {/* Pricing Card */}
        <div
          id="pricing"
          className="bg-white border-2 border-brand-purple/20 p-8 rounded-3xl shadow-2xl shadow-brand-purple/20 max-w-md mx-auto mb-10 transform hover:scale-105 transition-all duration-300 relative overflow-hidden"
          itemScope
          itemType="https://schema.org/Offer"
        >
          <div className="absolute top-0 right-0 bg-brand-accent text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
            OFERTA LIMITADA
          </div>
          <p className="text-slate-400 text-lg line-through mb-2">
            Precio Normal: ${PRICING.original.toLocaleString("es-CO")} COP/año
          </p>
          <div className="flex justify-center items-baseline mb-4">
            <span
              className="text-6xl font-black text-brand-purple"
              itemProp="price"
              content={String(PRICING.current)}
            >
              ${PRICING.current.toLocaleString("es-CO")}
            </span>
            <span
              className="text-xl text-slate-500 font-bold ml-2"
              itemProp="priceCurrency"
              content="COP"
            >
              COP
            </span>
          </div>
          <div className="bg-green-100 text-green-700 font-bold text-lg py-2 px-4 rounded-xl inline-block mb-2">
            🎉 Ahorras ${PRICING.savings.toLocaleString("es-CO")} (
            {PRICING.discountPercent}% OFF)
          </div>
          <p className="text-sm text-slate-500 mt-2">
            Pago único por 1 año completo de acceso.
          </p>
          <meta itemProp="availability" content="https://schema.org/InStock" />
        </div>

        {/* CTA */}
        <div className="max-w-md mx-auto">
          <WhatsAppButton />
          <p className="text-sm text-slate-500 mt-4 flex items-center justify-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 text-green-500"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            Activación flash en menos de 5 minutos vía WhatsApp
          </p>
        </div>
      </div>

      {/* Hero image — EXTERNAL URL via next/image */}
      <div className="max-w-5xl mx-auto mt-16 relative z-0">
        <div className="aspect-video rounded-3xl overflow-hidden shadow-2xl glow-purple bg-slate-200 relative">
          <Image
            src={IMAGES.hero}
            alt={IMAGES.heroAlt}
            width={1200}
            height={675}
            className="w-full h-full object-cover"
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1100px"
          />
        </div>
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-brand-purple/20 blur-3xl -z-10 rounded-full opacity-50"
          aria-hidden="true"
        />
      </div>
    </section>
  );
}
