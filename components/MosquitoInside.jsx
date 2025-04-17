'use client';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function MosquitoInside({ id, speed }) {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;

    const motion = gsap.to(ref.current, {
      x: () => Math.random() * 500 - 250,
      y: () => Math.random() * 250 - 125,
      rotation: () => Math.random() * 360,
      duration: 1.5 - Math.min(speed / 200, 1),
      ease: 'sine.inOut',
      repeat: -1,
      yoyo: true,
    });

    return () => motion.kill();
  }, [speed]);

  return (
    <div
      ref={ref}
      className="absolute text-2xl z-10"
      style={{
        top: `${80 + id * 20}px`,
        left: `${100 + id * 30}px`,
      }}
    >
      🦟
    </div>
  );
}
