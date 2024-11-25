import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements,Outlet } from "react-router-dom"

import Footer from "./components/footer/Footer"
import Header from "./components/header/Header"
import Home from "./components/home/Home"

import ProductItems from "./components/home/ProductItems"
import AddCart from "./components/AddCart"
import Signin from "./pages/Signin"
import Registration from "./pages/Registration"
import Cart from "./components/Cart"

const Layout =()=>{
  return(
   <div>
     <Header/>
      <Outlet/>
  <Footer/>
   </div>
  )
}
const App = () => {
 const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
    <Route path="/" element={<Layout/>}>
      <Route index element={<Home/>} /> 
      <Route path="/productItems" element={< ProductItems/>} />
      <Route path="/AddCart" element ={<AddCart/>}/>
      <Route path="/cart" element = {<Cart/>}/>
     
    </Route>
      <Route path="/signin" element={<Signin/>}/>
      <Route path="/registration" element = {<Registration/>}/>
    </Route>
  )
 )
  return (
    <div className="font-bodyFont">
      <RouterProvider router={router}>
  
      </RouterProvider>
    </div>
  )
}

export default App
