import './page.css'
import Sidebar from '@/components/Sidebar'

export default function StatisticsPage() {
  return (
    <>
      <Sidebar />
      <div className="statistics-container">
        <div className="statistics-header">
          <h1 className="statistics-title">통계</h1>
          <p className="statistics-subtitle">통계 및 분석</p>
        </div>
        <div className="statistics-content">
          <div className="statistics-card">
            <h2>통계 관리</h2>
            <p>통계 데이터를 확인합니다.</p>
          </div>
        </div>
      </div>
    </>
  )
}



