"use client"

import { RefObject, useEffect, useRef } from "react"
import ChatHeader from "./ChatHeader"
import ChatInput from "./ChatInput"
import ChatMessages from "./ChatMessages"
import QuickReplies from "./QuickReplies"
import WelcomeScreen from "./WelcomeScreen"
import type { Message } from "./types"

export default function ChatWindow({
  messages,
  input,
  isStreaming,
  isWaiting,
  streamingMessageId,
  showQuickReplies,
  error,
  messagesEndRef,
  onInputChange,
  onSend,
  onPrompt,
  onMinimize,
  onClose,
  onRetry,
}: {
  messages: Message[]
  input: string
  isStreaming: boolean
  isWaiting: boolean
  streamingMessageId: string | null
  showQuickReplies: boolean
  error: string | null
  messagesEndRef: RefObject<HTMLDivElement | null>
  onInputChange: (value: string) => void
  onSend: () => void
  onPrompt: (text: string) => void
  onMinimize: () => void
  onClose: () => void
  onRetry: () => void
}) {
  const dialogRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") onMinimize()
      if (event.key !== "Tab" || !dialogRef.current) return

      const focusable = Array.from(
        dialogRef.current.querySelectorAll<HTMLElement>(
          "button, textarea, a[href], [tabindex]:not([tabindex='-1'])",
        ),
      ).filter((node) => !node.hasAttribute("disabled"))

      if (!focusable.length) return
      const first = focusable[0]
      const last = focusable[focusable.length - 1]

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }

    document.addEventListener("keydown", handleKeyDown)
    return () => document.removeEventListener("keydown", handleKeyDown)
  }, [onMinimize])

  useEffect(() => {
    const viewport = window.visualViewport
    if (!viewport || !dialogRef.current) return

    function syncKeyboardInset() {
      const inset = Math.max(0, window.innerHeight - viewport!.height - viewport!.offsetTop)
      dialogRef.current?.style.setProperty("--keyboard-offset", `${inset}px`)
    }

    syncKeyboardInset()
    viewport.addEventListener("resize", syncKeyboardInset)
    viewport.addEventListener("scroll", syncKeyboardInset)
    return () => {
      viewport.removeEventListener("resize", syncKeyboardInset)
      viewport.removeEventListener("scroll", syncKeyboardInset)
    }
  }, [])

  return (
    <section
      ref={dialogRef}
      role="dialog"
      aria-label="Surya Solar Assistant"
      className="chat-window fixed bottom-24 right-4 z-[9999] flex h-[600px] w-[380px] flex-col overflow-hidden rounded-[20px] bg-white shadow-[0_24px_64px_rgba(0,0,0,0.18),0_0_0_1px_rgba(0,76,137,0.08)] max-[480px]:inset-0 max-[480px]:h-[calc(100dvh-var(--keyboard-offset,0px))] max-[480px]:w-full max-[480px]:rounded-none"
    >
      <ChatHeader onMinimize={onMinimize} onClose={onClose} />
      {messages.length === 0 ? (
        <WelcomeScreen onSelect={onPrompt} />
      ) : (
        <ChatMessages
          messages={messages}
          isWaiting={isWaiting}
          streamingMessageId={streamingMessageId}
          messagesEndRef={messagesEndRef}
        />
      )}
      {error && (
        <button
          type="button"
          onClick={onRetry}
          className="mx-4 my-2 rounded-full bg-red-50 px-3 py-2 text-center font-[family-name:var(--font-dm-sans)] text-[12px] font-medium text-red-700 ring-1 ring-red-200"
        >
          {error}
        </button>
      )}
      {showQuickReplies && <QuickReplies onSelect={onPrompt} />}
      <ChatInput
        value={input}
        onChange={onInputChange}
        onSend={onSend}
        disabled={isStreaming}
        shouldFocus
      />
    </section>
  )
}
