import "./CategoryList.scss";

const CategoryList = ({ categories, selectedCategoryId, onSelectCategory }) => {
  return (
    <>
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
      <select
        value={selectedCategoryId}
        className="category-select"
        onChange={(e) => onSelectCategory(e.target.value)}
      >
        {categories.map((category) => (
          <option key={category.id} value={category.id}>
            {category.name}
          </option>
        ))}
      </select>
    </>
  );
};

export default CategoryList;
