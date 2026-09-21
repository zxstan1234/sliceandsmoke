import { motion } from 'framer-motion';

export default function SectionDivider({ variant = 'flame' }: { variant?: 'flame' | 'wave' | 'dots' }) {
  if (variant === 'flame') {
    return (
      <div className="relative py-4 overflow-hidden">
        <div className="flex items-center justify-center gap-2">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.3, 0.7, 0.3],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.3,
                ease: "easeInOut"
              }}
              className="w-1.5 h-1.5 rounded-full bg-brand-orange"
              style={{ willChange: 'transform, opacity' }}
            />
          ))}
        </div>
        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-px bg-gradient-to-r from-transparent via-brand-orange/20 to-transparent" />
      </div>
    );
  }

  if (variant === 'wave') {
    return (
      <div className="relative py-4 overflow-hidden">
        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-px bg-gradient-to-r from-transparent via-brand-orange/15 to-transparent" />
      </div>
    );
  }

  // dots variant
  return (
    <div className="relative py-4 flex items-center justify-center gap-3">
      <div className="h-px flex-1 bg-gradient-to-r from-transparent to-brand-orange/15" />
      <div className="w-1.5 h-1.5 rounded-full bg-brand-orange/50" />
      <div className="h-px flex-1 bg-gradient-to-l from-transparent to-brand-orange/15" />
    </div>
  );
}
