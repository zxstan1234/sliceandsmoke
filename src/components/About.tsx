import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { Clock, MapPin, Flame, Award } from 'lucide-react';

export default function About() {
  const { ref, isInView } = useInView({ threshold: 0.2 });

  return (
    <section id="about" className="py-20 md:py-32 relative" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-b from-brand-dark via-brand-darker to-brand-dark" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Floating food emojis */}
        <div className="float-emoji" style={{ top: '15%', left: '5%', animationDelay: '0s' }}>🍕</div>
        <div className="float-emoji" style={{ top: '25%', right: '8%', animationDelay: '2s' }}>🍔</div>
        <div className="float-emoji" style={{ bottom: '20%', left: '10%', animationDelay: '4s' }}>🔥</div>
        <div className="float-emoji" style={{ bottom: '30%', right: '5%', animationDelay: '6s' }}>🍟</div>
        
        {/* Light sweep effect */}
        <div className="light-sweep" />
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-brand-orange text-sm font-semibold tracking-widest uppercase">Our Story</span>
          <h2 className="font-heading text-5xl md:text-6xl text-white mt-3 tracking-wide">
            WHERE FLAVOR MEETS FIRE
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-brand-orange to-brand-amber mx-auto mt-6 rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="rounded-2xl overflow-hidden shadow-2xl shadow-orange-500/10">
              <img
                src="https://image.qwenlm.ai/generated-images/bc26e5f9-3f92-444e-bff5-80b5cc917b39/_result.png"
                alt="Slice & Smoke Interior"
                className="w-full h-80 md:h-[450px] object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-brand-orange text-white px-6 py-4 rounded-xl shadow-lg">
              <div className="font-heading text-3xl">5.0★</div>
              <div className="text-xs opacity-80">Google Reviews</div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="space-y-6"
          >
            <p className="text-brand-muted text-lg leading-relaxed">
              Nestled in the heart of Multan's Industrial Estate, <span className="text-white font-medium">Slice & Smoke</span> brings 
              together the perfect fusion of artisan pizzas and flame-grilled burgers. Every dish is crafted with 
              fresh ingredients and served with passion.
            </p>
            <p className="text-brand-muted leading-relaxed">
              From our signature Smokey Special Pizza to our juicy Zinger Burgers, we pride ourselves on delivering 
              bold flavors that keep our customers coming back. With a perfect 5.0 rating on Google, 
              our commitment to quality speaks for itself.
            </p>

            {/* Features */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-brand-orange/10 flex items-center justify-center flex-shrink-0">
                  <Flame size={18} className="text-brand-orange" />
                </div>
                <div>
                  <div className="text-white text-sm font-semibold">Fresh & Hot</div>
                  <div className="text-brand-muted text-xs">Made to order</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-brand-orange/10 flex items-center justify-center flex-shrink-0">
                  <Clock size={18} className="text-brand-orange" />
                </div>
                <div>
                  <div className="text-white text-sm font-semibold">Fast Service</div>
                  <div className="text-brand-muted text-xs">Quick delivery</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-brand-orange/10 flex items-center justify-center flex-shrink-0">
                  <MapPin size={18} className="text-brand-orange" />
                </div>
                <div>
                  <div className="text-white text-sm font-semibold">Great Location</div>
                  <div className="text-brand-muted text-xs">Easy to find</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-brand-orange/10 flex items-center justify-center flex-shrink-0">
                  <Award size={18} className="text-brand-orange" />
                </div>
                <div>
                  <div className="text-white text-sm font-semibold">Top Rated</div>
                  <div className="text-brand-muted text-xs">5.0 on Google</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
