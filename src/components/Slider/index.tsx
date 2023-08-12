'use client'
import { RootState, useAppDispatch } from "@/store";
import { fetchImgSlider } from "@/store/thunks/fetchImage";
import React, { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useSelector } from "react-redux";

interface Props {
  props: string;
}

const Slider: React.FC<Props> = ({ props }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const img = useSelector((state: RootState) => state.imgSlider);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchImgSlider());
    console.log(img);
    
  }, [dispatch, img.length]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % img.length);
    }, 4000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const handleNextSlider = () => {
    setCurrentImage((prevImage) => (prevImage + 1) % img.length);
  };

  const handlePreviousSlider = () => {
    setCurrentImage((prevImage) => (prevImage - 1 + img.length) % img.length);
  };

  const handleIndexClick = (index: number) => {
    setCurrentImage(index);
  };

  const backgroundImageStyle = {
    backgroundImage: `url(${img})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    width: "100%",
    minHeight: "500px",
    maxHeight: "800px",
    transition: "background-image 0.5s ease-in-out",
  };

  return (
    <div
      className="w-full flex flex-col justify-between"
      style={backgroundImageStyle}
    >
      <div className="flex-1 flex px-20 items-center justify-between ">
        <button className="arrow-button" onClick={handlePreviousSlider}>
          <FaArrowLeft className="text-4xl opacity-50 " />
        </button>
        <button className="arrow-button" onClick={handleNextSlider}>
          <FaArrowRight className="text-4xl opacity-50" />
        </button>
      </div>

      <div className="flex items-center justify-center ">
        {img.map((image: any, index: number) =>
          props ? (
            <div
              key={index}
              onClick={() => handleIndexClick(index)}
              className={`my-2 mx-4 cursor-pointer ${
                currentImage === index ? "border-2 border-red-500" : ""
              }`}
            >
              <img
                alt=""
                className="w-[82px] h-[82px] object-cover"
                src={image}
              />
            </div>
          ) : (
            <label className="mr-4" key={index}>
              <input
                type="radio"
                name="slider-index"
                checked={currentImage === index}
                onChange={() => handleIndexClick(index)}
              />
            </label>
          )
        )}
      </div>
    </div>
  );
};

export default Slider;