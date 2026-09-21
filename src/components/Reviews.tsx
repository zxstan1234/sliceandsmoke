import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { Star, Quote } from 'lucide-react';

const reviews = [
  {
    name: 'Ahmed Raza',
    rating: 5,
    text: 'Delicious Food, Beautiful environment, Neat and Clean Staff, Fast Service. One of the best places in Multan for pizza lovers!',
    date: '2 weeks ago',
  },
  {
    name: 'Muhammad Hassan',
    rating: 5,
    text: 'Great experience there. Good Taste and Nice flavour. The Smokey Special pizza is absolutely amazing. Will definitely come back!',
    date: '1 month ago',
  },
  {
    name: 'Ayesha Khan',
    rating: 5,
    text: 'Amazing taste, fresh ingredients, and excellent service — definitely one of the best pizza & burger spots around! Highly recommended.',
    date: '3 weeks ago',
  },
  {
    name: 'Bilal Ahmad',
    rating: 5,
    text: 'The food was absolutely delicious. Tried the Zinger Burger and Loaded Fries — both were incredible. Great value for money!',
    date: '1 week ago',
  },
  {
    name: 'Fatima Noor',
    rating: 5,
    text: 'Best pizza in the Industrial Estate area! The Extreme Tikka Pizza is a must-try. Staff is very friendly and service is quick.',
    date: '2 months ago',
  },
  {
    name: 'Usman Tariq',
    rating: 5,
    text: 'Ordered the Family Pizza Bar deal for a gathering. Everyone loved it! Fresh, hot, and perfectly cooked. 10/10 would recommend.',
    date: '3 weeks ago',
  },
];

export default function Reviews() {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <section id="reviews" className="py-20 md:py-32 relative" ref={ref}>
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-dark via-brand-card to-brand-dark" />
        <div className="absolute top-1/4 right-0 w-72 h-72 bg-brand-orange/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-brand-orange text-sm font-semibold tracking-widest uppercase">Testimonials</span>
          <h2 className="font-heading text-5xl md:text-6xl text-white mt-3 tracking-wide">
            CUSTOMER LOVE
          </h2>
          <div className="flex items-center justify-center gap-1 mt-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={24} className="text-brand-amber fill-brand-amber" />
            ))}
          </div>
          <p className="text-brand-muted mt-2">5.0 — Based on 20+ Google Reviews</p>
          <div className="w-20 h-1 bg-gradient-to-r from-brand-orange to-brand-amber mx-auto mt-6 rounded-full" />
        </motion.div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {reviews.map((review, index) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: Math.min(index * 0.08, 0.4) }}
              className="menu-card group p-6 rounded-2xl bg-brand-card/40 border border-brand-border/50 hover:border-brand-orange/30 relative overflow-hidden"
            >
              {/* Quote icon */}
              <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <Quote size={40} className="text-brand-orange" />
              </div>

              {/* Stars */}
              <div className="flex items-center gap-0.5 mb-3">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={14} className="text-brand-amber fill-brand-amber" />
                ))}
              </div>

              {/* Review text */}
              <p className="text-brand-muted text-sm leading-relaxed mb-4 italic">
                "{review.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-3 border-t border-brand-border/30">
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-brand-orange to-brand-amber flex items-center justify-center text-white font-bold text-xs">
                  {review.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <div className="text-white text-sm font-medium">{review.name}</div>
                  <div className="text-brand-muted/60 text-xs">{review.date}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Google link */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center mt-10"
        >
          <p className="text-brand-muted/60 text-sm">
            Read all reviews on{' '}
            <span className="text-brand-orange font-medium">Google Maps</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
