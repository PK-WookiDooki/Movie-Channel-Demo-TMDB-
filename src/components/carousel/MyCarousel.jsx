import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import React, { useState, useEffect } from "react";
import CarouselCard from "./CarouselCard";

const MyCarousel = ({ movies }) => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1025 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1025, min: 664 },
      items: 2,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 664, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  const dramaMovies = movies.filter((mv) => mv.genre_ids.includes(10749));
  return (
    <div className="">
      <Carousel
        additionalTransfrom={0}
        arrows
        autoPlay
        autoPlaySpeed={5000}
        centerMode={false}
        className="shadow-md my-3 bg-gray-50 rounded-sm"
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
        showDots={true}
        sliderClass=""
        slidesToSlide={1}
        swipeable
      >
        {dramaMovies.map((movie) => {
          return <CarouselCard key={movie.id} movie={movie} />;
        })}
      </Carousel>
    </div>
  );
};

export default MyCarousel;
