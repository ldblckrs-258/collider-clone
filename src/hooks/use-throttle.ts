import { useCallback, useRef } from 'react'

export const useThrottle = (callback: () => void, delay: number) => {
  const lastCall = useRef<number>(0)
  const timeout = useRef<ReturnType<typeof setTimeout> | null>(null)

  const throttledFunction = useCallback(() => {
    const now = Date.now()
    const remaining = delay - (now - lastCall.current)

    if (remaining <= 0) {
      if (timeout.current) {
        clearTimeout(timeout.current)
        timeout.current = null
      }
      lastCall.current = now
      callback()
    } else if (!timeout.current) {
      timeout.current = setTimeout(() => {
        lastCall.current = Date.now()
        timeout.current = null
        callback()
      }, remaining)
    }
  }, [callback, delay])

  return throttledFunction
}
