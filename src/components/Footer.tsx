import { Heart, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative border-t border-brand-border/30">
      <div className="absolute inset-0 bg-brand-darker" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          {/* Brand */}
          <div>
            <h3 className="font-heading text-3xl tracking-wider text-white mb-3">
              SLICE <span className="text-brand-orange">&</span> SMOKE
            </h3>
            <p className="text-brand-muted text-sm leading-relaxed">
              Multan's finest pizza & burger spot. Fresh ingredients, bold flavors, and fast service — every single time.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Quick Links</h4>
            <div className="space-y-2">
              {['Home', 'About', 'Menu', 'Deals', 'Reviews', 'Contact'].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="block text-brand-muted text-sm hover:text-brand-orange transition-colors duration-200"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-brand-muted text-sm">
                <Phone size={14} className="text-brand-orange" />
                <a href="tel:+923222307800" className="hover:text-brand-orange transition-colors">
                  +92 322 2307800
                </a>
              </div>
              <div className="flex items-start gap-2 text-brand-muted text-sm">
                <MapPin size={14} className="text-brand-orange mt-0.5" />
                <span>Sher Shah Road, Industrial Estate, Multan</span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="section-divider mb-6" />

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-brand-muted/60 text-xs">
            © 2026 Slice & Smoke. All rights reserved.
          </p>
          <p className="text-brand-muted/60 text-xs flex items-center gap-1">
            Made with <Heart size={12} className="text-brand-orange fill-brand-orange" /> in Multan
          </p>
        </div>
      </div>
    </footer>
  );
}
