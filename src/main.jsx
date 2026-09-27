import React from 'react'
import ReactDOM from 'react-dom/client'
import ComingSoon from './pages/coming_soon.jsx'
import './index.css' // Importá tu CSS global si tenés uno

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ComingSoon 
      targetDate="2026-10-20T00:00:00" 
      title="LIVE PADEL"
    />
  </React.StrictMode>,
)