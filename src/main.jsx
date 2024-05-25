import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ContactUs from './routes/ContactUs.jsx'
import AboutUs from './routes/AboutUS.jsx'
import Navbar from './components/navbar/Navbar.jsx'
import BuyNow from './components/buynow/BuyNow.jsx'
import Footer from './components/footer/Footer.jsx'
import BackToTop from './components/backtotop/BackToTop.jsx'
import Compare from './components/compare/Compare.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <BrowserRouter>
  <Navbar/>
  <BuyNow/>
    <Routes>
      <Route path='/' element={<App/>}/>
      <Route path='/ContactUs' element={<ContactUs/>}/>
      <Route path='/AboutUs' element={<AboutUs/>}/>
      <Route path='/Compare' element={<Compare/>}/>
    </Routes>
    <Footer/>
    <BackToTop/>
    </BrowserRouter>
  // </React.StrictMode>,
)
