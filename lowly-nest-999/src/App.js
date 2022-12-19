import './App.css';
import Navbar from "./Components/Navbar/Navbar.jsx"
import Footer from "./Components/Footer/Footer.jsx"
// import Product from "./Components/Product/Product.jsx"
// import Pricing from "./Components/Pricing/Pricing.jsx"
import AllRoutes from "./Components/AllRoutes/AllRoutes.jsx"
// import Inspiration from './Components/Inspiration/Inspiration';

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <Inspiration/> */}
      {/* <Product/> */ }
     <AllRoutes/>
     {/* <Pricing/> */}
      <Footer />
    </div>
  );
}

export default App;
