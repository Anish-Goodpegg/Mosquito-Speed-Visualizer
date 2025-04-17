'use client';
import { Wind } from 'lucide-react';

export default function SpeedSelector({ speed, setSpeed }) {
  return (
    <div className="flex flex-col items-center gap-2">
      <label className="flex items-center gap-2 text-lg font-semibold">
        <Wind className="w-5 h-5" />
        Speed: {speed} km/h
      </label>
      <input
        type="range"
        min="0"
        max="200"
        step="10"
        value={speed}
        onChange={(e) => setSpeed(Number(e.target.value))}
        className="w-64"
      />
    </div>
  );
}
