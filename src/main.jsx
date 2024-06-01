import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Route, Routes, Navigate, useLocation } from 'react-router-dom';
import ContactUs from './routes/ContactUs.jsx'
import AboutUs from './routes/AboutUS.jsx'
import Navbar from './components/navbar/Navbar.jsx'
import BuyNow from './components/buynow/BuyNow.jsx'
import Footer from './components/footer/Footer.jsx'
import BackToTop from './components/backtotop/BackToTop.jsx'
import Compare from './components/compare/Compare.jsx'
import PreLoader from './components/PreLoader/PreLoader.jsx';
import SE03 from './routes/SE03.jsx'
import SE03MAX from './routes/SE03MAX.jsx'
import SE03LITE from './routes/SE03LITE.jsx'


const Root = () => {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <BrowserRouter>
      {isLoading ? (
        <PreLoader onComplete={handleLoadingComplete} />
      ) : (
        <>
          <Navbar />
          {/* <BuyNow /> */}
          <BuyNow />
          <div style={{ paddingTop: '100px', paddingBottom: '50px' }}>
          <Routes>
            <Route path='/' element={<App />} />
            <Route path='*' element={<Navigate to="/" />} />
            <Route path='/SE03' element={<SE03/>}/>
            <Route path='/SE03MAX' element={<SE03MAX/>}/>
            <Route path='/SE03LITE' element={<SE03LITE/>}/>
            <Route path='/Compare' element={<Compare />} />
            <Route path='/AboutUs' element={<AboutUs />} />
            <Route path='/ContactUs' element={<ContactUs />} />
          </Routes>
          </div>
          <Footer />
          <BackToTop />
        </>
      )}
    </BrowserRouter>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <Root />
  // </React.StrictMode>
);
