"use client"

import { useEffect, useRef, useState } from "react"
import { animate, motion, useInView } from "framer-motion"
import type { Variants } from "framer-motion"
import {
  ArrowRight,
  BadgeCheck,
  Cable,
  DraftingCompass,
  Hammer,
  MessageCircle,
  ShieldCheck,
  Wrench,
} from "lucide-react"
import Link from "next/link"

const stats = [
  { value: 500, prefix: "", suffix: "+", label: "Installations Done" },
  { value: 25, prefix: "", suffix: " yr", label: "Panel Warranty" },
  { value: 78, prefix: "\u20B9", suffix: "k", label: "Max Govt Subsidy" },
  { value: 4.9, prefix: "", suffix: "\u2605", label: "Customer Rating", decimals: 1 },
]

const differentiators = [
  {
    icon: Hammer,
    title: "Hot-Dip Galvanised Structure",
    description: "UTL certified structure with 25-year zinc coating and 160 km/h wind-tested strength for Indian rooftops.",
    cheap: "Pre-GI pipe that rusts in 2 years",
  },
  {
    icon: Cable,
    title: "Armoured Solar Cable",
    description: "UV-resistant, rodent-proof, fire-safe cabling throughout the system, routed cleanly for long-term reliability.",
    cheap: "Local unarmoured wire - fire risk",
  },
  {
    icon: ShieldCheck,
    title: "Triple Earthing (3-point)",
    description: "Lightning protection and mandatory safety compliance with separate panel, inverter, and LA earthing points.",
    cheap: "2-point minimum only",
  },
  {
    icon: BadgeCheck,
    title: "MNRE + UTL Certified",
    description: "Government registered and eligible for the full PM Surya Ghar subsidy, with documentation handled end to end.",
    cheap: "Unregistered vendors, subsidy rejected",
  },
  {
    icon: DraftingCompass,
    title: "37-Point Site Survey + 3D Design",
    description: "Shadow mapping, load analysis, roof checks, and a custom layout before a single panel is installed.",
    cheap: "Quick visit, no analysis",
  },
  {
    icon: Wrench,
    title: "12 Months Free Maintenance",
    description: "Monthly panel cleaning and monitoring included. Dust alone can reduce generation by around 5%.",
    cheap: "Install and disappear",
  },
]

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: "easeOut" },
  },
}

function CountUpStat({
  value,
  prefix,
  suffix,
  decimals = 0,
}: {
  value: number
  prefix: string
  suffix: string
  decimals?: number
}) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (!isInView) return

    const controls = animate(0, value, {
      duration: 1.2,
      ease: "easeOut",
      onUpdate: latest => setDisplay(latest),
    })

    return () => controls.stop()
  }, [isInView, value])

  return (
    <span ref={ref}>
      {prefix}
      {display.toFixed(decimals)}
      <span className="text-[var(--orange)]">{suffix}</span>
    </span>
  )
}

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="mx-auto mb-12 max-w-3xl text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.45 }}
        >
          <div className="mb-4 inline-flex items-center justify-center gap-2 text-[11px] font-bold uppercase tracking-[0.14em] text-[var(--orange)]">
            <span className="h-0.5 w-8 rounded-full bg-[var(--orange)]" />
            Why Surynova
            <span className="h-0.5 w-8 rounded-full bg-[var(--orange)]" />
          </div>
          <h2 className="font-[family-name:var(--font-syne)] text-[clamp(1.75rem,5vw,3rem)] font-bold leading-tight tracking-tight text-[var(--ink)]">
            The Surynova <span className="text-[var(--orange)]">Difference</span>
          </h2>
          <p className="mx-auto mt-4 max-w-[540px] text-[15px] leading-7 text-[var(--ink-soft)] md:text-base">
            Not all solar installers are the same. See the real <span className="font-semibold text-[var(--ink)]">तुलना</span>: what you get as
            <span className="font-semibold text-[var(--blue)]"> हमारा मानक</span> - and what cheap alternatives skip.
          </p>
        </motion.div>

        <motion.div
          className="mb-14 overflow-hidden rounded-2xl bg-[var(--blue)] shadow-xl shadow-blue-950/10"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.45 }}
          transition={{ duration: 0.45, delay: 0.1 }}
        >
          
        </motion.div>

        <motion.div
          className="grid gap-5 md:grid-cols-2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.18 }}
          transition={{ staggerChildren: 0.08 }}
        >
          {differentiators.map(item => {
            const Icon = item.icon

            return (
              <motion.article
                key={item.title}
                variants={cardVariants}
                whileHover={{
                  y: -2,
                  boxShadow: "0 8px 32px rgba(0,76,137,0.12)",
                  transition: { type: "spring", stiffness: 300, damping: 28 },
                }}
                className="group flex h-full gap-4 rounded-2xl border border-[#DDE4EE] border-l-[3px] border-l-[var(--blue)] bg-white p-5 transition-colors duration-200 md:p-6"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#EAF3FB]">
                  <Icon className="h-5 w-5 text-[var(--blue)]" strokeWidth={2.2} />
                </div>

                <div className="min-w-0 flex-1">
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                    <h3 className="font-[family-name:var(--font-syne)] text-[16px] font-bold leading-snug text-[var(--ink)]">
                      {item.title}
                    </h3>
                    <span className="inline-flex min-h-6 w-fit items-center rounded-md bg-[#ECFDF5] px-2.5 text-[11px] font-bold text-[#065F46]">
                      हमारा मानक
                    </span>
                  </div>

                  <p className="mt-3 text-[14px] leading-[1.75] text-[var(--ink-soft)]">
                    {item.description}
                  </p>

                  <div className="my-4 h-px w-full bg-[#DDE4EE]" />

                  <motion.div
                    className="relative overflow-hidden rounded-lg bg-[#FEF2F2] px-3 py-2.5 text-[13px] font-semibold text-[#DC2626]"
                    initial={{ clipPath: "inset(0 100% 0 0)" }}
                    whileInView={{ clipPath: "inset(0 0% 0 0)" }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, ease: "easeOut" }}
                  >
                    <span className="mr-1.5">{"\u2717"}</span>
                    <span className="mr-1.5 font-bold">सस्ता विकल्प:</span>
                    <span className="line-through decoration-[#DC2626]/70">{item.cheap}</span>
                  </motion.div>
                </div>
              </motion.article>
            )
          })}
        </motion.div>
      </div>

      <motion.div
        className="mt-16 bg-[var(--surface)] px-4 py-12 text-center sm:px-6 lg:px-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.45 }}
      >
        <h3 className="mx-auto max-w-2xl font-[family-name:var(--font-syne)] text-2xl font-bold leading-snug text-[var(--ink)]">
          Still comparing? Talk to our solar expert - free, no pressure.
        </h3>
        <div className="mx-auto mt-6 flex max-w-md flex-col items-center justify-center gap-4 sm:max-w-none sm:flex-row">
          <Link
            href="#contact"
            className="inline-flex h-[52px] w-full items-center justify-center gap-2 rounded-2xl bg-[var(--orange)] px-7 font-[family-name:var(--font-syne)] text-[14px] font-bold text-white shadow-lg shadow-orange-500/20 transition-colors hover:bg-[#E96800] sm:w-auto"
          >
            Book Free Site Survey
            <ArrowRight className="h-4 w-4" />
          </Link>
          <a
            href="https://wa.me/916396814058"
            className="inline-flex min-h-11 w-full items-center justify-center gap-2 text-[14px] font-bold text-[#128C7E] underline decoration-[#128C7E]/35 underline-offset-4 transition-colors hover:text-[#075E54] sm:w-auto"
          >
            <MessageCircle className="h-4 w-4" />
            Or WhatsApp us
          </a>
        </div>
      </motion.div>
    </section>
  )
}
