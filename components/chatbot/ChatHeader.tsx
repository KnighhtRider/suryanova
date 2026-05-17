import { ArrowLeft, Minus, Sun, X } from "lucide-react"

export default function ChatHeader({
  onMinimize,
  onClose,
}: {
  onMinimize: () => void
  onClose: () => void
}) {
  return (
    <header className="flex h-[72px] shrink-0 items-center gap-3 border-b border-[var(--border-color)] bg-white px-4">
      <button
        type="button"
        onClick={onMinimize}
        aria-label="Back"
        className="flex h-9 w-9 items-center justify-center rounded-full text-[var(--ink-soft)] transition-colors hover:bg-[var(--surface)] hover:text-[var(--blue)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--blue)] min-[481px]:hidden"
      >
        <ArrowLeft className="h-5 w-5" />
      </button>
      <div className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--blue)] text-white">
        <span className="absolute inset-[-4px] rounded-full border border-[var(--orange)]/30" style={{ animation: "surya-spin 8s linear infinite" }} />
        <Sun className="h-5 w-5" />
      </div>
      <div className="min-w-0 flex-1">
        <div className="font-[family-name:var(--font-syne)] text-[15px] font-bold leading-tight text-[var(--ink)]">
          Surya
        </div>
        <div className="mt-1 flex items-center gap-1.5 font-[family-name:var(--font-dm-sans)] text-[12px] text-[var(--ink-soft)]">
          <span className="h-2 w-2 rounded-full bg-emerald-500" style={{ animation: "surya-pulse 2s ease-in-out infinite" }} />
          Solar Expert · Online
        </div>
      </div>
      <button
        type="button"
        onClick={onMinimize}
        aria-label="Minimize chat"
        className="hidden h-9 w-9 items-center justify-center rounded-full text-[var(--ink-soft)] transition-colors hover:bg-[var(--surface)] hover:text-[var(--blue)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--blue)] min-[481px]:flex"
      >
        <Minus className="h-5 w-5" />
      </button>
      <button
        type="button"
        onClick={onClose}
        aria-label="Close chat"
        className="flex h-9 w-9 items-center justify-center rounded-full text-[var(--ink-soft)] transition-colors hover:bg-[var(--surface)] hover:text-[var(--blue)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--blue)]"
      >
        <X className="h-5 w-5" />
      </button>
    </header>
  )
}
