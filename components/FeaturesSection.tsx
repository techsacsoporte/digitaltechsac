import { FEATURES } from '@/lib/constants';

export default function FeaturesSection() {
  return (
    <section id="funciones" className="py-16 px-4 bg-slate-50" aria-labelledby="features-heading">
      <div className="max-w-5xl mx-auto">
        <header className="text-center mb-12">
          <h2 id="features-heading" className="text-3xl md:text-4xl font-bold mb-4">
            Todo el poder de <span className="gradient-text">Canva Pro</span> desbloqueado
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Accede a las herramientas que los diseñadores profesionales usan todos los días, y ahorra dinero al mismo tiempo.
          </p>
        </header>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6" role="list">
          {FEATURES.map((f) => (
            <article key={f.title} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover-lift" role="listitem">
              <div className="text-4xl mb-4" role="img" aria-label={f.emojiLabel}>{f.emoji}</div>
              <h3 className="text-xl font-bold mb-2">{f.title}</h3>
              <p className="text-slate-600 leading-relaxed">{f.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
