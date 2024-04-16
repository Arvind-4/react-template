import './global.css'
import 'virtual:fonts.css'

import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import HomePage from './pages/homepage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<HomePage />} path='/' />
        <Route element={<div>about</div>} path='/about' />
        <Route element={<div>404</div>} path='*' />
      </Routes>
    </BrowserRouter>
  )
}

createRoot(document.getElementById('root') as Element).render(<App />)
