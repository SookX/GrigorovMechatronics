import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider, CssBaseline } from '@mui/material';

import theme from './customizations/theme.jsx';                     
import AppAppBar from './components/AppBar.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import Automotive from './pages/Automotive.jsx';
import Details from './pages/Details.jsx';

import Footer from './components/Footer.jsx';
import './style/main.css';
import MainAutomotive from './pages/MainAutomotive.jsx';
import DataProvider from './context/DataContext.jsx';

// Import the relevant data JSON files
import resistanceWelderData from './text/resistanceWelder.json';
import componentsData from './text/components.json';
import dispenserData from './text/dispenser.json';
import edpData from './text/edp.json';
import fitMachineData from './text/fitMachine.json';
import interlayerData from './text/interlayer.json';
import laserStrippingData from './text/laserStripping.json';
import laserWeldBushData from './text/laserWeldBush.json';
import laserWelderData from './text/laserWelder.json';
import laserWeldMachineData from './text/laserWeldMachine.json';
import plungerData from './text/plunger.json';
import robotData from './text/robot.json';
import wireBendingData from './text/wireBending.json';
import mainAutomotiveData from "./text/mainAutomotive.json";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <DataProvider>
        <AppAppBar />
        <BrowserRouter >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contacts" element={<Contact />} />
            <Route path='/details' element={<Details/>}/>
            <Route path="/automotive" element={<MainAutomotive />}>
    
              <Route index element={<Automotive info={mainAutomotiveData} />} />
              <Route path="resistance_welder" element={<Automotive info={resistanceWelderData} />} />
              <Route path="laser_weld_machine" element={<Automotive info={laserWeldMachineData} />} />
              <Route path="laser_welder" element={<Automotive info={laserWelderData} />} />
              <Route path="laser_stripping" element={<Automotive info={laserStrippingData} />} />
              <Route path="laser_weld_bush" element={<Automotive info={laserWeldBushData} />} />
              <Route path="components" element={<Automotive info={componentsData} />} />
              <Route path="dispenser" element={<Automotive info={dispenserData} />} />
              <Route path="interlayer" element={<Automotive info={interlayerData} />} />
              <Route path="fit_machine" element={<Automotive info={fitMachineData} />} />
              <Route path="wire_bending" element={<Automotive info={wireBendingData} />} />
              <Route path="robot_flange" element={<Automotive info={robotData} />} />
              <Route path="edp" element={<Automotive info={edpData} />} />
              <Route path="plunger" element={<Automotive info={plungerData} />} />
            </Route>
          </Routes>
        </BrowserRouter>
        <Footer />
      </DataProvider>
    </ThemeProvider>
  </StrictMode>
);
