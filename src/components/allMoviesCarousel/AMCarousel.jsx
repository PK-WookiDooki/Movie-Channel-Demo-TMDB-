import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import AMCarouselCard from "./AMCarouselCard";
import { Link } from "react-router-dom";

const AMCarousel = ({ movies }) => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1025 },
      items: 7,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1025, min: 664 },
      items: 5,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 664, min: 564 },
      items: 3,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  return (
    <div className="shadow p-3 border rounded border-secondary">
      <Link to={"/all_movies"} className="text-lg font-bold">
        All Movies
      </Link>
      <Carousel
        additionalTransfrom={0}
        arrows
        autoPlay
        autoPlaySpeed={5000}
        centerMode={false}
        className="mt-3 bg-gray-50 rounded-sm scroll-smooth"
        containerClass="container"
        dotListClass=""
        draggable
        focusOnSelect={false}
        infinite
        itemClass=""
        keyBoardControl
        minimumTouchDrag={80}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={responsive}
        showDots={false}
        sliderClass=""
        slidesToSlide={1}
        swipeable
      >
        {movies.map((movie) => {
          return <AMCarouselCard key={movie.id} movie={movie} />;
        })}
      </Carousel>
    </div>
  );
};

export default AMCarousel;
