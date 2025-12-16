'use client'

import { useEffect, useRef, ReactNode, useImperativeHandle, forwardRef, useCallback } from 'react'

interface ScrollableContainerProps {
  children: ReactNode
  className?: string
  height?: string
  onOverflowChange?: (hasOverflow: boolean) => void
}

export interface ScrollableContainerRef {
  checkOverflow: () => void
  getElement: () => HTMLDivElement | null
}

const ScrollableContainer = forwardRef<ScrollableContainerRef, ScrollableContainerProps>(({
  children,
  className = '',
  height,
  onOverflowChange,
}, ref) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const checkOverflow = useCallback(() => {
    if (scrollContainerRef.current) {
      const element = scrollContainerRef.current
      const hasOverflow = element.scrollHeight > element.clientHeight
      
      if (hasOverflow) {
        element.classList.add('isOverflowed')
      } else {
        element.classList.remove('isOverflowed')
      }

      onOverflowChange?.(hasOverflow)
    }
  }, [onOverflowChange])

  useImperativeHandle(ref, () => ({
    checkOverflow,
    getElement: () => scrollContainerRef.current
  }), [checkOverflow])

  useEffect(() => {
    let resizeTimeoutId: ReturnType<typeof setTimeout> | null = null

    const debouncedCheckOverflow = () => {
      if (resizeTimeoutId) {
        clearTimeout(resizeTimeoutId)
      }
      resizeTimeoutId = setTimeout(() => {
        checkOverflow()
      }, 150)
    }

    const handleScroll = () => {
      checkOverflow()
    }

    checkOverflow()

    const currentElement = scrollContainerRef.current
    const resizeObserver = new ResizeObserver(debouncedCheckOverflow)
    if (currentElement) {
      resizeObserver.observe(currentElement)
      currentElement.addEventListener('scroll', handleScroll)
    }

    window.addEventListener('resize', debouncedCheckOverflow)

    return () => {
      if (resizeTimeoutId) clearTimeout(resizeTimeoutId)
      resizeObserver.disconnect()
      window.removeEventListener('resize', debouncedCheckOverflow)
      if (currentElement) {
        currentElement.removeEventListener('scroll', handleScroll)
      }
    }
  }, [checkOverflow, height])

  const containerStyle = height ? { height } : undefined
  const combinedClassName = className || 'C038'

  return (
    <div 
      ref={scrollContainerRef} 
      className={combinedClassName}
      style={containerStyle}
    >
      {children}
    </div>
  )
})

ScrollableContainer.displayName = 'ScrollableContainer'

export default ScrollableContainer


