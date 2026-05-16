"use client"

import { motion } from "framer-motion"
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react"
import { useState } from "react"

const testimonials = [
  {
    id: 1,
    name: "Rajesh Sharma",
    location: "Delhi NCR",
    rating: 5,
    system: "3 kW On-Grid",
    image: "RS",
    text: "मैंने सूर्यनोवा से 3 kW का सोलर सिस्टम लगवाया। पूरी प्रक्रिया बहुत आसान थी और सब्सिडी भी समय पर मिल गई। अब मेरा बिजली का बिल लगभग शून्य है!",
    textEnglish: "Got a 3 kW system installed by Surynova. The entire process was smooth and subsidy was credited on time. My electricity bill is now almost zero!",
    savings: "₹4,500/month",
  },
  {
    id: 2,
    name: "Priya Patel",
    location: "Ahmedabad",
    rating: 5,
    system: "5 kW Hybrid",
    image: "PP",
    text: "Best decision to go solar! The team was professional and completed installation within the promised time. Even during power cuts, my home has power now.",
    textEnglish: "Best decision to go solar! The team was professional and completed installation within the promised time. Even during power cuts, my home has power now.",
    savings: "₹7,200/month",
  },
  {
    id: 3,
    name: "Dr. Amit Kumar",
    location: "Lucknow",
    rating: 5,
    system: "4 kW On-Grid",
    image: "AK",
    text: "As a doctor, I was skeptical about solar initially. Surynova team explained everything clearly. Now I recommend solar to all my patients and friends!",
    textEnglish: "As a doctor, I was skeptical about solar initially. Surynova team explained everything clearly. Now I recommend solar to all my patients and friends!",
    savings: "₹6,000/month",
  },
  {
    id: 4,
    name: "Sunita Reddy",
    location: "Hyderabad",
    rating: 5,
    system: "6 kW Hybrid",
    image: "SR",
    text: "हमारे बड़े घर के लिए 6 kW सिस्टम परफेक्ट है। बिजली की समस्या खत्म और पर्यावरण की भी सेवा। धन्यवाद सूर्यनोवा!",
    textEnglish: "The 6 kW system is perfect for our large home. No more power issues and we're helping the environment too. Thank you Surynova!",
    savings: "₹9,500/month",
  },
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-20 lg:py-28 bg-gradient-to-br from-[var(--blue)] via-[var(--blue)] to-[#003366] relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute right-[-10%] top-[-20%] w-[400px] h-[400px] rounded-full bg-[var(--orange)] opacity-[0.04] blur-3xl" />
        <div className="absolute left-[-5%] bottom-[-10%] w-[300px] h-[300px] rounded-full bg-white opacity-[0.02] blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.14em] uppercase text-[var(--orange)] mb-3 justify-center">
            <span className="w-5 h-0.5 bg-[var(--orange)] rounded-full" />
            Customer Stories
            <span className="w-5 h-0.5 bg-[var(--orange)] rounded-full" />
          </div>
          <h2 className="font-[family-name:var(--font-syne)] text-[clamp(1.75rem,4vw,2.5rem)] font-bold text-white tracking-tight leading-tight mb-3">
            What Our Customers Say
          </h2>
          <p className="text-white/60 text-[15px] max-w-2xl mx-auto leading-relaxed">
            Join thousands of happy homeowners who have switched to solar with Surynova
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white/[0.08] backdrop-blur-sm border border-white/10 rounded-2xl p-5 hover:bg-white/[0.12] transition-colors"
            >
              {/* Quote Icon */}
              <Quote className="w-8 h-8 text-[var(--orange)] opacity-50 mb-3" />

              {/* Stars */}
              <div className="flex gap-0.5 mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[var(--orange)] text-[var(--orange)]" />
                ))}
              </div>

              {/* Text */}
              <p className="text-white/80 text-[13px] leading-relaxed mb-4">
                {testimonial.text}
              </p>

              {/* Savings Badge */}
              <div className="inline-block bg-emerald-500/20 text-emerald-300 text-[11px] font-semibold px-2.5 py-1 rounded-full mb-4">
                Saving {testimonial.savings}
              </div>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                <div className="w-10 h-10 bg-[var(--orange)] rounded-full flex items-center justify-center text-white font-bold text-[13px]">
                  {testimonial.image}
                </div>
                <div>
                  <div className="text-white font-semibold text-[14px]">{testimonial.name}</div>
                  <div className="text-white/50 text-[11px]">
                    {testimonial.location} • {testimonial.system}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div 
          className="mt-12 pt-10 border-t border-white/10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: "4.8/5", label: "Average Rating" },
              { value: "10,000+", label: "Happy Customers" },
              { value: "₹50Cr+", label: "Total Savings Delivered" },
              { value: "98%", label: "Would Recommend" },
            ].map((stat, i) => (
              <div key={i}>
                <div className="font-[family-name:var(--font-syne)] text-2xl md:text-3xl font-extrabold text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-[12px] text-white/50 uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
