'use client'

import { useState, ReactElement, cloneElement, isValidElement } from 'react'
import { TipState, TooltipProps } from '@/types/ui'

export default function Tooltip(props: TooltipProps) {
  const { text, children, className, style } = props
  const hasOffset = 'offsetX' in props && 'offsetY' in props
  const finalOffsetX = hasOffset ? props.offsetX : 16
  const finalOffsetY = hasOffset ? props.offsetY : 16
  const [tip, setTip] = useState<TipState>({ visible: false, text: '', x: 0, y: 0 })

  const showTip = () => setTip((prev) => ({ ...prev, visible: true, text }))
  const moveTip = (e: React.MouseEvent) =>
    setTip((prev) => ({
      ...prev,
      visible: true,
      x: e.clientX + finalOffsetX,
      y: e.clientY + finalOffsetY,
    }))
  const hideTip = () => setTip((prev) => ({ ...prev, visible: false }))

  // children이 React 요소인 경우 직접 이벤트 핸들러를 추가
  if (isValidElement(children)) {
    return (
      <>
        {cloneElement(children as ReactElement, {
          onMouseEnter: showTip,
          onMouseMove: moveTip,
          onMouseLeave: hideTip,
          className: className ? `${(children as ReactElement).props.className || ''} ${className}`.trim() : (children as ReactElement).props.className,
          style: { ...((children as ReactElement).props.style || {}), ...(style || {}) },
        })}
        {tip.visible && (
          <div className='tooltip-follow' style={{ left: tip.x, top: tip.y }}>
            {tip.text}
          </div>
        )}
      </>
    )
  }

  // children이 요소가 아닌 경우 wrapper div 사용
  return (
    <>
      <div 
        className={className}
        style={style}
        onMouseEnter={showTip} 
        onMouseMove={moveTip} 
        onMouseLeave={hideTip}
      >
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

