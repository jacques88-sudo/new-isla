import { createContext, useCallback, useContext, useMemo, useState } from 'react'
import type { ReactNode } from 'react'
import type { Tour } from '../types/tour'

type SavedListValue = {
  items: Tour[]
  count: number
  total: number
  isOpen: boolean
  has: (id: number) => boolean
  toggle: (tour: Tour) => void
  remove: (id: number) => void
  clear: () => void
  open: () => void
  close: () => void
}

const SavedListContext = createContext<SavedListValue | null>(null)

export function SavedListProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<Tour[]>([])
  const [isOpen, setIsOpen] = useState(false)

  const has = useCallback((id: number) => items.some((item) => item.id === id), [items])

  // One tap on a card is the whole interaction: no booking step, the tour
  // just lands on the postcard list.
  const toggle = useCallback((tour: Tour) => {
    setItems((current) =>
      current.some((item) => item.id === tour.id)
        ? current.filter((item) => item.id !== tour.id)
        : [...current, tour],
    )
  }, [])

  const remove = useCallback((id: number) => {
    setItems((current) => current.filter((item) => item.id !== id))
  }, [])

  const clear = useCallback(() => setItems([]), [])
  const open = useCallback(() => setIsOpen(true), [])
  const close = useCallback(() => setIsOpen(false), [])

  const value = useMemo<SavedListValue>(
    () => ({
      items,
      count: items.length,
      total: items.reduce((sum, item) => sum + item.price, 0),
      isOpen,
      has,
      toggle,
      remove,
      clear,
      open,
      close,
    }),
    [items, isOpen, has, toggle, remove, clear, open, close],
  )

  return <SavedListContext.Provider value={value}>{children}</SavedListContext.Provider>
}

export function useSavedList() {
  const context = useContext(SavedListContext)
  if (!context) {
    throw new Error('useSavedList must be used inside a SavedListProvider')
  }
  return context
}
