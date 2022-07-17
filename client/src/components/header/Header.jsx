import React from "react";
import logo from "../assets/logo.png";
import "./Header.css";
import { ReactComponent as CartLogo } from "../assets/cart.svg";

const Header = () => {
  return (
    <header className="container">
      <img src={logo} alt="Logo" />

      <nav>
        <ul>
         <li>Home</li>
          <li>Products</li>
        </ul>
      </nav>

      <button>
        <CartLogo height={30} width={30} />
      </button>
    </header>
  );
};

export default Header;
