'use client';

import { useEffect, useRef } from 'react';

const COLORS = ['#7c3aed', '#5b21b6', '#00c4cc', '#a78bfa', '#22d3ee'];

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  rotation: number;
  rotSpeed: number;
  color: string;
  opacity: number;
}

export default function ConfettiCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let particles: Particle[] = [];

    function resize() {
      if (!canvas) return;
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    }

    function createParticle(): Particle {
      return {
        x: Math.random() * (canvas?.width ?? 800),
        y: Math.random() * (canvas?.height ?? 600),
        size: Math.random() * 4 + 2,
        speedX: (Math.random() - 0.5) * 0.6,
        speedY: (Math.random() - 0.5) * 0.4,
        rotation: Math.random() * Math.PI * 2,
        rotSpeed: (Math.random() - 0.5) * 0.03,
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
        opacity: Math.random() * 0.35 + 0.1,
      };
    }

    function init() {
      resize();
      particles = [];
      const count = Math.min(120, Math.floor((canvas!.width * canvas!.height) / 8000));
      for (let i = 0; i < count; i++) {
        particles.push(createParticle());
      }
    }

    function draw(p: Particle) {
      if (!ctx) return;
      ctx.save();
      ctx.globalAlpha = p.opacity;
      ctx.translate(p.x, p.y);
      ctx.rotate(p.rotation);
      ctx.fillStyle = p.color;
      ctx.fillRect(-p.size, -p.size / 4, p.size * 2, p.size / 2);
      ctx.restore();
    }

    function animate() {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => {
        draw(p);
        p.x += p.speedX;
        p.y += p.speedY;
        p.rotation += p.rotSpeed;
        p.x += Math.sin(p.y * 0.008) * 0.2;

        if (p.y > canvas!.height + 10) p.y = -10;
        if (p.y < -10) p.y = canvas!.height + 10;
        if (p.x > canvas!.width + 10) p.x = -10;
        if (p.x < -10) p.x = canvas!.width + 10;
      });

      animId = requestAnimationFrame(animate);
    }

    init();
    animate();

    const onResize = () => {
      resize();
    };
    window.addEventListener('resize', onResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-0"
      aria-hidden="true"
    />
  );
}
