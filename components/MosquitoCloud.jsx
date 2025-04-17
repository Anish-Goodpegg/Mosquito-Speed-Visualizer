'use client';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function MosquitoCloud({ speed }) {
  const mosquitoRef = useRef(null);

  useEffect(() => {
    const force = speed / 20;
    gsap.to(mosquitoRef.current, {
      x: force * 10,
      y: -force * 5,
      rotation: force * 4,
      scale: 1 + force * 0.1,
      duration: 0.6,
      ease: 'power2.out',
    });
  }, [speed]);

  return (
    <div className="absolute top-10 left-1/3">
      <div ref={mosquitoRef} className="text-4xl">
        🦟
      </div>
    </div>
  );
}
