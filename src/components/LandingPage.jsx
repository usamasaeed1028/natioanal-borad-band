import React from "react";
import Slider from "react-slick";
import slider1 from "../assets/images/bg-slide03.jpg";
import slider2 from "../assets/images/bg-slide01.jpg";
import slider3 from "../assets/images/bg-slide02.jpg";
import slider4 from "../assets/images/bg-slide04.jpg";
import text from "../assets/images/text04.png";
import Image from "next/image";

const DATA = [
  {
    id: "d2",
    text: (
      <div className="text-[40px] md:text-[50px] md:pl-[80px] md:pt-[100px] w-[300px]  md:w-[600px]  text-left absolute z-[11] text-[#FFF8D6] text-glow">
        {" "}
        BROADBAND <span className="font-extrabold"> FOR PAKISTANIS </span> BY
        <span className="font-extrabold"> PAKISTANIS </span>{" "}
      </div>
    ),
    img: slider1,
  },
  {
    id: "d1",
    text: (
      <div className="text-[40px] md:text-[50px] md:pl-[80px] md:pt-[100px] w-[300px]  md:w-[600px]  text-left absolute z-[11] text-[#FFF8D6] text-glow">
        {" "}
        THE <span className="font-extrabold"> POWER OF FIBER </span> AT A
        FRACTION OF THE <span className="font-extrabold"> PRICE </span>{" "}
      </div>
    ),
    img: slider2,
  },
  {
    id: "d3",
    text: (
      <div className="text-[40px] md:text-[50px] md:pl-[80px] md:pt-[100px] w-[300px]  md:w-[600px]  text-left absolute z-[11] text-[#FFF8D6] text-glow">
        {" "}
        EXPERIENCE <span className="font-extrabold"> THE INTERNET </span> LIKE
        <span className="font-extrabold"> NEVER BEFORE </span>{" "}
      </div>
    ),
    img: slider3,
  },
  {
    id: "d4",
    text: (
      <div className=" w-[300px]  md:w-[600px]  text-left absolute z-[11] text-[#FFF8D6] text-glow">
        {" "}
        <Image src={text} alt="text" />
      </div>
    ),
    img: slider4,
  },
];

const LandingPage = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 5000, // set autoplay timing here
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1080,
        settings: {
          dots: false,
         
        },
      },
    ],
  };
  return (
    <div className={`md:px-[30px] xl:px-[60px]  md:mt-[20px]`}>
      <Slider {...settings}>
        {DATA.map((data) => {
          return (
            <div className="">
              <div
                className={`flex gap-x-[50px] text-center text-[#FFF8D6] w-full ${
                  data.id == "d4"
                    ? "items-center justify-center"
                    : "items-center  justify-center md:items-start md:justify-start"
                } `}
              >
                {data.text}
                <Image
                  src={data.img}
                  alt="Background image"
                  quality={100}
                  className="w-full  h-[92vh] md:h-[85vh] lg:h-[79vh] md:rounded-[48px] object-cover"
                />
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default LandingPage;
