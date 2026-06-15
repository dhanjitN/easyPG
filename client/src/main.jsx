import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router'
import './index.css'
import App from './App.jsx'
import HomePage from './pages/home-page.js'
import Navbar from './components/Navbar.jsx'
import RoomPage from './pages/room-page.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Navbar/>
      <Routes>
        {/* <Route path='/' element={<App />} /> */}
        <Route path='/' element={<HomePage />} />
        <Route path='/room/:id' element={<RoomPage/>} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
