"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Phone, X } from "lucide-react"

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  )
}

export default function FloatingCTA() {
  const [isOpen, setIsOpen] = useState(false)
  const [showPulse, setShowPulse] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setShowPulse(false), 10000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      {/* WhatsApp Floating Button - Always Visible */}
      <motion.a
        href="https://wa.me/919876543210?text=Hi!%20I%27m%20interested%20in%20rooftop%20solar%20installation.%20Please%20share%20details."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-24 right-6 z-50 group"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 200 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <div className="relative">
          {/* Pulse Ring */}
          <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30" />
          
          {/* Button */}
          <div className="relative w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg shadow-emerald-500/30 hover:shadow-xl hover:shadow-emerald-500/40 transition-shadow">
            <WhatsAppIcon className="w-7 h-7 text-white" />
          </div>

          {/* Tooltip */}
          <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            <div className="bg-[var(--ink)] text-white text-[12px] font-medium px-3 py-2 rounded-lg whitespace-nowrap shadow-lg">
              Chat on WhatsApp
              <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1 w-2 h-2 bg-[var(--ink)] rotate-45" />
            </div>
          </div>
        </div>
      </motion.a>

      {/* Phone/CTA Button with Expandable Menu */}
      <div className="fixed bottom-6 right-6 z-50">
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.9 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="absolute bottom-16 right-0 flex flex-col gap-3 items-end"
            >
              {/* Toll Free Call */}
              <motion.a
                href="tel:18001234567"
                className="flex items-center gap-3 bg-white pl-4 pr-5 py-3 rounded-2xl shadow-xl border border-[var(--border-color)] hover:shadow-2xl transition-all group"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
              >
                <div className="w-11 h-11 bg-gradient-to-br from-[var(--blue)] to-[var(--blue-mid)] rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform shadow-md">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div className="text-left">
                  <div className="text-[10px] text-[var(--ink-muted)] uppercase tracking-wider font-medium">Toll Free 24x7</div>
                  <div className="text-[15px] font-bold text-[var(--ink)]">+91-6396814058</div>
                </div>
              </motion.a>

              {/* Quick Callback */}
              <motion.button
                className="flex items-center gap-3 bg-gradient-to-r from-[var(--orange)] to-[#FF8519] pl-4 pr-5 py-3 rounded-2xl shadow-xl hover:shadow-2xl transition-all group"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                <div className="w-11 h-11 bg-white/20 rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform">
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div className="text-left">
                  <div className="text-[10px] text-white/70 uppercase tracking-wider font-medium">Get Free</div>
                  <div className="text-[15px] font-bold text-white">Callback Now</div>
                </div>
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Main Toggle Button */}
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          className={`relative w-14 h-14 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 ${
            isOpen 
              ? "bg-[var(--ink)] hover:bg-[#1a1a2e] shadow-xl" 
              : "bg-gradient-to-br from-[var(--orange)] to-[#FF8519] hover:shadow-xl hover:shadow-orange-500/30"
          }`}
          whileTap={{ scale: 0.95 }}
        >
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.15 }}
              >
                <X className="w-6 h-6 text-white" />
              </motion.div>
            ) : (
              <motion.div
                key="phone"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.15 }}
              >
                <Phone className="w-6 h-6 text-white" />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>

        {/* Pulse animation when closed */}
        {!isOpen && showPulse && (
          <>
            <span className="absolute inset-0 rounded-full bg-[var(--orange)] animate-ping opacity-25" />
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center text-[9px] font-bold text-white border-2 border-white">
              !
            </span>
          </>
        )}
      </div>
    </>
  )
}
