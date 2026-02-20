export default function HowItWorksSection() {
  const steps = [
    {
      number: '01',
      title: 'Escríbenos por WhatsApp',
      description: 'Haz clic en el botón de WhatsApp y envíanos tu correo electrónico de Canva. Respondemos en menos de 5 minutos.',
      icon: '💬',
    },
    {
      number: '02',
      title: 'Te activamos Canva Pro',
      description: 'Activamos la licencia Pro EDU directamente en tu cuenta existente. No necesitas crear otra cuenta ni cambiar contraseña.',
      icon: '⚡',
    },
    {
      number: '03',
      title: 'Verificas que funcione',
      description: 'Entras a tu Canva y verificas que todas las funciones premium estén activas: quitafondos, IA, plantillas y más.',
      icon: '✅',
    },
    {
      number: '04',
      title: 'Pagas solo si estás satisfecho',
      description: 'Una vez confirmes que todo funciona perfecto, realizas el pago de $19.900 COP por Nequi, DaviPlata o Bancolombia.',
      icon: '💰',
    },
  ];

  return (
    <section className="py-16 px-4 bg-slate-50" aria-labelledby="how-heading">
      <div className="max-w-5xl mx-auto">
        <header className="text-center mb-12">
          <h2 id="how-heading" className="text-3xl md:text-4xl font-bold mb-4">
            ¿Cómo <span className="gradient-text">comprar Canva Pro</span> en Colombia?
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Proceso 100% seguro. Activamos primero, pagas después. Así de simple.
          </p>
        </header>

        <div className="grid md:grid-cols-4 gap-6">
          {steps.map((step) => (
            <div key={step.number} className="relative text-center">
              <div className="text-4xl mb-3">{step.icon}</div>
              <div className="text-brand-purple font-black text-sm mb-1">PASO {step.number}</div>
              <h3 className="font-bold text-lg mb-2">{step.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{step.description}</p>
              {step.number !== '04' && (
                <div className="hidden md:block absolute top-8 -right-3 text-slate-300 text-2xl" aria-hidden="true">→</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
