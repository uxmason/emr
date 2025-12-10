import './page.css'
import Sidebar from '@/components/Sidebar'

export default function SettingsPage() {
  return (
    <>
      <Sidebar />
      <div className="settings-container">
        <div className="settings-header">
          <h1 className="settings-title">설정</h1>
          <p className="settings-subtitle">시스템 설정</p>
        </div>
        <div className="settings-content">
          <div className="settings-card">
            <h2>설정 관리</h2>
            <p>시스템 설정을 관리합니다.</p>
          </div>
        </div>
      </div>
    </>
  )
}



