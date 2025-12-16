'use client'

interface ActionContentPanelProps {
  actionId: string
  actionLabel: string
}

export default function ActionContentPanel({ actionId, actionLabel }: ActionContentPanelProps) {
  return (
    <div className='C099'>
      <div className='C104'>
        <p className='T047'>{actionLabel}</p>
      </div>
      <div className='C105'>
        <div style={{ padding: 'var(--size-40)', textAlign: 'center', color: 'var(--color-black-50)' }}>
          <p>{actionLabel} 페이지</p>
          <p style={{ marginTop: 'var(--size-10)', fontSize: 'var(--font-14)' }}>콘텐츠 준비 중...</p>
        </div>
      </div>
    </div>
  )
}

