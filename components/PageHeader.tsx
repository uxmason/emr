import Tooltip from '@/components/Tooltip'

export default function PageHeader({ title }: { title: string }) {
  return (
    <header className='C008'>
      <h1>{title}</h1>
      <Tooltip text='지점 전체 방문 고객 현황'>
        <div className='C009'>
          <div className='C010'></div>
          <div className='C011'>
            <p className='T003'>방문 고객 현황</p>
            <p className='T004'>장시간 대기중인 고객이 없습니다.</p>
          </div>
          <div className='C012 styleSheet isIcon isBentoMenu'></div>
        </div>
      </Tooltip>
      <Tooltip text='통합 예약 서비스'>
        <div className='C014'>
          <div className='C012 styleSheet isIcon isReservation'></div>
        </div>
      </Tooltip>
      <div className='C015'>
        <div className='C016'>
          <div className='C017 styleSheet isIcon isMagnifier'></div>
          <p className='T005'>메뉴 및 기능 검색</p>
        </div>
        <Tooltip text='1:1 참조사항 전달'>
          <div className='C018'>
            <div className='C019 styleSheet isIcon isNote'></div>
            <p className='T006'>12</p>
          </div>
        </Tooltip>
        <Tooltip text='시스템 알림'>
          <div className='C018'>
            <div className='C019 styleSheet isIcon isAlarm'></div>
            <p className='T006'>3</p>
          </div>
        </Tooltip>
      </div>
    </header>
  )
}

