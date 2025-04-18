'use client';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function CarMotion({ speed }) {
  const carRef = useRef(null);

  useEffect(() => {
    if (!carRef.current) return;

    const tl = gsap.to(carRef.current, {
      x: () => (speed / 200) * 500, // move further with speed
      duration: 1,
      ease: 'power2.inOut',
    });

    return () => tl.kill();
  }, [speed]);

  return (
    <div className="w-[1000px] h-[400px] bg-white border-4 border-black rounded-xl shadow-xl relative overflow-hidden flex items-center justify-center">
      <div
        ref={carRef}
        className="absolute text-[150px]"
      >
        🚗
      </div>
      {/* Tiny mosquito flying inside */}
      <div className="absolute text-[100px]">🦟</div>
    </div>
  );
}
