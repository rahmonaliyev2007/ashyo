import { ChevronLeft, ChevronRight } from "lucide-react";
import React, { FC } from "react";



export const NextArrow:FC<{onClick?: React.MouseEventHandler<HTMLElement>}> = ({ onClick }) => (
    <button onClick={onClick} className="absolute right-[70px] top-1/2 cursor-pointer z-10 w-[50px] h-[50px] flex justify-center items-center transform -translate-y-1/2 bg-gray-100 text-black p-2 rounded-full shadow-lg hover:bg-gray-300" >
        <ChevronRight/>
    </button>
);

export const PrevArrow:FC<{onClick?: React.MouseEventHandler<HTMLElement>}> = ({ onClick }) => (
    <button onClick={onClick} className="absolute !left-[70px] cursor-pointer top-1/2 z-10 w-[50px] h-[50px] flex justify-center items-center transform -translate-y-1/2 bg-gray-100 text-black p-2 rounded-full shadow-lg hover:bg-gray-300" >
        <ChevronLeft/>
    </button>
);

export const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1220,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 900, 
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };
  