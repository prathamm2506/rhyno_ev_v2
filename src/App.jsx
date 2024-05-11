import './App.css';
import Navbar from './components/navbar/Navbar';
import BuyNow from './components/buynow/BuyNow';
import Footer from './components/footer/Footer';
import Home from './components/home/Home';
import Compare from './components/compare/Compare';
import Homeslider from './components/homeslider/Homeslider';

function App() {
  return (
   <div>
    <BuyNow/>
    <Navbar/>
    <Home/>
    <Compare/>
    <Homeslider/>
    {/* <Footer/> */}
   </div>
  );
}

export default App;
