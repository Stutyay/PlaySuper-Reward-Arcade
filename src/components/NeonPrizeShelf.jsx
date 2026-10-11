import React from 'react';
import { BurgerFriesArt, CosmeticsArt, AirdopesArt } from './ArcadeArt';
import { playSound } from '../utils/audio';
import { Sparkles, Trophy, Flame } from 'lucide-react';

export const NeonPrizeShelf = ({ tickets, onSelectSwiggy, isSwiggyRedeemed }) => {
  // Calculate progress ratios dynamically
  const swiggyTarget = 300;
  const nykaaTarget = 800;
  const boatTarget = 10000;

  const nykaaProgressPct = Math.min(100, Math.round((tickets / nykaaTarget) * 100));
  const boatProgressPct = Math.min(100, Math.max(4, Math.round((tickets / boatTarget) * 100)));

  return (
    <section className="w-full px-3 py-2 select-none">
      {/* Encapsulating Single Outer Container: Glowing Neon Orange Border with Heavy Orange Glow */}
      <div className="relative rounded-2xl border-2 border-[#FF5500] shadow-[0_0_20px_#FF5500] bg-[#0D0E25] p-3 sm:p-4 overflow-hidden">
        
        {/* Title Header Marquee: PRIZE SHELF: CASH IN YOUR WINS */}
        <div className="flex items-center justify-between mb-3 border-b-2 border-[#FF5500]/30 pb-2">
          <div className="flex items-center gap-2">
            <span className="p-1 rounded bg-[#FF5500] text-black">
              <Trophy className="w-4 h-4 stroke-[2.5]" />
            </span>
            <h2 className="font-arcade text-sm sm:text-base tracking-wider text-[#FF5500] uppercase drop-shadow-[0_0_10px_#FF5500] m-0">
              PRIZE SHELF: CASH IN YOUR WINS
            </h2>
          </div>
          <span className="font-tech text-[10px] text-yellow-300 bg-[#1E1736] px-2 py-0.5 rounded-full border border-yellow-400/50 flex items-center gap-1">
            <Flame className="w-3 h-3 text-[#FF5500]" /> ARCADE DEALS
          </span>
        </div>

        {/* TOP ROW: Two Items (Left: Swiggy 10% Off, Right: Nykaa ₹200 Voucher) */}
        <div className="grid grid-cols-2 gap-2.5 sm:gap-3 mb-3">
          
          {/* LEFT ITEM: Swiggy 10% Off - Glowing Green Border with READY! label */}
          <div
            onClick={() => {
              playSound('click');
              onSelectSwiggy();
            }}
            className={`group relative flex flex-col justify-between p-2.5 rounded-xl bg-[#0F142D] border-2 transition-all cursor-pointer transform hover:-translate-y-1 active:translate-y-0.5 ${
              isSwiggyRedeemed
                ? 'border-cyan-400 shadow-[0_0_10px_rgba(0,229,255,0.5)]'
                : 'border-[#00FF66] shadow-[0_0_10px_rgba(0,255,0,0.5)] hover:shadow-[0_0_18px_rgba(0,255,0,0.8)]'
            }`}
          >
            {/* "READY!" Neon Top Label */}
            <div className="flex items-center justify-between">
              <span className="font-arcade text-[9px] sm:text-[10px] text-black bg-[#00FF66] px-2 py-0.5 rounded-md font-bold shadow-[0_0_10px_#00FF66] tracking-wider uppercase">
                {isSwiggyRedeemed ? 'CLAIMED! ✓' : 'READY!'}
              </span>
              <span className="font-arcade text-[10px] sm:text-xs text-[#FFE600] font-bold">
                -300 TIX
              </span>
            </div>

            {/* Glowing Oval Backdrop for Open Visual Shelf Feel */}
            <div className="relative my-2 flex items-center justify-center py-1">
              <div className="absolute w-20 h-16 rounded-full bg-[#00FF66]/20 blur-md pointer-events-none group-hover:scale-110 transition-transform" />
              <BurgerFriesArt className="w-16 h-16 sm:w-20 sm:h-20 relative z-10 transition-transform group-hover:scale-105" />
            </div>

            {/* Item Title & Details */}
            <div className="mb-2">
              <h3 className="font-arcade text-xs sm:text-sm text-white tracking-wide truncate m-0">
                Swiggy 10% Off
              </h3>
              <p className="font-tech text-[10px] text-emerald-300 truncate">
                Instant Food Discount
              </p>
            </div>

            {/* Thick Solid Neon Green Progress Bar: 100% full green-to-cyan */}
            <div>
              <div className="flex justify-between items-center text-[9px] font-tech font-bold text-emerald-300 mb-1">
                <span className="truncate">YOUR PROGRESS:</span>
                <span className="text-white">{tickets} / 300 TIX</span>
              </div>
              <div className="w-full h-3 rounded-full bg-[#06081A] border-2 border-[#060714] p-0.5 overflow-hidden">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-[#00FF66] to-[#00E5FF] shadow-[0_0_8px_#00FF66] transition-all duration-500"
                  style={{ width: `${Math.min(100, Math.max(10, (tickets / 300) * 100))}%` }}
                />
              </div>
            </div>

            {/* Tap to Unlock Button Badge */}
            <div className="mt-2 w-full py-1 rounded-md text-center font-arcade text-[10px] uppercase text-black bg-[#00FF66] shadow-[0_0_8px_#00FF66] group-hover:brightness-110 transition-all font-bold">
              TAP TO UNLOCK
            </div>
          </div>

          {/* RIGHT ITEM: Nykaa ₹200 Voucher - Glowing Magenta/Pink Border */}
          <div
            onClick={() => playSound('click')}
            className="group relative flex flex-col justify-between p-2.5 rounded-xl bg-[#14102C] border-2 border-[#FF007F] shadow-[0_0_15px_#FF007F] transition-all transform hover:-translate-y-1 active:translate-y-0.5 cursor-pointer"
          >
            {/* Top Row: Price & Lock Icon */}
            <div className="flex items-center justify-between">
              <span className="font-arcade text-[9px] sm:text-[10px] text-white bg-[#FF007F] px-1.5 py-0.5 rounded-md font-bold tracking-wider uppercase">
                LOCKED
              </span>
              <span className="font-arcade text-[10px] sm:text-xs text-[#FF007F] font-bold">
                -800 TIX
              </span>
            </div>

            {/* Glowing Oval Backdrop for Open Visual Shelf */}
            <div className="relative my-2 flex items-center justify-center py-1">
              <div className="absolute w-20 h-16 rounded-full bg-[#FF007F]/20 blur-md pointer-events-none group-hover:scale-110 transition-transform" />
              <CosmeticsArt className="w-16 h-16 sm:w-20 sm:h-20 relative z-10 transition-transform group-hover:scale-105" />
            </div>

            {/* Item Title & Details */}
            <div className="mb-2">
              <h3 className="font-arcade text-xs sm:text-sm text-white tracking-wide truncate m-0">
                Nykaa ₹200 Voucher
              </h3>
              <p className="font-tech text-[10px] text-pink-300 truncate">
                Beauty & Fragrance
              </p>
            </div>

            {/* Solid Progress Bar: Filled to 56% (orange-yellow, bg-orange-500) */}
            <div>
              <div className="flex justify-between items-center text-[9px] font-tech font-bold text-orange-400 mb-1">
                <span className="truncate">YOUR PROGRESS:</span>
                <span className="text-white">{tickets} / 800 TIX</span>
              </div>
              <div className="w-full h-3 rounded-full bg-[#06081A] border-2 border-[#060714] p-0.5 overflow-hidden">
                <div
                  className="h-full rounded-full bg-orange-500 shadow-[0_0_8px_#FF5500] transition-all duration-500"
                  style={{ width: `${nykaaProgressPct}%` }}
                />
              </div>
            </div>

            {/* Status note */}
            <div className="mt-2 w-full py-1 rounded-md text-center font-tech text-[9px] font-bold text-pink-300 bg-[#23153A] border border-pink-500/30">
              NEED {Math.max(0, 800 - tickets)} MORE TIX
            </div>
          </div>
        </div>

        {/* BOTTOM ROW: Full-Width Segment (boAt Airdopes on Glowing Yellow Pedestal) */}
        <div
          onClick={() => playSound('click')}
          className="group relative p-3 rounded-xl bg-[#121338] border-2 border-purple-500 shadow-[0_0_15px_#A855F7] hover:border-cyan-400 hover:shadow-[0_0_18px_#00E5FF] transition-all cursor-pointer transform hover:-translate-y-0.5"
        >
          {/* Header Row */}
          <div className="flex items-center justify-between mb-1">
            <div className="flex items-center gap-1.5">
              <span className="font-arcade text-[9px] sm:text-[10px] text-white bg-purple-600 px-2 py-0.5 rounded-md font-bold uppercase shadow-[0_0_8px_#9333EA]">
                GRAND PRIZE
              </span>
              <span className="font-tech text-[10px] text-cyan-300">WIRELESS AUDIO</span>
            </div>
            <span className="font-arcade text-xs sm:text-sm text-[#00E5FF] font-extrabold tracking-wider drop-shadow-[0_0_8px_#00E5FF]">
              -10,000 TIX
            </span>
          </div>

          {/* Center Showcase: Headphones on Glowing Yellow Circular Pedestal */}
          <div className="relative flex items-center justify-center my-1 py-1">
            <div className="absolute w-36 h-20 rounded-full bg-[#FFE600]/15 blur-lg pointer-events-none group-hover:scale-110 transition-transform" />
            <AirdopesArt className="w-40 sm:w-48 h-24 sm:h-28 relative z-10" />
          </div>

          {/* Title & Info */}
          <div className="flex items-center justify-between mb-1.5">
            <div>
              <h3 className="font-arcade text-xs sm:text-sm text-white tracking-wider m-0">
                boAt Airdopes True Wireless
              </h3>
              <p className="font-tech text-[10px] text-gray-400">
                13mm Drivers • 42H Battery Playback
              </p>
            </div>
            <span className="font-tech text-[10px] text-orange-400 bg-[#201736] px-2 py-1 rounded-md border border-orange-500/30">
              {boatProgressPct}% COMPLETE
            </span>
          </div>

          {/* Solid Orange Progress Bar: Dimly filled to 4% labeled "450 / 10000 TIX" */}
          <div>
            <div className="flex justify-between items-center text-[9px] font-tech font-bold text-orange-400 mb-1">
              <span>PROGRESS TOWARDS GRAND PRIZE:</span>
              <span className="text-white">{tickets} / 10000 TIX</span>
            </div>
            <div className="w-full h-3 rounded-full bg-[#06081A] border-2 border-[#060714] p-0.5 overflow-hidden">
              <div
                className="h-full rounded-full bg-gradient-to-r from-orange-600 to-orange-400 shadow-[0_0_6px_#FF5500] transition-all duration-500"
                style={{ width: `${boatProgressPct}%` }}
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
