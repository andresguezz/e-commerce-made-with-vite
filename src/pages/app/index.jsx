import { useRoutes, BrowserRouter,Navigate } from "react-router-dom"
import { ShoppingContext, ShoppingProvider, initializeLocalStorage, } from "../../context"
import { useContext } from "react"
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
    const context = useContext(ShoppingContext)
    // Account
    const account = localStorage.getItem('account')
    const parsedAccount = JSON.parse(account)
    // Sign Out
    const signOut = localStorage.getItem('sign-out')
    const parsedSignOut = JSON.parse(signOut)
    // Has an account
    const noAccountInLocalStorage = parsedAccount ? Object.keys(parsedAccount).length === 0 : true
    const noAccountInLocalState = Object.keys(context.account).length === 0
    const hasUserAnAccount = !noAccountInLocalStorage || !noAccountInLocalState
    const isUserSignOut = context.signOut || parsedSignOut

    let routes = useRoutes([
    { path: '/', element: hasUserAnAccount && !isUserSignOut ? <Home /> : <Navigate replace to={'/sign-in'} /> },
    { path: '/clothes', element: hasUserAnAccount && !isUserSignOut ? <Home /> : <Navigate replace to={'/sign-in'} /> },
    { path: '/electronics', element: hasUserAnAccount && !isUserSignOut ? <Home /> : <Navigate replace to={'/sign-in'} /> },
    { path: '/furniture', element: hasUserAnAccount && !isUserSignOut ? <Home /> : <Navigate replace to={'/sign-in'} /> },
    { path: '/shoes', element: hasUserAnAccount && !isUserSignOut ? <Home /> : <Navigate replace to={'/sign-in'} /> },
    { path: '/others', element: hasUserAnAccount && !isUserSignOut ? <Home /> : <Navigate replace to={'/sign-in'} /> },
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
  initializeLocalStorage()

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
