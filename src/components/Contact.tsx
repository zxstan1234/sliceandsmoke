import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { MapPin, Phone, Clock, Navigation } from 'lucide-react';

const hours = [
  { day: 'Monday', time: '2:00 AM – 10:00 PM' },
  { day: 'Tuesday', time: 'Closed', closed: true },
  { day: 'Wednesday', time: '2:00 AM – 10:00 PM' },
  { day: 'Thursday', time: '2:00 AM – 10:00 PM' },
  { day: 'Friday', time: '2:00 AM – 10:00 PM' },
  { day: 'Saturday', time: '2:00 AM – 10:00 PM' },
  { day: 'Sunday', time: '2:00 AM – 10:00 PM' },
];

export default function Contact() {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  const today = new Date().getDay(); // 0=Sun, 1=Mon, 2=Tue...
  const dayIndex = today === 0 ? 6 : today - 1; // Convert to Mon=0 format

  return (
    <section id="contact" className="py-20 md:py-32 relative" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-b from-brand-dark via-brand-darker to-brand-dark" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-brand-orange text-sm font-semibold tracking-widest uppercase">Visit Us</span>
          <h2 className="font-heading text-5xl md:text-6xl text-white mt-3 tracking-wide">
            FIND & CONTACT
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-brand-orange to-brand-amber mx-auto mt-6 rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Address */}
            <div className="flex items-start gap-4 p-5 rounded-xl bg-brand-card/40 border border-brand-border/50">
              <div className="w-10 h-10 rounded-lg bg-brand-orange/10 flex items-center justify-center flex-shrink-0">
                <MapPin size={18} className="text-brand-orange" />
              </div>
              <div>
                <h3 className="text-white font-semibold text-sm mb-1">Address</h3>
                <p className="text-brand-muted text-sm">
                  5C42+V25, Sher Shah Road,<br />
                  Industrial Estate, Multan, Pakistan
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-4 p-5 rounded-xl bg-brand-card/40 border border-brand-border/50">
              <div className="w-10 h-10 rounded-lg bg-brand-orange/10 flex items-center justify-center flex-shrink-0">
                <Phone size={18} className="text-brand-orange" />
              </div>
              <div>
                <h3 className="text-white font-semibold text-sm mb-1">Phone</h3>
                <a href="tel:+923222307800" className="text-brand-orange hover:text-orange-400 transition-colors text-sm font-medium">
                  +92 322 2307800
                </a>
                <p className="text-brand-muted/60 text-xs mt-1">Call to place your order</p>
              </div>
            </div>

            {/* Directions */}
            <a
              href="https://maps.google.com/?q=Slice+Smoke+Multan+Industrial+Estate"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-5 rounded-xl bg-brand-card/40 border border-brand-border/50 hover:border-brand-orange/30 transition-all duration-300 group"
            >
              <div className="w-10 h-10 rounded-lg bg-brand-orange/10 flex items-center justify-center flex-shrink-0 group-hover:bg-brand-orange/20 transition-colors">
                <Navigation size={18} className="text-brand-orange" />
              </div>
              <div>
                <h3 className="text-white font-semibold text-sm mb-1">Get Directions</h3>
                <p className="text-brand-muted text-xs">Open in Google Maps →</p>
              </div>
            </a>
          </motion.div>

          {/* Hours */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="p-6 rounded-2xl bg-brand-card/40 border border-brand-border/50"
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-lg bg-brand-orange/10 flex items-center justify-center">
                <Clock size={18} className="text-brand-orange" />
              </div>
              <h3 className="text-white font-semibold">Opening Hours</h3>
            </div>

            <div className="space-y-2">
              {hours.map((h, i) => (
                <div
                  key={h.day}
                  className={`flex items-center justify-between py-2.5 px-3 rounded-lg ${
                    i === dayIndex
                      ? 'bg-brand-orange/10 border border-brand-orange/20'
                      : ''
                  }`}
                >
                  <span className={`text-sm ${i === dayIndex ? 'text-brand-orange font-medium' : 'text-brand-muted'}`}>
                    {h.day}
                    {i === dayIndex && (
                      <span className="ml-2 text-[10px] bg-brand-orange text-white px-2 py-0.5 rounded-full">
                        Today
                      </span>
                    )}
                  </span>
                  <span className={`text-sm ${h.closed ? 'text-red-400' : i === dayIndex ? 'text-white font-medium' : 'text-brand-muted'}`}>
                    {h.time}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-5 p-3 rounded-lg bg-brand-orange/5 border border-brand-orange/10">
              <p className="text-brand-muted text-xs text-center">
                ⚡ Open late night — Perfect for your midnight cravings!
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
