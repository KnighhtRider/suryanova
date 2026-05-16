"use client"

import { useState, useEffect, useRef, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { FileCheck, Users, Wrench, Zap, FileText, Banknote, ArrowRight, ChevronRight, Clock, CheckCircle2 } from "lucide-react"
import Link from "next/link"

const steps = [
  {
    step: 1,
    icon: FileCheck,
    title: "Free Consultation",
    hindi: "मुफ्त परामर्श",
    duration: "Day 1",
    timeframe: "Same Day",
    description: "Share your electricity bill and roof photos. Our solar experts assess your requirements and provide customized recommendations.",
    details: [
      { text: "Electricity bill analysis", done: true },
      { text: "Roof assessment", done: true },
      { text: "System recommendation", done: true },
      { text: "Cost estimate", done: true },
    ],
    deliverable: "Detailed proposal within 24 hours",
    color: "#004C89",
    gradient: "from-[#004C89] to-[#0066B8]",
  },
  {
    step: 2,
    icon: FileText,
    title: "Documentation & Approval",
    hindi: "दस्तावेज़ीकरण",
    duration: "Day 2-7",
    timeframe: "5-7 Days",
    description: "We handle all paperwork — DISCOM application, subsidy registration, and necessary approvals. Zero hassle for you.",
    details: [
      { text: "DISCOM application filing", done: true },
      { text: "PM Surya Ghar registration", done: true },
      { text: "Net metering approval", done: true },
      { text: "Agreement signing", done: true },
    ],
    deliverable: "All approvals & agreements ready",
    color: "#1E5A8D",
    gradient: "from-[#1E5A8D] to-[#2874A6]",
  },
  {
    step: 3,
    icon: Users,
    title: "Site Survey",
    hindi: "साइट सर्वे",
    duration: "Day 8-10",
    timeframe: "2-3 Days",
    description: "Our technical team visits your location for detailed measurement, shadow analysis, and final system design.",
    details: [
      { text: "Roof inspection & measurement", done: true },
      { text: "Shadow analysis", done: true },
      { text: "Electrical load assessment", done: true },
      { text: "Final system design", done: true },
    ],
    deliverable: "Custom system blueprint",
    color: "#FF7300",
    gradient: "from-[#FF7300] to-[#FF9233]",
  },
  {
    step: 4,
    icon: Wrench,
    title: "Installation",
    hindi: "इंस्टॉलेशन",
    duration: "Day 11-30",
    timeframe: "15-20 Days",
    description: "Professional installation by certified technicians. Premium mounting, wiring, and inverter setup with safety compliance.",
    details: [
      { text: "Panel mounting on structure", done: true },
      { text: "Inverter installation", done: true },
      { text: "Wiring & earthing", done: true },
      { text: "Safety compliance checks", done: true },
    ],
    deliverable: "System installed & tested",
    color: "#004C89",
    gradient: "from-[#004C89] to-[#0066B8]",
  },
  {
    step: 5,
    icon: Zap,
    title: "Commissioning",
    hindi: "कमीशनिंग",
    duration: "Day 31-40",
    timeframe: "7-10 Days",
    description: "System testing, net meter installation by DISCOM, and final inspection. Your solar system officially goes live!",
    details: [
      { text: "Complete system testing", done: true },
      { text: "Net meter installation", done: true },
      { text: "DISCOM inspection", done: true },
      { text: "System handover", done: true },
    ],
    deliverable: "System live & generating power",
    color: "#1E5A8D",
    gradient: "from-[#1E5A8D] to-[#2874A6]",
  },
  {
    step: 6,
    icon: Banknote,
    title: "Subsidy Credit",
    hindi: "सब्सिडी क्रेडिट",
    duration: "Day 41-60",
    timeframe: "15-20 Days",
    description: "Government subsidy directly credited to your bank account. Start enjoying free electricity and massive savings!",
    details: [
      { text: "Subsidy claim submission", done: true },
      { text: "Bank verification", done: true },
      { text: "Direct bank credit", done: true },
      { text: "Start saving money!", done: true },
    ],
    deliverable: "Up to ₹78,000 in your account",
    color: "#228B22",
    gradient: "from-[#228B22] to-[#32CD32]",
  },
]

export default function InstallationProcess() {
  const [activeStep, setActiveStep] = useState(0)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)
  const interactionTimerRef = useRef<NodeJS.Timeout | null>(null)
  const isUserInteracting = useRef(false)
  const autoPlayDelay = 4000

  const pauseAutoPlay = useCallback(() => {
    isUserInteracting.current = true
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
      intervalRef.current = null
    }
    // Resume after delay
    if (interactionTimerRef.current) {
      clearTimeout(interactionTimerRef.current)
    }
    interactionTimerRef.current = setTimeout(() => {
      isUserInteracting.current = false
    }, 3000)
  }, [])

  const resumeAutoPlay = useCallback(() => {
    if (isUserInteracting.current) return
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
    }
    if (interactionTimerRef.current) {
      clearTimeout(interactionTimerRef.current)
    }
    intervalRef.current = setInterval(() => {
      setActiveStep(prev => (prev < steps.length - 1 ? prev + 1 : 0))
    }, autoPlayDelay)
  }, [])

  // Start auto-play on mount
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setActiveStep(prev => (prev < steps.length - 1 ? prev + 1 : 0))
    }, autoPlayDelay)

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
      if (interactionTimerRef.current) {
        clearTimeout(interactionTimerRef.current)
      }
    }
  }, [])

  // Reset interval when activeStep changes manually
  useEffect(() => {
    resumeAutoPlay()
  }, [activeStep, resumeAutoPlay])

  return (
    <section id="process" className="py-20 lg:py-28 bg-gradient-to-b from-[var(--surface)] to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[var(--orange)]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[var(--blue)]/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.15em] uppercase text-[var(--orange)] mb-4 justify-center">
            <span className="w-8 h-[2px] bg-[var(--orange)] rounded-full" />
            Installation Process
            <span className="w-8 h-[2px] bg-[var(--orange)] rounded-full" />
          </div>
          <h2 className="font-[family-name:var(--font-syne)] text-[clamp(2rem,5vw,3rem)] font-bold text-[var(--ink)] tracking-tight leading-tight mb-4">
            From Enquiry to <span className="text-[var(--orange)]">Power On</span>
          </h2>
          <p className="text-[var(--ink-soft)] text-[16px] max-w-2xl mx-auto leading-relaxed">
            Our streamlined 6-step process ensures hassle-free installation in just 45-60 days. 
            We handle everything while you watch your savings grow.
          </p>
        </motion.div>

        {/* Desktop Interactive Timeline */}
        <div className="hidden lg:block">
          {/* Timeline Header with Steps */}
          <div className="relative mb-8">
            {/* Progress Line Background */}
            <div className="absolute top-6 left-0 right-0 h-1 bg-gray-100 rounded-full" />
            
            {/* Animated Flowing Progress Line */}
            <motion.div 
              className="absolute top-6 left-0 h-1 bg-gradient-to-r from-[var(--blue)] via-[var(--orange)] to-[var(--blue)] rounded-full"
              initial={{ width: "0%" }}
              animate={{ 
                width: `${(activeStep / (steps.length - 1)) * 100}%`,
              }}
              transition={{ 
                duration: activeStep === steps.length - 1 ? 0.3 : 1.2, 
                ease: [0.4, 0, 0.2, 1] 
              }}
            />

            {/* Auto-animation glow effect */}
            <motion.div
              className="absolute top-6 h-1 w-12 rounded-full opacity-0"
              style={{
                background: `linear-gradient(90deg, transparent, ${steps[activeStep]?.color || '#004C89'}, ${steps[activeStep + 1]?.color || '#004C89'})`,
                boxShadow: `0 0 20px ${steps[activeStep]?.color || '#004C89'}80`,
                filter: 'blur(2px)',
              }}
              initial={{ left: "0%", opacity: 0 }}
              animate={{
                left: `${((activeStep + 1) / (steps.length - 1)) * 100}%`,
                opacity: [0, 0.6, 0.6, 0],
              }}
              transition={{
                left: { 
                  duration: activeStep < steps.length - 1 ? 1.5 : 0, 
                  ease: [0.4, 0, 0.2, 1],
                },
                opacity: { 
                  duration: activeStep < steps.length - 1 ? 1.5 : 0,
                  times: [0, 0.1, 0.9, 1],
                },
              }}
            />

            {/* Step Circles */}
            <div className="relative flex justify-between">
              {steps.map((item, i) => {
                const Icon = item.icon
                const isActive = i === activeStep
                const isCompleted = i < activeStep

                return (
                  <motion.button
                    key={i}
                    onClick={() => {
                      pauseAutoPlay()
                      setActiveStep(i)
                    }}
                    className="flex flex-col items-center group"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {/* Circle */}
                    <div 
                      className={`relative w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 shadow-lg ${
                        isActive 
                          ? 'ring-4 ring-offset-2' 
                          : isCompleted 
                            ? 'ring-2 ring-offset-1'
                            : ''
                      }`}
                      style={{ 
                        backgroundColor: isActive || isCompleted ? item.color : '#E5E7EB',
                        ringColor: isActive ? `${item.color}40` : isCompleted ? `${item.color}30` : undefined,
                      }}
                    >
                      {isCompleted ? (
                        <CheckCircle2 className="w-6 h-6 text-white" />
                      ) : (
                        <Icon className={`w-5 h-5 ${isActive || isCompleted ? 'text-white' : 'text-gray-400'}`} />
                      )}
                      
                      {/* Step number badge */}
                      <span 
                        className={`absolute -top-1 -right-1 w-5 h-5 rounded-full text-[10px] font-bold flex items-center justify-center ${
                          isActive ? 'bg-white text-[var(--ink)]' : isCompleted ? 'bg-white/90 text-[var(--ink)]' : 'bg-gray-200 text-gray-500'
                        }`}
                      >
                        {i + 1}
                      </span>
                    </div>

                    {/* Duration Badge */}
                    <div className={`mt-3 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider transition-colors ${
                      isActive 
                        ? 'bg-[var(--ink)] text-white' 
                        : isCompleted 
                          ? 'bg-emerald-100 text-emerald-700'
                          : 'bg-gray-100 text-gray-500'
                    }`}>
                      {isCompleted ? 'Done' : item.duration}
                    </div>

                    {/* Title (visible on hover or active) */}
                    <div className={`mt-2 text-[11px] font-semibold transition-colors text-center max-w-[100px] ${
                      isActive ? 'text-[var(--ink)]' : 'text-[var(--ink-muted)]'
                    }`}>
                      {item.title}
                    </div>
                  </motion.button>
                )
              })}
            </div>
          </div>

          {/* Active Step Detail Card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStep}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
              className="mt-10"
            >
              <div className="bg-white rounded-2xl border border-gray-100 shadow-xl overflow-hidden">
                <div className="grid lg:grid-cols-12">
                  {/* Left - Main Info */}
                  <div className="lg:col-span-7 p-8 lg:p-10">
                    <div className="flex items-start gap-5">
                      {/* Large Icon */}
                      <div 
                        className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${steps[activeStep].gradient} flex items-center justify-center flex-shrink-0 shadow-lg`}
                      >
                        {(() => {
                          const Icon = steps[activeStep].icon
                          return <Icon className="w-8 h-8 text-white" />
                        })()}
                      </div>

                      <div className="flex-1">
                        {/* Step indicator */}
                        <div className="flex items-center gap-3 mb-2">
                          <span 
                            className="px-3 py-1 rounded-full text-[11px] font-bold text-white"
                            style={{ backgroundColor: steps[activeStep].color }}
                          >
                            Step {activeStep + 1} of 6
                          </span>
                          <span className="flex items-center gap-1.5 text-[12px] text-[var(--ink-muted)]">
                            <Clock className="w-3.5 h-3.5" />
                            {steps[activeStep].timeframe}
                          </span>
                        </div>

                        {/* Title */}
                        <h3 className="font-[family-name:var(--font-syne)] text-2xl font-bold text-[var(--ink)] mb-1">
                          {steps[activeStep].title}
                        </h3>
                        <p className="font-[family-name:var(--font-noto-sans-devanagari)] text-[14px] text-[var(--ink-muted)] mb-4">
                          {steps[activeStep].hindi}
                        </p>

                        {/* Description */}
                        <p className="text-[15px] text-[var(--ink-soft)] leading-relaxed mb-6">
                          {steps[activeStep].description}
                        </p>

                        {/* Deliverable */}
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 text-emerald-700 rounded-lg text-[13px] font-semibold">
                          <CheckCircle2 className="w-4 h-4" />
                          Deliverable: {steps[activeStep].deliverable}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right - Details Checklist */}
                  <div className="lg:col-span-5 bg-gray-50 p-8 lg:p-10 border-l border-gray-100">
                    <h4 className="text-[13px] font-bold text-[var(--ink-muted)] uppercase tracking-wider mb-5">
                      What We Do
                    </h4>
                    <ul className="space-y-4">
                      {steps[activeStep].details.map((detail, j) => (
                        <motion.li 
                          key={j} 
                          className="flex items-start gap-3"
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: j * 0.1 }}
                        >
                          <span 
                            className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                            style={{ backgroundColor: `${steps[activeStep].color}15` }}
                          >
                            <CheckCircle2 
                              className="w-4 h-4" 
                              style={{ color: steps[activeStep].color }}
                            />
                          </span>
                          <span className="text-[14px] text-[var(--ink)] font-medium">
                            {detail.text}
                          </span>
                        </motion.li>
                      ))}
                    </ul>

                    {/* Navigation */}
                    <div className="flex items-center justify-between mt-8 pt-6 border-t border-gray-200">
                      <button
                        onClick={() => {
                          pauseAutoPlay()
                          setActiveStep(Math.max(0, activeStep - 1))
                        }}
                        disabled={activeStep === 0}
                        className="text-[13px] font-semibold text-[var(--ink-muted)] hover:text-[var(--ink)] disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                      >
                        ← Previous
                      </button>
                      <button
                        onClick={() => {
                          pauseAutoPlay()
                          setActiveStep(Math.min(steps.length - 1, activeStep + 1))
                        }}
                        disabled={activeStep === steps.length - 1}
                        className="flex items-center gap-1.5 text-[13px] font-semibold text-[var(--orange)] hover:text-[var(--orange-light)] disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                      >
                        Next Step
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Mobile Timeline */}
        <div className="lg:hidden space-y-4">
          {steps.map((item, i) => {
            const Icon = item.icon
            const isActive = i === activeStep
            
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                 <button
                  onClick={() => {
                    pauseAutoPlay()
                    setActiveStep(isActive ? -1 : i)
                  }}
                  className="w-full text-left"
                >
                  <div 
                    className={`bg-white rounded-xl border transition-all duration-300 overflow-hidden ${
                      isActive 
                        ? 'border-[var(--orange)] shadow-lg ring-2 ring-[var(--orange)]/20' 
                        : 'border-gray-100 shadow-sm hover:shadow-md'
                    }`}
                  >
                    {/* Header */}
                    <div className="p-4 flex items-center gap-4">
                      <div 
                        className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center flex-shrink-0 shadow-md`}
                      >
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-0.5">
                          <span className="text-[10px] font-bold text-white px-2 py-0.5 rounded-full" style={{ backgroundColor: item.color }}>
                            Step {i + 1}
                          </span>
                          <span className="text-[10px] font-semibold text-[var(--ink-muted)]">
                            {item.duration}
                          </span>
                        </div>
                        <h3 className="font-[family-name:var(--font-syne)] text-[15px] font-bold text-[var(--ink)] truncate">
                          {item.title}
                        </h3>
                        <p className="font-[family-name:var(--font-noto-sans-devanagari)] text-[11px] text-[var(--ink-muted)]">
                          {item.hindi}
                        </p>
                      </div>
                      <ChevronRight 
                        className={`w-5 h-5 text-gray-400 transition-transform ${isActive ? 'rotate-90' : ''}`} 
                      />
                    </div>

                    {/* Expandable Content */}
                    <AnimatePresence>
                      {isActive && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="px-4 pb-4 pt-2 border-t border-gray-100">
                            <p className="text-[13px] text-[var(--ink-soft)] leading-relaxed mb-4">
                              {item.description}
                            </p>
                            
                            <div className="space-y-2 mb-4">
                              {item.details.map((detail, j) => (
                                <div key={j} className="flex items-center gap-2">
                                  <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                                  <span className="text-[12px] text-[var(--ink)]">{detail.text}</span>
                                </div>
                              ))}
                            </div>

                            <div className="flex items-center gap-2 px-3 py-2 bg-emerald-50 text-emerald-700 rounded-lg text-[11px] font-semibold">
                              <CheckCircle2 className="w-3.5 h-3.5" />
                              {item.deliverable}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </button>
              </motion.div>
            )
          })}
        </div>

        {/* CTA Section */}
        <motion.div 
          className="mt-14 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 bg-gradient-to-r from-[var(--blue)]/5 via-[var(--orange)]/5 to-[var(--blue)]/5 rounded-2xl border border-gray-100">
            <div className="text-center sm:text-left">
              <p className="text-[var(--ink)] font-semibold text-[15px] mb-1">
                Ready to start your solar journey?
              </p>
              <p className="text-[13px] text-[var(--ink-muted)]">
                Average installation time: 45-60 days • EMI options available
              </p>
            </div>
            <Link
              href="#calculator"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--orange)] text-white font-bold text-[14px] rounded-xl hover:bg-[var(--orange-light)] transition-all shadow-lg shadow-orange-500/20 hover:shadow-orange-500/30 whitespace-nowrap"
            >
              Get Free Consultation
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
