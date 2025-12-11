'use client'

import { ListItemProps } from '@/types/ui'

export default function ListItem({
  children,
  leftContent,
  rightContent,
  className = '',
  onClick,
}: ListItemProps) {
  const combinedClassName = `C034 ${className}`.trim()

  if (children) {
    return (
      <div 
        className={combinedClassName}
        onClick={onClick}
      >
        {children}
      </div>
    )
  }

  return (
    <div 
      className={combinedClassName}
      onClick={onClick}
    >
      {leftContent && <div className='C035'>{leftContent}</div>}
      {rightContent && <div className='C037'>{rightContent}</div>}
    </div>
  )
}


