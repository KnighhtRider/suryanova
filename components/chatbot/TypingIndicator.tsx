export default function TypingIndicator() {
  return (
    <div className="flex items-end gap-2">
      <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--blue)] text-white">
        <span className="text-[12px] leading-none">☀</span>
      </div>
      <div className="rounded-[18px] rounded-bl bg-white px-4 py-3 shadow-sm ring-1 ring-[var(--border-color)]">
        <div className="flex items-center gap-1.5">
          {[0, 150, 300].map((delay) => (
            <span
              key={delay}
              className="h-2 w-2 rounded-full bg-[var(--blue-mid)]"
              style={{ animation: `surya-bounce 1.05s ${delay}ms infinite` }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
