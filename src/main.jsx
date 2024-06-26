import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RecoilRoot } from 'recoil'
import { CookiesProvider } from 'react-cookie'


ReactDOM.createRoot(document.getElementById('root')).render(
  <RecoilRoot>
    <React.StrictMode>
      <CookiesProvider>
        <App />
      </CookiesProvider>
    </React.StrictMode>
  </RecoilRoot>
)
