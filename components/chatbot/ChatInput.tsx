"use client"

import { FormEvent, KeyboardEvent, useEffect, useRef, useState } from "react"
import { ArrowUp } from "lucide-react"

const placeholders = [
  "Ask about solar, subsidy, savings...",
  "Type your monthly bill amount...",
  "Ask which system suits your home...",
]

export default function ChatInput({
  value,
  onChange,
  onSend,
  disabled,
  shouldFocus,
}: {
  value: string
  onChange: (value: string) => void
  onSend: () => void
  disabled: boolean
  shouldFocus: boolean
}) {
  const ref = useRef<HTMLTextAreaElement>(null)
  const [placeholderIndex, setPlaceholderIndex] = useState(0)
  const [shake, setShake] = useState(false)

  useEffect(() => {
    const timer = window.setInterval(
      () => setPlaceholderIndex((index) => (index + 1) % placeholders.length),
      4000,
    )
    return () => window.clearInterval(timer)
  }, [])

  useEffect(() => {
    if (shouldFocus) {
      const timer = window.setTimeout(() => {
        ref.current?.focus({ preventScroll: true })
      }, 250)
      return () => window.clearTimeout(timer)
    }
  }, [shouldFocus])

  useEffect(() => {
    if (!ref.current) return
    ref.current.style.height = "0px"
    ref.current.style.height = `${Math.min(ref.current.scrollHeight, 112)}px`
  }, [value])

  function submit(event?: FormEvent) {
    event?.preventDefault()
    if (!value.trim()) {
      setShake(true)
      window.setTimeout(() => setShake(false), 300)
      return
    }
    onSend()
  }

  function handleKeyDown(event: KeyboardEvent<HTMLTextAreaElement>) {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault()
      submit()
    }
  }

  return (
    <form onSubmit={submit} className="chat-input-bar shrink-0 border-t border-[var(--border-color)] bg-white px-4 pb-[calc(12px+env(safe-area-inset-bottom))] pt-3">
      <div className={`flex items-end gap-2 rounded-[10px] border bg-white p-2 transition-all ${shake ? "border-red-400 ring-2 ring-red-100" : "border-[var(--border-color)] focus-within:border-[var(--blue)] focus-within:ring-2 focus-within:ring-[var(--blue)]/10"}`}>
        <textarea
          ref={ref}
          value={value}
          onChange={(event) => onChange(event.target.value)}
          onKeyDown={handleKeyDown}
          rows={1}
          placeholder={placeholders[placeholderIndex]}
          className="max-h-28 min-h-10 flex-1 resize-none bg-transparent px-2 py-2 font-[family-name:var(--font-dm-sans)] text-[14px] leading-5 text-[var(--ink)] placeholder:text-[var(--ink-muted)] focus:outline-none"
          disabled={disabled}
        />
        <button
          type="submit"
          disabled={disabled || !value.trim()}
          aria-label="Send message"
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--orange)] text-white transition-colors hover:bg-[#E96800] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--blue)] disabled:bg-[#C9D3DE]"
        >
          <ArrowUp className="h-5 w-5" />
        </button>
      </div>
      <div className="mt-1.5 text-center font-[family-name:var(--font-dm-sans)] text-[10px] text-[var(--ink-muted)]">
        Powered by Surynova AI - surynova.com
      </div>
    </form>
  )
}
