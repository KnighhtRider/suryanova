"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, HelpCircle } from "lucide-react"

const faqs = [
  {
    question: "How much does a rooftop solar system cost?",
    questionHindi: "छत पर सोलर सिस्टम की कीमत कितनी है?",
    answer: "A rooftop solar system typically costs ₹50,000-70,000 per kW before subsidy. For a standard 3 kW system suitable for most homes, the total cost is around ₹1,80,000-2,10,000. After the government subsidy of ₹78,000, your net cost becomes approximately ₹1,02,000-1,32,000.",
  },
  {
    question: "What is the PM Surya Ghar Yojana subsidy?",
    questionHindi: "पीएम सूर्य घर योजना सब्सिडी क्या है?",
    answer: "PM Surya Ghar Muft Bijli Yojana is a central government scheme that provides up to ₹78,000 subsidy for residential rooftop solar installations. You get ₹30,000/kW for the first 2 kW and ₹18,000/kW for the third kW, with a maximum cap of ₹78,000. The subsidy is directly credited to your bank account after installation.",
  },
  {
    question: "How much space do I need on my roof?",
    questionHindi: "मेरी छत पर कितनी जगह चाहिए?",
    answer: "You need approximately 100 square feet of shadow-free roof space per 1 kW of solar capacity. For a typical 3 kW system, you'll need about 300 square feet. Our team conducts a free site survey to assess your roof's suitability and optimal panel placement.",
  },
  {
    question: "What is net metering and how does it work?",
    questionHindi: "नेट मीटरिंग क्या है और यह कैसे काम करता है?",
    answer: "Net metering allows you to export excess solar power to the electricity grid and get credits on your bill. When your solar panels generate more power than you use, the surplus is sent to the grid. At month-end, you only pay for the 'net' electricity consumed. Some states even pay you for excess units exported.",
  },
  {
    question: "What is the warranty on solar panels?",
    questionHindi: "सोलर पैनल पर वारंटी कितनी है?",
    answer: "We provide comprehensive warranties: 25-year performance warranty on solar panels (guaranteeing at least 80% efficiency), 10-year warranty on inverters, and 5-year warranty on installation and workmanship. We also offer optional Annual Maintenance Contracts (AMC) for worry-free operation.",
  },
  {
    question: "How long does installation take?",
    questionHindi: "इंस्टॉलेशन में कितना समय लगता है?",
    answer: "The complete process from inquiry to power generation takes 45-60 days. Physical installation takes 2-3 days, but documentation, DISCOM approval, and net meter installation require additional time. We handle all paperwork and approvals for you.",
  },
  {
    question: "What happens on cloudy days or at night?",
    questionHindi: "बादल वाले दिन या रात को क्या होता है?",
    answer: "On-grid systems use electricity from the grid when solar generation is low. Your system automatically switches to grid power at night or during heavy cloud cover. Hybrid systems with battery backup can provide power during outages. Solar panels still generate 10-25% power on cloudy days.",
  },
  {
    question: "Do I need to clean the solar panels?",
    questionHindi: "क्या मुझे सोलर पैनल साफ करने होंगे?",
    answer: "Solar panels require minimal maintenance. We recommend cleaning them every 2-3 months to remove dust and bird droppings. Simple water wash is usually sufficient. Our AMC package includes quarterly cleaning and inspection for optimal performance.",
  },
]

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="py-20 lg:py-28 bg-[var(--surface)]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.14em] uppercase text-[var(--orange)] mb-3 justify-center">
            <span className="w-5 h-0.5 bg-[var(--orange)] rounded-full" />
            FAQs
            <span className="w-5 h-0.5 bg-[var(--orange)] rounded-full" />
          </div>
          <h2 className="font-[family-name:var(--font-syne)] text-[clamp(1.75rem,4vw,2.5rem)] font-bold text-[var(--ink)] tracking-tight leading-tight mb-3">
            Frequently Asked Questions
          </h2>
          <p className="text-[var(--ink-soft)] text-[15px] max-w-2xl mx-auto leading-relaxed">
            Everything you need to know about rooftop solar installation and government subsidies
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              <div
                className={`bg-white border rounded-xl overflow-hidden transition-all duration-200 ${
                  openIndex === i 
                    ? "border-[var(--blue)] shadow-md" 
                    : "border-[var(--border-color)] hover:border-[var(--blue-mid)]"
                }`}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full flex items-start gap-4 p-5 text-left"
                >
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors ${
                    openIndex === i ? "bg-[var(--blue)] text-white" : "bg-[var(--blue-light)] text-[var(--blue)]"
                  }`}>
                    <HelpCircle className="w-4 h-4" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-[15px] font-semibold text-[var(--ink)] pr-6">
                      {faq.question}
                    </h3>
                    <span className="text-[12px] font-[family-name:var(--font-noto-sans-devanagari)] text-[var(--ink-muted)]">
                      {faq.questionHindi}
                    </span>
                  </div>
                  <ChevronDown 
                    className={`w-5 h-5 text-[var(--ink-muted)] flex-shrink-0 transition-transform duration-200 ${
                      openIndex === i ? "rotate-180" : ""
                    }`} 
                  />
                </button>

                <AnimatePresence>
                  {openIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-5 pt-0">
                        <div className="pl-12 text-[14px] text-[var(--ink-soft)] leading-relaxed">
                          {faq.answer}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Still have questions CTA */}
        <motion.div 
          className="mt-10 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <p className="text-[14px] text-[var(--ink-soft)] mb-4">
            Still have questions? Our solar experts are here to help.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--blue)] text-white font-semibold text-[14px] rounded-xl hover:bg-[var(--blue-mid)] transition-colors"
          >
            <HelpCircle className="w-4 h-4" />
            Talk to an Expert
          </a>
        </motion.div>
      </div>
    </section>
  )
}
