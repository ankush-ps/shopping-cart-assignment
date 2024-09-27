import { connect } from "react-redux";
import { IMAGE_API_URL } from "../../constants";
import { useWindowWidth } from "../../hooks";
import { addItemToCart } from "../../store/cart/cart.actions";
import "./Product.scss";

const TAB_BREAKPOINT = 768;

const Product = ({ product, addItemToCart }) => {
  const { name, imageURL, description, price } = product;
  const imgUrl = imageURL && `${IMAGE_API_URL}${imageURL.slice(7)}`;
  const width = useWindowWidth();

  return (
    <div className="product">
      <div>
        <h3>{name}</h3>
      </div>
      <div>
        <div className="product__body">
          <img className="product__image" src={imgUrl} alt={name} />
          <h4 className="product__description">{description}</h4>
        </div>
        <div className="product__footer">
          {width > TAB_BREAKPOINT ? (
            <>
              <p>MRP Rs.{price}</p>
              <button
                className="product__buy-button"
                onClick={() => addItemToCart({ product })}
              >
                Buy Now
              </button>
            </>
          ) : (
            <button
              className="product__buy-button"
              onClick={() => addItemToCart({ product })}
            >
              Buy Now @ Rs.{price}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default connect(null, { addItemToCart })(Product);
