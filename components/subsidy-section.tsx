"use client"

import { motion } from "framer-motion"
import { BadgeIndianRupee, Building2, Sparkles, ExternalLink, CheckCircle2 } from "lucide-react"
import Link from "next/link"

const subsidyData = [
  {
    capacity: "1 kW",
    cost: "₹60,000 - 70,000",
    subsidy: "₹30,000",
    netCost: "₹30,000 - 40,000",
    note: "For small homes",
    highlight: false,
  },
  {
    capacity: "2 kW",
    cost: "₹1,20,000 - 1,40,000",
    subsidy: "₹60,000",
    netCost: "₹60,000 - 80,000",
    note: "Most popular",
    highlight: false,
  },
  {
    capacity: "3 kW",
    cost: "₹1,80,000 - 2,10,000",
    subsidy: "₹78,000",
    netCost: "₹1,02,000 - 1,32,000",
    note: "Best value",
    highlight: true,
  },
  {
    capacity: "4-10 kW",
    cost: "₹2,40,000+",
    subsidy: "₹78,000",
    netCost: "₹1,62,000+",
    note: "Large homes",
    highlight: false,
  },
]

const steps = [
  {
    step: "01",
    title: "Apply on PM Surya Ghar Portal",
    desc: "Register using your electricity bill consumer number",
  },
  {
    step: "02",
    title: "Get Feasibility Report",
    desc: "DISCOM verifies your connection & approves application",
  },
  {
    step: "03",
    title: "Choose Empanelled Vendor",
    desc: "Select Surynova or any MNRE-approved installer",
  },
  {
    step: "04",
    title: "Installation & Commissioning",
    desc: "Complete installation in 45-60 days with net meter",
  },
  {
    step: "05",
    title: "Receive Subsidy",
    desc: "Direct bank transfer within 30 days of commissioning",
  },
]

export default function SubsidySection() {
  return (
    <section id="subsidy" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Government Banner */}
        <motion.div 
          className="bg-gradient-to-r from-[var(--blue)] to-[var(--blue-mid)] rounded-2xl p-6 md:p-8 mb-12 relative overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="absolute inset-0 opacity-[0.03]">
            <div className="absolute right-0 top-0 w-64 h-64 bg-white rounded-full blur-3xl" />
          </div>
          <div className="relative z-10 flex flex-col md:flex-row md:items-center gap-6">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-white/10 rounded-xl flex items-center justify-center border border-white/20">
                <span className="text-2xl">🇮🇳</span>
              </div>
              <div>
                <div className="text-white/60 text-[11px] uppercase tracking-wider font-medium mb-1">
                  Government of India Initiative
                </div>
                <div className="text-white font-[family-name:var(--font-syne)] text-xl md:text-2xl font-bold">
                  PM Surya Ghar Muft Bijli Yojana
                </div>
              </div>
            </div>
            <div className="md:ml-auto flex flex-col sm:flex-row gap-3">
              <a
                href="https://pmsuryaghar.gov.in"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white text-[var(--blue)] font-semibold text-[14px] rounded-xl hover:bg-white/90 transition-colors"
              >
                <Building2 className="w-4 h-4" />
                Visit Official Portal
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <Link
                href="#calculator"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-[var(--orange)] text-white font-semibold text-[14px] rounded-xl hover:bg-[var(--orange-light)] transition-colors"
              >
                <BadgeIndianRupee className="w-4 h-4" />
                Check Eligibility
              </Link>
            </div>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Subsidy Table */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.14em] uppercase text-[var(--orange)] mb-3">
              <span className="w-5 h-0.5 bg-[var(--orange)] rounded-full" />
              Subsidy Details
            </div>
            <h2 className="font-[family-name:var(--font-syne)] text-[clamp(1.5rem,3vw,2rem)] font-bold text-[var(--ink)] tracking-tight leading-tight mb-2">
              Government Subsidy Breakdown
            </h2>
            <p className="text-[var(--ink-soft)] text-[14px] mb-6">
              Central Government subsidy under PM Surya Ghar scheme
            </p>

            <div className="overflow-x-auto border border-[var(--border-color)] rounded-xl shadow-md">
              <table className="min-w-full">
                <thead>
                  <tr className="bg-[var(--blue)]">
                    <th className="text-left text-white text-[11px] font-semibold uppercase tracking-wider px-4 py-3">Capacity</th>
                    <th className="text-left text-white text-[11px] font-semibold uppercase tracking-wider px-4 py-3">Est. Cost</th>
                    <th className="text-left text-white text-[11px] font-semibold uppercase tracking-wider px-4 py-3">Subsidy</th>
                    <th className="text-left text-white text-[11px] font-semibold uppercase tracking-wider px-4 py-3">You Pay</th>
                  </tr>
                </thead>
                <tbody>
                  {subsidyData.map((row, i) => (
                    <tr 
                      key={i} 
                      className={`border-t border-[var(--border-soft)] ${
                        row.highlight ? "bg-[var(--orange-pale)]" : i % 2 === 0 ? "bg-[#F0F6FF]" : "bg-white"
                      }`}
                    >
                      <td className="px-4 py-3.5">
                        <div className="font-semibold text-[var(--ink)] text-[14px]">{row.capacity}</div>
                        <div className="text-[11px] text-[var(--ink-muted)]">{row.note}</div>
                      </td>
                      <td className="px-4 py-3.5 text-[13px] text-[var(--ink-mid)]">{row.cost}</td>
                      <td className="px-4 py-3.5">
                        <span className="font-[family-name:var(--font-syne)] font-bold text-[var(--green-gov)] text-[15px]">
                          {row.subsidy}
                        </span>
                        {row.highlight && (
                          <span className="ml-2 inline-block text-[9px] font-semibold bg-[var(--orange)] text-white px-2 py-0.5 rounded uppercase tracking-wide">
                            Max
                          </span>
                        )}
                      </td>
                      <td className="px-4 py-3.5 text-[13px] font-medium text-[var(--ink)]">{row.netCost}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-[11.5px] text-[var(--ink-muted)] mt-4 flex items-start gap-2">
              <Sparkles className="w-4 h-4 text-[var(--orange)] flex-shrink-0 mt-0.5" />
              *Subsidy credited directly to your bank account within 30 days of commissioning. Rates as per MNRE guidelines.
            </p>
          </motion.div>

          {/* Process Steps */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.14em] uppercase text-[var(--orange)] mb-3">
              <span className="w-5 h-0.5 bg-[var(--orange)] rounded-full" />
              Application Process
            </div>
            <h2 className="font-[family-name:var(--font-syne)] text-[clamp(1.5rem,3vw,2rem)] font-bold text-[var(--ink)] tracking-tight leading-tight mb-2">
              How to Get Your Subsidy
            </h2>
            <p className="text-[var(--ink-soft)] text-[14px] mb-8">
              Simple 5-step process to claim your solar subsidy
            </p>

            <div className="relative pl-10">
              {/* Vertical line */}
              <div className="absolute left-[15px] top-6 bottom-6 w-px bg-[var(--border-color)]" />

              {steps.map((item, i) => (
                <div key={i} className="relative pb-8 last:pb-0">
                  <div className="absolute left-[-40px] top-0 w-8 h-8 rounded-full bg-[var(--blue)] text-white text-[12px] font-bold flex items-center justify-center font-[family-name:var(--font-syne)] shadow-md z-10 ring-4 ring-white">
                    {i + 1}
                  </div>
                  <div className="pl-6">
                    <h3 className="font-[family-name:var(--font-syne)] text-[15px] font-bold text-[var(--ink)] mb-1">
                      {item.title}
                    </h3>
                    <p className="text-[13px] text-[var(--ink-soft)] leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
