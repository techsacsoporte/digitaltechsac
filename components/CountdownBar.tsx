'use client';

import { useState, useEffect } from 'react';

export default function CountdownBar() {
  const [timeLeft, setTimeLeft] = useState(15 * 60);

  useEffect(() => {
    const id = setInterval(() => {
      setTimeLeft((p) => (p <= 0 ? 15 * 60 : p - 1));
    }, 1000);
    return () => clearInterval(id);
  }, []);

  const m = Math.floor(timeLeft / 60);
  const s = String(timeLeft % 60).padStart(2, '0');

  return (
    <div
      className="bg-gradient-to-r from-brand-purple to-brand-accent text-white text-center py-2.5 px-4 text-sm md:text-base font-bold sticky top-0 z-50 shadow-md"
      role="status"
      aria-live="polite"
      aria-label={`Oferta flash: quedan ${m} minutos y ${s} segundos`}
    >
      <span className="animate-pulse-slow">
        ⚡ OFERTA FLASH: El precio especial termina en{' '}
        <time className="tabular-nums font-mono">{m}:{s}</time> minutos ⚡
      </span>
    </div>
  );
}
