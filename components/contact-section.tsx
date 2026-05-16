"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle2,
  User,
  FileText,
  MessageSquare
} from "lucide-react"

export default function ContactSection() {
  const [formState, setFormState] = useState({
    name: "",
    phone: "",
    email: "",
    city: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500))
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  return (
    <section id="contact" className="py-20 lg:py-28 bg-white">
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
            Contact Us
            <span className="w-5 h-0.5 bg-[var(--orange)] rounded-full" />
          </div>
          <h2 className="font-[family-name:var(--font-syne)] text-[clamp(1.75rem,4vw,2.5rem)] font-bold text-[var(--ink)] tracking-tight leading-tight mb-3">
            Get in Touch
          </h2>
          <p className="text-[var(--ink-soft)] text-[15px] max-w-2xl mx-auto leading-relaxed">
            Have questions about solar? Our experts are here to help. Request a free site survey or get answers to all your queries.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Contact Info */}
          <motion.div 
            className="lg:col-span-2 space-y-6"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            {/* Contact Cards */}
            <div className="space-y-4">
              <div className="bg-[var(--surface)] border border-[var(--border-soft)] rounded-xl p-5 flex gap-4">
                <div className="w-10 h-10 bg-[var(--blue-light)] rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-[var(--blue)]" />
                </div>
                <div>
                  <div className="text-[12px] font-semibold text-[var(--ink-muted)] uppercase tracking-wider mb-1">
                    Toll Free Number
                  </div>
                  <a href="tel:18001234567" className="text-[18px] font-bold text-[var(--ink)] hover:text-[var(--blue)]">
                    +91-6396814058
                  </a>
                  <div className="text-[12px] text-[var(--ink-muted)] mt-0.5">Available 24/7</div>
                </div>
              </div>

              <div className="bg-[var(--surface)] border border-[var(--border-soft)] rounded-xl p-5 flex gap-4">
                <div className="w-10 h-10 bg-[var(--blue-light)] rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-[var(--blue)]" />
                </div>
                <div>
                  <div className="text-[12px] font-semibold text-[var(--ink-muted)] uppercase tracking-wider mb-1">
                    Email Us
                  </div>
                  <a href="mailto:info@surynova.in" className="text-[15px] font-semibold text-[var(--ink)] hover:text-[var(--blue)]">
                    info@surynova.in
                  </a>
                  <div className="text-[12px] text-[var(--ink-muted)] mt-0.5">We reply within 2 hours</div>
                </div>
              </div>

              <div className="bg-[var(--surface)] border border-[var(--border-soft)] rounded-xl p-5 flex gap-4">
                <div className="w-10 h-10 bg-[var(--blue-light)] rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-[var(--blue)]" />
                </div>
                <div>
                  <div className="text-[12px] font-semibold text-[var(--ink-muted)] uppercase tracking-wider mb-1">
                    Head Office
                  </div>
                  <div className="text-[14px] text-[var(--ink)] leading-relaxed">
                    Surynova Energy Efficiency Pvt. Ltd.<br />
                    Plot No. 45, Sector 18,<br />
                    Gurugram, Haryana 122015
                  </div>
                </div>
              </div>

              <div className="bg-[var(--surface)] border border-[var(--border-soft)] rounded-xl p-5 flex gap-4">
                <div className="w-10 h-10 bg-[var(--blue-light)] rounded-xl flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-[var(--blue)]" />
                </div>
                <div>
                  <div className="text-[12px] font-semibold text-[var(--ink-muted)] uppercase tracking-wider mb-1">
                    Office Hours
                  </div>
                  <div className="text-[14px] text-[var(--ink)]">
                    Mon - Sat: 9:00 AM - 7:00 PM<br />
                    Sunday: 10:00 AM - 5:00 PM
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            className="lg:col-span-3"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="bg-[var(--surface)] border border-[var(--border-color)] rounded-2xl p-6 md:p-8">
              <h3 className="font-[family-name:var(--font-syne)] text-xl font-bold text-[var(--ink)] mb-2">
                Request Free Site Survey
              </h3>
              <p className="text-[13px] text-[var(--ink-muted)] mb-6">
                Fill the form below and our expert will contact you within 24 hours
              </p>

              {isSubmitted ? (
                <motion.div 
                  className="text-center py-12"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                >
                  <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-8 h-8 text-[var(--green-gov)]" />
                  </div>
                  <h4 className="font-[family-name:var(--font-syne)] text-xl font-bold text-[var(--ink)] mb-2">
                    Thank You!
                  </h4>
                  <p className="text-[14px] text-[var(--ink-soft)]">
                    Our solar expert will contact you within 24 hours.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="flex items-center gap-2 text-[12px] font-semibold text-[var(--ink-soft)] uppercase tracking-wide mb-2">
                        <User className="w-4 h-4" />
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        className="w-full px-4 py-3 bg-white border border-[var(--border-color)] rounded-xl text-[14px] focus:outline-none focus:ring-2 focus:ring-[var(--blue)] focus:border-transparent"
                        placeholder="Enter your name"
                      />
                    </div>
                    <div>
                      <label className="flex items-center gap-2 text-[12px] font-semibold text-[var(--ink-soft)] uppercase tracking-wide mb-2">
                        <Phone className="w-4 h-4" />
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formState.phone}
                        onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                        className="w-full px-4 py-3 bg-white border border-[var(--border-color)] rounded-xl text-[14px] focus:outline-none focus:ring-2 focus:ring-[var(--blue)] focus:border-transparent"
                        placeholder="+91 98765 43210"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="flex items-center gap-2 text-[12px] font-semibold text-[var(--ink-soft)] uppercase tracking-wide mb-2">
                        <Mail className="w-4 h-4" />
                        Email Address
                      </label>
                      <input
                        type="email"
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        className="w-full px-4 py-3 bg-white border border-[var(--border-color)] rounded-xl text-[14px] focus:outline-none focus:ring-2 focus:ring-[var(--blue)] focus:border-transparent"
                        placeholder="you@email.com"
                      />
                    </div>
                    <div>
                      <label className="flex items-center gap-2 text-[12px] font-semibold text-[var(--ink-soft)] uppercase tracking-wide mb-2">
                        <MapPin className="w-4 h-4" />
                        City *
                      </label>
                      <input
                        type="text"
                        required
                        value={formState.city}
                        onChange={(e) => setFormState({ ...formState, city: e.target.value })}
                        className="w-full px-4 py-3 bg-white border border-[var(--border-color)] rounded-xl text-[14px] focus:outline-none focus:ring-2 focus:ring-[var(--blue)] focus:border-transparent"
                        placeholder="Enter your city"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="flex items-center gap-2 text-[12px] font-semibold text-[var(--ink-soft)] uppercase tracking-wide mb-2">
                      <MessageSquare className="w-4 h-4" />
                      Your Requirement
                    </label>
                    <textarea
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      rows={4}
                      className="w-full px-4 py-3 bg-white border border-[var(--border-color)] rounded-xl text-[14px] focus:outline-none focus:ring-2 focus:ring-[var(--blue)] focus:border-transparent resize-none"
                      placeholder="Tell us about your monthly electricity bill, roof type, and any specific requirements..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 py-4 bg-[var(--orange)] text-white font-semibold text-[15px] rounded-xl hover:bg-[var(--orange-light)] transition-colors shadow-lg shadow-orange-500/20 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Request Free Site Survey
                      </>
                    )}
                  </button>

                  <p className="text-center text-[11px] text-[var(--ink-muted)]">
                    By submitting, you agree to our privacy policy. We&apos;ll never share your data.
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
