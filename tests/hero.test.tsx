import { render, screen } from '@testing-library/react';
import { Hero } from '@/components/Hero';

describe('Hero', () => {
  it('muestra el título principal', () => {
    render(<Hero />);
    expect(screen.getByRole('heading', { name: /digitaltechsac listo para producción/i })).toBeInTheDocument();
  });

  it('expone enlace al health check', () => {
    render(<Hero />);
    const link = screen.getByRole('link', { name: /ver health check/i });
    expect(link).toHaveAttribute('href', '/api/health');
  });
});
