'use client'

import { useEffect, useRef } from 'react'
import { ScrollableContainerProps } from '@/types/ui'

export default function ScrollableContainer({
  children,
  className = '',
  height,
  onOverflowChange,
}: ScrollableContainerProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const checkOverflow = () => {
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
    }

    checkOverflow()

    const resizeObserver = new ResizeObserver(checkOverflow)
    if (scrollContainerRef.current) {
      resizeObserver.observe(scrollContainerRef.current)
    }

    window.addEventListener('resize', checkOverflow)

    return () => {
      resizeObserver.disconnect()
      window.removeEventListener('resize', checkOverflow)
    }
  }, [onOverflowChange, height])

  const containerStyle = height ? { height } : undefined
  const combinedClassName = `C038 ${className}`.trim()

  return (
    <div 
      ref={scrollContainerRef} 
      className={combinedClassName}
      style={containerStyle}
    >
      {children}
    </div>
  )
}


