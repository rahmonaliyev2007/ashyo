import { Link } from '@/i18n/navigation'
import React from 'react'
import './notfound.css'
function NotFound() {
  return (
    <div className="notfound-container mt-5">
      <div className="notfound-content">
        <h1 className="notfound-title">404</h1>
        <p className="notfound-message">Sahifa topilmadi</p>
        <Link href="/" className="notfound-btn">
          Bosh sahifaga qaytish
        </Link>
      </div>
      <div className="notfound-illustration">
        <div className="notfound-animation"></div>
      </div>
    </div>
  )
}

export default NotFound