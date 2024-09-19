import React, { useEffect, useState } from "react";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";

const ImageSlider = () => {
  const [activeImage, setActiveImage] = useState(0);
  const images = [
    "https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg",
    "https://piktochart.com/wp-content/uploads/2023/04/large-29.jpg",
    "https://i.pinimg.com/originals/2b/66/01/2b66016d5a1e2d230ecce59f8e673382.png",
    "https://i.pinimg.com/736x/5f/09/47/5f0947219a7f446e804e7e0055089fad.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoKMpEfmuwzKmwyl4reX0NW7-Ixgn1DCz6IvxSYpq_CQ&s",
  ];
  const handleNextClick = () => {
    setActiveImage((prev) => (prev + 1 > images.length - 1 ? 0 : prev + 1));
  };
  const handlePrevClick = () => {
    setActiveImage((prev) => (prev - 1 < 0 ? images.length - 1 : prev - 1));
  };
  useEffect(() => {
    const autoSlide = setInterval(() => {
      handleNextClick();
    }, 3000);
    return () => clearInterval(autoSlide);
  }, []);

  return (
    <div className="flex justify-center items-center gap-10">
      <FaArrowAltCircleLeft
        size={"50px"}
        onClick={handlePrevClick}
        className="cursor-pointer"
      />
      <img
        className="w-[600px] h-[300px]"
        src={images[activeImage]}
        alt="image"
      />
      <FaArrowAltCircleRight
        size={"50px"}
        onClick={handleNextClick}
        className="cursor-pointer"
      />
    </div>
  );
};

export default ImageSlider;
