import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { Pizza, Beef, Flame, Sandwich, Salad, Coffee } from 'lucide-react';
import FoodIllustration from './FoodIllustration';

const categories = [
  { id: 'pizza', name: 'Pizza', icon: Pizza },
  { id: 'extreme', name: 'Extreme Pizza', icon: Flame },
  { id: 'burgers', name: 'Burgers', icon: Beef },
  { id: 'fries', name: 'Fries', icon: Flame },
  { id: 'appetizers', name: 'Appetizers', icon: Salad },
  { id: 'wraps', name: 'Wraps & Sandwiches', icon: Sandwich },
  { id: 'pasta', name: 'Pasta', icon: Salad },
  { id: 'chicken', name: 'Fried Chicken', icon: Beef },
  { id: 'beverages', name: 'Beverages', icon: Coffee },
];

const menuData: Record<string, { name: string; prices: string[]; badge?: string }[]> = {
  pizza: [
    { name: 'Shanz Special Pizza', prices: ['499', '899', '1349'] },
    { name: 'Tikka Pizza', prices: ['499', '899', '1349'] },
    { name: 'Fajita Pizza', prices: ['499', '899', '1349'] },
    { name: 'Crispy Pizza', prices: ['499', '899', '1349'] },
    { name: 'Supreme Pizza', prices: ['499', '899', '1349'] },
    { name: 'Smokey Special', prices: ['499', '899', '1349'], badge: 'Popular' },
    { name: 'Hot Mughlaie Pizza', prices: ['499', '899', '1349'] },
    { name: 'Classic Pizza', prices: ['499', '899', '1349'] },
  ],
  extreme: [
    { name: 'Extreme Tikka Pizza', prices: ['1299', '1799'] },
    { name: 'Special Extreme Pizza', prices: ['1299', '1799'], badge: 'Best Seller' },
    { name: 'Crispy Extreme Pizza', prices: ['1299', '1799'] },
    { name: 'Crown Crust Pizza', prices: ['1199', '1599'] },
    { name: 'Kabab Crust Pizza', prices: ['1199', '1599'] },
  ],
  burgers: [
    { name: 'Shanz Special Burger', prices: ['599'], badge: 'Signature' },
    { name: 'Chicken Patty Burger', prices: ['319'] },
    { name: 'Zinger Burger', prices: ['379'], badge: 'Popular' },
    { name: 'Grilled Burger', prices: ['399'] },
    { name: 'Hot Burger', prices: ['299'] },
  ],
  fries: [
    { name: 'Plain Fries', prices: ['249'] },
    { name: 'Masala Fries', prices: ['299'] },
    { name: 'Garlic Mayo Fries', prices: ['349'] },
    { name: 'Loaded Fries', prices: ['499'], badge: 'Popular' },
    { name: 'Crunch Loaded Fries', prices: ['549'] },
  ],
  appetizers: [
    { name: 'Hot Shot (10pcs)', prices: ['499'] },
    { name: 'Nuggets (10pcs)', prices: ['499'] },
    { name: 'Crispy Wings (10pcs)', prices: ['599'] },
    { name: 'Peri Peri Wings (5pcs)', prices: ['349'] },
    { name: 'Oven Baked Wings (10pcs)', prices: ['599'] },
    { name: 'Spin Rolls (4pcs)', prices: ['699'] },
  ],
  wraps: [
    { name: 'Shanz Special Wrap', prices: ['549'], badge: 'Signature' },
    { name: 'Zinger Wrap', prices: ['399'] },
    { name: 'Grilled Wrap', prices: ['499'] },
    { name: 'Club Sandwich', prices: ['399'] },
    { name: 'Tikka Sandwich', prices: ['499'] },
    { name: 'Mexican Sandwich', prices: ['599'] },
    { name: 'Grilled Sandwich', prices: ['499'] },
    { name: 'Hot Sandwich', prices: ['449'] },
  ],
  pasta: [
    { name: 'Flaming Pasta', prices: ['399', '599'] },
    { name: 'Crispy Pasta', prices: ['599'] },
  ],
  chicken: [
    { name: 'Chest Piece', prices: ['399'] },
    { name: 'Leg Piece', prices: ['349'] },
    { name: 'Oven Bake Chest Piece', prices: ['449'] },
    { name: 'Oven Bake Leg Piece', prices: ['399'] },
  ],
  beverages: [
    { name: '350ml Cold Drink', prices: ['70'] },
    { name: 'Small Water', prices: ['60'] },
    { name: '1 Litre Cold Drink', prices: ['150'] },
    { name: '1.5 Litre Cold Drink', prices: ['180'] },
  ],
};

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState('pizza');
  const { ref, isInView } = useInView({ threshold: 0.1 });

  const currentItems = menuData[activeCategory] || [];

  const getSizeLabels = () => {
    if (activeCategory === 'pasta') return ['Half', 'Full'];
    if (activeCategory === 'pizza') return ['7"', '10"', '13"'];
    if (activeCategory === 'extreme') return ['10"', '13"'];
    return [''];
  };

  const sizeLabelsArr = getSizeLabels();
  const showSizes = sizeLabelsArr.length > 1 && sizeLabelsArr[0] !== '';

  return (
    <section id="menu" className="py-20 md:py-32 relative" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-dark via-brand-card to-brand-dark" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-orange/3 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-brand-amber/3 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Floating food emojis */}
        <div className="float-emoji" style={{ top: '5%', left: '3%', animationDelay: '1s', fontSize: '1.5rem' }}>🍕</div>
        <div className="float-emoji" style={{ top: '10%', right: '5%', animationDelay: '3s', fontSize: '1.5rem' }}>🍔</div>
        <div className="float-emoji" style={{ top: '40%', left: '2%', animationDelay: '5s', fontSize: '1.2rem' }}>🌶️</div>
        <div className="float-emoji" style={{ top: '60%', right: '3%', animationDelay: '7s', fontSize: '1.2rem' }}>🧀</div>
        
        {/* Light sweep effect */}
        <div className="light-sweep" style={{ animationDelay: '3s' }} />
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-brand-orange text-sm font-semibold tracking-widest uppercase">Our Menu</span>
          <h2 className="font-heading text-5xl md:text-6xl text-white mt-3 tracking-wide">
            TASTE THE DIFFERENCE
          </h2>
          <p className="text-brand-muted mt-4 max-w-xl mx-auto">
            Fresh ingredients, bold flavors. All prices in PKR. 5% service charges apply.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-brand-orange to-brand-amber mx-auto mt-6 rounded-full" />
        </motion.div>

        {/* Food Images */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 gap-4 mb-12 max-w-2xl mx-auto"
        >
          <div className="rounded-xl overflow-hidden h-40 md:h-48">
            <img src="https://image.qwenlm.ai/generated-images/0145e5f9-eeea-449c-821f-26ec7247cf02/_result.png" alt="Pizza" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
          </div>
          <div className="rounded-xl overflow-hidden h-40 md:h-48">
            <img src="https://image.qwenlm.ai/generated-images/d9732c4b-5c82-43cc-afdf-7535ee816faf/_result.png" alt="Burger" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
          </div>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-2 mb-10"
        >
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === cat.id
                    ? 'tab-active'
                    : 'bg-brand-card border border-brand-border text-brand-muted hover:text-white hover:border-brand-orange/50'
                }`}
              >
                <Icon size={15} />
                <span className="hidden sm:inline">{cat.name}</span>
                <span className="sm:hidden">{cat.name.split(' ')[0]}</span>
              </button>
            );
          })}
        </motion.div>

        {/* Menu Items */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-3 max-w-4xl mx-auto"
          >
            {currentItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="menu-card group flex items-center justify-between p-4 rounded-xl bg-brand-card/50 border border-brand-border/50 hover:border-brand-orange/30"
              >
                <div className="flex items-center gap-3 flex-1 min-w-0">
                  <div className="w-14 h-14 rounded-xl bg-brand-orange/5 border border-brand-orange/10 flex items-center justify-center flex-shrink-0 group-hover:bg-brand-orange/10 group-hover:border-brand-orange/20 transition-all duration-300 group-hover:scale-110">
                    <FoodIllustration 
                      category={activeCategory} 
                      name={item.name}
                      className="w-11 h-11"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-white font-medium text-sm">{item.name}</span>
                      {item.badge && (
                        <span className="text-[10px] bg-brand-orange/20 text-brand-orange px-2 py-0.5 rounded-full font-medium">
                          {item.badge}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3 ml-2">
                  {item.prices.map((price, i) => (
                    <div key={i} className="text-right">
                      {showSizes && (
                        <div className="text-[10px] text-brand-muted/60">{sizeLabelsArr[i]}</div>
                      )}
                      <div className="text-brand-orange font-semibold text-sm">
                        Rs. {price}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Extra toppings note */}
        {activeCategory === 'extreme' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center mt-6 text-sm text-brand-muted"
          >
            <span className="bg-brand-card/50 border border-brand-border/50 px-4 py-2 rounded-full">
              Extra Toppings: Chicken Rs. 100 | Cheese Rs. 100
            </span>
          </motion.div>
        )}

        {/* Service charge note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
          className="text-center text-xs text-brand-muted/60 mt-8"
        >
          * 5% service charges apply on all orders
        </motion.p>
      </div>
    </section>
  );
}
