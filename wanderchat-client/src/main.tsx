import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'

import './styles/index.css'
import './styles/theme.css'
import '@progress/kendo-theme-utils/dist/all.css'
import '@fontsource/permanent-marker/400.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)