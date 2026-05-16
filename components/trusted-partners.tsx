"use client"

import { motion } from "framer-motion"

const partners = [
  { name: "LONGi Solar", tone: "text-[#df1f26]" },
  { name: "Jinko Solar", tone: "text-[#39a935]" },
  { name: "JA Solar", tone: "text-[#165f9f]" },
  { name: "SunPower", tone: "text-[#f2a900]" },
  { name: "Vikram Solar", tone: "text-[#e11f27]" },
  { name: "Trina Solar", tone: "text-[#169bd5]" },
  { name: "Tata Power Solar", tone: "text-[#1261a6]" },
  { name: "Rayzon Solar", tone: "text-[#344256]" },
  { name: "RenewSys", tone: "text-[#1674b8]" },
  { name: "Adani Solar", tone: "text-[#7652b8]" },
  { name: "Waaree", tone: "text-[#1d9b45]" },
]

export default function TrustedPartners() {
  return (
    <section
      id="partners"
      aria-labelledby="trusted-partners-title"
      className="relative overflow-hidden bg-white py-18 sm:py-20 lg:py-24"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,115,0,0.055),transparent_34%),radial-gradient(circle_at_80%_60%,rgba(0,76,137,0.045),transparent_30%)]" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--border-color)] to-transparent" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="mx-auto mb-11 max-w-3xl text-center sm:mb-14"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="mb-4 inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.16em] text-[var(--orange)]">
            <span className="h-px w-7 bg-gradient-to-r from-transparent to-[var(--orange)]" />
            Trusted by Industry Leaders
            <span className="h-px w-7 bg-gradient-to-l from-transparent to-[var(--orange)]" />
          </div>

          <h2
            id="trusted-partners-title"
            className="font-[family-name:var(--font-syne)] text-[clamp(1.8rem,4vw,2.75rem)] font-bold leading-tight tracking-tight text-[var(--ink)]"
          >
            Our Trusted Solar Partners
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-relaxed text-[var(--ink-soft)] sm:text-base">
            Collaborating with India&apos;s most reliable solar technology brands.
          </p>
        </motion.div>

        <motion.div
          className="relative mx-auto max-w-7xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.1 }}
        >
          <div className="absolute inset-x-12 top-1/2 h-20 -translate-y-1/2 rounded-full bg-[var(--orange)]/[0.045] blur-3xl" />

          <div className="trusted-partners-mask group relative overflow-hidden py-5 sm:py-7">
            <div className="trusted-partners-marquee flex w-max items-center will-change-transform group-hover:[animation-play-state:paused]">
              {[0, 1].map((groupIndex) => (
                <div
                  key={groupIndex}
                  className="flex shrink-0 items-center gap-12 pr-12 sm:gap-16 sm:pr-16 lg:gap-20 lg:pr-20"
                  aria-hidden={groupIndex === 1}
                >
                  {partners.map((partner) => (
                    <div
                      key={`${partner.name}-${groupIndex}`}
                      className="flex h-16 min-w-[154px] items-center justify-center sm:h-20 sm:min-w-[200px] lg:min-w-[230px]"
                    >
                      <span
                        className={`select-none whitespace-nowrap font-[family-name:var(--font-syne)] text-[1.25rem] font-extrabold tracking-tight opacity-90 transition-all duration-500 ease-out hover:scale-[1.05] hover:opacity-100 sm:text-[1.55rem] lg:text-[1.75rem] ${partner.tone}`}
                      >
                        {partner.name}
                      </span>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-white via-white/80 to-transparent sm:w-24" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-white via-white/80 to-transparent sm:w-24" />
        </motion.div>
      </div>
    </section>
  )
}
