'use client'

import { useState, ReactNode, useRef, useEffect } from 'react'
import React from 'react'
import WeeklyCalendar from './WeeklyCalendar'
import { AsideProvider } from './AsideContext'

interface AsidePage {
  id: string
  content: ReactNode
}

interface AsideProps {
  mainContent?: ReactNode | (() => ReactNode)
  onNavigate?: (pageId: string) => void
}

export default function Aside({ mainContent, onNavigate, children }: AsideProps & { children?: ReactNode }) {
  const [pages, setPages] = useState<AsidePage[]>([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  const navigateToPage = (pageId: string, content: ReactNode) => {
    if (isAnimating) return
    setIsAnimating(true)
    const newPage: AsidePage = { id: `${pageId}-${Date.now()}`, content }
    setPages(prev => [...prev, newPage])
    setCurrentIndex(prev => prev + 1)
    onNavigate?.(pageId)
    setTimeout(() => setIsAnimating(false), 300)
  }

  const goBack = () => {
    if (currentIndex > 0 && !isAnimating) {
      setIsAnimating(true)
      setCurrentIndex(prev => prev - 1)
      setTimeout(() => {
        setPages(prev => prev.slice(0, -1))
        setIsAnimating(false)
      }, 300)
    }
  }

  return (
    <AsideProvider navigateToPage={navigateToPage}>
      <AsideInner mainContent={mainContent} pages={pages} setPages={setPages} currentIndex={currentIndex} setCurrentIndex={setCurrentIndex} isAnimating={isAnimating} setIsAnimating={setIsAnimating} goBack={goBack} />
      {children}
    </AsideProvider>
  )
}

function AsideInner({ 
  mainContent, 
  pages, 
  setPages, 
  currentIndex, 
  setCurrentIndex, 
  isAnimating, 
  setIsAnimating, 
  goBack 
}: { 
  mainContent?: ReactNode | (() => ReactNode)
  pages: AsidePage[]
  setPages: React.Dispatch<React.SetStateAction<AsidePage[]>>
  currentIndex: number
  setCurrentIndex: React.Dispatch<React.SetStateAction<number>>
  isAnimating: boolean
  setIsAnimating: React.Dispatch<React.SetStateAction<boolean>>
  goBack: () => void
}) {
  // Render mainContent inside provider to access useAside
  const MainPageContent = () => {
    const content = typeof mainContent === 'function' ? mainContent() : mainContent
    return (
      <>
        <WeeklyCalendar />
        <div className='C070'>
          <p className='T035'>원무파트 <span className='isUnit'>전체 전달사항 입력</span></p>
          <div className='C071'><div className='C072 styleSheet isIcon isWrite'></div></div>
        </div>
        <div className='C074'></div>
        <div className='C075'>
          {content}
        </div>
      </>
    )
  }

  // Initialize main page
  React.useEffect(() => {
    if (pages.length === 0) {
      setPages([{
        id: 'main',
        content: <MainPageContent />
      }])
    }
  }, [mainContent, pages.length])

  return (
    <aside className='C013'>
      <div className='C073-container' style={{ position: 'relative', width: '100%', height: '100%', overflow: 'hidden' }}>
        {pages.map((page, index) => {
          const offset = index - currentIndex
          return (
            <div
              key={page.id}
              className='C073'
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                transform: `translateX(${offset * 100}%)`,
                transition: 'transform 0.3s ease-in-out',
                zIndex: pages.length - index,
                backgroundColor: 'var(--background-green)'
              }}
            >
              {page.content}
              {index > 0 && (
                <button
                  onClick={goBack}
                  style={{
                    position: 'absolute',
                    top: 'var(--size-20)',
                    left: 'var(--size-20)',
                    background: 'var(--color-white)',
                    border: 'none',
                    borderRadius: 'var(--size-10)',
                    padding: 'var(--size-10) var(--size-15)',
                    cursor: 'pointer',
                    zIndex: 1000,
                    fontSize: 'var(--font-14)',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
                  }}
                >
                  ← 뒤로
                </button>
              )}
            </div>
          )
        })}
      </div>
    </aside>
  )
}
