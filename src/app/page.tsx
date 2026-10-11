'use client';

import React, { useState } from 'react';
import { HeaderBar } from '@/components/HeaderBar';
import { DailyBonusStreak } from '@/components/DailyBonusStreak';
import { NeonPrizeShelf } from '@/components/NeonPrizeShelf';
import { RedemptionModal } from '@/components/RedemptionModal';
import { Zap, Shield, Sparkles } from 'lucide-react';

export default function PlaySuperArcadePage() {
  const [tickets, setTickets] = useState<number>(450);
  const [isDay2Claimed, setIsDay2Claimed] = useState<boolean>(false);
  const [isSwiggyRedeemed, setIsSwiggyRedeemed] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [ticketBouncing, setTicketBouncing] = useState<boolean>(false);

  // Trigger bounce animation on tickets counter
  const bounceTicketPill = () => {
    setTicketBouncing(true);
    setTimeout(() => setTicketBouncing(false), 600);
  };

  // Day 2 Claim Handler (+10 Tickets => 460)
  const handleClaimDay2 = () => {
    if (isDay2Claimed) return;
    setIsDay2Claimed(true);
    setTickets((prev) => prev + 10);
    bounceTicketPill();
  };

  // Swiggy Redemption Confirmation (-300 Tickets)
  const handleConfirmRedemption = () => {
    setTickets((prev) => Math.max(0, prev - 300));
    setIsSwiggyRedeemed(true);
    bounceTicketPill();
  };

  return (
    <main className="h-[100dvh] w-full bg-[#0D0E25] flex justify-center items-stretch overflow-hidden select-none">
      
      {/* Strict Mobile Frame:
          - Bounded by h-[100dvh] and max-w-md mx-auto
          - NO rigid fixed heights on content wrapper
          - Natural scrolling with overflow-y-auto, overscroll-behavior-y-contain
          - Smooth momentum scrolling with -webkit-overflow-scrolling: touch
          - Perfectly flat, solid midnight-blue background (#0D0E25)
      */}
      <div
        className="relative w-full max-w-md h-[100dvh] bg-[#0D0E25] flex flex-col overflow-y-auto overscroll-y-contain mobile-scroll"
        style={{ WebkitOverflowScrolling: 'touch' }}
      >
        
        {/* STICKY TOP VIEWPORT:
            Pinned main header ("PLAYSUPER REWARDS ARCADE") with sticky top-0 z-50 and backdrop-blur-md
        */}
        <div className="sticky top-0 z-50 bg-[#0D0E25]/95 backdrop-blur-md border-b-2 border-[#1A1D46] shadow-[0_4px_20px_rgba(13,14,37,0.9)]">
          {/* Top In-Game HUD Status Row */}
          <div className="w-full bg-[#090A1C]/90 px-3 py-1 flex items-center justify-between text-[10px] font-tech text-gray-400">
            <div className="flex items-center gap-2">
              <span className="flex items-center gap-1 text-[#00E5FF]">
                <Zap className="w-3 h-3 text-[#FFE600] fill-yellow-400" />
                <span className="font-bold">SEASON 4 LIVE</span>
              </span>
              <span className="text-gray-600">|</span>
              <span className="text-gray-300">LEVEL 14 PRO</span>
            </div>
            <div className="flex items-center gap-1 text-emerald-400">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00FF66] animate-pulse" />
              <span className="font-bold">OVERLAY ACTIVE</span>
            </div>
          </div>

          {/* Header Bar */}
          <HeaderBar
            tickets={tickets}
            ticketBouncing={ticketBouncing}
            onCloseOverlay={() => {}}
          />
        </div>

        {/* SCROLLABLE CENTRAL CONTENT:
            Sliding naturally and fluidly beneath sticky viewports.
            Adequate top and bottom padding so nothing is cut off on small screens like iPhone SE.
        */}
        <div className="flex-1 px-3 pt-3 pb-8 space-y-4">
          
          {/* SECTION 1: 7-Day Daily Bonus Streak Tracker */}
          <DailyBonusStreak
            isDay2Claimed={isDay2Claimed}
            onClaimDay2={handleClaimDay2}
          />

          {/* SECTION 2: The Neon Prize Shelf (No Boxy Clutter) */}
          <NeonPrizeShelf
            tickets={tickets}
            onSelectSwiggy={() => setIsModalOpen(true)}
            isSwiggyRedeemed={isSwiggyRedeemed}
          />
        </div>

        {/* STICKY BOTTOM VIEWPORT:
            Pinned bottom info banner ("PLAY & EARN SYSTEM") with sticky bottom-0 z-50 and backdrop-blur-md
            ABSOLUTELY NO RESET OR REFRESH UTILITIES.
        */}
        <footer className="sticky bottom-0 z-50 bg-[#0D0E25]/95 backdrop-blur-md border-t-2 border-[#1A1D46] px-3.5 py-2.5 flex items-center justify-between shadow-[0_-4px_20px_rgba(13,14,37,0.9)] select-none">
          <div className="flex items-center gap-2 text-left">
            <div className="w-6 h-6 rounded-lg bg-[#FF007F]/20 border border-[#FF007F] flex items-center justify-center shadow-[0_0_8px_#FF007F]">
              <Shield className="w-3.5 h-3.5 text-[#FF007F]" />
            </div>
            <div className="flex flex-col">
              <span className="font-arcade text-[10px] text-white tracking-wider">
                PLAY & EARN SYSTEM
              </span>
              <span className="font-tech text-[8px] text-gray-400">
                100% VERIFIED GAME PARTNER
              </span>
            </div>
          </div>

          <div className="flex items-center gap-1.5">
            <div className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#181A42] border border-[#00E5FF]/40 shadow-[0_0_8px_rgba(0,229,255,0.3)]">
              <Sparkles className="w-3 h-3 text-[#FFE600] animate-spin-slow" />
              <span className="font-arcade text-[9px] text-[#FFE600] tracking-wide">
                ARCADE PASS
              </span>
            </div>
          </div>
        </footer>

        {/* SECTION 3: Interactive Redemption Overlay (Pop-up Modal) */}
        <RedemptionModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onConfirmRedemption={handleConfirmRedemption}
          tickets={tickets}
        />
      </div>
    </main>
  );
}
