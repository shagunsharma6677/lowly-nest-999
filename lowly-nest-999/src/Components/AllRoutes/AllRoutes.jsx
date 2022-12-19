import { Routes, Route } from "react-router-dom"
import Home from "../Home/Home"
import Product from "../Product/Product"
import Inspiration from "../Inspiration/Inspiration"
import Pricing from "../Pricing/Pricing"
import Login from "../Login/Login"
import Signup from "../Signup/Signup"

export default function AllRoutes() {
    return <>

        <Routes>
            <Route path="/" element={<Home />} />
            <Route path ="/product" element={<Product/>}/>
            <Route path ="/inspiration" element={<Inspiration/>}/>
            <Route path ="/pricing" element={<Pricing/>}/>
            <Route path ="/login" element={<Login/>}/>
            <Route path ="/signup" element={<Signup/>}/>
        </Routes>

    </>
}