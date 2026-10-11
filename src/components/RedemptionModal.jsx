import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { X, Check, Copy, CheckCheck, Sparkles, Flame, ArrowLeft, ExternalLink } from 'lucide-react';
import { BurgerFriesArt, StarburstBackdrop } from './ArcadeArt';
import { playSound } from '../utils/audio';

export const RedemptionModal = ({ isOpen, onClose, onConfirmRedemption, tickets }) => {
  const [step, setStep] = useState('action'); // 'action' | 'success'
  const [copied, setCopied] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  if (!isOpen) return null;

  const triggerConfettiExplosion = () => {
    // Left burst
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { x: 0.3, y: 0.6 },
      colors: ['#FF5500', '#FF007F', '#00E5FF', '#FFE600', '#00FF66'],
    });
    // Right burst
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { x: 0.7, y: 0.6 },
      colors: ['#FF5500', '#FF007F', '#00E5FF', '#FFE600', '#00FF66'],
    });
    // Center mega burst
    setTimeout(() => {
      confetti({
        particleCount: 100,
        spread: 100,
        origin: { x: 0.5, y: 0.5 },
        shapes: ['circle', 'square'],
      });
    }, 200);
  };

  const handleCashIn = () => {
    setIsProcessing(true);
    playSound('claim');

    setTimeout(() => {
      setIsProcessing(false);
      setStep('success');
      onConfirmRedemption();
      playSound('redeem');
      triggerConfettiExplosion();
    }, 450);
  };

  const handleCopyCode = () => {
    playSound('copy');
    navigator.clipboard?.writeText('PLAY-SWIGGY-X7B');
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleDismiss = () => {
    playSound('click');
    setStep('action');
    setCopied(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-sm animate-fadeIn">
      {/* Modal Container: Centered, Thick Border Panel Overlay on Solid Dark Midnight-Blue Background */}
      <div className="relative w-full max-w-sm rounded-3xl bg-[#0D0E25] border-4 border-[#FF5500] shadow-[0_0_25px_#FF5500] p-4 sm:p-5 text-white overflow-hidden select-none">
        
        {/* Animated 2D Starburst Backdrop Visual Explosions */}
        <div className="absolute inset-0 pointer-events-none opacity-40">
          <div className="w-full h-full animate-spin-slow">
            <StarburstBackdrop className="w-full h-full scale-150" />
          </div>
        </div>

        {/* Comic Close 'X' Button in Top-Right */}
        <button
          onClick={handleDismiss}
          className="absolute top-3 right-3 z-30 w-8 h-8 rounded-full bg-[#1A1C44] border-2 border-[#060714] text-pink-400 hover:text-white hover:border-[#FF007F] flex items-center justify-center transition-all hover:scale-110 active:scale-95"
          title="Close Popup"
        >
          <X className="w-4 h-4 stroke-[3]" />
        </button>

        {/* ================= STEP 1: POPUP (ACTION MODE) ================= */}
        {step === 'action' ? (
          <div className="relative z-20 flex flex-col items-center text-center">
            
            {/* Header Badge */}
            <div className="mb-2 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#181A45] border-2 border-[#00E5FF] shadow-[0_0_10px_#00E5FF]">
              <Sparkles className="w-3.5 h-3.5 text-[#FFE600] animate-pulse" />
              <span className="font-arcade text-xs text-[#00E5FF] tracking-wider uppercase">
                INSTANT REWARD REDEMPTION
              </span>
            </div>

            {/* Glowing 2D Art Centerpiece */}
            <div className="relative my-3 flex items-center justify-center">
              <div className="absolute w-28 h-28 rounded-full bg-[#00FF66]/25 blur-xl pointer-events-none animate-pulse" />
              <div className="w-24 h-24 rounded-2xl bg-[#141838] border-2 border-[#00FF66] shadow-[0_0_15px_#00FF66] flex items-center justify-center">
                <BurgerFriesArt className="w-20 h-20" />
              </div>
            </div>

            {/* Title: UNLOCK SWIGGY 10% OFF */}
            <h2 className="font-arcade text-xl sm:text-2xl text-white tracking-wide uppercase drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] m-0">
              UNLOCK SWIGGY 10% OFF
            </h2>

            <p className="font-tech text-xs text-emerald-300 mt-1 max-w-[260px]">
              Enjoy 10% instant discount on gourmet meals, burgers & beverages across all restaurant partners!
            </p>

            {/* Displays a Cost Marker "COST: -300 🎟️" */}
            <div className="my-3 px-4 py-1.5 rounded-xl bg-[#1A183E] border-2 border-[#FFE600] shadow-[0_0_12px_#FFE600] flex items-center gap-2">
              <span className="font-arcade text-sm text-[#FFE600] tracking-wide">
                COST: -300 🎟️
              </span>
              <span className="font-tech text-xs text-gray-300 border-l border-yellow-400/40 pl-2">
                BAL: {tickets} TIX
              </span>
            </div>

            {/* MASSIVE, CHUNKY ARCADE-STYLE ORANGE BUTTON: "CASH IN TICKETS"
                Specs: compresses on press with heavy shadow offsets (hover:translate-y-1 active:translate-y-2 border-b-8 border-orange-800).
                Very bright, saturated orange gradient with intense outer glow (shadow-[0_0_15px_#FF5500]).
            */}
            <button
              onClick={handleCashIn}
              disabled={isProcessing || tickets < 300}
              className={`w-full py-3 px-6 rounded-2xl font-arcade text-base sm:text-lg text-white uppercase tracking-wider cursor-pointer transition-all duration-100 flex items-center justify-center gap-2 
                bg-gradient-to-b from-[#FF6600] via-[#FF5500] to-[#E64400] 
                border-2 border-[#060714] border-b-8 border-orange-950
                shadow-[0_0_15px_#FF5500] 
                hover:translate-y-1 hover:border-b-[6px] 
                active:translate-y-2 active:border-b-2 active:shadow-[0_0_8px_#FF5500]
                ${tickets < 300 ? 'opacity-50 cursor-not-allowed' : ''}
              `}
            >
              {isProcessing ? (
                <>
                  <span className="w-5 h-5 border-3 border-white border-t-transparent rounded-full animate-spin" />
                  <span>TRANSACTING...</span>
                </>
              ) : (
                <>
                  <Flame className="w-5 h-5 text-yellow-300 fill-yellow-300 animate-bounce" />
                  <span>CASH IN TICKETS</span>
                </>
              )}
            </button>

            {/* Cancel link */}
            <button
              onClick={handleDismiss}
              className="mt-3 font-tech text-xs text-gray-400 hover:text-white transition-colors"
            >
              KEEP TICKETS FOR LATER
            </button>
          </div>
        ) : (
          /* ================= STEP 2: SUCCESS MODAL SCREEN ================= */
          <div className="relative z-20 flex flex-col items-center text-center animate-scaleUp">
            
            {/* Green Glowing Checkmark */}
            <div className="relative my-2">
              <div className="absolute inset-0 rounded-full bg-[#00FF66]/30 blur-xl animate-ping" />
              <div className="w-16 h-16 rounded-full bg-[#00FF66] border-4 border-[#060714] shadow-[0_0_20px_#00FF66] flex items-center justify-center text-black">
                <Check className="w-9 h-9 stroke-[3.5]" />
              </div>
            </div>

            {/* Success Title & Instant Ticket Deduction Alert */}
            <h2 className="font-arcade text-xl sm:text-2xl text-white tracking-wide uppercase m-0 mt-1">
              REWARD UNLOCKED!
            </h2>
            <div className="my-1.5 inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-[#181B45] border border-cyan-400/50 text-[#00E5FF] font-tech text-xs font-bold shadow-[0_0_8px_#00E5FF]">
              <span>-300 TICKETS DEDUCTED</span>
              <span>•</span>
              <span className="text-yellow-300">NEW BALANCE: {tickets} 🎟️</span>
            </div>

            {/* Perforated Arcade Voucher Ticket Graphic with Code */}
            <div className="relative w-full my-3 p-3.5 rounded-xl bg-gradient-to-r from-[#171A40] via-[#1E2356] to-[#171A40] border-2 border-dashed border-[#00E5FF] shadow-[0_0_12px_#00E5FF] flex flex-col items-center">
              {/* Perforated edges notches */}
              <div className="absolute -left-2.5 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-[#0D0E25] border-r-2 border-[#00E5FF]" />
              <div className="absolute -right-2.5 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-[#0D0E25] border-l-2 border-[#00E5FF]" />

              <span className="font-tech text-[10px] text-cyan-300 uppercase tracking-widest">
                EXCLUSIVE IN-GAME VOUCHER
              </span>
              <span className="font-arcade text-xs text-white my-0.5">
                SWIGGY 10% DISCOUNT
              </span>

              {/* Copyable Coupon Code: PLAY-SWIGGY-X7B */}
              <div className="w-full mt-2 py-2 px-3 rounded-lg bg-[#0A0C1E] border-2 border-[#FFE600] shadow-[0_0_8px_#FFE600] flex items-center justify-between">
                <div className="flex flex-col text-left">
                  <span className="font-tech text-[9px] text-yellow-300">COUPON CODE</span>
                  <span className="font-arcade text-sm sm:text-base text-white tracking-widest">
                    PLAY-SWIGGY-X7B
                  </span>
                </div>

                {/* Active COPY CODE button state */}
                <button
                  onClick={handleCopyCode}
                  className={`px-3 py-1.5 rounded-md font-arcade text-xs uppercase flex items-center gap-1.5 transition-all border-2 border-[#060714] cursor-pointer ${
                    copied
                      ? 'bg-[#00FF66] text-black shadow-[0_0_10px_#00FF66]'
                      : 'bg-[#FF007F] text-white shadow-[0_0_10px_#FF007F] hover:brightness-110 active:scale-95'
                  }`}
                >
                  {copied ? (
                    <>
                      <CheckCheck className="w-3.5 h-3.5 stroke-[3]" />
                      <span>COPIED! ✓</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>COPY CODE</span>
                    </>
                  )}
                </button>
              </div>

              <span className="font-tech text-[9px] text-gray-400 mt-2">
                Valid for 30 days on Swiggy App checkout
              </span>
            </div>

            {/* Finally, a "BACK TO GAME" overlay dismissal */}
            <button
              onClick={handleDismiss}
              className="w-full py-3 px-5 rounded-2xl font-arcade text-base text-white uppercase tracking-wider cursor-pointer transition-all duration-100 flex items-center justify-center gap-2
                bg-gradient-to-b from-[#00E5FF] to-[#0099CC]
                border-2 border-[#060714] border-b-6 border-cyan-950
                shadow-[0_0_15px_#00E5FF]
                hover:translate-y-0.5 hover:border-b-4
                active:translate-y-1.5 active:border-b-2"
            >
              <ArrowLeft className="w-4 h-4 stroke-[3]" />
              <span>BACK TO GAME</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
