import { useEffect, useState } from "react";
import Modal from "react-modal";
import { connect } from "react-redux";
import { ReactComponent as CartLogo } from "../../assets/cart.svg";
import CartItem from "../cart-item/CartItem";
import {
  addItemToCart,
  removeItemFromCart,
} from "../../store/cart/cart.actions";
import "./CartModal.scss";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#root");

const CartModal = ({ cart, addItemToCart, removeItemFromCart }) => {
  const { cartItems } = cart;
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  useEffect(() => {
    if (cartItems.length === 0) {
      closeModal();
    }
  }, [cartItems.length]);

  return (
    <>
      <button
        className="cart__button"
        onClick={openModal}
        disabled={cartItems.length === 0}
      >
        <CartLogo height={30} width={30} />
        <p>
          {cartItems.length} item{cartItems.length > 1 && "s"}
        </p>
      </button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div>
          {cartItems.map((item) => (
            <CartItem
              key={item.product.id}
              item={item}
              addItemToCart={addItemToCart}
              removeItemFromCart={removeItemFromCart}
            />
          ))}
        </div>
      </Modal>
    </>
  );
};

const mapStateToProps = (state) => ({ cart: state.cart });

export default connect(mapStateToProps, { addItemToCart, removeItemFromCart })(
  CartModal
);
