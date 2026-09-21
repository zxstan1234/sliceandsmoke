import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { Zap } from 'lucide-react';

const deals = [
  { name: 'Solo Box', description: 'Chicken Patty Burger + Fries + 350ml', price: '449', icon: '🍔', tag: 'Solo' },
  { name: 'Hunger Buster Deal', description: '1 Zinger + Fries + 350ml', price: '499', icon: '🔥', tag: 'Value' },
  { name: 'Mini Crave Deal', description: 'Small Pizza + 350ml', price: '549', icon: '🍕', tag: 'Solo' },
  { name: 'Duo Delight Deal', description: 'Medium Pizza + 1L Drink', price: '949', icon: '🥤', tag: 'Couple' },
  { name: 'Trio Feast Deal', description: 'Large Pizza + 1L Drink', price: '1399', icon: '🎉', tag: 'Friends' },
  { name: 'Xtreme Duo Deal', description: 'Small Pizza + Zinger + Small Pasta + 1L', price: '1300', icon: '⚡', tag: 'Couple' },
  { name: 'Smokey Saver Combo', description: '2 Zinger + Fries + 1L Drink', price: '849', icon: '💨', tag: 'Value' },
  { name: 'Family Special', description: 'Large Pizza + Medium Pizza + 1L Drink', price: '2249', icon: '👨‍👩‍👧‍👦', tag: 'Family' },
  { name: 'Family Pizza Bar', description: '2 Large Pizza + 1.5L Drink', price: '2349', icon: '🍕', tag: 'Family' },
  { name: 'Mega Slice Deal', description: '2 Large Pizza + 4 Zinger + 2L Drink', price: '3999', icon: '👑', tag: 'Party' },
];

export default function Deals() {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <section id="deals" className="py-20 md:py-32 relative" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-b from-brand-dark via-brand-darker to-brand-dark" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-brand-orange text-sm font-semibold tracking-widest uppercase">Special Deals</span>
          <h2 className="font-heading text-5xl md:text-6xl text-white mt-3 tracking-wide">
            COMBO SAVINGS
          </h2>
          <p className="text-brand-muted mt-4 max-w-xl mx-auto">
            More food, more savings. Our deals are designed to give you the best value.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-brand-orange to-brand-amber mx-auto mt-6 rounded-full" />
        </motion.div>

        {/* Deals Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
          {deals.map((deal, index) => (
            <motion.div
              key={deal.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="menu-card group relative p-5 rounded-2xl bg-brand-card/60 border border-brand-border/50 hover:border-brand-orange/40 overflow-hidden"
            >
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand-orange/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative">
                {/* Header */}
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{deal.icon}</span>
                    <div>
                      <h3 className="text-white font-semibold text-sm">{deal.name}</h3>
                      <span className="text-[10px] text-brand-orange bg-brand-orange/10 px-2 py-0.5 rounded-full">
                        {deal.tag}
                      </span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-heading text-2xl text-brand-orange">Rs.{deal.price}</div>
                  </div>
                </div>
                
                {/* Description */}
                <p className="text-brand-muted text-xs leading-relaxed">{deal.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-center mt-12"
        >
          <a
            href="tel:+923222307800"
            className="inline-flex items-center gap-2 bg-brand-orange hover:bg-orange-600 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:shadow-xl hover:shadow-orange-500/30 hover:scale-105"
          >
            <Zap size={18} />
            Order Your Deal Now
          </a>
        </motion.div>
      </div>
    </section>
  );
}
