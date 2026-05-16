"use client"

import { useState, useEffect, useCallback, useRef } from "react"
import { motion, AnimatePresence, useMotionValue, useTransform, animate } from "framer-motion"
import { ArrowRight, Play, ChevronLeft, ChevronRight, Sun, Shield, Award, CheckCircle2 } from "lucide-react"
import Link from "next/link"

const slides = [
  {
    id: 1,
    badge: "PM Surya Ghar Yojana 2024",
    badgeIcon: Sun,
    headline: "Go Solar.",
    headlineAccent: "Save ₹1 Crore.",
    hindiText: "सोलर अपनाओ, बिजली बचाओ",
    description: "Join 1 Crore families going solar with up to ₹78,000 government subsidy. Cut your electricity bill to zero and earn from surplus power.",
    cta: "Check Your Eligibility",
    ctaSecondary: "Watch How It Works",
    stats: [
      { value: 78000, prefix: "₹", suffix: "", label: "Max Subsidy" },
      { value: 25, prefix: "", suffix: "+", label: "Years Warranty" },
      { value: 45, prefix: "", suffix: " Days", label: "Installation" },
      { value: 10000, prefix: "", suffix: "+", label: "Happy Homes" },
    ],
    bgGradient: "from-[#001F3F] via-[#001830] to-[#000D1A]",
  },
  {
    id: 2,
    badge: "MNRE Empanelled Vendor",
    badgeIcon: Shield,
    headline: "Free Electricity",
    headlineAccent: "For Lifetime.",
    hindiText: "जीवनभर मुफ्त बिजली",
    description: "Generate your own clean energy with premium Tier-1 solar panels. Zero electricity bills, maximum savings, and a greener tomorrow.",
    cta: "Calculate Savings",
    ctaSecondary: "View Our Projects",
    stats: [
      { value: 0, prefix: "₹", suffix: "", label: "Bill Amount" },
      { value: 540, prefix: "", suffix: "W", label: "Panel Capacity" },
      { value: 25, prefix: "", suffix: "%", label: "Efficiency" },
      { value: 300, prefix: "", suffix: "+", label: "Cities Covered" },
    ],
    bgGradient: "from-[#0A1628] via-[#081220] to-[#040810]",
  },
  {
    id: 3,
    badge: "Net Metering Enabled",
    badgeIcon: Award,
    headline: "Earn From",
    headlineAccent: "Your Rooftop.",
    hindiText: "छत से कमाई करो",
    description: "Export surplus electricity to the grid and get paid. Your unused solar power becomes a source of passive income with net metering.",
    cta: "Start Earning Today",
    ctaSecondary: "Net Metering Guide",
    stats: [
      { value: 4, prefix: "₹", suffix: "/kWh", label: "Export Rate" },
      { value: 50, prefix: "₹", suffix: "K+", label: "Yearly Earnings" },
      { value: 100, prefix: "", suffix: "%", label: "Safe Investment" },
      { value: 7, prefix: "", suffix: " Days", label: "Approval" },
    ],
    bgGradient: "from-[#0F172A] via-[#0A1020] to-[#050810]",
  },
]

function AnimatedNumber({ value, prefix = "", suffix = "" }: { value: number; prefix?: string; suffix?: string }) {
  const count = useMotionValue(0)
  const rounded = useTransform(count, (latest) => {
    if (value >= 1000) {
      return Math.round(latest).toLocaleString("en-IN")
    }
    return Math.round(latest)
  })

  useEffect(() => {
    const controls = animate(count, value, {
      duration: 1.5,
      ease: [0.25, 0.46, 0.45, 0.94],
    })
    return controls.stop
  }, [value, count])

  return (
    <span className="tabular-nums">
      {prefix && <span className="text-[#FF7300]">{prefix}</span>}
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  )
}

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [progress, setProgress] = useState(0)
  const progressRef = useRef<NodeJS.Timeout | null>(null)
  const SLIDE_DURATION = 6000

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
    setProgress(0)
  }, [])

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
    setProgress(0)
  }, [])

  const goToSlide = useCallback((index: number) => {
    setCurrentSlide(index)
    setProgress(0)
  }, [])

  useEffect(() => {
    if (!isAutoPlaying) return
    
    const startTime = Date.now()
    const updateProgress = () => {
      const elapsed = Date.now() - startTime
      const newProgress = Math.min((elapsed / SLIDE_DURATION) * 100, 100)
      setProgress(newProgress)
      
      if (elapsed < SLIDE_DURATION) {
        progressRef.current = setTimeout(updateProgress, 16)
      } else {
        nextSlide()
      }
    }
    
    progressRef.current = setTimeout(updateProgress, 16)
    
    return () => {
      if (progressRef.current) clearTimeout(progressRef.current)
    }
  }, [isAutoPlaying, currentSlide, nextSlide])

  const currentSlideData = slides[currentSlide]
  const BadgeIcon = currentSlideData.badgeIcon

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background layers */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 bg-gradient-to-br ${slide.bgGradient} transition-opacity duration-700 ease-out ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}
      
      {/* Decorative overlays */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(255,115,0,0.06),transparent)]" />
      
      {/* Grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '80px 80px',
        }}
      />

      {/* Animated sun - Desktop only */}
      <div className="hidden lg:block absolute right-0 top-0 w-[700px] h-[700px] pointer-events-none overflow-hidden">
        <motion.div
          className="absolute right-[-180px] top-[-80px]"
          animate={{ rotate: 360 }}
          transition={{ duration: 200, repeat: Infinity, ease: "linear" }}
        >
          <svg viewBox="0 0 500 500" className="w-[650px] h-[650px]">
            <defs>
              <radialGradient id="heroSunGrad" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#FF7300" stopOpacity="0.1" />
                <stop offset="60%" stopColor="#FF7300" stopOpacity="0.03" />
                <stop offset="100%" stopColor="#FF7300" stopOpacity="0" />
              </radialGradient>
            </defs>
            <circle cx="250" cy="250" r="200" fill="url(#heroSunGrad)" />
            {[...Array(24)].map((_, i) => (
              <line
                key={i}
                x1="250"
                y1="250"
                x2={250 + 200 * Math.cos((i * 15 * Math.PI) / 180)}
                y2={250 + 200 * Math.sin((i * 15 * Math.PI) / 180)}
                stroke="#FF7300"
                strokeWidth="1"
                strokeOpacity={0.03 + (i % 3) * 0.01}
              />
            ))}
          </svg>
        </motion.div>
      </div>

      {/* Main content container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="min-h-screen flex flex-col justify-center py-20 lg:py-24">
          
          {/* Content grid */}
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left content */}
            <div className="lg:col-span-7 xl:col-span-6">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="space-y-6"
                >
                  {/* Badge */}
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1, duration: 0.4 }}
                  >
                    <span className="inline-flex items-center gap-2.5 bg-white/[0.08] backdrop-blur-md border border-white/[0.1] text-white/90 text-xs font-semibold px-4 py-2.5 rounded-full">
                      <span className="relative flex items-center justify-center">
                        <span className="absolute w-2 h-2 rounded-full bg-emerald-400 animate-ping opacity-75" />
                        <span className="relative w-2 h-2 rounded-full bg-emerald-400" />
                      </span>
                      <BadgeIcon className="w-4 h-4 text-[#FF7300]" />
                      {currentSlideData.badge}
                    </span>
                  </motion.div>

                  {/* Headline */}
                  <motion.div 
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15, duration: 0.4 }}
                  >
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[0.95]">
                      <span className="block text-white" style={{ fontFamily: 'var(--font-syne), system-ui, sans-serif' }}>
                        {currentSlideData.headline}
                      </span>
                      <span 
                        className="block bg-gradient-to-r from-[#FF7300] via-[#FF9540] to-[#FF7300] bg-clip-text text-transparent"
                        style={{ fontFamily: 'var(--font-syne), system-ui, sans-serif' }}
                      >
                        {currentSlideData.headlineAccent}
                      </span>
                    </h1>
                  </motion.div>
                  
                  {/* Hindi text */}
                  <motion.p 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.4 }}
                    className="text-lg md:text-xl font-medium text-white/30"
                    style={{ fontFamily: 'var(--font-noto-sans-devanagari), system-ui, sans-serif' }}
                  >
                    {currentSlideData.hindiText}
                  </motion.p>

                  {/* Description */}
                  <motion.p 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.25, duration: 0.4 }}
                    className="text-white/55 text-base lg:text-lg leading-relaxed max-w-lg"
                  >
                    {currentSlideData.description}
                  </motion.p>

                  {/* CTA Buttons */}
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.4 }}
                    className="flex flex-wrap gap-3 pt-2"
                  >
                    <Link
                      href="#calculator"
                      className="group inline-flex items-center gap-2.5 px-6 py-3.5 bg-[#FF7300] text-white text-sm font-bold rounded-xl hover:bg-[#FF8519] transition-all duration-300 shadow-[0_8px_30px_rgba(255,115,0,0.3)] hover:shadow-[0_12px_40px_rgba(255,115,0,0.4)] hover:-translate-y-0.5"
                    >
                      {currentSlideData.cta}
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </Link>
                    <button className="group inline-flex items-center gap-2.5 px-5 py-3.5 bg-white/[0.06] text-white/70 text-sm font-medium rounded-xl border border-white/[0.1] hover:bg-white/[0.1] hover:text-white transition-all duration-300 backdrop-blur-sm">
                      <span className="w-8 h-8 rounded-full bg-white/[0.1] flex items-center justify-center group-hover:bg-white/15 transition-colors">
                        <Play className="w-3.5 h-3.5 ml-0.5 fill-current" />
                      </span>
                      {currentSlideData.ctaSecondary}
                    </button>
                  </motion.div>

                  {/* Stats */}
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.35, duration: 0.4 }}
                    className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 mt-4 border-t border-white/[0.08]"
                  >
                    {currentSlideData.stats.map((stat, i) => (
                      <div key={i} className="text-center sm:text-left">
                        <div 
                          className="text-2xl sm:text-3xl font-bold text-white leading-none mb-1"
                          style={{ fontFamily: 'var(--font-syne), system-ui, sans-serif' }}
                        >
                          <AnimatedNumber value={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
                        </div>
                        <div className="text-[10px] text-white/40 uppercase tracking-widest font-semibold">
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </motion.div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Right visual - Desktop only */}
            <div className="hidden lg:flex lg:col-span-5 xl:col-span-6 items-center justify-center">
              <div className="relative w-[320px] h-[320px] xl:w-[380px] xl:h-[380px]">
                {/* Rings */}
                <motion.div
                  className="absolute inset-0 rounded-full border border-white/[0.06]"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
                />
                
                <motion.div
                  className="absolute inset-6 rounded-full border border-[#FF7300]/15"
                  animate={{ rotate: -360 }}
                  transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                >
                  {[0, 72, 144, 216, 288].map((deg) => (
                    <div
                      key={deg}
                      className="absolute w-2 h-2 rounded-full bg-[#FF7300]/30"
                      style={{
                        top: '50%',
                        left: '50%',
                        transform: `rotate(${deg}deg) translate(120px, -50%)`,
                      }}
                    />
                  ))}
                </motion.div>

                <motion.div
                  className="absolute inset-14 rounded-full border border-white/[0.08]"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                />

                {/* Center sun */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    className="w-24 h-24 xl:w-28 xl:h-28 rounded-full bg-gradient-to-br from-[#FF7300] to-[#FF9233] flex items-center justify-center"
                    animate={{ 
                      scale: [1, 1.05, 1],
                      boxShadow: [
                        "0 0 40px rgba(255,115,0,0.2)",
                        "0 0 60px rgba(255,115,0,0.35)",
                        "0 0 40px rgba(255,115,0,0.2)",
                      ]
                    }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <Sun className="w-12 h-12 xl:w-14 xl:h-14 text-white" />
                  </motion.div>
                </div>

                {/* Floating labels */}
                <motion.div
                  className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-4 bg-white/[0.07] backdrop-blur-md border border-white/[0.1] text-white/80 text-[10px] font-semibold px-3 py-2 rounded-full whitespace-nowrap"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  <CheckCircle2 className="w-3 h-3 inline mr-1.5 text-emerald-400" />
                  Net Metering
                </motion.div>
                
                <motion.div
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-4 bg-white/[0.07] backdrop-blur-md border border-white/[0.1] text-white/80 text-[10px] font-semibold px-3 py-2 rounded-full whitespace-nowrap"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                >
                  <CheckCircle2 className="w-3 h-3 inline mr-1.5 text-emerald-400" />
                  ₹78K Subsidy
                </motion.div>
                
                <motion.div
                  className="absolute left-0 top-1/2 -translate-x-4 -translate-y-1/2 bg-white/[0.07] backdrop-blur-md border border-white/[0.1] text-white/80 text-[10px] font-semibold px-3 py-2 rounded-full whitespace-nowrap"
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 }}
                >
                  <CheckCircle2 className="w-3 h-3 inline mr-1.5 text-emerald-400" />
                  25 Yr Warranty
                </motion.div>
                
                <motion.div
                  className="absolute right-0 top-1/2 translate-x-4 -translate-y-1/2 bg-white/[0.07] backdrop-blur-md border border-white/[0.1] text-white/80 text-[10px] font-semibold px-3 py-2 rounded-full whitespace-nowrap"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.9 }}
                >
                  <CheckCircle2 className="w-3 h-3 inline mr-1.5 text-emerald-400" />
                  Zero Bills
                </motion.div>
              </div>
            </div>
          </div>

          {/* Navigation controls */}
          <div className="flex items-center justify-between mt-12 lg:mt-16">
            {/* Progress indicators */}
            <div className="flex items-center gap-2">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setIsAutoPlaying(false)
                    goToSlide(i)
                  }}
                  className="relative h-1.5 rounded-full overflow-hidden transition-all duration-300"
                  style={{ width: i === currentSlide ? '48px' : '14px' }}
                  aria-label={`Go to slide ${i + 1}`}
                >
                  <span className={`absolute inset-0 rounded-full transition-colors duration-300 ${
                    i === currentSlide ? 'bg-white/20' : 'bg-white/10 hover:bg-white/20'
                  }`} />
                  {i === currentSlide && (
                    <span
                      className="absolute inset-0 bg-[#FF7300] rounded-full origin-left transition-transform duration-100"
                      style={{ transform: `scaleX(${progress / 100})` }}
                    />
                  )}
                </button>
              ))}
            </div>

            {/* Nav arrows */}
            <div className="flex gap-2">
              <button
                onClick={() => {
                  setIsAutoPlaying(false)
                  prevSlide()
                }}
                className="w-11 h-11 rounded-xl bg-white/[0.06] border border-white/[0.1] flex items-center justify-center text-white/50 hover:bg-white/[0.1] hover:text-white transition-all duration-300"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => {
                  setIsAutoPlaying(false)
                  nextSlide()
                }}
                className="w-11 h-11 rounded-xl bg-white/[0.06] border border-white/[0.1] flex items-center justify-center text-white/50 hover:bg-white/[0.1] hover:text-white transition-all duration-300"
                aria-label="Next slide"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
