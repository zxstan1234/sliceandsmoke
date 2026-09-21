import React from 'react';

interface Props {
  type: 'burger-fries' | 'pizza-drink' | 'combo' | 'family' | 'family-pizza' | 'mega';
  className?: string;
}

export default function DealIllustration({ type, className = '' }: Props) {
  const getIllustration = () => {
    switch (type) {
      case 'burger-fries':
        return (
          <svg viewBox="0 0 120 80" className="w-full h-full">
            {/* Mini burger */}
            <path d="M15,35 Q30,20 45,35" fill="#D4893F" stroke="#A0522D" strokeWidth="1.5" />
            <ellipse cx="30" cy="35" rx="15" ry="3" fill="#D4893F" />
            <rect x="16" y="37" width="28" height="3" rx="1" fill="#27AE60" />
            <rect x="16" y="40" width="28" height="4" rx="1" fill="#FFD700" />
            <rect x="17" y="44" width="26" height="5" rx="2" fill="#5D4037" />
            <rect x="16" y="49" width="28" height="3" rx="1" fill="#E74C3C" />
            <path d="M15,53 Q30,58 45,53" fill="#D4893F" stroke="#A0522D" strokeWidth="1" />
            {/* Sesame */}
            <ellipse cx="25" cy="28" rx="1.5" ry="1" fill="#FFF8DC" />
            <ellipse cx="35" cy="26" rx="1.5" ry="1" fill="#FFF8DC" />
            {/* Mini fries */}
            <path d="M65,30 L68,60 L92,60 L95,30 Z" fill="#E74C3C" stroke="#C0392B" strokeWidth="1" />
            <rect x="70" y="15" width="4" height="20" rx="1" fill="#F4D03F" stroke="#D4AC0D" strokeWidth="0.5" />
            <rect x="76" y="12" width="4" height="23" rx="1" fill="#F9E154" stroke="#D4AC0D" strokeWidth="0.5" />
            <rect x="82" y="14" width="4" height="21" rx="1" fill="#F4D03F" stroke="#D4AC0D" strokeWidth="0.5" />
            <rect x="88" y="17" width="4" height="18" rx="1" fill="#F9E154" stroke="#D4AC0D" strokeWidth="0.5" />
          </svg>
        );
      case 'pizza-drink':
        return (
          <svg viewBox="0 0 120 80" className="w-full h-full">
            {/* Mini pizza */}
            <circle cx="35" cy="40" r="22" fill="#F4A460" stroke="#D2691E" strokeWidth="1.5" />
            <circle cx="35" cy="40" r="18" fill="#FFD700" />
            <circle cx="28" cy="33" r="4" fill="#C0392B" stroke="#922B21" strokeWidth="0.5" />
            <circle cx="40" cy="35" r="3.5" fill="#C0392B" stroke="#922B21" strokeWidth="0.5" />
            <circle cx="32" cy="45" r="4" fill="#C0392B" stroke="#922B21" strokeWidth="0.5" />
            <circle cx="42" cy="47" r="3" fill="#C0392B" stroke="#922B21" strokeWidth="0.5" />
            {/* Drink */}
            <path d="M75,20 L78,65 L100,65 L103,20 Z" fill="#3498DB" stroke="#2980B9" strokeWidth="1.5" />
            <rect x="73" y="16" width="32" height="6" rx="2" fill="#ECF0F1" stroke="#BDC3C7" strokeWidth="0.5" />
            <rect x="87" y="5" width="3" height="18" rx="1" fill="#E74C3C" />
            <circle cx="85" cy="40" r="2" fill="white" opacity="0.3" />
            <circle cx="92" cy="50" r="1.5" fill="white" opacity="0.3" />
          </svg>
        );
      case 'combo':
        return (
          <svg viewBox="0 0 120 80" className="w-full h-full">
            {/* Pizza slice */}
            <path d="M10,55 L30,15 L50,55 Z" fill="#F4A460" stroke="#D2691E" strokeWidth="1.5" />
            <path d="M15,50 L30,22 L45,50 Z" fill="#FFD700" />
            <circle cx="25" cy="40" r="3" fill="#C0392B" />
            <circle cx="35" cy="38" r="2.5" fill="#C0392B" />
            {/* Burger */}
            <path d="M55,35 Q67,25 80,35" fill="#D4893F" stroke="#A0522D" strokeWidth="1" />
            <rect x="56" y="36" width="23" height="3" rx="1" fill="#27AE60" />
            <rect x="56" y="39" width="23" height="4" rx="1" fill="#5D4037" />
            <path d="M55,44 Q67,48 80,44" fill="#D4893F" stroke="#A0522D" strokeWidth="1" />
            {/* Drink */}
            <path d="M90,25 L92,60 L108,60 L110,25 Z" fill="#E74C3C" stroke="#C0392B" strokeWidth="1" />
            <rect x="88" y="22" width="24" height="5" rx="2" fill="#ECF0F1" />
            <rect x="98" y="10" width="3" height="15" rx="1" fill="#F39C12" />
          </svg>
        );
      case 'family':
        return (
          <svg viewBox="0 0 120 80" className="w-full h-full">
            {/* Large pizza */}
            <circle cx="35" cy="40" r="25" fill="#F4A460" stroke="#D2691E" strokeWidth="1.5" />
            <circle cx="35" cy="40" r="21" fill="#FFD700" />
            <circle cx="25" cy="32" r="4" fill="#C0392B" />
            <circle cx="40" cy="35" r="3.5" fill="#C0392B" />
            <circle cx="30" cy="48" r="4" fill="#C0392B" />
            <circle cx="43" cy="45" r="3" fill="#C0392B" />
            {/* Medium pizza */}
            <circle cx="80" cy="35" r="18" fill="#F4A460" stroke="#D2691E" strokeWidth="1.5" />
            <circle cx="80" cy="35" r="15" fill="#FFD700" />
            <circle cx="74" cy="30" r="3" fill="#C0392B" />
            <circle cx="85" cy="33" r="2.5" fill="#C0392B" />
            <circle cx="78" cy="40" r="3" fill="#C0392B" />
            {/* Drink */}
            <path d="M95,50 L97,70 L110,70 L112,50 Z" fill="#3498DB" stroke="#2980B9" strokeWidth="1" />
            <rect x="93" y="47" width="21" height="4" rx="1" fill="#ECF0F1" />
          </svg>
        );
      case 'family-pizza':
        return (
          <svg viewBox="0 0 120 80" className="w-full h-full">
            {/* Two large pizzas */}
            <circle cx="32" cy="40" r="24" fill="#F4A460" stroke="#D2691E" strokeWidth="1.5" />
            <circle cx="32" cy="40" r="20" fill="#FFD700" />
            <circle cx="24" cy="33" r="4" fill="#C0392B" />
            <circle cx="38" cy="36" r="3.5" fill="#C0392B" />
            <circle cx="28" cy="47" r="3.5" fill="#C0392B" />
            <circle cx="75" cy="40" r="24" fill="#F4A460" stroke="#D2691E" strokeWidth="1.5" />
            <circle cx="75" cy="40" r="20" fill="#FFD700" />
            <circle cx="67" cy="33" r="4" fill="#C0392B" />
            <circle cx="81" cy="36" r="3.5" fill="#C0392B" />
            <circle cx="71" cy="47" r="3.5" fill="#C0392B" />
            {/* Big drink */}
            <path d="M105,20 L107,65 L118,65 L120,20 Z" fill="#3498DB" stroke="#2980B9" strokeWidth="1" />
            <rect x="103" y="17" width="19" height="5" rx="2" fill="#ECF0F1" />
          </svg>
        );
      case 'mega':
        return (
          <svg viewBox="0 0 120 80" className="w-full h-full">
            {/* Two pizzas */}
            <circle cx="25" cy="35" r="18" fill="#F4A460" stroke="#D2691E" strokeWidth="1" />
            <circle cx="25" cy="35" r="15" fill="#FFD700" />
            <circle cx="20" cy="30" r="3" fill="#C0392B" />
            <circle cx="30" cy="33" r="2.5" fill="#C0392B" />
            <circle cx="55" cy="35" r="18" fill="#F4A460" stroke="#D2691E" strokeWidth="1" />
            <circle cx="55" cy="35" r="15" fill="#FFD700" />
            <circle cx="50" cy="30" r="3" fill="#C0392B" />
            <circle cx="60" cy="33" r="2.5" fill="#C0392B" />
            {/* Burgers */}
            <path d="M80,20 Q88,14 96,20" fill="#D4893F" stroke="#A0522D" strokeWidth="0.8" />
            <rect x="81" y="21" width="14" height="2" rx="0.5" fill="#5D4037" />
            <path d="M80,24 Q88,27 96,24" fill="#D4893F" stroke="#A0522D" strokeWidth="0.8" />
            <path d="M80,32 Q88,26 96,32" fill="#D4893F" stroke="#A0522D" strokeWidth="0.8" />
            <rect x="81" y="33" width="14" height="2" rx="0.5" fill="#5D4037" />
            <path d="M80,36 Q88,39 96,36" fill="#D4893F" stroke="#A0522D" strokeWidth="0.8" />
            {/* Big drink */}
            <path d="M102,15 L104,60 L118,60 L120,15 Z" fill="#E74C3C" stroke="#C0392B" strokeWidth="1" />
            <rect x="100" y="12" width="22" height="5" rx="2" fill="#ECF0F1" />
            <rect x="109" y="2" width="3" height="14" rx="1" fill="#F39C12" />
            {/* Crown/star */}
            <path d="M40,60 L43,68 L47,62 L50,70 L53,62 L57,68 L60,60 Z" fill="#F39C12" stroke="#E67E22" strokeWidth="0.5" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <div className={`w-full h-20 flex items-center justify-center ${className}`}>
      {getIllustration()}
    </div>
  );
}
