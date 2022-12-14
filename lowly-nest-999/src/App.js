import './App.css';
import Navbar from "./Components/Navbar/Navbar"
import Footer from "./Components/Footer/Footer.jsx"
import Login from './Components/Login/Login';

function App() {
  return (
    <div className="App">
      <Navbar />
      <br/>
      <Login/>
      <br/>
      <Footer/>
    </div>
  );
}

export default App;
