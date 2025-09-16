import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
// import './index.css'

// import '.index.css'
// import H1 from './H1'
createRoot(document.getElementById('root')).render(
  <StrictMode>
   <App />
  </StrictMode>
)
