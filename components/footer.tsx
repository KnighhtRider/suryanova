"use client"

import { motion } from "framer-motion"
import { 
  Sun, 
  Phone, 
  Mail, 
  MapPin, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Youtube,
  ExternalLink,
  Shield,
  Award
} from "lucide-react"
import Link from "next/link"

const footerLinks = {
  solutions: [
    { label: "On-Grid Solar", href: "#systems" },
    { label: "Off-Grid Solar", href: "#systems" },
    { label: "Hybrid Solar", href: "#systems" },
    { label: "Commercial Solar", href: "#" },
    { label: "Industrial Solar", href: "#" },
  ],
  company: [
    { label: "About Us", href: "#" },
    { label: "Our Team", href: "#" },
    { label: "Careers", href: "#" },
    { label: "News & Updates", href: "#" },
    { label: "CSR Initiatives", href: "#" },
  ],
  support: [
    { label: "FAQs", href: "#" },
    { label: "Installation Guide", href: "#" },
    { label: "Maintenance Tips", href: "#" },
    { label: "Warranty Policy", href: "#" },
    { label: "Contact Support", href: "#contact" },
  ],
  legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Refund Policy", href: "#" },
    { label: "Disclaimer", href: "#" },
  ],
}

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Youtube, href: "#", label: "YouTube" },
]

export default function Footer() {
  return (
    <footer className="bg-[var(--ink)] text-white/65">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="col-span-2">
            <Link href="#" className="flex items-center gap-2.5 mb-5">
              <div className="w-10 h-10 bg-[var(--blue)] rounded-lg flex items-center justify-center">
                <Sun className="w-5 h-5 text-white" />
              </div>
              <div className="font-[family-name:var(--font-syne)] font-extrabold text-xl">
                <span className="text-white">Surynova</span>
                <span className="text-[var(--orange)]">.</span>
              </div>
            </Link>
            <p className="text-[13.5px] leading-relaxed mb-6 max-w-xs">
              India&apos;s trusted rooftop solar partner. Empowering homes and businesses with clean, affordable solar energy since 2015.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <a href="tel:18001234567" className="flex items-center gap-3 text-[13px] hover:text-white transition-colors">
                <Phone className="w-4 h-4 text-[var(--orange)]" />
                1800-123-SOLAR (Toll Free)
              </a>
              <a href="mailto:info@surynova.in" className="flex items-center gap-3 text-[13px] hover:text-white transition-colors">
                <Mail className="w-4 h-4 text-[var(--orange)]" />
                info@surynova.in
              </a>
              <div className="flex items-start gap-3 text-[13px]">
                <MapPin className="w-4 h-4 text-[var(--orange)] flex-shrink-0 mt-0.5" />
                <span>Plot 45, Sector 18, Gurugram, Haryana 122015</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-2">
              {socialLinks.map((social, i) => {
                const Icon = social.icon
                return (
                  <a
                    key={i}
                    href={social.href}
                    aria-label={social.label}
                    className="w-9 h-9 bg-white/[0.06] border border-white/10 rounded-lg flex items-center justify-center hover:bg-[var(--orange)] hover:border-[var(--orange)] transition-colors"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="text-[11px] font-semibold uppercase tracking-[0.1em] text-white/40 mb-4">
              Solutions
            </h4>
            <ul className="space-y-2.5">
              {footerLinks.solutions.map((link, i) => (
                <li key={i}>
                  <Link href={link.href} className="text-[13px] hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-[11px] font-semibold uppercase tracking-[0.1em] text-white/40 mb-4">
              Company
            </h4>
            <ul className="space-y-2.5">
              {footerLinks.company.map((link, i) => (
                <li key={i}>
                  <Link href={link.href} className="text-[13px] hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-[11px] font-semibold uppercase tracking-[0.1em] text-white/40 mb-4">
              Support
            </h4>
            <ul className="space-y-2.5">
              {footerLinks.support.map((link, i) => (
                <li key={i}>
                  <Link href={link.href} className="text-[13px] hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-[11px] font-semibold uppercase tracking-[0.1em] text-white/40 mb-4">
              Legal
            </h4>
            <ul className="space-y-2.5">
              {footerLinks.legal.map((link, i) => (
                <li key={i}>
                  <Link href={link.href} className="text-[13px] hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Copyright */}
            <div className="text-[12px] text-white/50 text-center md:text-left">
              © {new Date().getFullYear()} Surynova Energy Efficiency Pvt. Ltd. All rights reserved.
            </div>

            {/* Government Badge */}
            <div className="flex flex-wrap items-center justify-center gap-4">
              <div className="flex items-center gap-2 bg-white/[0.06] border border-white/10 px-3 py-1.5 rounded-lg text-[11px] text-white/60">
                <Shield className="w-3.5 h-3.5 text-[var(--orange)]" />
                MNRE Empanelled Vendor
              </div>
              <div className="flex items-center gap-2 bg-white/[0.06] border border-white/10 px-3 py-1.5 rounded-lg text-[11px] text-white/60">
                <Award className="w-3.5 h-3.5 text-[var(--orange)]" />
                ISO 9001:2015 Certified
              </div>
              <a 
                href="https://pmsuryaghar.gov.in" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-white/[0.06] border border-white/10 px-3 py-1.5 rounded-lg text-[11px] text-white/60 hover:bg-white/[0.1] transition-colors"
              >
                <span>🇮🇳</span>
                PM Surya Ghar Portal
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
