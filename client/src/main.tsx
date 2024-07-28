import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import Layout from './ui/Layout.tsx'
import { createBrowserRouter, Outlet } from 'react-router-dom'
import { RouterProvider } from'react-router-dom'
import Product from './pages/Product.tsx'
import Category from './pages/Category.tsx'
import Profile from './pages/Profile.tsx'
import Cart from './pages/Cart.tsx'
import Favourite from './pages/Favourite.tsx'
import Orders from './pages/Orders.tsx'
import Success from './pages/Success.tsx'
import NotFound from './pages/NotFound.tsx'

const RouterLayout = () => {
  return (
    <Layout>
      <Outlet/>
    </Layout>
  )
}

const router = createBrowserRouter([{
  path : '',
  element : <RouterLayout/>,
  children : [
    {path : '/', element : <App/>},
    {path : '/product', element : <Product/>},
    {path : '/product/:id', element : <Product/>},
    {path : '/category', element : <Category/>},
    {path : '/category/:id', element : <Category/>},
    {path : '/profile', element : <Profile/>},
    {path : '/cart', element : <Cart/>},
    {path : '/favourite', element : <Favourite/>},
    {path : '/orders', element : <Orders/>},
    {path : '/success', element : <Success/>},
    {path : '/cancel', element : <Profile/>},
    {path : '*', element : <NotFound/>},
  ]
}])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router}/>
)
