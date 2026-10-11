import React, { useState } from 'react';
import { Check, Lock, Sparkles } from 'lucide-react';
import { MysteryLootBoxArt, TicketParticle } from './ArcadeArt';
import { playSound } from '../utils/audio';

export const DailyBonusStreak = ({ isDay2Claimed, onClaimDay2 }) => {
  const [particles, setParticles] = useState([]);

  const handleClaim = (e) => {
    if (isDay2Claimed) return;
    playSound('claim');

    // Spawn 5 upward-flying ticket particles with different spread
    const rect = e.currentTarget.getBoundingClientRect();
    const newParticles = [
      { id: Date.now() + 1, tx: '-25px', left: rect.left + rect.width / 2 - 40, top: rect.top - 10 },
      { id: Date.now() + 2, tx: '0px', left: rect.left + rect.width / 2 - 35, top: rect.top - 20 },
      { id: Date.now() + 3, tx: '30px', left: rect.left + rect.width / 2 - 30, top: rect.top - 15 },
    ];
    setParticles((prev) => [...prev, ...newParticles]);

    // Clean up particles after 1.3 seconds
    setTimeout(() => {
      setParticles([]);
    }, 1300);

    onClaimDay2();
  };

  const daysData = [
    { day: 1, label: 'MON', status: 'completed', value: '5 TIX' },
    { day: 2, label: 'TUE', status: isDay2Claimed ? 'completed' : 'active', value: '+10 TIX' },
    { day: 3, label: 'WED', status: 'locked', value: '15 TIX' },
    { day: 4, label: 'THU', status: 'locked', value: '20 TIX' },
    { day: 5, label: 'FRI', status: 'locked', value: '25 TIX' },
    { day: 6, label: 'SAT', status: 'locked', value: '30 TIX' },
    { day: 7, label: 'SUN', status: 'mystery', value: '50+ TIX' },
  ];

  return (
    <section className="w-full px-3 py-2 select-none relative">
      {/* Flying particles container */}
      {particles.map((p) => (
        <TicketParticle
          key={p.id}
          style={{
            position: 'fixed',
            left: `${p.left}px`,
            top: `${p.top}px`,
            '--tx': p.tx,
          }}
        />
      ))}

      {/* Heading: DAILY BONUS: KEEP THE STREAK ALIVE in italic */}
      <div className="flex items-center justify-between mb-2">
        <h2 className="font-arcade italic text-xs sm:text-sm tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-[#FFE600] via-[#00E5FF] to-[#FF007F] m-0 flex items-center gap-1.5">
          <Sparkles className="w-3.5 h-3.5 text-[#FFE600] animate-spin-slow" />
          <span>DAILY BONUS: KEEP THE STREAK ALIVE</span>
        </h2>
        <span className="font-tech text-[10px] tracking-wider text-pink-400 bg-[#14173F] px-2 py-0.5 rounded-full border border-pink-500/40">
          STREAK: {isDay2Claimed ? '2 DAYS 🔥' : '1 DAY 🔥'}
        </span>
      </div>

      {/* 7 Horizontal Slots: Completely borderless smooth dark background */}
      <div className="grid grid-cols-7 gap-1.5 sm:gap-2">
        {daysData.map((slot) => {
          // DAY 1: MON - Dark, has a checkmark icon
          if (slot.day === 1) {
            return (
              <div
                key={slot.day}
                className="flex flex-col items-center justify-between py-2 px-1 rounded-xl bg-[#131538] border-2 border-[#1E2256] text-center"
              >
                <span className="font-tech text-[10px] font-bold text-gray-400 uppercase">
                  {slot.label}
                </span>
                <div className="w-6 h-6 rounded-full bg-emerald-500/20 border-2 border-emerald-400 flex items-center justify-center my-1 text-emerald-300 shadow-[0_0_8px_#00FF66]">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <span className="font-arcade text-[9px] text-emerald-400 font-bold">DONE</span>
              </div>
            );
          }

          // DAY 2: Highlighted - Encased in a pulsing hot pink glow with prominent pink Button "CLAIM +10 TIX"
          if (slot.day === 2) {
            return (
              <div
                key={slot.day}
                className={`relative flex flex-col items-center justify-between py-2 px-1 rounded-xl bg-[#1C1740] border-2 transition-all ${
                  isDay2Claimed
                    ? 'border-emerald-400 shadow-[0_0_12px_#00FF66]'
                    : 'border-[#FF007F] animate-pulse shadow-[0_0_15px_#FF007F]'
                }`}
              >
                <div className="w-full flex justify-between items-center px-0.5">
                  <span className="font-tech text-[10px] font-extrabold text-[#FF007F] uppercase tracking-tighter">
                    {slot.label}
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FF007F] animate-ping" />
                </div>

                {isDay2Claimed ? (
                  <>
                    <div className="w-6 h-6 rounded-full bg-emerald-500/20 border-2 border-emerald-400 flex items-center justify-center my-1 text-emerald-300 shadow-[0_0_8px_#00FF66]">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </div>
                    <span className="font-arcade text-[9px] text-emerald-400 font-bold">+10 TIX</span>
                  </>
                ) : (
                  <>
                    <span className="text-sm my-0.5 animate-bounce">🎟️</span>
                    {/* Prominent Pink Button "CLAIM +10 TIX" */}
                    <button
                      onClick={handleClaim}
                      className="w-full py-1 px-0.5 rounded-md font-arcade text-[8px] sm:text-[9px] text-white tracking-tighter uppercase game-btn-pink active:scale-95 cursor-pointer leading-tight"
                    >
                      CLAIM +10 TIX
                    </button>
                  </>
                )}
              </div>
            );
          }

          // DAY 7: Featured as a colorful "MYSTERY LOOT BOX" treasure chest graphic
          if (slot.day === 7) {
            return (
              <div
                key={slot.day}
                className="flex flex-col items-center justify-between py-1.5 px-0.5 rounded-xl bg-[#1F1742] border-2 border-[#FFE600] shadow-[0_0_10px_#FFE600] text-center group cursor-pointer hover:scale-105 transition-transform"
                onClick={() => playSound('click')}
              >
                <span className="font-tech text-[9px] font-extrabold text-[#FFE600] uppercase">
                  {slot.label}
                </span>
                <div className="my-0.5 relative">
                  <MysteryLootBoxArt className="w-7 h-7 sm:w-8 sm:h-8" />
                </div>
                <span className="font-arcade text-[8px] text-[#FFE600] tracking-tighter leading-none font-bold">
                  MYSTERY
                </span>
              </div>
            );
          }

          // DAYS 3-6: Dark lockboxes with padlocks and values
          return (
            <div
              key={slot.day}
              className="flex flex-col items-center justify-between py-2 px-1 rounded-xl bg-[#101230] border-2 border-[#1A1D45] text-center opacity-75 hover:opacity-100 transition-opacity"
            >
              <span className="font-tech text-[10px] font-semibold text-gray-400 uppercase">
                {slot.label}
              </span>
              <div className="w-6 h-6 rounded-full bg-[#080918] border-2 border-[#202554] flex items-center justify-center my-1 text-gray-400">
                <Lock className="w-3 h-3 text-cyan-400/70" />
              </div>
              <span className="font-arcade text-[9px] text-gray-400 font-medium">
                {slot.value}
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
};
