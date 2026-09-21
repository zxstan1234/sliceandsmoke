import { motion } from 'framer-motion';

export default function SectionDivider({ variant = 'flame' }: { variant?: 'flame' | 'wave' | 'dots' }) {
  if (variant === 'flame') {
    return (
      <div className="relative py-4 overflow-hidden">
        <div className="flex items-center justify-center gap-1">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              animate={{
                y: [0, -8, 0],
                opacity: [0.3, 0.8, 0.3],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: i * 0.2,
                ease: "easeInOut"
              }}
              className="w-2 h-2 rounded-full bg-brand-orange"
              style={{ filter: 'blur(1px)' }}
            />
          ))}
        </div>
        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-px bg-gradient-to-r from-transparent via-brand-orange/20 to-transparent" />
      </div>
    );
  }

  if (variant === 'wave') {
    return (
      <div className="relative py-6 overflow-hidden">
        <svg className="w-full h-8 opacity-20" viewBox="0 0 1200 30" preserveAspectRatio="none">
          <motion.path
            d="M0,15 Q150,0 300,15 T600,15 T900,15 T1200,15"
            fill="none"
            stroke="#F97316"
            strokeWidth="1"
            animate={{
              d: [
                "M0,15 Q150,0 300,15 T600,15 T900,15 T1200,15",
                "M0,15 Q150,30 300,15 T600,15 T900,15 T1200,15",
                "M0,15 Q150,0 300,15 T600,15 T900,15 T1200,15",
              ]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </svg>
      </div>
    );
  }

  // dots variant
  return (
    <div className="relative py-6 flex items-center justify-center gap-3">
      <div className="h-px flex-1 bg-gradient-to-r from-transparent to-brand-orange/20" />
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: i * 0.3,
            ease: "easeInOut"
          }}
          className="w-1.5 h-1.5 rounded-full bg-brand-orange"
        />
      ))}
      <div className="h-px flex-1 bg-gradient-to-l from-transparent to-brand-orange/20" />
    </div>
  );
}
