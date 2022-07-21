import { useEffect, useState } from "react";
import { fetchProductsThunk } from "../../store/products/products.types";
import { connect } from "react-redux";
import Product from "../../components/product/Product";
import CategoryList from "../../components/side-nav/CategoryList";
import { fetchCategoriesThunk } from "../../store/categories/categories.actions";
import "./ProductsList.scss";

const filterProducts = (products, categoryId) => {
  return products.filter((product) => product.category === categoryId);
};

const ProductList = ({
  products,
  categories,
  fetchProductsThunk,
  fetchCategoriesThunk,
}) => {
  const [selectedCategoryId, setSelectedCategoryId] = useState("");

  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    setFilteredProducts(filterProducts(products, selectedCategoryId));
  }, [products, selectedCategoryId]);

  useEffect(() => {
    if (!selectedCategoryId && categories[0])
      setSelectedCategoryId(categories[0].id);
  }, [selectedCategoryId, categories]);

  useEffect(() => {
    fetchProductsThunk();
    fetchCategoriesThunk();
  }, []);

  return (
    <main className="container products-page-grid">
      <CategoryList
        categories={categories}
        selectedCategoryId={selectedCategoryId}
        onSelectCategory={(categoryId) => setSelectedCategoryId(categoryId)}
      />
      <div className="product-grid">
        {filteredProducts.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </main>
  );
};

const mapDispatchToProps = (state) => ({
  products: state.products,
  categories: state.categories,
});

export default connect(mapDispatchToProps, {
  fetchProductsThunk,
  fetchCategoriesThunk,
})(ProductList);
