import './page.css'
import Sidebar from '@/components/Sidebar'

export default function PostCarePage() {
  return (
    <>
      <Sidebar />
      <div className="postcare-container">
        <div className="postcare-header">
          <h1 className="postcare-title">후관리</h1>
          <p className="postcare-subtitle">시술 후 관리</p>
        </div>
        <div className="postcare-content">
          <div className="postcare-card">
            <h2>후관리</h2>
            <p>시술 후 관리 내역을 관리합니다.</p>
          </div>
        </div>
      </div>
    </>
  )
}



