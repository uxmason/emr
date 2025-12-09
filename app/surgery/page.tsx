import './page.css'

export default function SurgeryPage() {
  return (
    <div className="surgery-container">
      <div className="surgery-header">
        <h1 className="surgery-title">수술</h1>
        <p className="surgery-subtitle">수술 기록 관리</p>
      </div>
      <div className="surgery-content">
        <div className="surgery-card">
          <h2>수술 관리</h2>
          <p>수술 기록을 관리합니다.</p>
        </div>
      </div>
    </div>
  )
}


