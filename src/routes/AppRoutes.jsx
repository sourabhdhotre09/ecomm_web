import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Products from '../pages/Products'
import Cart from '../pages/Cart'
import PageNotFound from '../PageNotFound'
import MainLayouts from '../layouts/MainLayouts'

const AppRoutes = () => {
  return (
    <>
    <Routes>
        <Route element={<MainLayouts/>}>
            <Route path='/' element={<Home/>}/>
            <Route path='/products' element={<Products/>}/>
            <Route path='/cart' element={<Cart/>}/>
        </Route>
        <Route path='*' element={<PageNotFound/>}/>
    </Routes> 
    </>
  )
}

export default AppRoutes
