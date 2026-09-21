import React from 'react';

interface Props {
  category: string;
  name: string;
  className?: string;
}

// Cartoonish pizza illustration
const PizzaSVG = ({ variant = 0 }: { variant?: number }) => (
  <svg viewBox="0 0 100 100" className="w-full h-full">
    {/* Pizza base */}
    <circle cx="50" cy="50" r="40" fill="#F4A460" stroke="#D2691E" strokeWidth="2" />
    {/* Cheese */}
    <circle cx="50" cy="50" r="35" fill="#FFD700" />
    {/* Sauce peeking */}
    <circle cx="50" cy="50" r="33" fill="#E74C3C" opacity="0.3" />
    {/* Pepperoni */}
    <circle cx="35" cy="35" r="7" fill="#C0392B" stroke="#922B21" strokeWidth="1" />
    <circle cx="60" cy="30" r="6" fill="#C0392B" stroke="#922B21" strokeWidth="1" />
    <circle cx="45" cy="55" r="7" fill="#C0392B" stroke="#922B21" strokeWidth="1" />
    <circle cx="65" cy="55" r="6" fill="#C0392B" stroke="#922B21" strokeWidth="1" />
    <circle cx="50" cy="40" r="5" fill="#C0392B" stroke="#922B21" strokeWidth="1" />
    {/* Green peppers */}
    {variant > 0 && (
      <>
        <ellipse cx="30" cy="50" rx="5" ry="3" fill="#27AE60" stroke="#1E8449" strokeWidth="0.5" />
        <ellipse cx="55" cy="65" rx="4" ry="3" fill="#27AE60" stroke="#1E8449" strokeWidth="0.5" />
        <ellipse cx="70" cy="40" rx="4" ry="2.5" fill="#27AE60" stroke="#1E8449" strokeWidth="0.5" />
      </>
    )}
    {/* Cheese melt details */}
    <ellipse cx="40" cy="45" rx="3" ry="2" fill="#FFF176" opacity="0.7" />
    <ellipse cx="58" cy="48" rx="2" ry="3" fill="#FFF176" opacity="0.7" />
    {/* Slice line */}
    <line x1="50" y1="10" x2="50" y2="90" stroke="#D2691E" strokeWidth="0.5" opacity="0.3" />
    <line x1="10" y1="50" x2="90" y2="50" stroke="#D2691E" strokeWidth="0.5" opacity="0.3" />
  </svg>
);

// Cartoonish burger illustration
const BurgerSVG = ({ variant = 0 }: { variant?: number }) => (
  <svg viewBox="0 0 100 100" className="w-full h-full">
    {/* Top bun */}
    <path d="M20,45 Q50,15 80,45" fill="#D4893F" stroke="#A0522D" strokeWidth="2" />
    <ellipse cx="50" cy="45" rx="30" ry="5" fill="#D4893F" />
    {/* Sesame seeds */}
    <ellipse cx="40" cy="32" rx="2" ry="1.5" fill="#FFF8DC" />
    <ellipse cx="55" cy="28" rx="2" ry="1.5" fill="#FFF8DC" />
    <ellipse cx="48" cy="38" rx="2" ry="1.5" fill="#FFF8DC" />
    <ellipse cx="62" cy="35" rx="2" ry="1.5" fill="#FFF8DC" />
    {/* Lettuce */}
    <path d="M18,50 Q25,46 35,50 Q45,46 55,50 Q65,46 75,50 Q82,48 82,50" fill="#27AE60" stroke="#1E8449" strokeWidth="1" />
    {/* Cheese */}
    <rect x="18" y="52" width="64" height="6" rx="1" fill="#FFD700" stroke="#F39C12" strokeWidth="0.5" />
    <path d="M18,58 L22,62 L18,62 Z" fill="#FFD700" />
    <path d="M82,58 L78,62 L82,62 Z" fill="#FFD700" />
    {/* Patty */}
    <rect x="20" y="60" width="60" height="10" rx="3" fill="#5D4037" stroke="#3E2723" strokeWidth="1" />
    {/* Tomato */}
    <rect x="22" y="72" width="56" height="5" rx="2" fill="#E74C3C" stroke="#C0392B" strokeWidth="0.5" />
    {/* Bottom bun */}
    <path d="M20,78 Q50,90 80,78" fill="#D4893F" stroke="#A0522D" strokeWidth="2" />
    <rect x="20" y="77" width="60" height="4" rx="2" fill="#D4893F" />
    {variant > 0 && (
      <path d="M30,65 Q35,63 40,65" stroke="#F39C12" strokeWidth="1" fill="none" opacity="0.5" />
    )}
  </svg>
);

// Cartoonish fries illustration
const FriesSVG = ({ variant = 0 }: { variant?: number }) => (
  <svg viewBox="0 0 100 100" className="w-full h-full">
    {/* Fries container */}
    <path d="M25,45 L30,85 L70,85 L75,45 Z" fill="#E74C3C" stroke="#C0392B" strokeWidth="2" />
    <rect x="25" y="42" width="50" height="6" rx="2" fill="#E74C3C" stroke="#C0392B" strokeWidth="1" />
    {/* White stripe on container */}
    <rect x="35" y="55" width="30" height="3" rx="1" fill="white" opacity="0.8" />
    {/* Fries sticking out */}
    <rect x="32" y="20" width="6" height="30" rx="2" fill="#F4D03F" stroke="#D4AC0D" strokeWidth="1" />
    <rect x="40" y="15" width="6" height="35" rx="2" fill="#F9E154" stroke="#D4AC0D" strokeWidth="1" />
    <rect x="48" y="18" width="6" height="32" rx="2" fill="#F4D03F" stroke="#D4AC0D" strokeWidth="1" />
    <rect x="56" y="22" width="6" height="28" rx="2" fill="#F9E154" stroke="#D4AC0D" strokeWidth="1" />
    <rect x="63" y="25" width="6" height="25" rx="2" fill="#F4D03F" stroke="#D4AC0D" strokeWidth="1" />
    {variant > 0 && (
      <>
        {/* Sauce on top */}
        <circle cx="50" cy="30" r="4" fill="#E74C3C" opacity="0.6" />
        <circle cx="42" cy="25" r="3" fill="#27AE60" opacity="0.5" />
      </>
    )}
  </svg>
);

// Cartoonish wings illustration
const WingsSVG = ({ variant = 0 }: { variant?: number }) => (
  <svg viewBox="0 0 100 100" className="w-full h-full">
    {/* Plate */}
    <ellipse cx="50" cy="70" rx="40" ry="12" fill="#ECF0F1" stroke="#BDC3C7" strokeWidth="1.5" />
    {/* Wing 1 */}
    <path d="M25,55 Q20,40 35,35 Q50,30 45,50 Q40,60 25,55Z" fill="#D4893F" stroke="#A0522D" strokeWidth="1.5" />
    <path d="M30,45 Q35,40 40,42" stroke="#8B4513" strokeWidth="0.8" fill="none" />
    {/* Wing 2 */}
    <path d="M50,50 Q48,35 60,30 Q75,28 70,48 Q65,58 50,50Z" fill="#E8A44A" stroke="#A0522D" strokeWidth="1.5" />
    <path d="M55,40 Q60,36 65,38" stroke="#8B4513" strokeWidth="0.8" fill="none" />
    {/* Wing 3 */}
    <path d="M38,60 Q35,48 48,45 Q58,43 55,58 Q52,65 38,60Z" fill="#D4893F" stroke="#A0522D" strokeWidth="1.5" />
    {/* Sauce drizzle */}
    {variant > 0 ? (
      <>
        <circle cx="35" cy="50" r="2" fill="#E74C3C" opacity="0.7" />
        <circle cx="55" cy="45" r="2" fill="#E74C3C" opacity="0.7" />
        <circle cx="48" cy="55" r="1.5" fill="#E74C3C" opacity="0.7" />
      </>
    ) : (
      <>
        <circle cx="40" cy="48" r="1.5" fill="#F39C12" opacity="0.6" />
        <circle cx="58" cy="42" r="1.5" fill="#F39C12" opacity="0.6" />
      </>
    )}
    {/* Garnish */}
    <ellipse cx="65" cy="62" rx="4" ry="2" fill="#27AE60" opacity="0.8" />
  </svg>
);

// Cartoonish wrap illustration
const WrapSVG = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full">
    {/* Wrap/tortilla */}
    <path d="M30,80 Q25,50 35,25 Q50,15 65,25 Q75,50 70,80 Z" fill="#F5DEB3" stroke="#D2B48C" strokeWidth="2" />
    {/* Filling visible at top */}
    <path d="M38,30 Q50,22 62,30" fill="#27AE60" stroke="#1E8449" strokeWidth="1" />
    <path d="M40,35 Q50,28 60,35" fill="#E74C3C" stroke="#C0392B" strokeWidth="0.5" />
    <path d="M42,40 Q50,34 58,40" fill="#FFD700" stroke="#F39C12" strokeWidth="0.5" />
    {/* Meat strips */}
    <rect x="43" y="42" width="14" height="3" rx="1" fill="#8B4513" opacity="0.7" />
    <rect x="45" y="47" width="10" height="3" rx="1" fill="#A0522D" opacity="0.7" />
    {/* Wrap texture lines */}
    <path d="M35,55 Q50,52 65,55" stroke="#D2B48C" strokeWidth="0.5" fill="none" opacity="0.5" />
    <path d="M33,65 Q50,62 67,65" stroke="#D2B48C" strokeWidth="0.5" fill="none" opacity="0.5" />
  </svg>
);

// Cartoonish sandwich illustration
const SandwichSVG = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full">
    {/* Top bread - triangle cut */}
    <path d="M15,50 L50,20 L85,50 Z" fill="#DEB887" stroke="#A0522D" strokeWidth="2" />
    {/* Layers visible from side */}
    <rect x="15" y="50" width="70" height="5" rx="1" fill="#27AE60" />
    <rect x="15" y="55" width="70" height="4" rx="1" fill="#FFD700" />
    <rect x="15" y="59" width="70" height="8" rx="1" fill="#8B4513" stroke="#5D4037" strokeWidth="0.5" />
    <rect x="15" y="67" width="70" height="4" rx="1" fill="#E74C3C" />
    <rect x="15" y="71" width="70" height="5" rx="1" fill="#27AE60" />
    {/* Bottom bread */}
    <rect x="15" y="76" width="70" height="6" rx="2" fill="#DEB887" stroke="#A0522D" strokeWidth="1.5" />
    {/* Toothpick */}
    <line x1="50" y1="15" x2="50" y2="45" stroke="#8B4513" strokeWidth="1.5" />
    <circle cx="50" cy="14" r="3" fill="#E74C3C" />
  </svg>
);

// Cartoonish pasta illustration
const PastaSVG = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full">
    {/* Bowl */}
    <path d="M15,50 Q15,80 50,82 Q85,80 85,50" fill="#ECF0F1" stroke="#BDC3C7" strokeWidth="2" />
    <ellipse cx="50" cy="50" rx="35" ry="8" fill="#ECF0F1" stroke="#BDC3C7" strokeWidth="1.5" />
    {/* Pasta noodles */}
    <path d="M30,48 Q35,40 45,45 Q55,38 60,48" stroke="#F4D03F" strokeWidth="3" fill="none" strokeLinecap="round" />
    <path d="M35,52 Q45,44 55,50 Q62,44 68,52" stroke="#F9E154" strokeWidth="3" fill="none" strokeLinecap="round" />
    <path d="M28,55 Q38,48 48,53 Q58,47 70,55" stroke="#F4D03F" strokeWidth="3" fill="none" strokeLinecap="round" />
    {/* Sauce */}
    <circle cx="42" cy="46" r="4" fill="#E74C3C" opacity="0.6" />
    <circle cx="55" cy="50" r="3" fill="#E74C3C" opacity="0.5" />
    <circle cx="48" cy="53" r="2.5" fill="#C0392B" opacity="0.5" />
    {/* Basil leaf */}
    <ellipse cx="60" cy="43" rx="4" ry="2.5" fill="#27AE60" transform="rotate(-20 60 43)" />
    <line x1="58" y1="43" x2="62" y2="43" stroke="#1E8449" strokeWidth="0.5" />
  </svg>
);

// Cartoonish chicken LEG piece (drumstick) illustration
const LegPieceSVG = ({ variant = 0 }: { variant?: number }) => (
  <svg viewBox="0 0 100 100" className="w-full h-full">
    {/* Bone stick */}
    <rect x="45" y="62" width="10" height="22" rx="4" fill="#F5DEB3" stroke="#D2B48C" strokeWidth="1.5" />
    {/* Bone knob bottom */}
    <ellipse cx="50" cy="86" rx="8" ry="5" fill="#F5DEB3" stroke="#D2B48C" strokeWidth="1.5" />
    {/* Bone knob top (hidden under meat) */}
    <ellipse cx="50" cy="60" rx="6" ry="4" fill="#F5DEB3" stroke="#D2B48C" strokeWidth="1" />
    {/* Main drumstick meat - big round top */}
    <ellipse cx="50" cy="38" rx="28" ry="26" fill={variant > 0 ? "#C68E3C" : "#D4893F"} stroke="#8B4513" strokeWidth="2" />
    {/* Crispy coating bumps */}
    <circle cx="35" cy="30" r="5" fill={variant > 0 ? "#B8792E" : "#E8A44A"} opacity="0.8" />
    <circle cx="55" cy="25" r="6" fill={variant > 0 ? "#A56B23" : "#C68E3C"} opacity="0.7" />
    <circle cx="65" cy="38" r="5" fill={variant > 0 ? "#B8792E" : "#E8A44A"} opacity="0.8" />
    <circle cx="42" cy="48" r="5" fill={variant > 0 ? "#A56B23" : "#C68E3C"} opacity="0.7" />
    <circle cx="58" cy="50" r="4" fill={variant > 0 ? "#B8792E" : "#E8A44A"} opacity="0.6" />
    <circle cx="30" cy="42" r="4" fill={variant > 0 ? "#A56B23" : "#C68E3C"} opacity="0.6" />
    {/* Highlight */}
    <ellipse cx="40" cy="28" rx="6" ry="4" fill="white" opacity="0.15" />
    {/* Oven bake: grill marks */}
    {variant > 0 && (
      <>
        <line x1="32" y1="32" x2="68" y2="32" stroke="#5D4037" strokeWidth="1.5" opacity="0.4" />
        <line x1="30" y1="42" x2="70" y2="42" stroke="#5D4037" strokeWidth="1.5" opacity="0.4" />
        <line x1="34" y1="52" x2="66" y2="52" stroke="#5D4037" strokeWidth="1.5" opacity="0.3" />
        {/* Steam */}
        <path d="M38,12 Q40,7 38,2" stroke="#BDC3C7" strokeWidth="1.2" fill="none" opacity="0.5" />
        <path d="M50,10 Q52,5 50,0" stroke="#BDC3C7" strokeWidth="1.2" fill="none" opacity="0.5" />
        <path d="M62,12 Q64,7 62,2" stroke="#BDC3C7" strokeWidth="1.2" fill="none" opacity="0.5" />
      </>
    )}
  </svg>
);

// Cartoonish chicken CHEST piece (breast fillet) illustration
const ChestPieceSVG = ({ variant = 0 }: { variant?: number }) => (
  <svg viewBox="0 0 100 100" className="w-full h-full">
    {/* Main breast piece - flat oval shape */}
    <ellipse cx="50" cy="50" rx="34" ry="24" fill={variant > 0 ? "#C68E3C" : "#D4893F"} stroke="#8B4513" strokeWidth="2" />
    {/* Inner meat texture - slightly lighter */}
    <ellipse cx="50" cy="50" rx="28" ry="18" fill={variant > 0 ? "#D4A054" : "#E8A44A"} opacity="0.5" />
    {/* Crispy coating bumps */}
    <circle cx="32" cy="42" r="5" fill={variant > 0 ? "#B8792E" : "#E8A44A"} opacity="0.7" />
    <circle cx="50" cy="36" r="5" fill={variant > 0 ? "#A56B23" : "#C68E3C"} opacity="0.7" />
    <circle cx="68" cy="44" r="5" fill={variant > 0 ? "#B8792E" : "#E8A44A"} opacity="0.7" />
    <circle cx="40" cy="56" r="4" fill={variant > 0 ? "#A56B23" : "#C68E3C"} opacity="0.6" />
    <circle cx="60" cy="58" r="4" fill={variant > 0 ? "#B8792E" : "#E8A44A"} opacity="0.6" />
    <circle cx="50" cy="50" r="3" fill={variant > 0 ? "#A56B23" : "#C68E3C"} opacity="0.5" />
    {/* Highlight */}
    <ellipse cx="42" cy="42" rx="8" ry="5" fill="white" opacity="0.12" />
    {/* Crispy edge details */}
    <path d="M20,48 Q22,45 25,47" stroke="#8B4513" strokeWidth="1" fill="none" opacity="0.5" />
    <path d="M75,48 Q78,45 80,47" stroke="#8B4513" strokeWidth="1" fill="none" opacity="0.5" />
    {/* Oven bake: grill marks */}
    {variant > 0 && (
      <>
        <line x1="28" y1="42" x2="72" y2="42" stroke="#5D4037" strokeWidth="1.5" opacity="0.4" />
        <line x1="25" y1="52" x2="75" y2="52" stroke="#5D4037" strokeWidth="1.5" opacity="0.4" />
        <line x1="30" y1="60" x2="70" y2="60" stroke="#5D4037" strokeWidth="1.5" opacity="0.3" />
        {/* Steam */}
        <path d="M38,22 Q40,17 38,12" stroke="#BDC3C7" strokeWidth="1.2" fill="none" opacity="0.5" />
        <path d="M50,20 Q52,15 50,10" stroke="#BDC3C7" strokeWidth="1.2" fill="none" opacity="0.5" />
        <path d="M62,22 Q64,17 62,12" stroke="#BDC3C7" strokeWidth="1.2" fill="none" opacity="0.5" />
      </>
    )}
  </svg>
);

// Cartoonish drink illustration
const DrinkSVG = ({ variant = 0 }: { variant?: number }) => (
  <svg viewBox="0 0 100 100" className="w-full h-full">
    {/* Cup */}
    <path d="M30,25 L35,85 L65,85 L70,25 Z" fill={variant > 0 ? "#E74C3C" : "#3498DB"} stroke={variant > 0 ? "#C0392B" : "#2980B9"} strokeWidth="2" />
    {/* Lid */}
    <rect x="28" y="20" width="44" height="8" rx="3" fill="#ECF0F1" stroke="#BDC3C7" strokeWidth="1" />
    {/* Straw */}
    <rect x="47" y="5" width="4" height="30" rx="1" fill="#E74C3C" />
    <rect x="47" y="5" width="4" height="5" rx="1" fill="#F39C12" />
    {/* Label */}
    <rect x="35" y="45" width="30" height="15" rx="2" fill="white" opacity="0.8" />
    {/* Ice cubes */}
    <rect x="38" y="30" width="8" height="8" rx="1" fill="white" opacity="0.4" />
    <rect x="52" y="35" width="7" height="7" rx="1" fill="white" opacity="0.3" />
    {/* Bubbles */}
    <circle cx="42" cy="65" r="2" fill="white" opacity="0.3" />
    <circle cx="55" cy="70" r="1.5" fill="white" opacity="0.3" />
    <circle cx="48" cy="75" r="2" fill="white" opacity="0.2" />
  </svg>
);

// Map category to illustration
export default function FoodIllustration({ category, name, className = '' }: Props) {
  const itemLower = name.toLowerCase();
  
  const getIllustration = () => {
    switch (category) {
      case 'pizza':
        return <PizzaSVG variant={itemLower.includes('tikka') || itemLower.includes('fajita') ? 1 : 0} />;
      case 'extreme':
        return <PizzaSVG variant={1} />;
      case 'burgers':
        return <BurgerSVG variant={itemLower.includes('zinger') || itemLower.includes('grilled') ? 1 : 0} />;
      case 'fries':
        return <FriesSVG variant={itemLower.includes('loaded') || itemLower.includes('masala') ? 1 : 0} />;
      case 'appetizers':
        if (itemLower.includes('wing') || itemLower.includes('peri')) return <WingsSVG variant={itemLower.includes('peri') ? 1 : 0} />;
        if (itemLower.includes('nugget') || itemLower.includes('hot shot')) return <ChestPieceSVG variant={0} />;
        if (itemLower.includes('roll')) return <WrapSVG />;
        return <WingsSVG variant={0} />;
      case 'wraps':
        if (itemLower.includes('wrap')) return <WrapSVG />;
        return <SandwichSVG />;
      case 'pasta':
        return <PastaSVG />;
      case 'chicken':
        if (itemLower.includes('leg')) return <LegPieceSVG variant={itemLower.includes('oven') ? 1 : 0} />;
        return <ChestPieceSVG variant={itemLower.includes('oven') ? 1 : 0} />;
      case 'beverages':
        return <DrinkSVG variant={itemLower.includes('water') ? 0 : 1} />;
      default:
        return <PizzaSVG />;
    }
  };

  return (
    <div className={`w-12 h-12 flex-shrink-0 ${className}`}>
      {getIllustration()}
    </div>
  );
}
