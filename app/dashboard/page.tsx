import './page.css'

export default function DashboardPage() {
  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h1 className="dashboard-title">대시보드</h1>
        <p className="dashboard-subtitle">홈</p>
      </div>
      <div className="dashboard-content">
        <div className="dashboard-card">
          <h2>환영합니다</h2>
          <p>EMR 시스템 대시보드입니다.</p>
        </div>
      </div>
    </div>
  )
}


