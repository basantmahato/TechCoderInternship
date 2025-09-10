import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import SplitText from './SplitText.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SplitText text="Basant Mahato" />
  </StrictMode>,
)
