import './App.css';
import Navbar from "./Components/Navbar/Navbar"
import Footer from "./Components/Footer/Footer.jsx"
// import Login from './Components/Login/Login';
// import Signup from "./Components/Signup/Signup.jsx";
import Home from './Components/Home/Home';

function App() {
  return (
    <div className="App">
      <Navbar />
      <br/>
      {/* <Login/> */}
      {/* <Signup/> */}
      <Home/>

      <br/>
      <Footer/>
    </div>
  );
}

export default App;
