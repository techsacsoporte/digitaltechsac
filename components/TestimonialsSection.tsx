import { TESTIMONIALS } from '@/lib/constants';

function StarIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 fill-current" viewBox="0 0 20 20" aria-hidden="true">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );
}

export default function TestimonialsSection() {
  return (
    <section id="testimonios" className="py-16 px-4 bg-white" aria-labelledby="testimonials-heading">
      <div className="max-w-5xl mx-auto text-center">
        <div className="flex justify-center mb-4 text-yellow-400" role="img" aria-label="Calificación promedio: 4.9 de 5 estrellas">
          {[...Array(5)].map((_, i) => <StarIcon key={i} />)}
        </div>
        <h2 id="testimonials-heading" className="text-3xl font-bold mb-2">
          Más de <span className="gradient-text">500 Colombianos</span> ya ahorraron
        </h2>
        <p className="text-slate-600 mb-2">
          Emprendedores, estudiantes y creadores de contenido que ya disfrutan Canva Pro EDU al mejor precio.
        </p>
        <p className="text-sm text-slate-500 font-semibold mb-12">⭐ 4.9/5 estrellas · 98% tasa de satisfacción · +500 licencias activadas</p>

        <div className="grid md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t) => (
            <blockquote
              key={t.name}
              className="bg-slate-50 p-6 rounded-2xl shadow-sm text-left hover-lift relative"
              itemScope
              itemType="https://schema.org/Review"
            >
              <div className="text-6xl text-brand-purple/15 absolute top-4 left-4 font-serif select-none" aria-hidden="true">&ldquo;</div>
              <p className="text-slate-700 italic mb-6 relative z-10 pt-4" itemProp="reviewBody">{t.quote}</p>
              <footer className="flex items-center">
                <div className={`w-10 h-10 ${t.color} rounded-full flex items-center justify-center text-white font-bold mr-3 flex-shrink-0`}>
                  {t.initials}
                </div>
                <div itemProp="author" itemScope itemType="https://schema.org/Person">
                  <cite className="font-bold not-italic block" itemProp="name">{t.name}</cite>
                  <span className="text-xs text-slate-500">{t.role}</span>
                </div>
              </footer>
              <div itemProp="reviewRating" itemScope itemType="https://schema.org/Rating" className="hidden">
                <meta itemProp="ratingValue" content="5" />
                <meta itemProp="bestRating" content="5" />
              </div>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
