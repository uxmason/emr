'use client'

import { useState } from 'react'
import { TipState, TooltipProps } from '@/types/ui'

export default function Tooltip({ text, children, offsetX = 16, offsetY = 16 }: TooltipProps) {
  const [tip, setTip] = useState<TipState>({ visible: false, text: '', x: 0, y: 0 })

  const showTip = () => setTip((prev) => ({ ...prev, visible: true, text }))
  const moveTip = (e: React.MouseEvent) =>
    setTip((prev) => ({
      ...prev,
      visible: true,
      x: e.clientX + offsetX,
      y: e.clientY + offsetY,
    }))
  const hideTip = () => setTip((prev) => ({ ...prev, visible: false }))

  return (
    <>
      <div onMouseEnter={showTip} onMouseMove={moveTip} onMouseLeave={hideTip}>
        {children}
      </div>
      {tip.visible && (
        <div className='tooltip-follow' style={{ left: tip.x, top: tip.y }}>
          {tip.text}
        </div>
      )}
    </>
  )
}

