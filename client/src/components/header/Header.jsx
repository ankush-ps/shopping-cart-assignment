import React from "react";
import logo from "../../assets/logo.png";
import "./Header.scss";
import CartModal from "../cart-modal/CartModal";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <div className="header__left">
          <Link to="/">
            <img src={logo} alt="Logo" />
          </Link>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/products">Products</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="header__right">
          <div className="header__auth">
            <Link className="login-link" to="/login">
              SignIn
            </Link>
            <Link to="/register">Register</Link>
          </div>
          <CartModal />
        </div>
      </div>
    </header>
  );
};

export default Header;
