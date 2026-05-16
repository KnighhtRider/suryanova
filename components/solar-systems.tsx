"use client"

import { motion } from "framer-motion"
import { Zap, Battery, Sparkles, CheckCircle, ArrowRight } from "lucide-react"
import Link from "next/link"

const systems = [
  {
    id: "on-grid",
    name: "On-Grid Solar",
    hindi: "ऑन-ग्रिड सोलर सिस्टम",
    tag: "Most Popular",
    tagColor: "bg-[var(--blue-dim)] text-[var(--blue)]",
    icon: Zap,
    iconBg: "bg-[var(--blue-dim)]",
    iconColor: "text-[var(--blue)]",
    headerBg: "bg-[var(--blue-light)]",
    nameColor: "text-[var(--blue)]",
    description: "Connected to the utility grid, this system uses solar power during the day and switches to grid electricity at night. Ideal for areas with stable power supply.",
    features: [
      "Net metering — sell excess power",
      "No battery maintenance required",
      "Lowest upfront cost",
      "ROI in 4-5 years",
      "25-year panel warranty"
    ],
    checkBg: "bg-[var(--blue-dim)]",
    checkColor: "text-[var(--blue)]",
  },
  {
    id: "off-grid",
    name: "Off-Grid Solar",
    hindi: "ऑफ-ग्रिड सोलर सिस्टम",
    tag: "Full Independence",
    tagColor: "bg-amber-100 text-amber-700",
    icon: Battery,
    iconBg: "bg-amber-100",
    iconColor: "text-amber-600",
    headerBg: "bg-amber-50",
    nameColor: "text-amber-800",
    description: "Completely independent system with battery storage. Perfect for remote locations or areas with frequent power cuts. Be your own power station.",
    features: [
      "Complete grid independence",
      "Battery backup for 24/7 power",
      "Works in remote areas",
      "No electricity bills ever",
      "Lithium-ion battery options"
    ],
    checkBg: "bg-amber-100",
    checkColor: "text-amber-600",
  },
  {
    id: "hybrid",
    name: "Hybrid Solar",
    hindi: "हाइब्रिड सोलर सिस्टम",
    tag: "Best of Both",
    tagColor: "bg-emerald-100 text-emerald-700",
    icon: Sparkles,
    iconBg: "bg-emerald-100",
    iconColor: "text-emerald-600",
    headerBg: "bg-emerald-50",
    nameColor: "text-emerald-800",
    description: "The smart choice combining grid connectivity with battery backup. Enjoy net metering benefits while having power during outages.",
    features: [
      "Grid + Battery backup combo",
      "Seamless power switchover",
      "Net metering compatible",
      "Maximum energy security",
      "Smart energy management"
    ],
    checkBg: "bg-emerald-100",
    checkColor: "text-emerald-600",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
}

export default function SolarSystems() {
  return (
    <section id="systems" className="py-20 lg:py-28 bg-[var(--surface)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div 
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.14em] uppercase text-[var(--orange)] mb-3">
            <span className="w-5 h-0.5 bg-[var(--orange)] rounded-full" />
            Solar System Types
          </div>
          <h2 className="font-[family-name:var(--font-syne)] text-[clamp(1.75rem,4vw,2.5rem)] font-bold text-[var(--ink)] tracking-tight leading-tight mb-3">
            Choose Your Solar System
          </h2>
          <p className="text-[var(--ink-soft)] text-[15px] max-w-2xl leading-relaxed">
            Select the perfect solar solution based on your location, power needs, and budget. All systems come with 
            <span className="font-semibold text-[var(--ink)]"> government subsidy eligibility</span> and comprehensive warranties.
          </p>
        </motion.div>

        {/* System Cards */}
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {systems.map((system) => {
            const Icon = system.icon
            return (
              <motion.div
                key={system.id}
                variants={cardVariants}
                className="bg-white rounded-2xl overflow-hidden border border-[var(--border-color)] shadow-sm hover:shadow-lg transition-shadow duration-300 group"
              >
                {/* Card Header */}
                <div className={`${system.headerBg} p-6 pb-5`}>
                  <div className={`w-12 h-12 ${system.iconBg} rounded-xl flex items-center justify-center mb-4`}>
                    <Icon className={`w-6 h-6 ${system.iconColor}`} />
                  </div>
                  <h3 className={`font-[family-name:var(--font-syne)] text-xl font-bold ${system.nameColor} mb-1`}>
                    {system.name}
                  </h3>
                  <span className="font-[family-name:var(--font-noto-sans-devanagari)] text-xs opacity-60 block mb-3">
                    {system.hindi}
                  </span>
                  <span className={`inline-block text-[11px] font-semibold px-2.5 py-1 rounded ${system.tagColor} tracking-wide uppercase`}>
                    {system.tag}
                  </span>
                </div>

                {/* Card Body */}
                <div className="p-6 pt-5">
                  <p className="text-[13.5px] text-[var(--ink-soft)] leading-relaxed mb-5">
                    {system.description}
                  </p>
                  
                  <ul className="space-y-2.5">
                    {system.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2.5 text-[12.5px] text-[var(--ink-mid)]">
                        <div className={`w-[18px] h-[18px] ${system.checkBg} rounded-full flex items-center justify-center flex-shrink-0`}>
                          <CheckCircle className={`w-3 h-3 ${system.checkColor}`} />
                        </div>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="#calculator"
                    className="mt-6 w-full flex items-center justify-center gap-2 py-3 text-[13px] font-semibold text-[var(--blue)] bg-[var(--blue-light)] rounded-xl transition-colors group-hover:bg-[var(--blue)] group-hover:text-white"
                  >
                    Get Quote
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Help text */}
        <motion.p 
          className="text-center text-[13px] text-[var(--ink-muted)] mt-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          Not sure which system is right for you? Our solar experts will help you choose. 
          <Link href="#contact" className="text-[var(--blue)] font-medium hover:underline ml-1">
            Talk to an Expert →
          </Link>
        </motion.p>
      </div>
    </section>
  )
}
