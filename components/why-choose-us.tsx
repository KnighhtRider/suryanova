"use client"

import { motion } from "framer-motion"
import { 
  Shield, 
  Award, 
  Clock, 
  Headphones, 
  BadgeCheck, 
  Wrench,
  MapPin,
  Star,
  ThumbsDown,
  ThumbsUp
} from "lucide-react"

const qualityItems = [
  {
    icon: Shield,
    title: "Tier-1 Solar Panels",
    goodLabel: "Premium Quality",
    description: "We only use MNRE-approved Tier-1 panels from top brands like Adani, Tata, and Waaree with 25-year performance warranty.",
    badLabel: "Cheap imports from unverified sources",
  },
  {
    icon: Award,
    title: "MNRE Empanelled",
    goodLabel: "Government Verified",
    description: "Officially registered with Ministry of New & Renewable Energy. Eligible vendor for all government subsidy schemes.",
    badLabel: "Unregistered vendors with no credentials",
  },
  {
    icon: Clock,
    title: "45-Day Installation",
    goodLabel: "Fast & Reliable",
    description: "Complete installation, commissioning, and net meter activation within 45 days of order confirmation.",
    badLabel: "Months of delays and excuses",
  },
  {
    icon: Headphones,
    title: "Dedicated Support",
    goodLabel: "Always Available",
    description: "24/7 monitoring dashboard, dedicated relationship manager, and same-day response for all queries.",
    badLabel: "No support after installation",
  },
  {
    icon: BadgeCheck,
    title: "Transparent Pricing",
    goodLabel: "No Hidden Costs",
    description: "All-inclusive pricing with no surprises. Everything from panels to net meter, installation to documentation.",
    badLabel: "Hidden charges and unclear billing",
  },
  {
    icon: Wrench,
    title: "5-Year AMC",
    goodLabel: "Complete Care",
    description: "Annual maintenance contract covering cleaning, inspection, and repairs. Keep your system at peak efficiency.",
    badLabel: "Left alone after warranty ends",
  },
]

const stats = [
  { value: "10,000+", label: "Installations", icon: MapPin },
  { value: "300+", label: "Cities Covered", icon: MapPin },
  { value: "4.8/5", label: "Customer Rating", icon: Star },
  { value: "25+", label: "Years Warranty", icon: Shield },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
}

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.14em] uppercase text-[var(--orange)] mb-3 justify-center">
            <span className="w-5 h-0.5 bg-[var(--orange)] rounded-full" />
            Why Surynova
            <span className="w-5 h-0.5 bg-[var(--orange)] rounded-full" />
          </div>
          <h2 className="font-[family-name:var(--font-syne)] text-[clamp(1.75rem,4vw,2.5rem)] font-bold text-[var(--ink)] tracking-tight leading-tight mb-3">
            The Surynova Difference
          </h2>
          <p className="text-[var(--ink-soft)] text-[15px] max-w-2xl mx-auto leading-relaxed">
            Not all solar installers are created equal. Here&apos;s what sets us apart from cheap alternatives that cost you more in the long run.
          </p>
        </motion.div>

        {/* Stats Bar */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          {stats.map((stat, i) => (
            <div 
              key={i} 
              className="text-center p-5 bg-[var(--surface)] rounded-xl border border-[var(--border-soft)]"
            >
              <div className="font-[family-name:var(--font-syne)] text-2xl md:text-3xl font-extrabold text-[var(--blue)] mb-1">
                {stat.value}
              </div>
              <div className="text-[12px] text-[var(--ink-muted)] uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Quality Grid */}
        <motion.div 
          className="grid md:grid-cols-2 gap-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {qualityItems.map((item, i) => {
            const Icon = item.icon
            return (
              <motion.div
                key={i}
                variants={itemVariants}
                className="bg-white border border-[var(--border-color)] rounded-xl p-5 flex gap-4 hover:border-[var(--blue)] hover:shadow-lg hover:shadow-blue-500/5 transition-all duration-300 group"
              >
                <div className="w-10 h-10 bg-[var(--blue-light)] rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-[var(--blue)] group-hover:text-white transition-colors">
                  <Icon className="w-5 h-5 text-[var(--blue)] group-hover:text-white transition-colors" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-[var(--ink)] text-[15px] mb-1">{item.title}</h3>
                  
                  <div className="flex items-center gap-2 mb-2">
                    <span className="inline-flex items-center gap-1 text-[11px] font-semibold px-2 py-0.5 rounded bg-emerald-100 text-[var(--green-gov)]">
                      <ThumbsUp className="w-3 h-3" />
                      {item.goodLabel}
                    </span>
                  </div>
                  
                  <p className="text-[13px] text-[var(--ink-soft)] leading-relaxed mb-2">
                    {item.description}
                  </p>
                  
                  <div className="flex items-center gap-2 text-[11px] text-red-600 bg-red-50 px-2 py-1 rounded">
                    <ThumbsDown className="w-3 h-3" />
                    <span className="line-through opacity-70">{item.badLabel}</span>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Trust Badges */}
        <motion.div 
          className="mt-12 pt-10 border-t border-[var(--border-soft)]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <p className="text-center text-[12px] text-[var(--ink-muted)] uppercase tracking-wider mb-6">
            Trusted by Leading Organizations
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 opacity-50">
            {["MNRE", "ISO 9001", "BIS Certified", "Make in India", "DISCOM Approved"].map((badge, i) => (
              <div key={i} className="text-[14px] font-semibold text-[var(--ink-mid)]">
                {badge}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
