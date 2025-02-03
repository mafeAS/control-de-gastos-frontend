import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { ControlProvider } from './context/ControlProvider'
import router from './router'
import './index.css'




createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ControlProvider>
      <RouterProvider router={router}/>
    </ControlProvider>
    
  </StrictMode>,
)
