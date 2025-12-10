'use client'

export interface TipState {
  visible: boolean
  text: string
  x: number
  y: number
}

export interface TooltipProps {
  text: string
  children: React.ReactNode
  offsetX?: number
  offsetY?: number
}

