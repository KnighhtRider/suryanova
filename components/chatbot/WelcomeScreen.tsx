import { BarChart3, BatteryCharging, IndianRupee, Phone } from "lucide-react"

const prompts = [
  { icon: IndianRupee, label: "Check my subsidy amount" },
  { icon: BatteryCharging, label: "Which system suits me?" },
  { icon: BarChart3, label: "Calculate my savings" },
  { icon: Phone, label: "Talk to an expert" },
]

export default function WelcomeScreen({
  onSelect,
}: {
  onSelect: (text: string) => void
}) {
  return (
    <div className="flex h-full flex-col items-center justify-center bg-[var(--surface)] px-7 text-center">
      <div
        className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-white text-4xl shadow-[0_12px_30px_rgba(255,115,0,0.16)]"
        style={{ animation: "surya-spin 20s linear infinite", filter: "drop-shadow(0 0 18px rgba(255,115,0,0.28))" }}
      >
        ☀️
      </div>
      <h2 className="font-[family-name:var(--font-syne)] text-[18px] font-bold text-[var(--ink)]">
        Namaste! I&apos;m Surya ☀️
      </h2>
      <p className="mt-1 font-[family-name:var(--font-dm-sans)] text-[14px] text-[var(--ink-soft)]">
        Your personal solar guide from Surynova
      </p>
      <div className="my-6 flex w-full items-center gap-3">
        <span className="h-px flex-1 bg-[var(--border-color)]" />
        <span className="text-[12px] font-medium text-[var(--ink-soft)]">
          What can I help you with today?
        </span>
        <span className="h-px flex-1 bg-[var(--border-color)]" />
      </div>
      <div className="grid w-full gap-2.5">
        {prompts.map(({ icon: Icon, label }) => (
          <button
            key={label}
            type="button"
            onClick={() => onSelect(label)}
            className="flex min-h-11 items-center gap-3 rounded-[10px] border border-[var(--border-color)] bg-white px-4 text-left font-[family-name:var(--font-dm-sans)] text-[13px] font-medium text-[var(--ink)] shadow-sm transition-colors duration-150 hover:border-[var(--blue)] hover:text-[var(--blue)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--blue)]"
          >
            <Icon className="h-4 w-4 text-[var(--orange)]" />
            {label}
          </button>
        ))}
      </div>
    </div>
  )
}
