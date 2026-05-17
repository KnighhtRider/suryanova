import { ClipboardList, Phone, Zap } from "lucide-react"

const replies = [
  { icon: ClipboardList, label: "Get a free quote" },
  { icon: Zap, label: "Tell me about Hybrid" },
  { icon: Phone, label: "Call me back" },
]

export default function QuickReplies({
  onSelect,
}: {
  onSelect: (text: string) => void
}) {
  return (
    <div className="border-t border-[var(--border-color)] bg-white px-4 py-2">
      <div className="surya-scrollbar-none flex gap-2 overflow-x-auto">
        {replies.map(({ icon: Icon, label }) => (
          <button
            key={label}
            type="button"
            onClick={() => onSelect(label)}
            className="inline-flex h-8 shrink-0 items-center gap-1.5 rounded-full border border-[var(--border-color)] bg-white px-3 font-[family-name:var(--font-dm-sans)] text-[12px] font-medium text-[var(--ink)] transition-colors hover:border-[var(--blue)] hover:text-[var(--blue)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--blue)]"
          >
            <Icon className="h-3.5 w-3.5" />
            {label}
          </button>
        ))}
      </div>
    </div>
  )
}
