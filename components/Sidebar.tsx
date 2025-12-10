'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Sidebar() {
  const pathname = usePathname()

  const menuItems = [
    { href: '/dashboard', icon: 'isDashboard', label: '대시보드' },
    { href: '/reception', icon: 'isReception', label: '원무' },
    { href: '/counseling', icon: 'isCounseling', label: '상담' },
    { href: '/pre-care', icon: 'isPreCare', label: '전처치' },
    { href: '/clinic', icon: 'isProcedure', label: '진료' },
    { href: '/surgery', icon: 'isSurgery', label: '수술' },
    { href: '/procedure', icon: 'isClinic', label: '시술' },
    { href: '/post-care', icon: 'isPostCare', label: '후관리' },
    { href: '/statistics', icon: 'isStatistics', label: '통계' },
  ]

  return (
    <nav className='C000'>
      <div className='C001'>
        <div className='C002'></div>
        <p className='T000'>홍성훈</p>
        <p className='T001'>부산병원</p>
      </div>
      <div className='C003'>
        {menuItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`C004 ${pathname === item.href ? 'isSelected' : ''}`}
          >
            <div className={`C005 styleSheet isIcon ${item.icon} isBig`}></div>
            <p className='T002'>{item.label}</p>
          </Link>
        ))}
      </div>
      <div className='C006'>
        <Link href='/settings' className='C004'>
          <div className='C005 styleSheet isIcon isSettings isBig'></div>
          <p className='T002'>설정</p>
        </Link>
      </div>
    </nav>
  )
}

