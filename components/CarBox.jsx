'use client';
import MosquitoInside from './MosquitoInside';

export default function CarBox({ speed }) {
  return (
    <div className="w-[600px] h-[350px] border-[6px] border-black bg-white rounded-xl relative overflow-hidden shadow-xl">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-200 via-white to-gray-300 opacity-60 pointer-events-none z-0" />
      {/* Mosquitoes inside */}
      {Array.from({ length: 6 }).map((_, i) => (
        <MosquitoInside key={i} id={i} speed={speed} />
      ))}

      {/* Optional: big car icon inside */}
      <div className="absolute bottom-2 right-3 text-5xl z-0 opacity-20">🚗</div>
    </div>
  );
}
