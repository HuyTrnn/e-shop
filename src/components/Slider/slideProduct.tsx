"use client";
import { RootState, useAppDispatch } from "@/store";
import { fetchImgSlider } from "@/store/thunks/fetchImage";
import React, { useState, useEffect, useLayoutEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useSelector } from "react-redux";

interface Props {
  props: string;
  data?: any;
}

const SliderProduct: React.FC<Props> = ({ props, data }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const img = useSelector((state: RootState) => state.imgSlider);
  const [image, setImage] = useState([])
  const dispatch = useAppDispatch();
  useEffect(() => {
    if(data) {
      setImage(data)
    }
  }, [data]);

  useEffect(() => {
    setCurrentImage(0)
    const timer = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % (image.length || 1));
      console.log(currentImage);
      
    }, 4000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  const handleNextSlider = () => {
    setCurrentImage((prevImage) => (prevImage + 1) % image.length);
  };

  const handlePreviousSlider = () => {
    setCurrentImage(
      (prevImage) => (prevImage - 1 + data.length) % image.length
    );
  };

  const handleIndexClick = (index: number) => {
    setCurrentImage(index);
  };

  const backgroundImageStyle = {
    backgroundImage: `url(${image[currentImage]})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    width: "100%",
    minHeight: "700px",
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
        {image.map((image: string, index: number) =>
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

export default SliderProduct;
