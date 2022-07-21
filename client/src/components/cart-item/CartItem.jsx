import { IMAGE_API_URL } from "../../constants";
import "./CartItem.scss";

const CartItem = ({ item, addItemToCart, removeItemFromCart }) => {
  const imgUrl =
    item.product && `${IMAGE_API_URL}${item.product.imageURL.slice(7)}`;

  return (
    <div>
      <h2>{item.product.name}</h2>
      <div className="cart-item__detail">
        <img
          className="cart-item__image"
          src={imgUrl}
          alt={item.product.name}
        />
        <button
          className="round-button"
          onClick={() => {
            removeItemFromCart({ product: item.product });
          }}
        >
          -
        </button>
        <p className="cart-item__quantity">{item.quantity}</p>
        <button
          className="round-button"
          onClick={() => addItemToCart({ product: item.product })}
        >
          +
        </button>
        <p className="cart-item__price">X</p>
        <p className="cart-item__price">Rs.{item.product.price}</p>
        <p>Rs.{item.product.price * item.quantity}</p>
      </div>
    </div>
  );
};

export default CartItem;
