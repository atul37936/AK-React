import { Route, Routes } from "react-router"
import Home from "../Component/Home"
import Navbar from "../Component/Navbar"
import Login from "../Component/login"
import Product from "../Component/Product"
import Private from "../Component/Private"




const Mainroute = () => {
  return (
    <div>
      <Routes>
        <Route path='/Home' element={<Home />}></Route>       
        <Route path='/Navbar' element={<Navbar/>}></Route>
        <Route path="/Login" element={<Login/>}> </Route>
        <Route path="/Product" element={
            
            <Private>
            
            <Product/>
            </Private>
            
            
            
            }></Route>

      </Routes>
    </div>
  )
}

export default Mainroute