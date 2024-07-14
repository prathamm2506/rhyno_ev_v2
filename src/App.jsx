import "./App.css";
import Navbar from "./components/navbar/Navbar";
import BuyNow from "./components/buynow/BuyNow";
import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";
import Compare from "./components/compare/Compare";
import Homeslider from "./components/homeslider/Homeslider";
import Product from "./components/product/Product";
import Carousel from "./components/carousal/Carousal";
import IMG1 from "./assets/Product1.png";
import IMG2 from "./assets/Product2.png";
import IMG3 from "./assets/product3.png";
import Twistycarousel from "./components/twistycarousal/Twistycarousal";
import CombinedCarousel from "./components/combinedcarousel/CombinedCarousel";
import ResponsiveCard from "./components/responsivecards/ResponsiveCards";
import ResponsiveCards from "./components/responsivecards/ResponsiveCards";
import MyCarousal from "./components/MyCarousal/MyCarousal";
import Prodland from "./components/prodland/Prodland";
import Spec from "./components/specs/Specs";
import ColorPicker from "./components/colorpicker/ColorPicker";
import WhyRhynoHeading from "./components/WhyRhynoHeading/WhyRhynoHeading";
import OurProductTitle from "./components/OurProductTitle/OurProductTitle";
import OurProducts from "./components/OurProducts/OurProducts";
import GTX from "./components/GTX/GTX";
import Aboutus from "./components/Aboutus/Aboutus"

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useEffect, useState } from "react";
import Numbers from "./components/numbers/Numbers";
import Rotate from "./components/twistycarousal/Rotate";
import HomeNew from "./components/home/HomeNew";

function App() {
  // const [sliderLoaded, setSliderLoaded] = useState(false);
  // setTimeout(() => {
  //   setSliderLoaded(true);
  // }, 1410)

  return (
    <div>
      {/* <BuyNow/> */}
      {/* <Navbar/> */}
      <HomeNew />

      {/* {sliderLoaded && <OurProductTitle />} */}
      {/* <Prodland/> */}
      <GTX />
      <div className="megadivmain">
        <h1 id="ourProducts">Products</h1>
        <OurProducts />
        {/* <MyCarousal /> */}
      </div>
      {/* <WhyRhynoHeading /> */}
      <div className="lapscreencomp">
        {/* <Twistycarousel /> */}
        <Rotate/>
      </div>
      <div className="mobilescreencomp">
        <ResponsiveCards />
      </div>
      <Aboutus/>
      {/* <Footer/> */}
      {/* <Spec/> */}
      {/* <ColorPicker/> */}
      {/* <Numbers/> */}
    </div>
  );
}

export default App;
