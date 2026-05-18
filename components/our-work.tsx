"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"

const projects = [
  {
    id: 1,
    img: "/work/1.png",
    title: "Residential Rooftop · Lucknow",
    sub: "On-Grid · 5kW · Hot-Dip Galvanised Structure · UTL Panels",
    location: "Lucknow, Uttar Pradesh",
    type: "On-Grid",
    kw: "5 kW",
  },
  {
    id: 2,
    img: "/work/2.png",
    title: "Hybrid System · Kanpur",
    sub: "Hybrid · 3kW · Battery Backup · 24/7 Power",
    location: "Kanpur, UP",
    type: "Hybrid",
    kw: "3 kW",
  },
  {
    id: 3,
    img: "/work/3.png",
    title: "Off-Grid Install · Agra",
    sub: "Off-Grid · 2kW · Complete Energy Independence",
    location: "Agra, UP",
    type: "Off-Grid",
    kw: "2 kW",
  },
  {
    id: 4,
    img: "/work/4.png",
    title: "Flat Roof On-Grid · Varanasi",
    sub: "On-Grid · 4kW · ₹60,000 Subsidy · 25yr Warranty",
    location: "Varanasi, UP",
    type: "On-Grid",
    kw: "4 kW",
  },
  {
    id: 5,
    img: "/work/5.png",
    title: "Large Residential · Gorakhpur",
    sub: "Hybrid · 6kW · Tiled Roof Specialist Mount",
    location: "Gorakhpur, UP",
    type: "Hybrid",
    kw: "6 kW",
  },
  {
    id: 6,
    img: "/work/6.png",
    title: "Project 6 · Surynova Energy",
    sub: "MNRE Certified · UTL Solar · PM Surya Ghar",
    location: "Uttar Pradesh",
    type: "On-Grid",
    kw: "4 kW",
  },
]

export default function OurWork() {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set())

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = parseInt(entry.target.getAttribute("data-index") || "0")
            setVisibleItems((prev) => new Set([...prev, idx]))
          }
        })
      },
      { threshold: 0.12 }
    )

    document.querySelectorAll(".work-card").forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const openLightbox = (index: number) => {
    setCurrentIndex(index)
    setLightboxOpen(true)
    document.body.style.overflow = "hidden"
  }

  const closeLightbox = () => {
    setLightboxOpen(false)
    document.body.style.overflow = ""
  }

  const navLightbox = (dir: number) => {
    setCurrentIndex((prev) => (prev + dir + projects.length) % projects.length)
  }

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (!lightboxOpen) return
      if (e.key === "Escape") closeLightbox()
      if (e.key === "ArrowRight") navLightbox(1)
      if (e.key === "ArrowLeft") navLightbox(-1)
    }
    window.addEventListener("keydown", handleKey)
    return () => window.removeEventListener("keydown", handleKey)
  }, [lightboxOpen])

  const currentProject = projects[currentIndex]

  return (
    <>
      <section id="our-work" className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            className="mx-auto mb-14 max-w-3xl text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.45 }}
          >
            <div className="mb-4 inline-flex items-center justify-center gap-2 text-[11px] font-bold uppercase tracking-[0.14em] text-[var(--orange)]">
              <span className="h-0.5 w-8 rounded-full bg-[var(--orange)]" />
              Real Installations · Real Results
              <span className="h-0.5 w-8 rounded-full bg-[var(--orange)]" />
            </div>
            <h2 className="font-[family-name:var(--font-syne)] text-[clamp(1.75rem,5vw,3rem)] font-bold leading-tight tracking-tight text-[var(--ink)]">
              Our <span className="text-[var(--orange)]">Work</span> Speaks
            </h2>
            <p className="mx-auto mt-4 max-w-[540px] text-[15px] leading-7 text-[var(--ink-soft)]">
              500+ rooftops powered across Uttar Pradesh. Every project built to last 25 years.
            </p>
          </motion.div>

          {/* Grid */}
          <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
            {projects.map((project, i) => {
              const isVisible = visibleItems.has(i)

              return (
<motion.div
                   key={project.id}
                   data-index={i}
                   className={`work-card group relative aspect-[4/3] cursor-pointer overflow-hidden rounded-2xl md:aspect-video ${
                     isVisible ? "visible" : ""
                   }`}
                  initial={{ opacity: 0, y: 28 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.65, delay: i * 0.05 }}
                  onClick={() => openLightbox(i)}
                  whileHover={{ scale: 1.02 }}
                >
                  <Image
                    src={project.img}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 50vw, (max-width: 1200px) 33vw, 33vw"
                  />
                </motion.div>
              )
            })}
          </div>

          
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/92 p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
<motion.button
              className="absolute top-4 right-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-lg text-white backdrop-blur-md hover:bg-white/20 sm:top-6 sm:right-6 sm:h-11 sm:w-11"
              onClick={closeLightbox}
              whileHover={{ rotate: 90 }}
            >
              ✕
            </motion.button>

            <motion.button
              className="fixed top-1/2 left-3 -translate-y-1/2 z-[1010] flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-lg text-white backdrop-blur-md hover:bg-[var(--orange)]/30 sm:hidden"
              onClick={() => navLightbox(-1)}
            >
              ‹
            </motion.button>
            <motion.button
              className="fixed top-1/2 right-3 -translate-y-1/2 z-[1010] flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-lg text-white backdrop-blur-md hover:bg-[var(--orange)]/30 sm:hidden"
              onClick={() => navLightbox(1)}
            >
              ›
            </motion.button>

            <motion.div
              className="w-full max-w-2xl"
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
            >
              <Image
                src={currentProject.img}
                alt={currentProject.title}
                width={800}
                height={600}
                className="w-full rounded-2xl shadow-2xl"
              />
              <div className="mt-4 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
                <div>
                  <h4 className="font-[family-name:var(--font-syne)] text-lg font-bold text-white sm:text-xl">
                    {currentProject.title}
                  </h4>
                  <p className="text-sm text-white/60">{currentProject.sub}</p>
                </div>
                <div className="text-[12px] text-white/60 sm:text-[13px]">
                  {currentProject.location} · {currentProject.type} · {currentProject.kw}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}