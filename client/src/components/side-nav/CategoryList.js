import "./CategoryList.scss";

const CategoryList = ({ categories, onSelectCategory }) => {
  return (
    <ul className="category-menu">
      {categories.map((category) => (
        <li key={category.id} className="category-menu__item">
          <button
            className="category-menu__item__button"
            onClick={() => onSelectCategory(category.id)}
          >
            {category.name}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default CategoryList;
