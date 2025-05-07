import React from "react";
import { NavLink,Link } from "react-router-dom";

import logo from '../assets/logo.png'

const Header = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg fixed">
        <div className="container" style={{columnGap:'30px'}}>
          <NavLink to={'/'} className='nav-link'><img src={logo} alt="" /></NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
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
            <div className="login-info">
              <Link className="btn  cart-btn" to={'/cart'}>
                <img className="w-75" src="/src/assets/cart_icon.png" alt="" />
                <p className="product-cart-count bgPrimary">0</p>
              </Link>
              <button className="btn btn-outline-success">Login</button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
