export function Hero() {
  return (
    <section className="hero">
      <p className="eyebrow">Desplegado en Vercel</p>
      <h1>DigitalTechsac listo para producción</h1>
      <p className="description">
        Stack recomendado: Next.js + TypeScript. Rápido, SEO-friendly y nativo para Vercel.
      </p>
      <div className="actions">
        <a href="https://vercel.com" target="_blank" rel="noreferrer" className="primary">
          Panel Vercel
        </a>
        <a href="/api/health" className="secondary">
          Ver health check
        </a>
      </div>
    </section>
  );
}
