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
    tagColor: "bg-[#004C89]/10 text-[#004C89] border border-[#004C89]/15",
    icon: Zap,
    gradient: "from-[#004C89] via-[#0066B8] to-[#4DA3D9]",
    shadowColor: "shadow-[#004C89]/20",
    iconColor: "text-white",
    headerBg: "bg-[#004C89]/[0.04]",
    nameColor: "text-[#004C89]",
    description: "Connected to the utility grid, this system uses solar power during the day and switches to grid electricity at night. Ideal for areas with stable power supply.",
    features: [
      "Net metering — sell excess power",
      "No battery maintenance required",
      "Lowest upfront cost",
      "ROI in 4-5 years",
      "25-year panel warranty"
    ],
    checkBg: "bg-[#004C89]/10",
    checkColor: "text-[#004C89]",
  },
  {
    id: "off-grid",
    name: "Off-Grid Solar",
    hindi: "ऑफ-ग्रिड सोलर सिस्टम",
    tag: "Full Independence",
    tagColor: "bg-[#004C89]/10 text-[#004C89] border border-[#004C89]/15",
    icon: Battery,
    gradient: "from-[#004C89] via-[#0066B8] to-[#4DA3D9]",
    shadowColor: "shadow-[#004C89]/20",
    iconColor: "text-white",
    headerBg: "bg-[#004C89]/[0.04]",
    nameColor: "text-[#004C89]",
    description: "Completely independent system with battery storage. Perfect for remote locations or areas with frequent power cuts. Be your own power station.",
    features: [
      "Complete grid independence",
      "Battery backup for 24/7 power",
      "Works in remote areas",
      "No electricity bills ever",
      "Lithium-ion battery options"
    ],
    checkBg: "bg-[#004C89]/10",
    checkColor: "text-[#004C89]",
  },
  {
    id: "hybrid",
    name: "Hybrid Solar",
    hindi: "हाइब्रिड सोलर सिस्टम",
    tag: "Best of Both",
    tagColor: "bg-[#004C89]/10 text-[#004C89] border border-[#004C89]/15",
    icon: Sparkles,
    gradient: "from-[#004C89] via-[#0066B8] to-[#4DA3D9]",
    shadowColor: "shadow-[#004C89]/20",
    iconColor: "text-white",
    headerBg: "bg-[#004C89]/[0.04]",
    nameColor: "text-[#004C89]",
    description: "The smart choice combining grid connectivity with battery backup. Enjoy net metering benefits while having power during outages.",
    features: [
      "Grid + Battery backup combo",
      "Seamless power switchover",
      "Net metering compatible",
      "Maximum energy security",
      "Smart energy management"
    ],
    checkBg: "bg-[#004C89]/10",
    checkColor: "text-[#004C89]",
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
                className={`bg-white rounded-2xl overflow-hidden border border-[#004C89]/15 shadow-sm ${system.shadowColor} hover:shadow-xl hover:border-[#004C89]/30 transition-all duration-300 group h-full flex flex-col`}
              >
                {/* Card Header */}
                <div className={`${system.headerBg} p-6 pb-5 border-b border-[#004C89]/10`}>
                  <div className={`w-12 h-12 bg-gradient-to-br ${system.gradient} rounded-xl flex items-center justify-center mb-4 shadow-lg ${system.shadowColor} group-hover:scale-105 transition-transform duration-300`}>
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
                <div className="p-6 pt-5 flex flex-col flex-1">
                  <p className="text-[13.5px] text-[var(--ink-soft)] leading-relaxed mb-5">
                    {system.description}
                  </p>
                  
                  <ul className="space-y-2.5 flex-1">
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
                    className={`mt-6 w-full flex items-center justify-center gap-2 py-3 text-[13px] font-semibold text-white bg-gradient-to-r ${system.gradient} rounded-xl shadow-lg ${system.shadowColor} transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5`}
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
          <Link href="#contact" className="text-[#004C89] font-medium hover:underline ml-1">
            Talk to an Expert →
          </Link>
        </motion.p>
      </div>
    </section>
  )
}
