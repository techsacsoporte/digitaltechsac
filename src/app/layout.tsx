import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'DigitalTechsac',
  description: 'Sitio base para DigitalTechsac desplegado en Vercel'
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
