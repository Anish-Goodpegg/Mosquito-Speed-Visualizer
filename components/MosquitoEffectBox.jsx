'use client';
import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

export default function MosquitoEffectBox({ speed }) {
  const mosquitoRef = useRef(null);
  const [status, setStatus] = useState('');

  useEffect(() => {
    if (!mosquitoRef.current) return;

    // Animation: shaky motion based on speed
    gsap.to(mosquitoRef.current, {
      x: speed > 40 ? Math.random() * 20 - 10 : 0,
      y: speed > 40 ? Math.random() * 10 - 5 : 0,
      scale: speed > 100 ? 1.3 : 1,
      rotate: speed > 120 ? 20 : 0,
      duration: 0.5,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
    });

    // Set mosquito condition label
    if (speed < 30) setStatus('😌 Relaxed');
    else if (speed < 80) setStatus('😰 Unstable');
    else if (speed < 140) setStatus('🥴 Dizzy!');
    else setStatus('💀 KO');

    return () => gsap.killTweensOf(mosquitoRef.current);
  }, [speed]);

  return (
    <div className="w-[250px] h-[350px] bg-white border-4 border-red-500 rounded-xl shadow-lg flex flex-col items-center justify-center gap-4">
      <div className="text-xl font-semibold">Mosquito Status</div>
      <div ref={mosquitoRef} className="text-6xl">🦟</div>
      <div className="text-2xl">{status}</div>
    </div>
  );
}
