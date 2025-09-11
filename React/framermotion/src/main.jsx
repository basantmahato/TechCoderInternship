import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Demo from './Demo.jsx'
import App   from './App.jsx'
import WelcomeSection from './WelcomeSection.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <WelcomeSection />

  </StrictMode>,
)
