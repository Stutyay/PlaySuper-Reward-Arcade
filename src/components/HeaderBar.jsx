import React, { useState } from 'react';
import { Volume2, VolumeX, X } from 'lucide-react';
import { playSound, toggleSound } from '../utils/audio';

export const HeaderBar = ({ tickets, ticketBouncing, onCloseOverlay }) => {
  const [muted, setMuted] = useState(false);

  const handleSoundToggle = () => {
    const isNowActive = toggleSound();
    setMuted(!isNowActive);
    if (isNowActive) playSound('click');
  };

  return (
    <header className="relative w-full pt-2 pb-2 px-3 flex items-center justify-between select-none">
      {/* Left: Glowing Cyber-Blue Badge "PLAYSUPER REWARDS ARCADE" */}
      <div className="flex items-center gap-2">
        <div className="relative group">
          <div className="bg-[#0D0E25] px-2.5 py-1.5 rounded-lg border-2 border-[#00E5FF] shadow-[0_0_15px_#00E5FF] flex items-center gap-1.5 transition-transform active:scale-95">
            <span className="w-2 h-2 rounded-full bg-[#00E5FF] animate-ping opacity-75 inline-block" />
            <h1 className="font-arcade text-[11px] sm:text-xs tracking-wider text-[#00E5FF] uppercase drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] m-0">
              PLAYSUPER REWARDS ARCADE
            </h1>
          </div>
        </div>
      </div>

      {/* Right: Audio Toggle and "🎟️ 450 Tickets" Pill Button */}
      <div className="flex items-center gap-1.5 sm:gap-2">
        {/* Sound toggle button */}
        <button
          onClick={handleSoundToggle}
          title={muted ? "Unmute Retro Sounds" : "Mute Sounds"}
          className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#131538] border-2 border-[#060714] flex items-center justify-center text-cyan-300 hover:text-white hover:border-[#00E5FF] transition-all"
        >
          {muted ? <VolumeX className="w-3.5 h-3.5 text-pink-400" /> : <Volume2 className="w-3.5 h-3.5" />}
        </button>


        {/* Pulsing Pill: 🎟️ Tickets Counter */}
        <div
          className={`flex items-center gap-1.5 bg-[#14173F] px-3 py-1.5 rounded-full border-2 border-[#00E5FF] shadow-[0_0_15px_#00E5FF] cursor-pointer transition-all ${
            ticketBouncing ? 'ticket-bounce' : ''
          }`}
          onClick={() => playSound('click')}
        >
          <span className="text-base sm:text-lg animate-pulse inline-block select-none filter drop-shadow">
            🎟️
          </span>
          <span className="font-arcade text-xs sm:text-sm text-yellow-300 tracking-wide">
            {tickets} <span className="text-[#00E5FF] text-[10px] sm:text-xs">TICKETS</span>
          </span>
        </div>

        {/* Overlay Exit "X" button */}
        <button
          onClick={() => {
            playSound('click');
            if (onCloseOverlay) onCloseOverlay();
          }}
          title="Exit Arcade Overlay"
          className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#131538] border-2 border-[#060714] flex items-center justify-center text-pink-400 hover:text-white hover:border-[#FF007F] transition-all hover:rotate-90"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </header>
  );
};
