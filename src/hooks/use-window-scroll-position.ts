import { useThrottle } from '@hooks/use-throttle'
import { useCallback, useEffect, useState } from 'react'

interface ScrollPosition {
  x: number
  y: number
}

interface UseWindowScrollPositionOptions {
  throttleMs?: number
}

export const useWindowScrollPosition = (
  options: UseWindowScrollPositionOptions = {}
): ScrollPosition => {
  const { throttleMs = 100 } = options

  const [scroll, setScroll] = useState<ScrollPosition>({
    x: typeof window !== 'undefined' ? window.scrollY : 0,
    y: typeof window !== 'undefined' ? window.scrollY : 0
  })

  const updateScroll = useCallback(() => {
    setScroll({
      x: window.scrollX,
      y: window.scrollY
    })
  }, [])

  const throttledUpdateScroll = useThrottle(updateScroll, throttleMs)

  useEffect(() => {
    if (typeof window === 'undefined') {
      return
    }

    window.addEventListener('scroll', throttledUpdateScroll)

    throttledUpdateScroll()

    return () => {
      window.removeEventListener('scroll', throttledUpdateScroll)
    }
  }, [throttledUpdateScroll])

  return scroll
}
