import Category from "../../components/category/Category";
import { connect } from "react-redux";
import { useEffect } from "react";
import { fetchCategoriesThunk } from "../../store/categories/categories.action";

const Home = ({ categories, fetchCategoriesThunk }) => {
  useEffect(() => {
    fetchCategoriesThunk();
  }, []);

  return (
    <main>
      {categories.map((category) => (
        <Category key={category.key} category={category} />
      ))}
    </main>
  );
};

const mapDispatchToProps = (state) => ({
  categories: state.categories,
});

export default connect(mapDispatchToProps, {
  fetchCategoriesThunk,
})(Home);
