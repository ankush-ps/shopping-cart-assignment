import { IMAGE_API_URL } from "../../constants";
import Banner from "../banner/Banner";
import "./Category.scss";

const BUTTON_COLOR = "#d00156";

const Category = (props) => {
  const { key, name, description, imageUrl } = props.category;
  const imgUrl = imageUrl && `${IMAGE_API_URL}${imageUrl.slice(7)}`;

  return (
    <Banner>
      <div className="category">
        <div className="category__image-conatiner">
          <img className="category__image" src={imgUrl} alt={name} />
        </div>
        <div className="category__content-container">
          <h3>{name}</h3>
          <h4 className="category__description">{description}</h4>
          <button
            style={{
              backgroundColor: BUTTON_COLOR,
              color: "white",
              padding: 10,
              boxShadow: `0 0 3px -1px ${BUTTON_COLOR}`,
            }}
          >
            Explore {key}
          </button>
        </div>
      </div>
    </Banner>
  );
};

export default Category;
