import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider, CssBaseline } from '@mui/material';

import theme from './customizations/theme.jsx';                     // your custom theme
import AppAppBar from './components/AppBar.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import Automotive from './pages/Automotive.jsx';
import Footer from './components/Footer.jsx';
import './style/main.css';


createRoot(document.getElementById('root')).render(
  <StrictMode>
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <AppAppBar />
    <BrowserRouter>
      <Routes>
        <Route path="/"           element={<Home />} />
        <Route path="/about"      element={<About />} />
        <Route path="/contacts"   element={<Contact />} />
        <Route path="/automotive" element={<Automotive />} />
      </Routes>
    </BrowserRouter>
    <Footer />
  </ThemeProvider>
  </StrictMode>,
)
