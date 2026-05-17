"use client"

import { RefObject, useEffect, useRef, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import ReactMarkdown from "react-markdown"
import { ArrowDown } from "lucide-react"
import TypingIndicator from "./TypingIndicator"
import type { Message } from "./types"

function formatTime(date: Date) {
  return new Intl.DateTimeFormat("en-IN", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  }).format(date)
}

export default function ChatMessages({
  messages,
  isWaiting,
  streamingMessageId,
  messagesEndRef,
}: {
  messages: Message[]
  isWaiting: boolean
  streamingMessageId: string | null
  messagesEndRef: RefObject<HTMLDivElement | null>
}) {
  const scrollerRef = useRef<HTMLDivElement>(null)
  const [isPinned, setIsPinned] = useState(true)
  const [showJump, setShowJump] = useState(false)

  function scrollToBottom(behavior: ScrollBehavior = "smooth") {
    messagesEndRef.current?.scrollIntoView({ behavior, block: "end" })
    setShowJump(false)
  }

  useEffect(() => {
    if (isPinned) scrollToBottom("smooth")
    else setShowJump(true)
  }, [messages, isWaiting, isPinned])

  function handleScroll() {
    const node = scrollerRef.current
    if (!node) return
    const distance = node.scrollHeight - node.scrollTop - node.clientHeight
    const pinned = distance < 80
    setIsPinned(pinned)
    if (pinned) setShowJump(false)
  }

  return (
    <div className="relative min-h-0 flex-1 bg-[var(--surface)]">
      <div
        ref={scrollerRef}
        onScroll={handleScroll}
        aria-live="polite"
        className="h-full overflow-y-auto px-4 py-4"
      >
        <div className="space-y-3">
          <AnimatePresence initial={false}>
            {messages.map((message, index) => {
              const previous = messages[index - 1]
              const next = messages[index + 1]
              const firstInSequence = !previous || previous.role !== message.role
              const lastInSequence = !next || next.role !== message.role
              const isUser = message.role === "user"
              const isStreaming = message.id === streamingMessageId

              return (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, x: isUser ? 20 : -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className={`flex ${isUser ? "justify-end" : "justify-start"} ${firstInSequence ? "mt-3" : "mt-1"}`}
                >
                  <div className={`flex max-w-[88%] gap-2 ${isUser ? "flex-row-reverse" : "flex-row"}`}>
                    {!isUser && (
                      <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--blue)] text-[12px] text-white">
                        {firstInSequence ? "☀" : ""}
                      </div>
                    )}
                    <div>
                      <div
                        className={`font-[family-name:var(--font-dm-sans)] text-[14px] leading-[1.7] shadow-sm ${
                          isUser
                            ? "rounded-[18px] rounded-br bg-[var(--blue)] px-4 py-2.5 text-white"
                            : "rounded-[18px] rounded-bl border border-[var(--border-color)] bg-white px-4 py-2.5 text-[var(--ink)]"
                        }`}
                      >
                        {isUser ? (
                          <p className="whitespace-pre-wrap">{message.content}</p>
                        ) : (
                          <div className="surya-markdown">
                            <ReactMarkdown>{message.content}</ReactMarkdown>
                            {isStreaming && <span className="surya-cursor">|</span>}
                          </div>
                        )}
                      </div>
                      {lastInSequence && (
                        <div className={`mt-1 text-[11px] text-[#8FA0B0] ${isUser ? "text-right" : "text-left"}`}>
                          {formatTime(message.timestamp)}
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </AnimatePresence>

          {isWaiting && <TypingIndicator />}
          <div ref={messagesEndRef} />
        </div>
      </div>

      <AnimatePresence>
        {showJump && (
          <motion.button
            type="button"
            onClick={() => scrollToBottom()}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 12 }}
            className="absolute bottom-3 left-1/2 flex -translate-x-1/2 items-center gap-1.5 rounded-full bg-[var(--orange)] px-3 py-1.5 font-[family-name:var(--font-dm-sans)] text-[12px] font-medium text-white shadow-lg"
          >
            <ArrowDown className="h-3.5 w-3.5" />
            New message
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  )
}
