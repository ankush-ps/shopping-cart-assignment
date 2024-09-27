import Category from "../../components/category/Category";
import { connect } from "react-redux";
import { useEffect } from "react";
import { fetchCategoriesThunk } from "../../store/categories/categories.actions";
import DemoCarousel from "../../components/carousel/Carousel";

const Home = ({ categories, fetchCategoriesThunk }) => {
  useEffect(() => {
    fetchCategoriesThunk();
  }, []);

  return (
    <main>
      <DemoCarousel />
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
