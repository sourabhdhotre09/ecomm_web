import React, { useContext, useEffect, useState } from "react";
import { NavLink,Link } from "react-router-dom";

import logo from '../assets/logo.png'
import cart_icon from '../assets/cart_icon.png'
import { ShopContext } from "../Context/ShopContext";


const Header = () => {
  const {totalItem} = useContext(ShopContext);
  const [isScrolled, setIsScrolled] = useState(false);


  useEffect(()=>{
    const handleScroll=()=>{
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup
    return () => window.removeEventListener('scroll', handleScroll);

  },[]);


  return (
    <header className={isScrolled ? 'scrolled_header' : ''}>
      <nav className="navbar navbar-expand-lg fixed">
        <div className="container">
          <NavLink to={'/'} className='nav-link logo_outer'><img src={logo} alt="" /><span className="logo_title">SD HUB</span></NavLink>
          <div className="d-flex">
            <Link className="btn  cart-btn hidden-md" to={'/cart'}>
              <img className="w-75" src={cart_icon} alt="" />
              <p className="product-cart-count bgPrimary">{totalItem}</p>
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink to={'/'} className='nav-link'>Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to={'/products'} className='nav-link'>Products</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to={'/mens'} className='nav-link'>Mens</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to={'/womens'} className='nav-link'>Womens</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to={'/kids'} className='nav-link'>Kids</NavLink>
              </li>
            </ul>
            <div className="login-info text-center">
              <Link className="btn  cart-btn hidden-xs" to={'/cart'}>
                <img className="w-75" src={cart_icon} alt="" />
                <p className="product-cart-count bgPrimary">{totalItem}</p>
              </Link>
              <Link to={'/login'} className="btn btn-outline-success">Login</Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
