import { motion } from 'framer-motion';
import { ChevronDown, Star } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://image.qwenlm.ai/generated-images/b6fb9989-1c59-4072-8fc9-b4176cce8203/_result.png"
          alt="Slice & Smoke Restaurant"
          className="w-full h-full object-cover"
        />
        <div className="hero-overlay absolute inset-0" />
      </div>

      {/* Decorative elements - simplified */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-brand-orange/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-brand-amber/5 rounded-full blur-3xl" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-6"
        >
          <span className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2 text-sm text-brand-muted backdrop-blur-sm">
            <Star size={14} className="text-brand-amber fill-brand-amber" />
            5.0 Rated on Google Maps
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="font-heading text-6xl sm:text-7xl md:text-8xl lg:text-9xl tracking-wider text-white mb-4"
        >
          SLICE <span className="gradient-text">&</span> SMOKE
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-lg sm:text-xl md:text-2xl text-brand-muted font-light mb-4 max-w-2xl mx-auto"
        >
          Multan's Finest Pizza & Burger Experience
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="text-sm text-brand-muted/70 mb-10"
        >
          Industrial Estate, Sher Shah Road, Multan
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#menu"
            className="bg-brand-orange hover:bg-orange-600 text-white px-8 py-4 rounded-full font-semibold text-base transition-all duration-300 hover:shadow-xl hover:shadow-orange-500/30 hover:scale-105"
          >
            Explore Our Menu
          </a>
          <a
            href="tel:+923222307800"
            className="border border-white/20 hover:border-brand-orange text-white px-8 py-4 rounded-full font-semibold text-base transition-all duration-300 hover:bg-white/5"
          >
            Call to Order
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 grid grid-cols-3 gap-8 max-w-md mx-auto"
        >
          <div className="text-center">
            <div className="font-heading text-3xl text-brand-orange">5.0</div>
            <div className="text-xs text-brand-muted mt-1">Google Rating</div>
          </div>
          <div className="text-center">
            <div className="font-heading text-3xl text-brand-orange">50+</div>
            <div className="text-xs text-brand-muted mt-1">Menu Items</div>
          </div>
          <div className="text-center">
            <div className="font-heading text-3xl text-brand-orange">20+</div>
            <div className="text-xs text-brand-muted mt-1">Happy Reviews</div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="text-brand-muted/50"
        >
          <ChevronDown size={28} />
        </motion.div>
      </motion.div>
    </section>
  );
}
