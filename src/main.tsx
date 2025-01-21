import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import CubeEditor from './Components/CubeEditor'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CubeEditor/>
  </StrictMode>,
)
