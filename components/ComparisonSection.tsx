export default function ComparisonSection() {
  const rows = [
    { feature: 'Plantillas disponibles', free: '250,000+', pro: '610,000+ Premium', highlight: true },
    { feature: 'Fotos, videos y audios', free: 'Limitados con marca de agua', pro: '100M+ sin marca de agua', highlight: true },
    { feature: 'Quitafondos con IA', free: '❌ No incluido', pro: '✅ Ilimitado', highlight: true },
    { feature: 'IA Generativa (Magic)', free: '❌ No incluido', pro: '✅ Incluido', highlight: true },
    { feature: 'Kit de Marca', free: '❌ No disponible', pro: '✅ Logos, fuentes, colores', highlight: false },
    { feature: 'Redimensionamiento Mágico', free: '❌ No disponible', pro: '✅ Un clic', highlight: false },
    { feature: 'Almacenamiento en la nube', free: '5 GB', pro: '100 GB', highlight: false },
    { feature: 'Programar publicaciones', free: '❌ No disponible', pro: '✅ Redes sociales', highlight: false },
    { feature: 'Precio anual', free: '$0 (muy limitado)', pro: '$19.900 COP', highlight: true },
  ];

  return (
    <section className="py-16 px-4 bg-white" aria-labelledby="comparison-heading">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-12">
          <h2 id="comparison-heading" className="text-3xl md:text-4xl font-bold mb-4">
            Canva Gratis vs <span className="gradient-text">Canva Pro EDU</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Mira todo lo que desbloqueas al pasar a Canva Pro por solo $19.900 COP al año.
          </p>
        </header>

        <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm">
          <table className="w-full text-left" role="table">
            <thead>
              <tr className="bg-slate-100">
                <th className="p-4 font-bold text-slate-700 text-sm md:text-base" scope="col">Función</th>
                <th className="p-4 font-bold text-slate-500 text-sm md:text-base text-center" scope="col">Canva Gratis</th>
                <th className="p-4 font-bold text-brand-purple text-sm md:text-base text-center" scope="col">
                  Canva Pro EDU ⭐
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r, i) => (
                <tr key={i} className={`border-t border-slate-100 ${r.highlight ? 'bg-purple-50/30' : ''}`}>
                  <td className="p-4 font-medium text-slate-800 text-sm md:text-base">{r.feature}</td>
                  <td className="p-4 text-slate-500 text-center text-sm">{r.free}</td>
                  <td className="p-4 text-brand-purple font-semibold text-center text-sm">{r.pro}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
