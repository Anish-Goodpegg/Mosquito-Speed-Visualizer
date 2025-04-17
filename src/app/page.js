'use client';
import { useState } from 'react';
import SpeedSelector from '../../components/SpeedSelector';
import CarBox from '../../components/CarBox';
import MosquitoEffectBox from '../../components/MosquitoEffectBox';

export default function Home() {
  const [speed, setSpeed] = useState(20);

  return (
    <main className="min-h-screen bg-gray-100 p-6 flex flex-col items-center gap-8">
      <h1 className="text-3xl font-bold text-center">
        Mosquitoes in a Moving Car: Simulation
      </h1>
      <SpeedSelector speed={speed} setSpeed={setSpeed} />

      <div className="flex gap-10 justify-center items-start w-full max-w-6xl">
        <CarBox speed={speed} />
        <MosquitoEffectBox speed={speed} />
      </div>
    </main>
  );
}
