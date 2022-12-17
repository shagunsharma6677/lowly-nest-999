import './App.css';
import Navbar from "./Components/Navbar/Navbar.jsx"
import Footer from "./Components/Footer/Footer.jsx"
import { Routes, Route } from "react-router-dom";
// import Login from './Components/Login/Login';
// import Signup from "./Components/Signup/Signup.jsx";
import Home from './Components/Home/Home';
// import Inspiration from './Components/Inspiration/Inspiration';
// import Article from './Components/Article/Article';
// import Community from "./Components/Community/Community"
// import Help from "./Components/Help/Help"
// import Pricing from "./Components/Pricing/Pricing"
function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      {/* <Products /> */}
      {/* <Inspiration /> */}
      {/* <Article /> */}
      {/* <Community /> */}
      {/* <Help /> */}
      {/* <Pricing /> */}
      <Footer />
    </div>
  );
}

export default App;
