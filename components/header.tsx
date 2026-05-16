"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { 
  Menu, 
  X, 
  ChevronDown, 
  Phone, 
  Sun, 
  Zap, 
  Battery, 
  Calculator, 
  FileText, 
  Building2,
  ArrowRight,
  CheckCircle2
} from "lucide-react"
import Link from "next/link"

const navItems = [
  { 
    label: "Home", 
    href: "#" 
  },
  {
    label: "Solutions",
    href: "#solutions",
    dropdown: [
      { label: "New Solar Installation", desc: "Complete solar setup with subsidy", icon: Sun, href: "#solutions" },
      { label: "Solar Panel Cleaning", desc: "Professional maintenance service", icon: Zap, href: "#solutions" },
      { label: "Repair & Maintenance", desc: "Expert repair for all brands", icon: Battery, href: "#solutions" },
    ]
  },
  { 
    label: "Solar Systems", 
    href: "#systems",
    dropdown: [
      { label: "On-Grid Solar", desc: "Connected to utility grid", icon: Zap, href: "#systems" },
      { label: "Off-Grid Solar", desc: "Independent battery backup", icon: Battery, href: "#systems" },
      { label: "Hybrid Solar", desc: "Best of both worlds", icon: Sun, href: "#systems" },
    ]
  },
  { 
    label: "Subsidy & Schemes", 
    href: "#subsidy",
    dropdown: [
      { label: "PM Surya Ghar", desc: "Up to ₹78,000 subsidy", icon: Building2, href: "#subsidy" },
      { label: "State Schemes", desc: "Additional state benefits", icon: FileText, href: "#subsidy" },
    ]
  },
  { 
    label: "Calculator", 
    href: "#calculator" 
  },
  { 
    label: "Contact", 
    href: "#contact" 
  },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      {/* Government Ribbon */}
      <div className="bg-[var(--blue)] text-white/85 text-[11px] font-medium py-1.5 px-4 flex items-center justify-center gap-3 tracking-wide">
        <span className="w-1 h-1 rounded-full bg-[var(--orange)]" />
        <span>Ministry of New and Renewable Energy (MNRE) Empanelled</span>
        <span className="w-1 h-1 rounded-full bg-[var(--orange)]" />
        <span className="hidden sm:inline">
          <strong className="text-white">PM Surya Ghar</strong> — Muft Bijli Yojana Approved Vendor
        </span>
        <span className="w-1 h-1 rounded-full bg-[var(--orange)] hidden sm:inline-block" />
      </div>

      {/* Main Header */}
      <motion.header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? "bg-white/95 backdrop-blur-md shadow-[0_1px_3px_rgba(0,0,0,0.08)]" 
            : "bg-white"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-[68px]">
            {/* Logo */}
            <Link href="#" className="flex items-center gap-2.5 group">
              <div className="w-9 h-9 bg-[var(--blue)] rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform">
                <Sun className="w-5 h-5 text-white" />
              </div>
              <div className="font-[family-name:var(--font-syne)] font-extrabold text-lg tracking-tight">
                <span className="text-[var(--blue)]">Surynova</span>
                <span className="text-[var(--orange)]">.</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <div 
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => item.dropdown && setActiveDropdown(item.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    href={item.href}
                    className={`px-3.5 py-2 text-[13.5px] font-medium rounded-md transition-all flex items-center gap-1 ${
                      activeDropdown === item.label 
                        ? "text-[var(--blue)] bg-[var(--blue-light)]" 
                        : "text-[var(--ink-soft)] hover:text-[var(--blue)] hover:bg-[var(--blue-light)]"
                    }`}
                  >
                    {item.label}
                    {item.dropdown && <ChevronDown className="w-3.5 h-3.5" />}
                  </Link>

                  {/* Dropdown */}
                  <AnimatePresence>
                    {item.dropdown && activeDropdown === item.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.15 }}
                        className="absolute top-full left-0 mt-1 bg-white rounded-xl shadow-lg border border-[var(--border-color)] p-2 min-w-[260px]"
                      >
                        {item.dropdown.map((subItem) => {
                          const Icon = subItem.icon
                          return (
                            <Link
                              key={subItem.label}
                              href={subItem.href}
                              className="flex items-start gap-3 p-3 rounded-lg hover:bg-[var(--surface)] transition-colors group/item"
                            >
                              <div className="w-8 h-8 rounded-lg bg-[var(--blue-dim)] flex items-center justify-center group-hover/item:bg-[var(--blue-light)] transition-colors">
                                <Icon className="w-4 h-4 text-[var(--blue)]" />
                              </div>
                              <div>
                                <div className="text-[13px] font-semibold text-[var(--ink)]">{subItem.label}</div>
                                <div className="text-[11.5px] text-[var(--ink-muted)]">{subItem.desc}</div>
                              </div>
                            </Link>
                          )
                        })}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </nav>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center gap-2.5">
              <a
                href="tel:+919876543210"
                className="flex items-center gap-2 px-4 py-2 text-[13px] font-medium text-[var(--blue)] border border-[var(--border-color)] rounded-lg hover:bg-[var(--surface)] transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span className="hidden xl:inline">1800-123-SOLAR</span>
              </a>
              <Link
                href="#calculator"
                className="flex items-center gap-2 px-4 py-2.5 text-[13px] font-semibold text-white bg-[var(--orange)] rounded-lg hover:bg-[var(--orange-light)] transition-colors shadow-sm"
              >
                <Calculator className="w-4 h-4" />
                Get Free Quote
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-[var(--surface)] transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden fixed top-[106px] left-0 right-0 bg-white border-b border-[var(--border-color)] z-40 overflow-hidden"
          >
            <div className="p-4 space-y-1 max-h-[70vh] overflow-y-auto">
              {navItems.map((item) => (
                <div key={item.label}>
                  <Link
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between p-3 rounded-lg text-[var(--ink-mid)] hover:bg-[var(--surface)] transition-colors"
                  >
                    <span className="font-medium">{item.label}</span>
                    {item.dropdown && <ChevronDown className="w-4 h-4" />}
                  </Link>
                  {item.dropdown && (
                    <div className="ml-4 pl-4 border-l-2 border-[var(--border-soft)] space-y-1 mt-1">
                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem.label}
                          href={subItem.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className="flex items-center gap-3 p-2.5 rounded-lg text-sm text-[var(--ink-soft)] hover:bg-[var(--surface)] transition-colors"
                        >
                          <subItem.icon className="w-4 h-4 text-[var(--blue)]" />
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              
              <div className="pt-4 mt-4 border-t border-[var(--border-soft)] space-y-2">
                <a
                  href="tel:+919876543210"
                  className="flex items-center justify-center gap-2 w-full p-3 text-[var(--blue)] border border-[var(--border-color)] rounded-lg font-medium"
                >
                  <Phone className="w-4 h-4" />
                  Call: 1800-123-SOLAR
                </a>
                <Link
                  href="#calculator"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-2 w-full p-3 bg-[var(--orange)] text-white rounded-lg font-semibold"
                >
                  <Calculator className="w-4 h-4" />
                  Get Free Quote
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Trust badges mobile */}
              <div className="pt-4 flex items-center justify-center gap-4 text-[11px] text-[var(--ink-muted)]">
                <div className="flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[var(--green-gov)]" />
                  MNRE Approved
                </div>
                <div className="flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[var(--green-gov)]" />
                  ISO Certified
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
