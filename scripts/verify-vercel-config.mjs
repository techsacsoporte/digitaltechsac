import fs from 'node:fs';

const hasTsConfig = fs.existsSync('next.config.ts');
const hasMjsConfig = fs.existsSync('next.config.mjs');
const hasJsConfig = fs.existsSync('next.config.js');

if (hasTsConfig) {
  console.error("❌ Se detectó 'next.config.ts'. Next.js en Vercel no soporta este archivo.");
  console.error("   Usa 'next.config.mjs' o 'next.config.js'.");
  process.exit(1);
}

if (!hasMjsConfig && !hasJsConfig) {
  console.error("❌ No se encontró configuración de Next.js.");
  console.error("   Crea 'next.config.mjs' (recomendado) o 'next.config.js'.");
  process.exit(1);
}

console.log('✅ Configuración de Next.js válida para Vercel.');
