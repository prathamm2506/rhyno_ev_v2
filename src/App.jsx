import './App.css';
import Navbar from './components/navbar/Navbar';
import BuyNow from './components/buynow/BuyNow';
import Footer from './components/footer/Footer';
import Home from './components/home/Home';

function App() {
  return (
   <div>
    <BuyNow/>
    <Navbar/>
    <Home/>
    {/* <Footer/> */}
   </div>
  );
}

export default App;
