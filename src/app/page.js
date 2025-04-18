'use client';
import { useState } from 'react';
import SpeedSelector from '../../components/SpeedSelector';
import CarMotion from '../../components/CarMotion';
import MosquitoReactBox from '../../components/MosquitoReactBox';

export default function Home() {
  const [speed, setSpeed] = useState(0);

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-100 to-blue-200 flex flex-col items-center p-10 gap-10">
      <h1 className="text-4xl font-bold text-center">🦟 Mosquito in a Speeding Car 🚗</h1>

      <SpeedSelector speed={speed} setSpeed={setSpeed} />

      <div className="flex flex-col items-center gap-8 w-full">
        <CarMotion speed={speed} />
        <MosquitoReactBox speed={speed} />
      </div>
    </main>
  );
}
