import './page.css'
import Sidebar from '@/components/Sidebar'

export default function ClinicPage() {
  return (
    <>
      <Sidebar />
      <div className="clinic-container">
        <div className="clinic-header">
          <h1 className="clinic-title">진료</h1>
          <p className="clinic-subtitle">진료 기록 관리</p>
        </div>
        <div className="clinic-content">
          <div className="clinic-card">
            <h2>진료 관리</h2>
            <p>진료 기록을 관리합니다.</p>
          </div>
        </div>
      </div>
    </>
  )
}



