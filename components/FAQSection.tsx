'use client';

import { useState } from 'react';
import { FAQS } from '@/lib/constants';

function FAQItem({ question, answer, index }: { question: string; answer: string; index: number }) {
  const [open, setOpen] = useState(false);
  const id = `faq-answer-${index}`;

  return (
    <div className={`bg-white border border-slate-200 rounded-xl overflow-hidden ${open ? 'faq-open' : ''}`}>
      <h3>
        <button
          className="w-full flex justify-between items-center p-5 text-left focus:outline-none hover:bg-slate-50 transition-colors"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-controls={id}
        >
          <span className="font-bold text-lg text-brand-dark pr-4">{question}</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-brand-purple faq-icon flex-shrink-0"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </h3>
      <div id={id} className="faq-content px-5 pb-5 text-slate-600 bg-slate-50 leading-relaxed" role="region" aria-labelledby={`faq-q-${index}`}>
        <p>{answer}</p>
      </div>
    </div>
  );
}

export default function FAQSection() {
  return (
    <section id="preguntas-frecuentes" className="py-16 px-4 bg-slate-50" aria-labelledby="faq-heading">
      <div className="max-w-3xl mx-auto">
        <header className="text-center mb-12">
          <h2 id="faq-heading" className="text-3xl font-bold mb-4">
            Resolvemos tus dudas
          </h2>
          <p className="text-slate-600">
            Todo lo que necesitas saber antes de comprar tu licencia Canva Pro. Transparencia total.
          </p>
        </header>

        <div className="space-y-4" role="list">
          {FAQS.map((faq, i) => (
            <FAQItem key={i} question={faq.question} answer={faq.answer} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
