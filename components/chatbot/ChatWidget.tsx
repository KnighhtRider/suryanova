"use client"

import { useEffect, useRef, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import type { Variants } from "framer-motion"
import { MessageCircle, Sun, X } from "lucide-react"
import ChatWindow from "./ChatWindow"
import type { Message } from "./types"

const windowVariants: Variants = {
  hidden: { opacity: 0, scale: 0.92, y: 20, transformOrigin: "bottom right" },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.28, ease: [0, 0, 0.2, 1] as const },
  },
  exit: { opacity: 0, scale: 0.92, y: 16, transition: { duration: 0.2 } },
}

function id() {
  return typeof crypto !== "undefined" && "randomUUID" in crypto
    ? crypto.randomUUID()
    : `${Date.now()}-${Math.random().toString(16).slice(2)}`
}

function isLeadCaptured(text: string) {
  return /(\+?\d[\d\s-]{8,}|call|phone|number|mobile)/i.test(text)
}

export default function ChatWidget() {
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState("")
  const [isStreaming, setIsStreaming] = useState(false)
  const [isWaiting, setIsWaiting] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [hasUnread, setHasUnread] = useState(false)
  const [showQuickReplies, setShowQuickReplies] = useState(false)
  const [streamingMessageId, setStreamingMessageId] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [lastUserText, setLastUserText] = useState("")
  const messagesEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (isOpen) setHasUnread(false)
  }, [isOpen])

  function toggleChat() {
    const scrollX = window.scrollX
    const scrollY = window.scrollY
    setIsOpen((open) => !open)

    window.requestAnimationFrame(() => {
      window.scrollTo(scrollX, scrollY)
      window.requestAnimationFrame(() => window.scrollTo(scrollX, scrollY))
    })
  }

  async function sendMessage(text: string, source: "typed" | "chip" = "typed") {
    const trimmed = text.trim()
    if (!trimmed || isStreaming) return

    setInput("")
    setError(null)
    setLastUserText(trimmed)
    if (source === "typed") setShowQuickReplies(false)

    const userMsg: Message = {
      id: id(),
      role: "user",
      content: trimmed,
      timestamp: new Date(),
    }

    const history = [...messages, userMsg]
    setMessages(history)
    setIsStreaming(true)
    setIsWaiting(true)

    const botMsg: Message = {
      id: id(),
      role: "assistant",
      content: "",
      timestamp: new Date(),
    }

    try {
      await new Promise((resolve) => window.setTimeout(resolve, 400))
      setMessages((prev) => [...prev, botMsg])
      setStreamingMessageId(botMsg.id)

      const response = await fetch("/api/chat", {
        method: "POST",
        body: JSON.stringify({
          messages: history.map((message) => ({
            role: message.role,
            content: message.content,
          })),
        }),
        headers: { "Content-Type": "application/json" },
      })

      if (!response.ok || !response.body) {
        let apiError = "Sorry, I'm having trouble connecting. Try again?"
        try {
          const payload = await response.json()
          apiError = payload.error || apiError
        } catch {}
        throw new Error(apiError)
      }

      const reader = response.body.getReader()
      const decoder = new TextDecoder()
      let firstToken = true
      let fullText = ""

      while (true) {
        const { done, value } = await reader.read()
        if (done) break
        const chunk = decoder.decode(value, { stream: true })
        fullText += chunk

        if (firstToken) {
          firstToken = false
          setIsWaiting(false)
        }

        setMessages((prev) =>
          prev.map((message) =>
            message.id === botMsg.id
              ? { ...message, content: message.content + chunk }
              : message,
          ),
        )
      }

      if (isLeadCaptured(trimmed)) {
        setMessages((prev) => [
          ...prev,
          {
            id: id(),
            role: "assistant",
            content: "Perfect! Our expert will call you shortly ☀️",
            timestamp: new Date(),
          },
        ])
      }

      setShowQuickReplies(fullText.length > 0 && source !== "typed")
      if (!isOpen) setHasUnread(true)
    } catch (caught) {
      const message =
        caught instanceof Error ? caught.message : "Sorry, I'm having trouble connecting. Try again?"
      setError(message)
      setMessages((prev) => prev.filter((message) => message.id !== botMsg.id))
    } finally {
      setIsStreaming(false)
      setIsWaiting(false)
      setStreamingMessageId(null)
    }
  }

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={windowVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <ChatWindow
              messages={messages}
              input={input}
              isStreaming={isStreaming}
              isWaiting={isWaiting}
              streamingMessageId={streamingMessageId}
              showQuickReplies={showQuickReplies && messages.some((m) => m.role === "assistant")}
              error={error}
              messagesEndRef={messagesEndRef}
              onInputChange={setInput}
              onSend={() => sendMessage(input, "typed")}
              onPrompt={(text) => sendMessage(text, "chip")}
              onMinimize={() => setIsOpen(false)}
              onClose={() => setIsOpen(false)}
              onRetry={() => sendMessage(lastUserText, "chip")}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <div className="fixed bottom-4 right-4 z-[9998] flex flex-col items-end gap-3 min-[481px]:bottom-6 min-[481px]:right-6">
        <motion.a
          href="https://wa.me/916396814058?text=Hi!%20I%27m%20interested%20in%20rooftop%20solar%20installation.%20Please%20share%20details."
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 230, damping: 18, delay: 0.35 }}
          whileHover={{ scale: 1.06, y: -2 }}
          whileTap={{ scale: 0.95 }}
          className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_14px_34px_rgba(37,211,102,0.28)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#128C7E] focus-visible:ring-offset-2 max-[380px]:h-12 max-[380px]:w-12"
        >
          <WhatsAppIcon className="h-7 w-7 max-[380px]:h-6 max-[380px]:w-6" />
        </motion.a>
        <motion.button
          type="button"
          onClick={toggleChat}
          aria-label={isOpen ? "Close Surya Solar Assistant" : "Open Surya Solar Assistant"}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 240, damping: 22, delay: 0.45 }}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.98 }}
          className="group flex h-14 w-14 items-center justify-center rounded-full bg-[var(--orange)] text-white shadow-[0_14px_34px_rgba(255,115,0,0.34)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--blue)] focus-visible:ring-offset-2 max-[380px]:h-12 max-[380px]:w-12"
        >
          <span className="relative flex h-full w-full items-center justify-center rounded-full transition-transform group-hover:scale-[1.04]">
            {!isOpen && (
              <span className="absolute inset-0 rounded-full bg-[var(--orange)]/35" style={{ animation: "surya-launcher-pulse 6s ease-out infinite" }} />
            )}
            <AnimatePresence mode="wait" initial={false}>
              {isOpen ? (
                <motion.span
                  key="close"
                  initial={{ rotate: -45, opacity: 0, scale: 0.8 }}
                  animate={{ rotate: 0, opacity: 1, scale: 1 }}
                  exit={{ rotate: 45, opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.16 }}
                >
                  <X className="h-5 w-5" />
                </motion.span>
              ) : (
                <motion.span
                  key="open"
                  initial={{ rotate: 45, opacity: 0, scale: 0.8 }}
                  animate={{ rotate: 0, opacity: 1, scale: 1 }}
                  exit={{ rotate: -45, opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.16 }}
                  className="relative"
                >
                  <MessageCircle className="h-5 w-5" />
                  <Sun className="absolute -right-1 -top-1 h-2.5 w-2.5 fill-white text-white" />
                </motion.span>
              )}
            </AnimatePresence>
            {hasUnread && (
              <span className="absolute -right-0.5 -top-0.5 h-3.5 w-3.5 rounded-full border-2 border-white bg-[var(--blue)]" />
            )}
          </span>
        </motion.button>
      </div>
    </>
  )
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347M12.05 21.785h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
    </svg>
  )
}
