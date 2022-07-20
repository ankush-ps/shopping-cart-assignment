import React from "react";
import logo from "../../assets/logo.png";
import "./Header.css";
import { AuthButtons } from "../auth-buttons/AuthButtons";
import { ReactComponent as CartLogo } from "../../assets/cart.svg";
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

        <button>
          <div>
            <CartLogo height={30} width={30} />
            <p>{cart.cartItems.length}</p>
          </div>
        </button>
        <AuthButtons />
      </div>
    </header>
  );
};

const mapStateToProps = (state) => ({ cart: state.cart });

export default connect(mapStateToProps)(Header);
