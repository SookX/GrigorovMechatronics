import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Automotive from './pages/Automotive.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './style/main.css'
import AppAppBar from './components/AppBar.jsx'
import Footer from './components/Footer.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppAppBar/>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/about' element={<About/>}/>
        <Route path='/contacts' element={<Contact/>}/>
        <Route path='/automotive' element={<Automotive/>}/>
      </Routes>
    </BrowserRouter>
    <Footer/>
  </StrictMode>,
)
