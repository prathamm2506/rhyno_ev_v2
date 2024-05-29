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


function App() {
  
  return (
   <div>
    {/* <BuyNow/> */}
    {/* <Navbar/> */}
    {/* <Homeslider/> */}
    {/* <div className="megadivmain">
      <h1 id="ourProducts">Our Products</h1>
      <MyCarousal/> */}
    {/* <Carousel Data={CarouselData} TextData={CarouselTextData} /> */}
    {/* </div> */}
    {/* <div className="lapscreencomp">
    <Twistycarousel/>
    </div>
    <div className="mobilescreencomp">
    <ResponsiveCards/>
    </div> */}
    {/* <Footer/> */}
    <Prodland/>
   </div>
  );
}

export default App;
