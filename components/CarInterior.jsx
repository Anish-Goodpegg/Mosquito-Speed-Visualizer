'use client';
import MosquitoInside from './MosquitoInside';

export default function CarInterior({ speed }) {
  return (
    <div className="relative w-full max-w-4xl h-[400px] bg-white border-4 border-black rounded-xl overflow-hidden shadow-lg">
      {/* Car Interior Layout */}
      <div className="absolute top-0 left-0 right-0 h-16 bg-gray-800 text-white flex items-center justify-center">
        Car Roof
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gray-900 text-white flex items-center justify-center">
        Seats
      </div>
      <div className="absolute inset-0 flex justify-center items-center">
        {/* Mosquitoes in the car */}
        {Array.from({ length: 5 }).map((_, idx) => (
          <MosquitoInside key={idx} id={idx} speed={speed} />
        ))}
      </div>
    </div>
  );
}
