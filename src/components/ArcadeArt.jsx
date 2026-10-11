import React from 'react';

// Cartoon Burger & Fries Badge with 2px thick dark borders & saturated colors
export const BurgerFriesArt = ({ className = "w-16 h-16" }) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Glow Underlay */}
    <circle cx="50" cy="50" r="42" fill="#00FF66" fillOpacity="0.15" />
    
    {/* Fries Box in Background */}
    <g transform="translate(48, 16) rotate(12)">
      {/* Red packet */}
      <path d="M6 18 L26 18 L22 46 L10 46 Z" fill="#FF1744" stroke="#060714" strokeWidth="2.5" strokeLinejoin="round" />
      <path d="M12 28 C16 32, 20 28, 20 28" stroke="#FFE600" strokeWidth="3" strokeLinecap="round" />
      {/* Fries sticks */}
      <rect x="8" y="2" width="4" height="20" rx="1.5" fill="#FFE600" stroke="#060714" strokeWidth="2" />
      <rect x="14" y="-2" width="4" height="24" rx="1.5" fill="#FFC400" stroke="#060714" strokeWidth="2" />
      <rect x="20" y="4" width="4" height="18" rx="1.5" fill="#FFE600" stroke="#060714" strokeWidth="2" />
    </g>

    {/* Big Burger in Foreground */}
    <g transform="translate(10, 36)">
      {/* Top Bun */}
      <path
        d="M6 24 C6 9, 58 9, 58 24 Z"
        fill="#FF9E1B"
        stroke="#060714"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
      {/* Sesame Seeds */}
      <ellipse cx="22" cy="17" rx="1.8" ry="1.2" fill="#FFF275" />
      <ellipse cx="34" cy="15" rx="1.8" ry="1.2" fill="#FFF275" />
      <ellipse cx="44" cy="18" rx="1.8" ry="1.2" fill="#FFF275" />

      {/* Melted Cheese (Neon Yellow) */}
      <polygon
        points="4,24 60,24 55,30 40,27 30,32 18,27 10,31"
        fill="#FFE600"
        stroke="#060714"
        strokeWidth="2"
        strokeLinejoin="round"
      />

      {/* Patty */}
      <rect
        x="6"
        y="29"
        width="52"
        height="8"
        rx="4"
        fill="#5D2E14"
        stroke="#060714"
        strokeWidth="2.5"
      />

      {/* Crispy Green Lettuce Wiggles */}
      <path
        d="M4 27 C10 24, 14 30, 20 27 C26 24, 32 30, 38 27 C44 24, 50 30, 60 27"
        stroke="#00E676"
        strokeWidth="3.5"
        strokeLinecap="round"
      />

      {/* Bottom Bun */}
      <path
        d="M8 36 C8 44, 56 44, 56 36 Z"
        fill="#FF9E1B"
        stroke="#060714"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
    </g>

    {/* Sparkle star */}
    <path
      d="M20 18 L22 12 L24 18 L30 20 L24 22 L22 28 L20 22 L14 20 Z"
      fill="#00FF66"
      stroke="#060714"
      strokeWidth="1.5"
    />
  </svg>
);

// Nykaa Cosmetics (Lipstick, Perfume, Glitz) with 2px dark border
export const CosmeticsArt = ({ className = "w-16 h-16" }) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Glow Circle */}
    <circle cx="50" cy="50" r="42" fill="#FF007F" fillOpacity="0.18" />

    {/* Luxury Perfume Bottle */}
    <g transform="translate(18, 22)">
      {/* Cap */}
      <rect x="18" y="4" width="12" height="10" rx="2" fill="#FFE600" stroke="#060714" strokeWidth="2.5" />
      <rect x="22" y="0" width="4" height="4" fill="#FFE600" stroke="#060714" strokeWidth="2" />
      {/* Bottle Body */}
      <rect x="8" y="14" width="32" height="40" rx="8" fill="#FF007F" stroke="#060714" strokeWidth="2.5" />
      {/* Inner Liquid Highlight */}
      <rect x="12" y="24" width="24" height="24" rx="4" fill="#FF409F" />
      <path d="M14 18 L24 18" stroke="#FFE600" strokeWidth="2.5" strokeLinecap="round" />
    </g>

    {/* Lipstick in Foreground */}
    <g transform="translate(48, 24) rotate(18)">
      {/* Gold Base */}
      <rect x="8" y="32" width="16" height="28" rx="3" fill="#FFE600" stroke="#060714" strokeWidth="2.5" />
      <rect x="9" y="24" width="14" height="8" fill="#00E5FF" stroke="#060714" strokeWidth="2" />
      {/* Red Bullet with Slant */}
      <path
        d="M10 24 L10 8 C10 4, 18 0, 22 8 L22 24 Z"
        fill="#FF0055"
        stroke="#060714"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
      {/* Shine mark */}
      <path d="M13 10 L13 20" stroke="#FFA3C9" strokeWidth="2" strokeLinecap="round" />
    </g>

    {/* Magic sparkle stars */}
    <path
      d="M78 20 L80 14 L82 20 L88 22 L82 24 L80 30 L78 24 L72 22 Z"
      fill="#FFE600"
      stroke="#060714"
      strokeWidth="1.5"
    />
    <path
      d="M16 66 L17.5 61 L19 66 L24 67.5 L19 69 L17.5 74 L16 69 L11 67.5 Z"
      fill="#00E5FF"
      stroke="#060714"
      strokeWidth="1.2"
    />
  </svg>
);

// boAt Airdopes on Glowing Yellow Circular Pedestal
export const AirdopesArt = ({ className = "w-28 h-28" }) => (
  <svg viewBox="0 0 160 120" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Glowing Yellow Circular Pedestal / Stage */}
    <ellipse cx="80" cy="94" rx="60" ry="18" fill="#FFE600" fillOpacity="0.25" />
    <ellipse cx="80" cy="90" rx="55" ry="14" fill="#0D0E25" stroke="#FFE600" strokeWidth="3" />
    <ellipse cx="80" cy="90" rx="46" ry="10" fill="#FFE600" fillOpacity="0.6" stroke="#060714" strokeWidth="2" />
    
    {/* Pedestal Base Ring with Cyber Cyan Glow */}
    <path d="M25 90 C25 104, 135 104, 135 90" stroke="#00E5FF" strokeWidth="3" strokeLinecap="round" />

    {/* Earbuds Charging Case (Open Shell) */}
    <g transform="translate(46, 26)">
      {/* Charging Case Base */}
      <rect x="6" y="24" width="56" height="34" rx="14" fill="#1C1E3F" stroke="#A855F7" strokeWidth="2.5" />
      <rect x="8" y="26" width="52" height="30" rx="12" fill="#0D0E25" stroke="#060714" strokeWidth="2" />

      {/* Neon Cyan Status LED Dot on Case */}
      <circle cx="34" cy="46" r="3" fill="#00E5FF" stroke="#060714" strokeWidth="1.5" />
      <circle cx="34" cy="46" r="6" fill="#00E5FF" fillOpacity="0.4" />

      {/* Left Earbud */}
      <g transform="translate(10, 0)">
        {/* Head */}
        <ellipse cx="12" cy="18" rx="8" ry="10" fill="#00E5FF" stroke="#060714" strokeWidth="2.5" />
        {/* Rubber tip */}
        <ellipse cx="6" cy="18" rx="4" ry="6" fill="#FFE600" stroke="#060714" strokeWidth="2" />
        {/* Stem */}
        <rect x="12" y="22" width="6" height="18" rx="3" fill="#1C1E3F" stroke="#060714" strokeWidth="2.5" />
        {/* Wireframe accent line */}
        <line x1="15" y1="24" x2="15" y2="36" stroke="#00E5FF" strokeWidth="1.5" />
      </g>

      {/* Right Earbud */}
      <g transform="translate(36, 0)">
        {/* Head */}
        <ellipse cx="12" cy="18" rx="8" ry="10" fill="#FF007F" stroke="#060714" strokeWidth="2.5" />
        {/* Rubber tip */}
        <ellipse cx="18" cy="18" rx="4" ry="6" fill="#FFE600" stroke="#060714" strokeWidth="2" />
        {/* Stem */}
        <rect x="6" y="22" width="6" height="18" rx="3" fill="#1C1E3F" stroke="#060714" strokeWidth="2.5" />
        {/* Wireframe accent line */}
        <line x1="9" y1="24" x2="9" y2="36" stroke="#FF007F" strokeWidth="1.5" />
      </g>
    </g>

    {/* Floating Cyber Soundwaves / Particles */}
    <path d="M18 42 C14 48, 14 56, 18 62" stroke="#00E5FF" strokeWidth="2.5" strokeLinecap="round" />
    <path d="M142 42 C146 48, 146 56, 142 62" stroke="#FF007F" strokeWidth="2.5" strokeLinecap="round" />
  </svg>
);

// 7-Day Mystery Loot Box (Treasure Chest Graphic)
export const MysteryLootBoxArt = ({ className = "w-10 h-10" }) => (
  <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Glow behind chest */}
    <circle cx="40" cy="42" r="30" fill="#FFE600" fillOpacity="0.3" />

    {/* Chest Body */}
    <rect x="12" y="34" width="56" height="34" rx="6" fill="#9333EA" stroke="#060714" strokeWidth="2.5" />
    <rect x="14" y="36" width="52" height="30" rx="4" fill="#7E22CE" />

    {/* Gold Corner Straps */}
    <rect x="12" y="34" width="10" height="34" fill="#FFE600" stroke="#060714" strokeWidth="2" />
    <rect x="58" y="34" width="10" height="34" fill="#FFE600" stroke="#060714" strokeWidth="2" />
    <rect x="33" y="34" width="14" height="34" fill="#FFE600" stroke="#060714" strokeWidth="2" />

    {/* Curved Chest Lid */}
    <path
      d="M10 34 C10 16, 70 16, 70 34 Z"
      fill="#A855F7"
      stroke="#060714"
      strokeWidth="2.5"
      strokeLinejoin="round"
    />
    {/* Lid Gold Bands */}
    <path d="M12 34 C12 22, 22 20, 22 34 Z" fill="#FFE600" stroke="#060714" strokeWidth="2" />
    <path d="M58 34 C58 20, 68 22, 68 34 Z" fill="#FFE600" stroke="#060714" strokeWidth="2" />
    <path d="M33 34 C33 18, 47 18, 47 34 Z" fill="#FFE600" stroke="#060714" strokeWidth="2" />

    {/* Keyhole Gem / Mystery Lock */}
    <circle cx="40" cy="46" r="6" fill="#00E5FF" stroke="#060714" strokeWidth="2" />
    <text x="40" y="49" textAnchor="middle" fontSize="9" fontWeight="900" fill="#060714" fontFamily="sans-serif">?</text>

    {/* Sparkle highlights */}
    <polygon points="68,14 70,8 72,14 78,16 72,18 70,24 68,18 62,16" fill="#FFE600" stroke="#060714" strokeWidth="1.2" />
  </svg>
);

// 2D Comic Starburst Backdrop Vector for the Redemption Pop-up
export const StarburstBackdrop = ({ className = "w-full h-full" }) => (
  <svg viewBox="0 0 400 400" className={className} xmlns="http://www.w3.org/2000/svg">
    <g transform="translate(200, 200)" fillOpacity="0.25">
      {[...Array(16)].map((_, i) => {
        const angle = (i * 360) / 16;
        const color = i % 2 === 0 ? "#FF5500" : "#FFE600";
        return (
          <path
            key={i}
            d="M 0 0 L -25 -220 L 25 -220 Z"
            fill={color}
            transform={`rotate(${angle})`}
          />
        );
      })}
    </g>
  </svg>
);

// Floating ticket particle component
export const TicketParticle = ({ id, style }) => (
  <div
    style={style}
    className="pointer-events-none absolute z-50 flex items-center justify-center font-arcade text-xs text-white bg-gradient-to-r from-[#FF007F] to-[#FF5500] px-2 py-1 rounded-md border-2 border-black glow-pink animate-fly-ticket"
  >
    🎟️ +10 TIX!
  </div>
);
