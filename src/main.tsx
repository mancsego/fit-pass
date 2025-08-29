import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter } from 'react-router'
import { RouterProvider } from 'react-router/dom'
import App from './App'
import Home from './components/routes/Home'
import Ticket from './components/routes/Ticket'
import './index.css'
const router = createBrowserRouter([
  {
    path: '/fit-pass',
    Component: App,
    children: [
      { index: true, Component: Home },
      { path: 'ticket', Component: Ticket },
    ],
  },
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
