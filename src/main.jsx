import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './css/general.css'
import "./css/header.css";
import "./css/info.css";
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
