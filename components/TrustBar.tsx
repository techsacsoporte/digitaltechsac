export default function TrustBar() {
  return (
    <section className="py-10 px-4 bg-white border-y border-slate-100" aria-label="Garantías de Digital TechSac">
      <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        <div className="flex flex-col items-center">
          <div className="bg-purple-100 p-4 rounded-full text-brand-purple mb-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 className="font-bold text-lg">Licencia Oficial</h3>
          <p className="text-sm text-slate-500">100% legal y segura</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="bg-cyan-100 p-4 rounded-full text-brand-accent mb-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 className="font-bold text-lg">Activación 5 min</h3>
          <p className="text-sm text-slate-500">Proceso inmediato</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="bg-purple-100 p-4 rounded-full text-brand-purple mb-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
            </svg>
          </div>
          <h3 className="font-bold text-lg">Paga al Final</h3>
          <p className="text-sm text-slate-500">Cero riesgo para ti</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="bg-cyan-100 p-4 rounded-full text-brand-accent mb-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          </div>
          <h3 className="font-bold text-lg">Soporte 24/7</h3>
          <p className="text-sm text-slate-500">Directo por WhatsApp</p>
        </div>
      </div>
    </section>
  );
}
