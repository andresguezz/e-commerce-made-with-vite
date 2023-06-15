import { useRoutes, BrowserRouter } from "react-router-dom"
import { ShoppingProvider } from "../../context"
import Home from "../home"
import MyAccount from "../myAccount"
import MyOrder from "../myOrder"
import MyOrders from "../myOrders"
import NotFound from "../notFound"
import SignIn from "../signIn"
import Navbar from "../../components/navbar"
import CheckoutSideMenu from "../../components/checkoutSideMenu"

import './App.css'

const AppRoutes = ()=> {
    let routes = useRoutes([
    {path: '/', element: <Home />},
    {path: '/clothes', element: <Home />},
    {path: '/electronics', element: <Home />},
    {path: '/furniture', element: <Home />},
    {path: '/shoes', element: <Home />},
    {path: '/others', element: <Home />},
    {path: '/my-account', element: <MyAccount />},
    {path: '/my-order', element: <MyOrder />},
    {path: '/my-orders/last', element: <MyOrder />},
    {path: '/my-orders/:id', element: <MyOrder />},
    {path: '/my-orders', element: <MyOrders />},
    {path: '/sign-in', element: <SignIn />},
    {path: '/*', element: <NotFound />},
])

  return routes
}


const App = () => {


  return (
    <ShoppingProvider>
    <BrowserRouter>
      <AppRoutes />
      <Navbar />
      <CheckoutSideMenu/>
    </BrowserRouter>
    </ShoppingProvider>
  )
}

export default App
