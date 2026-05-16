"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { 
  Sun, 
  Sparkles, 
  Wrench, 
  ArrowRight, 
  CheckCircle2, 
  Star, 
  Zap, 
  Shield, 
  Clock, 
  BadgeCheck,
  TrendingUp,
  Droplets,
  Settings,
  Phone,
  Calendar
} from "lucide-react"
import Link from "next/link"

const solutions = [
  {
    id: "new-solar",
    icon: Sun,
    title: "New Solar Installation",
    titleHindi: "नया सोलर सिस्टम लगवाएं",
    tagline: "Most Popular",
    tagColor: "bg-[var(--orange)]/10 text-[var(--orange)] border-[var(--orange)]/20",
    description: "Complete end-to-end solar installation with government subsidy. From site survey to net metering, we handle everything.",
    descriptionHindi: "साइट सर्वे से लेकर नेट मीटरिंग तक - सब कुछ हम संभालते हैं।",
    price: "₹35,000",
    priceNote: "onwards (after subsidy)",
    gradient: "from-[var(--orange)] via-[#FF8519] to-[#FFB347]",
    shadowColor: "shadow-orange-500/20",
    hoverShadow: "hover:shadow-orange-500/30",
    features: [
      { icon: BadgeCheck, text: "PM Surya Ghar Subsidy Included", highlight: true },
      { icon: Zap, text: "Tier-1 Bifacial Solar Panels" },
      { icon: Shield, text: "25 Years Panel Warranty" },
      { icon: Clock, text: "45 Days Installation" },
      { icon: TrendingUp, text: "Free Net Metering Setup" },
      { icon: Settings, text: "Complete DISCOM Approval" },
    ],
    stats: [
      { value: "₹78,000", label: "Max Subsidy" },
      { value: "10,000+", label: "Installations" },
      { value: "4.9★", label: "Rating" },
    ],
    cta: "Get Free Quote",
    ctaLink: "#calculator",
    popular: true,
    detailedFeatures: [
      {
        title: "PM Surya Ghar Subsidy Included",
        items: [
          "Tier-1 Bifacial Solar Panels",
          "25 Years Panel Warranty",
          "45 Days Installation",
          "Free Net Metering Setup",
          "Complete DISCOM Approval"
        ]
      }
    ]
  },
  {
    id: "cleaning",
    icon: Droplets,
    title: "Solar Panel Cleaning",
    titleHindi: "सोलर पैनल क्लीनिंग",
    tagline: "Essential Service",
    tagColor: "bg-sky-100 text-sky-700 border-sky-200",
    description: "Professional cleaning service to maintain peak efficiency. Dust reduces output by 15-25%. Regular cleaning ensures maximum generation.",
    descriptionHindi: "धूल से 15-25% बिजली कम बनती है। नियमित सफाई से अधिकतम बिजली बनेगी।",
    price: "₹500",
    priceNote: "per kW / visit",
    gradient: "from-sky-500 via-cyan-500 to-teal-400",
    shadowColor: "shadow-sky-500/20",
    hoverShadow: "hover:shadow-sky-500/30",
    features: [
      { icon: Sparkles, text: "Deionized Water Cleaning", highlight: true },
      { icon: Shield, text: "No Scratches Guaranteed" },
      { icon: TrendingUp, text: "Restore 98% Efficiency" },
      { icon: Clock, text: "Same Day Service" },
      { icon: Calendar, text: "AMC Plans Available" },
      { icon: BadgeCheck, text: "Trained Technicians" },
    ],
    stats: [
      { value: "25%", label: "Output Boost" },
      { value: "2 Hrs", label: "Avg. Time" },
      { value: "₹2/kW", label: "AMC Rate" },
    ],
    cta: "Book Cleaning",
    ctaLink: "#contact",
    popular: false,
    detailedFeatures: [
      {
        title: "Professional Process",
        items: [
          "Deionized (DI) Water Treatment",
          "Soft Brush Non-Abrasive Cleaning",
          "Bird Dropping & Stubborn Stain Removal",
          "Full System Inspection Included"
        ]
      },
      {
        title: "AMC Benefits",
        items: [
          "Monthly/Quarterly Cleaning Visits",
          "Priority Emergency Response",
          "Free Minor Repairs Included",
          "Generation Monitoring Support"
        ]
      }
    ]
  },
  {
    id: "maintenance",
    icon: Wrench,
    title: "Repair & Maintenance",
    titleHindi: "रिपेयर और मेंटेनेंस",
    tagline: "Expert Care",
    tagColor: "bg-emerald-100 text-emerald-700 border-emerald-200",
    description: "Complete maintenance and repair services for all brands. Inverter issues, panel damage, wiring faults - we fix everything.",
    descriptionHindi: "इन्वर्टर, पैनल, वायरिंग - सभी ब्रांड की मरम्मत और रखरखाव।",
    price: "₹299",
    priceNote: "inspection fee (adjustable)",
    gradient: "from-emerald-500 via-green-500 to-lime-400",
    shadowColor: "shadow-emerald-500/20",
    hoverShadow: "hover:shadow-emerald-500/30",
    features: [
      { icon: Settings, text: "All Brands Supported", highlight: true },
      { icon: Zap, text: "Inverter Repair & Replacement" },
      { icon: Shield, text: "Panel Damage Assessment" },
      { icon: Clock, text: "24-48 Hour Response" },
      { icon: BadgeCheck, text: "Genuine Spare Parts" },
      { icon: TrendingUp, text: "Performance Optimization" },
    ],
    stats: [
      { value: "500+", label: "Repairs/Month" },
      { value: "24 Hrs", label: "Response" },
      { value: "90 Days", label: "Warranty" },
    ],
    cta: "Request Service",
    ctaLink: "#contact",
    popular: false,
    detailedFeatures: [
      {
        title: "Common Repairs",
        items: [
          "Inverter Error Codes & Failures",
          "Panel Hotspot & Micro-Crack Detection",
          "DC/AC Wiring & Earthing Issues",
          "Structure Rust & Damage Repair"
        ]
      },
      {
        title: "What We Offer",
        items: [
          "Free Telephonic Diagnosis",
          "Transparent Pricing - No Hidden Costs",
          "Genuine OEM Spare Parts Only",
          "90-Day Service Warranty"
        ]
      }
    ]
  },
]

function SolutionCard({ solution, isExpanded, onToggle, index }: { 
  solution: typeof solutions[0]
  isExpanded: boolean
  onToggle: () => void
  index: number
}) {
  const Icon = solution.icon

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className={`relative bg-white rounded-3xl overflow-hidden border transition-all duration-500 ${
        solution.popular 
          ? `border-[var(--orange)]/30 shadow-xl ${solution.shadowColor}` 
          : `border-[var(--border-color)] shadow-lg`
      } ${solution.hoverShadow} hover:shadow-2xl group`}
    >
      {/* Popular Badge */}
      {solution.popular && (
        <div className="absolute top-0 right-0">
          <div className="relative">
            <div className={`bg-gradient-to-r ${solution.gradient} text-white text-[10px] font-bold uppercase tracking-wider px-6 py-1.5 rounded-bl-2xl shadow-lg`}>
              <div className="flex items-center gap-1.5">
                <Star className="w-3 h-3 fill-white" />
                Most Popular
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Card Header */}
      <div className={`relative p-6 pb-0 ${solution.popular ? 'pt-8' : ''}`}>
        {/* Icon */}
        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${solution.gradient} flex items-center justify-center mb-5 shadow-lg ${solution.shadowColor} group-hover:scale-105 transition-transform duration-300`}>
          <Icon className="w-8 h-8 text-white" />
        </div>

        {/* Tag */}
        <span className={`inline-block text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full border mb-4 ${solution.tagColor}`}>
          {solution.tagline}
        </span>

        {/* Title */}
        <h3 className="font-[family-name:var(--font-syne)] text-xl font-bold text-[var(--ink)] mb-1 group-hover:text-[var(--blue)] transition-colors">
          {solution.title}
        </h3>
        <p className="font-[family-name:var(--font-noto-sans-devanagari)] text-[13px] text-[var(--ink-muted)] mb-4">
          {solution.titleHindi}
        </p>

        {/* Price */}
        <div className="flex items-baseline gap-2 mb-4">
          <span className={`font-[family-name:var(--font-syne)] text-3xl font-bold bg-gradient-to-r ${solution.gradient} bg-clip-text text-transparent`}>
            {solution.price}
          </span>
          <span className="text-[12px] text-[var(--ink-muted)]">{solution.priceNote}</span>
        </div>

        {/* Description */}
        <p className="text-[13.5px] text-[var(--ink-soft)] leading-relaxed mb-2">
          {solution.description}
        </p>
        <p className="font-[family-name:var(--font-noto-sans-devanagari)] text-[12px] text-[var(--ink-muted)] mb-5">
          {solution.descriptionHindi}
        </p>
      </div>

      {/* Stats Bar */}
      <div className="px-6 py-4 bg-[var(--surface)] border-y border-[var(--border-color)]">
        <div className="flex justify-between">
          {solution.stats.map((stat, i) => (
            <div key={i} className="text-center">
              <div className={`font-[family-name:var(--font-syne)] text-lg font-bold bg-gradient-to-r ${solution.gradient} bg-clip-text text-transparent`}>
                {stat.value}
              </div>
              <div className="text-[10px] text-[var(--ink-muted)] uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

{/* Features - Highlighted Only */}
        <div className="p-6 pt-5">
          <ul className="space-y-3 mb-6">
            {solution.features.filter(f => f.highlight).map((feature, i) => {
              const FeatureIcon = feature.icon
              return (
                <li key={i} className="flex items-center gap-3">
                  <div className={`w-6 h-6 rounded-lg flex items-center justify-center flex-shrink-0 bg-gradient-to-br ${solution.gradient} shadow-sm`}>
                    <FeatureIcon className="w-3.5 h-3.5 text-white" />
                  </div>
                  <span className="text-[13px] font-semibold text-[var(--ink)]">
                    {feature.text}
                  </span>
                </li>
              )
            })}
          </ul>

          {/* Expandable Detailed Features */}
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="pt-4 border-t border-[var(--border-color)] space-y-5">
                  {/* All Features */}
                  <div>
                    <h4 className="text-[12px] font-bold uppercase tracking-wider text-[var(--ink-muted)] mb-3">
                      All Features
                    </h4>
                    <ul className="space-y-2">
                      {solution.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2 text-[12.5px] text-[var(--ink-soft)]">
                          <CheckCircle2 className={`w-4 h-4 flex-shrink-0 mt-0.5 ${
                            solution.id === 'new-solar' ? 'text-[var(--orange)]' :
                            solution.id === 'cleaning' ? 'text-sky-500' : 'text-emerald-500'
                          }`} />
                          {feature.text}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

        {/* Toggle Details Button */}
        <button
          onClick={onToggle}
          className="w-full text-[12px] font-medium text-[var(--ink-muted)] hover:text-[var(--ink)] py-2 transition-colors"
        >
          {isExpanded ? "Show Less ↑" : "View All Details ↓"}
        </button>

        {/* CTA Button */}
        <Link
          href={solution.ctaLink}
          className={`mt-3 w-full flex items-center justify-center gap-2 py-4 text-[14px] font-semibold rounded-xl transition-all duration-300 group/btn ${
            solution.popular
              ? `bg-gradient-to-r ${solution.gradient} text-white shadow-lg ${solution.shadowColor} hover:shadow-xl hover:-translate-y-0.5`
              : 'bg-[var(--surface)] text-[var(--ink)] border border-[var(--border-color)] hover:bg-[var(--blue)] hover:text-white hover:border-[var(--blue)]'
          }`}
        >
          {solution.cta}
          <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
        </Link>
      </div>
    </motion.div>
  )
}

export default function OurSolutions() {
  const [expandedCard, setExpandedCard] = useState<string | null>(null)

  return (
    <section id="solutions" className="relative py-20 lg:py-28 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-[var(--surface)] to-white" />
      
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[var(--orange)]/[0.03] rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[var(--blue)]/[0.03] rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.14em] uppercase text-[var(--orange)] mb-4">
            <span className="w-8 h-0.5 bg-gradient-to-r from-transparent to-[var(--orange)] rounded-full" />
            Our Services
            <span className="w-8 h-0.5 bg-gradient-to-l from-transparent to-[var(--orange)] rounded-full" />
          </div>
          
          <h2 className="font-[family-name:var(--font-syne)] text-[clamp(1.75rem,5vw,3rem)] font-bold text-[var(--ink)] tracking-tight leading-tight mb-3">
            Complete Solar Solutions
          </h2>
          <p className="font-[family-name:var(--font-noto-sans-devanagari)] text-lg text-[var(--ink-muted)] mb-4">
            सोलर की पूरी सेवा एक ही जगह
          </p>
          <p className="text-[var(--ink-soft)] text-[15px] max-w-2xl mx-auto leading-relaxed">
            Whether you need a new solar installation, professional cleaning to boost efficiency, or expert repairs - we provide 
            <span className="font-semibold text-[var(--ink)]"> end-to-end solar solutions</span> with guaranteed quality and best prices.
          </p>
        </motion.div>

        {/* Quick Stats Bar */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 md:gap-8 mb-12 p-4 bg-white rounded-2xl shadow-sm border border-[var(--border-color)]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {[
            { icon: Sun, value: "10,000+", label: "Solar Systems Installed" },
            { icon: Droplets, value: "5,000+", label: "Panels Cleaned Monthly" },
            { icon: Wrench, value: "500+", label: "Repairs Every Month" },
            { icon: Star, value: "4.9/5", label: "Customer Rating" },
          ].map((stat, i) => (
            <div key={i} className="flex items-center gap-3 px-4 py-2">
              <div className="w-10 h-10 rounded-xl bg-[var(--surface)] flex items-center justify-center">
                <stat.icon className="w-5 h-5 text-[var(--orange)]" />
              </div>
              <div>
                <div className="font-[family-name:var(--font-syne)] text-lg font-bold text-[var(--ink)]">{stat.value}</div>
                <div className="text-[10px] text-[var(--ink-muted)] uppercase tracking-wider">{stat.label}</div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Solutions Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {solutions.map((solution, index) => (
            <SolutionCard
              key={solution.id}
              solution={solution}
              isExpanded={expandedCard === solution.id}
              onToggle={() => setExpandedCard(expandedCard === solution.id ? null : solution.id)}
              index={index}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="mt-14 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <p className="text-[var(--ink-soft)] text-[14px] mb-5">
            Need help choosing the right service? Our solar experts are here to help.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="tel:18001234567"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-[var(--border-color)] text-[var(--ink)] text-[14px] font-semibold rounded-xl hover:border-[var(--blue)] hover:text-[var(--blue)] transition-colors shadow-sm"
            >
              <Phone className="w-4 h-4" />
              Call: 1800-123-SOLAR
            </a>
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--blue)] text-white text-[14px] font-semibold rounded-xl hover:bg-[var(--blue-mid)] transition-colors shadow-lg shadow-blue-500/20"
            >
              Request Callback
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
