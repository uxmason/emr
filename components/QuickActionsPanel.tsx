'use client'

import { useRef } from 'react'

interface QuickActionsPanelProps {
  selectedAction: string
  onActionChange: (actionId: string) => void
}

export default function QuickActionsPanel({ selectedAction, onActionChange }: QuickActionsPanelProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const itemRefs = useRef<Record<string, HTMLDivElement | null>>({})

  const actions = [
    { id: 'report', icon: 'isReport', label: '내원일지' },
    { id: 'package', icon: 'isPackage', label: '패키지' },
    { id: 'reservation', icon: 'isReservation', label: '예약' },
    { id: 'counseling', icon: 'isCounseling', label: '상담' },
    { id: 'surgery', icon: 'isSurgery', label: '수술' },
    { id: 'syringe', icon: 'isSyringe', label: '시술' },
    { id: 'clinic', icon: 'isClinic', label: '진료' },
    { id: 'drug', icon: 'isDrug', label: '약처방' },
    { id: 'coin', icon: 'isCoin', label: '수납' },
    { id: 'gold', icon: 'isGold', label: '실천지수' },
    { id: 'ruler', icon: 'isRuler', label: '사이즈' },
    { id: 'protect', icon: 'isProtect', label: '동의서&설문' },
    { id: 'clip', icon: 'isClip', label: '기록지' },
    { id: 'blood', icon: 'isBlood', label: '혈액검사' },
    { id: 'speed', icon: 'isSpeed', label: 'TAT' },
    { id: 'pants', icon: 'isPants', label: '가멘트' },
    { id: 'camera', icon: 'isCamera', label: '사진' },
    { id: 'mylocation', icon: 'isMyLocation', label: '상세로그' }
  ]

  const handleActionClick = (actionId: string) => {
    onActionChange(actionId)
    
    // 선택된 항목으로 스크롤
    setTimeout(() => {
      const selectedElement = itemRefs.current[actionId]
      const container = containerRef.current
      
      if (selectedElement && container) {
        const containerRect = container.getBoundingClientRect()
        const elementRect = selectedElement.getBoundingClientRect()
        
        // 요소가 컨테이너 뷰포트 밖에 있는지 확인
        const isAboveViewport = elementRect.top < containerRect.top
        const isBelowViewport = elementRect.bottom > containerRect.bottom
        
        if (isAboveViewport || isBelowViewport) {
          // scrollIntoView 사용 (컨테이너가 스크롤 가능한 경우)
          selectedElement.scrollIntoView({
            behavior: 'smooth',
            block: 'nearest',
            inline: 'nearest'
          })
        }
      }
    }, 10)
  }

  return (
    <div ref={containerRef} className='C100'>
      {actions.map((action) => (
        <div
          key={action.id}
          ref={(el) => {
            itemRefs.current[action.id] = el
          }}
          className={`C127 ${selectedAction === action.id ? 'isSelected' : ''}`}
          onClick={() => handleActionClick(action.id)}
        >
          <div className={`C128 styleSheet isIcon ${action.icon}`}></div>
          <p className='T054'>{action.label}</p>
        </div>
      ))}
    </div>
  )
}

