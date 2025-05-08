import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Products from '../pages/Products'
import Cart from '../pages/Cart'
import PageNotFound from '../PageNotFound'
import MainLayouts from '../layouts/MainLayouts'
import ShopCategory from '../pages/ShopCategory'
import SingleProduct from '../pages/SingleProduct'
import men_banner from '../assets/banner_mens.png'
import women_banner from '../assets/banner_women.png'
import kids_banner from '../assets/banner_kids.png'
import LoginPage from '../pages/LoginPage'

const AppRoutes = () => {
  return (
    <>
    <Routes>
        <Route element={<MainLayouts/>}>
            <Route path='/' element={<Home/>}/>
            <Route path='/products' element={<Products/>}/>
            <Route path='/mens' element={<ShopCategory banner={men_banner} category="men"/>}/>
            <Route path='/womens' element={<ShopCategory banner={women_banner} category="women"/>}/>
            <Route path='/kids' element={<ShopCategory banner={kids_banner} category="kid"/>}/>
            <Route path='/product/:productId' element={<SingleProduct/>}/>
            <Route path='/cart' element={<Cart/>}/>

        </Route>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='*' element={<PageNotFound/>}/>
    </Routes> 
    </>
  )
}

export default AppRoutes
