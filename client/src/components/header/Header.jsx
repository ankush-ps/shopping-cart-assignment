import React from "react";
import logo from "../../assets/logo.png";
import { AuthButtons } from "../auth-buttons/AuthButtons";
import "./Header.css";
import { ReactComponent as CartLogo } from "../../assets/cart.svg";

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
      <AuthButtons />
    </header>
  );
};

export default Header;
