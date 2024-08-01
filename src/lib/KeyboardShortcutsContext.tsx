"use client"
import React, { createContext, useState } from "react"

export interface KeyboardShortcutsContextValue {
  isGlobalBlur: boolean
  toggleBlur: () => void
}

export const KeyboardShortcutsContext = createContext<KeyboardShortcutsContextValue>({
  isGlobalBlur: true,
  toggleBlur: () => {},
})

export const KeyboardShortcutsProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const [isGlobalBlur, setIsGlobalBlur] = useState(true)

  const toggleBlur = () => {
    setIsGlobalBlur((prev) => !prev)
  }

  const value = {
    isGlobalBlur,
    toggleBlur,
  }

  return (
    <KeyboardShortcutsContext.Provider value={value}>
      {children}
    </KeyboardShortcutsContext.Provider>
  )
}

export const useKeyboardShortcuts = () => {
  const context = React.useContext(KeyboardShortcutsContext)

  if (!context) {
    throw new Error(
      "useKeyboardShortcuts must be used within a KeyboardShortcutsProvider"
    )
  }

  return context
}
