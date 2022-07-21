import React from "react";
import logo from "../../assets/logo.png";
import "./Header.css";
import CartModal from "../cart-modal/CartModal";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const Header = ({ cart }) => {
  return (
    <header>
      <div className="container header__container">
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

        <div>
          <CartModal />
        </div>
        <div>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </div>
      </div>
    </header>
  );
};

const mapStateToProps = (state) => ({ cart: state.cart });

export default connect(mapStateToProps)(Header);
