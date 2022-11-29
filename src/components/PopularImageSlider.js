import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import  cards__Popular from "./image__slider/popularData";
import "./image__slider/PopularImageSlider.css";

const PopularImageSlider = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <Slider {...settings} className="SliderContainer">
        {cards__Popular.map((item) => (
          <div className="card">
            <div className="card__top">
              <img src={item.src} alt={item.title}></img>
              <p>{item.city}</p>
            </div>
          </div>
        ))}
      </Slider>
    </>
  );
};

export default PopularImageSlider;
