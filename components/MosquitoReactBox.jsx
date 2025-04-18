'use client';
import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

export default function MosquitoReactBox({ speed }) {
  const mosquitoRef = useRef(null);
  const [reaction, setReaction] = useState('');

  useEffect(() => {
    if (!mosquitoRef.current) return;

    const tl = gsap.timeline({ repeat: -1, yoyo: true });

    if (speed < 30) {
      setReaction('😌 Chillin...');
      tl.to(mosquitoRef.current, { x: 0, y: 0, scale: 1, rotate: 0, duration: 0.5 });
    } else if (speed < 80) {
      setReaction('😰 Sweating');
      tl.to(mosquitoRef.current, {
        x: 10,
        y: -5,
        scale: 1.1,
        duration: 0.3,
        rotate: 5,
        ease: 'sine.inOut',
      });
    } else if (speed < 130) {
      setReaction('🥴 Dizzy!');
      tl.to(mosquitoRef.current, {
        x: 20,
        y: 10,
        rotate: 15,
        scale: 1.3,
        duration: 0.3,
        ease: 'back.inOut',
      });
    } else {
      setReaction('💥 Smashed into the glass!');
      tl.to(mosquitoRef.current, {
        scale: 1.5,
        x: 0,
        y: -10,
        rotate: 0,
        duration: 0.2,
        onComplete: () => {
          gsap.to(mosquitoRef.current, {
            scale: 0.2,
            opacity: 0.5,
            duration: 0.5,
            ease: 'power1.in',
          });
        },
      });
    }

    return () => {
      gsap.killTweensOf(mosquitoRef.current);
      tl.kill();
    };
  }, [speed]);

  return (
    <div className="w-[500px] h-[500px] bg-white border-4 border-red-400 rounded-2xl shadow-xl flex flex-col items-center justify-center gap-4 text-center">
      <div ref={mosquitoRef} className="text-[150px]">🦟</div>
      <div className="text-2xl font-semibold">{reaction}</div>
    </div>
  );
}
