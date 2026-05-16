"use client"

import { useState, useMemo } from "react"
import { motion } from "framer-motion"
import { Calculator, Zap, IndianRupee, Leaf, TrendingUp, Sun, ArrowRight, Info } from "lucide-react"

export default function SolarCalculator() {
  const [monthlyBill, setMonthlyBill] = useState(3000)
  const [roofArea, setRoofArea] = useState(300)
  const [sunlightHours, setSunlightHours] = useState(5)

  const calculations = useMemo(() => {
    // Calculate required system size based on bill
    const avgUnitRate = 7 // Rs per unit average
    const monthlyUnits = monthlyBill / avgUnitRate
    const dailyUnits = monthlyUnits / 30
    const requiredKW = Math.ceil(dailyUnits / sunlightHours)
    
    // Cap based on roof area (100 sq ft per kW roughly)
    const maxKWFromRoof = Math.floor(roofArea / 100)
    const actualKW = Math.min(requiredKW, maxKWFromRoof, 10) // Max 10kW for residential
    
    // Cost and subsidy calculations
    const costPerKW = 65000 // Average cost per kW
    const totalCost = actualKW * costPerKW
    
    // Subsidy calculation as per PM Surya Ghar
    let subsidy = 0
    if (actualKW <= 2) {
      subsidy = actualKW * 30000
    } else if (actualKW <= 3) {
      subsidy = 60000 + (actualKW - 2) * 18000
    } else {
      subsidy = 78000 // Max subsidy
    }
    
    const netCost = totalCost - subsidy
    
    // Annual generation and savings
    const annualGeneration = actualKW * sunlightHours * 365 * 0.8 // 80% efficiency factor
    const annualSavings = annualGeneration * avgUnitRate
    const paybackYears = Math.round(netCost / annualSavings * 10) / 10
    
    // 25 year lifetime savings
    const lifetimeSavings = annualSavings * 25 - netCost
    
    // CO2 offset (0.82 kg CO2 per kWh for Indian grid)
    const annualCO2Offset = Math.round(annualGeneration * 0.82 / 1000) // in tonnes
    
    return {
      systemSize: actualKW,
      totalCost,
      subsidy,
      netCost,
      annualGeneration: Math.round(annualGeneration),
      annualSavings: Math.round(annualSavings),
      paybackYears,
      lifetimeSavings: Math.round(lifetimeSavings),
      annualCO2Offset,
      monthlySavings: Math.round(annualSavings / 12),
    }
  }, [monthlyBill, roofArea, sunlightHours])

  return (
    <section id="calculator" className="py-20 lg:py-28 bg-[var(--surface)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="bg-white border border-[var(--border-color)] rounded-2xl overflow-hidden shadow-xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Header */}
          <div className="bg-[var(--blue)] px-6 md:px-8 py-6">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center">
                <Calculator className="w-5 h-5 text-white" />
              </div>
              <div>
                <h2 className="font-[family-name:var(--font-syne)] text-xl md:text-2xl font-bold text-white">
                  Solar Savings Calculator
                </h2>
                <p className="text-white/60 text-[13px]">
                  सोलर बचत कैलकुलेटर — Calculate your potential savings
                </p>
              </div>
            </div>
          </div>

          {/* Calculator Body */}
          <div className="p-6 md:p-8">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Input Section */}
              <div className="space-y-6">
                <h3 className="text-[12px] font-semibold text-[var(--ink-mid)] uppercase tracking-wider mb-4">
                  Enter Your Details
                </h3>

                {/* Monthly Bill */}
                <div>
                  <label className="flex items-center gap-2 text-[12px] font-semibold text-[var(--ink-soft)] uppercase tracking-wide mb-2">
                    <IndianRupee className="w-4 h-4" />
                    Monthly Electricity Bill
                  </label>
                  <div className="flex items-center border border-[var(--border-color)] rounded-xl overflow-hidden bg-[var(--surface)]">
                    <span className="px-4 py-0 bg-[var(--surface-2)] border-r border-[var(--border-color)] text-[13px] font-semibold text-[var(--ink-muted)] h-[48px] flex items-center">
                      ₹
                    </span>
                    <input
                      type="number"
                      value={monthlyBill}
                      onChange={(e) => setMonthlyBill(Number(e.target.value))}
                      className="flex-1 px-4 h-[48px] bg-transparent text-[14px] font-medium text-[var(--ink)] focus:outline-none"
                      min={500}
                      max={50000}
                    />
                    <span className="px-4 text-[12px] text-[var(--ink-muted)]">/month</span>
                  </div>
                  <input
                    type="range"
                    min={500}
                    max={20000}
                    step={100}
                    value={monthlyBill}
                    onChange={(e) => setMonthlyBill(Number(e.target.value))}
                    className="w-full mt-2 accent-[var(--orange)]"
                  />
                </div>

                {/* Roof Area */}
                <div>
                  <label className="flex items-center gap-2 text-[12px] font-semibold text-[var(--ink-soft)] uppercase tracking-wide mb-2">
                    <Sun className="w-4 h-4" />
                    Available Roof Area
                  </label>
                  <div className="flex items-center border border-[var(--border-color)] rounded-xl overflow-hidden bg-[var(--surface)]">
                    <span className="px-4 py-0 bg-[var(--surface-2)] border-r border-[var(--border-color)] text-[13px] font-semibold text-[var(--ink-muted)] h-[48px] flex items-center">
                      📐
                    </span>
                    <input
                      type="number"
                      value={roofArea}
                      onChange={(e) => setRoofArea(Number(e.target.value))}
                      className="flex-1 px-4 h-[48px] bg-transparent text-[14px] font-medium text-[var(--ink)] focus:outline-none"
                      min={100}
                      max={2000}
                    />
                    <span className="px-4 text-[12px] text-[var(--ink-muted)]">sq. ft</span>
                  </div>
                  <input
                    type="range"
                    min={100}
                    max={1000}
                    step={50}
                    value={roofArea}
                    onChange={(e) => setRoofArea(Number(e.target.value))}
                    className="w-full mt-2 accent-[var(--orange)]"
                  />
                </div>

                {/* Sunlight Hours */}
                <div>
                  <label className="flex items-center gap-2 text-[12px] font-semibold text-[var(--ink-soft)] uppercase tracking-wide mb-2">
                    <Zap className="w-4 h-4" />
                    Avg. Sunlight Hours/Day
                  </label>
                  <div className="flex items-center border border-[var(--border-color)] rounded-xl overflow-hidden bg-[var(--surface)]">
                    <span className="px-4 py-0 bg-[var(--surface-2)] border-r border-[var(--border-color)] text-[13px] font-semibold text-[var(--ink-muted)] h-[48px] flex items-center">
                      ☀️
                    </span>
                    <input
                      type="number"
                      value={sunlightHours}
                      onChange={(e) => setSunlightHours(Number(e.target.value))}
                      className="flex-1 px-4 h-[48px] bg-transparent text-[14px] font-medium text-[var(--ink)] focus:outline-none"
                      min={3}
                      max={8}
                      step={0.5}
                    />
                    <span className="px-4 text-[12px] text-[var(--ink-muted)]">hours</span>
                  </div>
                  <input
                    type="range"
                    min={3}
                    max={7}
                    step={0.5}
                    value={sunlightHours}
                    onChange={(e) => setSunlightHours(Number(e.target.value))}
                    className="w-full mt-2 accent-[var(--orange)]"
                  />
                </div>

                <div className="flex items-start gap-2 p-3 bg-[var(--blue-light)] rounded-lg border border-[var(--blue-dim)]">
                  <Info className="w-4 h-4 text-[var(--blue)] flex-shrink-0 mt-0.5" />
                  <p className="text-[12px] text-[var(--blue)] leading-relaxed">
                    Average sunlight hours in India: 4-6 hours. Most cities receive 5+ hours of peak sunlight.
                  </p>
                </div>
              </div>

              {/* Results Section */}
              <div>
                <h3 className="text-[12px] font-semibold text-[var(--ink-mid)] uppercase tracking-wider mb-4">
                  Your Solar Estimate
                </h3>

                {/* Recommended System */}
                <div className="bg-gradient-to-br from-[var(--blue)] to-[var(--blue-mid)] rounded-xl p-5 mb-6">
                  <div className="text-white/60 text-[11px] uppercase tracking-wider mb-1">Recommended System Size</div>
                  <div className="font-[family-name:var(--font-syne)] text-4xl font-extrabold text-white">
                    {calculations.systemSize} <span className="text-xl text-[var(--orange)]">kW</span>
                  </div>
                </div>

                {/* Results Grid */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                  <div className="bg-[var(--surface)] rounded-xl p-4 border border-[var(--border-soft)]">
                    <div className="text-[11px] text-[var(--ink-muted)] uppercase tracking-wider mb-1">Total Cost</div>
                    <div className="font-[family-name:var(--font-syne)] text-xl font-bold text-[var(--ink)]">
                      ₹{(calculations.totalCost / 1000).toFixed(0)}K
                    </div>
                  </div>
                  <div className="bg-emerald-50 rounded-xl p-4 border border-emerald-200">
                    <div className="text-[11px] text-emerald-600 uppercase tracking-wider mb-1">Govt. Subsidy</div>
                    <div className="font-[family-name:var(--font-syne)] text-xl font-bold text-[var(--green-gov)]">
                      -₹{(calculations.subsidy / 1000).toFixed(0)}K
                    </div>
                  </div>
                  <div className="bg-[var(--orange-pale)] rounded-xl p-4 border border-orange-200 col-span-2">
                    <div className="text-[11px] text-[var(--orange)] uppercase tracking-wider mb-1">You Pay After Subsidy</div>
                    <div className="font-[family-name:var(--font-syne)] text-3xl font-extrabold text-[var(--orange)]">
                      ₹{calculations.netCost.toLocaleString('en-IN')}
                    </div>
                  </div>
                </div>

                {/* Savings Breakdown */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-[var(--surface)] rounded-lg">
                    <div className="flex items-center gap-2 text-[13px] text-[var(--ink-mid)]">
                      <TrendingUp className="w-4 h-4 text-[var(--green-gov)]" />
                      Monthly Savings
                    </div>
                    <div className="font-semibold text-[var(--ink)]">₹{calculations.monthlySavings.toLocaleString('en-IN')}</div>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-[var(--surface)] rounded-lg">
                    <div className="flex items-center gap-2 text-[13px] text-[var(--ink-mid)]">
                      <IndianRupee className="w-4 h-4 text-[var(--green-gov)]" />
                      Annual Savings
                    </div>
                    <div className="font-semibold text-[var(--ink)]">₹{calculations.annualSavings.toLocaleString('en-IN')}</div>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-[var(--surface)] rounded-lg">
                    <div className="flex items-center gap-2 text-[13px] text-[var(--ink-mid)]">
                      <Zap className="w-4 h-4 text-[var(--blue)]" />
                      Payback Period
                    </div>
                    <div className="font-semibold text-[var(--ink)]">{calculations.paybackYears} years</div>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-emerald-50 rounded-lg border border-emerald-200">
                    <div className="flex items-center gap-2 text-[13px] text-emerald-700">
                      <Leaf className="w-4 h-4" />
                      25-Year Total Savings
                    </div>
                    <div className="font-[family-name:var(--font-syne)] font-bold text-[var(--green-gov)]">
                      ₹{(calculations.lifetimeSavings / 100000).toFixed(1)}L
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-8 pt-6 border-t border-[var(--border-soft)]">
              <button className="w-full flex items-center justify-center gap-2 py-4 bg-[var(--orange)] text-white font-semibold text-[15px] rounded-xl hover:bg-[var(--orange-light)] transition-colors shadow-lg shadow-orange-500/20">
                Get Exact Quote & Site Visit
                <ArrowRight className="w-5 h-5" />
              </button>
              <p className="text-center text-[12px] text-[var(--ink-muted)] mt-3">
                Free site survey • No obligation • Expert consultation
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
