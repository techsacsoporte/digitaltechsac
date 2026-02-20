'use client';

import { useEffect, useRef } from 'react';

const COLORS = ['#7c3aed', '#5b21b6', '#00c4cc', '#a78bfa', '#22d3ee', '#c084fc'];

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
  const mouseRef = useRef({ x: -999, y: -999 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // El padre <section> captura los eventos de mouse
    const section = canvas.closest('section');
    if (!section) return;

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
        size: Math.random() * 5 + 2,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.4,
        rotation: Math.random() * Math.PI * 2,
        rotSpeed: (Math.random() - 0.5) * 0.03,
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
        opacity: Math.random() * 0.5 + 0.15,
      };
    }

    function init() {
      resize();
      particles = [];
      const count = Math.min(150, Math.floor((canvas!.width * canvas!.height) / 6000));
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

      const mouse = mouseRef.current;
      const PUSH_RADIUS = 130;

      particles.forEach((p) => {
        const dx = p.x - mouse.x;
        const dy = p.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < PUSH_RADIUS && dist > 0) {
          const force = (PUSH_RADIUS - dist) / PUSH_RADIUS;
          p.x += (dx / dist) * force * 4;
          p.y += (dy / dist) * force * 4;
          p.rotation += force * 0.2;
        }

        draw(p);

        p.x += p.speedX;
        p.y += p.speedY;
        p.rotation += p.rotSpeed;

        p.x += Math.sin(p.y * 0.008) * 0.2;
        p.y += Math.cos(p.x * 0.006) * 0.15;

        if (p.y > canvas!.height + 10) p.y = -10;
        if (p.y < -10) p.y = canvas!.height + 10;
        if (p.x > canvas!.width + 10) p.x = -10;
        if (p.x < -10) p.x = canvas!.width + 10;
      });

      animId = requestAnimationFrame(animate);
    }

    function onMouseMove(e: MouseEvent) {
      const rect = canvas!.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    }

    function onMouseLeave() {
      mouseRef.current = { x: -999, y: -999 };
    }

    init();
    animate();

    section.addEventListener('mousemove', onMouseMove);
    section.addEventListener('mouseleave', onMouseLeave);
    window.addEventListener('resize', resize);

    return () => {
      cancelAnimationFrame(animId);
      section.removeEventListener('mousemove', onMouseMove);
      section.removeEventListener('mouseleave', onMouseLeave);
      window.removeEventListener('resize', resize);
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
