import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "./Carousel.scss";
import Banner from "../banner/Banner";

const OfferCarousel = () => {
  return (
    <Banner>
      <Carousel showThumbs={false} autoPlay infiniteLoop>
        <div>
          <img
            src="assets/offers/offer1.jpg"
            alt="Independence Day Sale Poster 1"
          />
        </div>
        <div>
          <img
            src="assets/offers/offer2.jpg"
            alt="Independence Day Sale Poster 2"
          />
        </div>
        <div>
          <img
            src="assets/offers/offer3.jpg"
            alt="Independence Day Sale Poster 3"
          />
        </div>
        <div>
          <img
            src="assets/offers/offer4.jpg"
            alt="Independence Day Sale Poster 4"
          />
        </div>
        <div>
          <img
            src="assets/offers/offer5.jpg"
            alt="Independence Day Sale Poster 5"
          />
        </div>
      </Carousel>
    </Banner>
  );
};

export default OfferCarousel;
