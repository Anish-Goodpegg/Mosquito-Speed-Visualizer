'use client';
import { motion } from 'framer-motion';

export default function CarScene({ speed }) {
  const duration = Math.max(1, 10 - speed / 20); // faster = shorter duration

  return (
    <motion.div
      animate={{ x: ['-100%', '100%'] }}
      transition={{
        repeat: Infinity,
        duration,
        ease: 'linear',
      }}
      className="absolute bottom-5 left-0 w-24"
    >
      <div className="bg-red-500 rounded-md w-24 h-12 flex items-center justify-center shadow-md">
        🚗
      </div>
    </motion.div>
  );
}
