import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container">
          <NavLink to={'/'} className='nav-link'>Saurabh</NavLink>
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
            </ul>
            <div className="login-info">
              <a className="btn mx-2 px-0">
                <img className="w-50" src="/src/assets/cart_icon.png" alt="" />
              </a>
              <button className="btn btn-outline-success">Login</button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
