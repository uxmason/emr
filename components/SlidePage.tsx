'use client'

import { SlidePageProps } from '@/types/ui'
import SlidePageHeader from './SlidePageHeader'

/**
 * 기본 슬라이드 페이지 컴포넌트
 * 공통 슬라이드 페이지 기능을 제공
 */
export default function SlidePage({ 
  children, 
  className = '', 
  transform, 
  zIndex, 
  style,
  onGoBack,
  showBackButton = false,
  title,
  employeeName,
  employeeRole,
  showToggleSwitch = true
}: SlidePageProps) {
  const inlineStyle: React.CSSProperties = {
    ...(transform && { transform }),
    ...(zIndex !== undefined && { zIndex }),
    ...style
  }

  return (
    <div className={`C073 ${className}`.trim()} style={inlineStyle}>
      {showBackButton && onGoBack && (
        <SlidePageHeader
          onGoBack={onGoBack}
          title={title || '고객 참조 사항'}
          employeeName={employeeName}
          employeeRole={employeeRole}
          showToggleSwitch={showToggleSwitch}
        />
      )}
      {children}
    </div>
  )
}

