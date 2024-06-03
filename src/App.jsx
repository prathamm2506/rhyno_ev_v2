import './App.css';
import Navbar from './components/navbar/Navbar';
import BuyNow from './components/buynow/BuyNow';
import Footer from './components/footer/Footer';
import Home from './components/home/Home';
import Compare from './components/compare/Compare';
import Homeslider from './components/homeslider/Homeslider';
import Product from './components/product/Product';
import Carousel from './components/carousal/Carousal';
import IMG1 from './assets/Product1.png'
import IMG2 from './assets/Product2.png'
import IMG3 from './assets/product3.png'
import Twistycarousel from './components/twistycarousal/Twistycarousal';
import CombinedCarousel from './components/combinedcarousel/CombinedCarousel';
import ResponsiveCard from './components/responsivecards/ResponsiveCards';
import ResponsiveCards from './components/responsivecards/ResponsiveCards';
import MyCarousal from './components/MyCarousal/MyCarousal';
import Prodland from './components/prodland/Prodland';
import Spec from './components/specs/Specs';
import ColorPicker from './components/colorpicker/ColorPicker';

import gsap from 'gsap';
import { useGSAP } from "@gsap/react";
import { useEffect, useState } from 'react';


function App() {

  const [flag, setFlag ] = useState(false);
  setTimeout(() => {
    setFlag(true)
}, 1000);

  return (
   <div>
    {/* <BuyNow/> */}
    {/* <Navbar/> */}
    <Homeslider/> 

    {/* <Prodland/> */}
    <div className="megadivmain">
      <h1 id="ourProducts">Our Products</h1>
      <MyCarousal/>
    {/* <Carousel Data={CarouselData} TextData={CarouselTextData} /> */}
    </div>
    <div className="lapscreencomp">
    <Twistycarousel/>
    </div>
    <div className="mobilescreencomp">
    <ResponsiveCards/>
    </div>
    {/* <Footer/> */}
    {/* <Spec/> */}
    {/* <ColorPicker/> */}
   </div>
  );
}

export default App;
