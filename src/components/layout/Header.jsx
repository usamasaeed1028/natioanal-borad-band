import Image from "next/image";
import logo from "../../assets/images/logo.png";
import slider1 from "../../assets/images/bg-slide03.jpg";
import slider2 from "../../assets/images/bg-slide01.jpg";
import slider3 from "../../assets/images/bg-slide02.jpg";
import slider4 from "../../assets/images/bg-slide04.jpg";
import Slider from "react-slick";
import HamburgerIcon from "@/assets/icons/HamburgerIcon";
import { SiGooglemessages } from "react-icons/si";
import { useState } from "react";

const DATA = [
  {
    id: "d1",
    text: (
      <div className="text-[50px]  w-[600px]  text-center absolute z-[11] text-[#FFF8D6]">
        {" "}
        THE <span className="font-extrabold"> POWER OF FIBER </span> AT A
        FRACTION OF THE <span className="font-extrabold"> PRICE </span>{" "}
      </div>
    ),
    img: slider2,
  },
  {
    id: "d2",
    text: (
      <div className="text-[50px]  w-[600px]  text-center absolute z-[11] text-[#FFF8D6]">
        {" "}
        THE <span className="font-extrabold"> POWER OF FIBER </span> AT A
        FRACTION OF THE <span className="font-extrabold"> PRICE </span>{" "}
      </div>
    ),
    img: slider1,
  },
  {
    id: "d2",
    text: (
      <div className="text-[50px]  w-[600px]  text-center absolute z-[11] text-[#FFF8D6]">
        {" "}
        THE <span className="font-extrabold"> POWER OF FIBER </span> AT A
        FRACTION OF THE <span className="font-extrabold"> PRICE </span>{" "}
      </div>
    ),
    img: slider3,
  },
  {
    id: "d2",
    text: (
      <div className="text-[50px]  w-[600px]  text-center absolute z-[11] text-[#FFF8D6]">
        {" "}
        THE <span className="font-extrabold"> POWER OF FIBER </span> AT A
        FRACTION OF THE <span className="font-extrabold"> PRICE </span>{" "}
      </div>
    ),
    img: slider4,
  },
];

const Header = () => {
  const [isMobileMenu, setIsMobileMenu] = useState(false);
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 3000, // set autoplay timing here
    slidesToScroll: 1,
  };
  return (
    <div className="grad  min-h-screen">
      <div
        className={` flex justify-between items-center px-[40px] w-full bg-[#61 7A55]  lg:px-[60px] py-[10px]  border-b-[0.5px]`}
      >
        <Image
          src={logo}
          alt="logo"
          className="w-[190px] h-[50px] text-center text-[#FFF8D6] cursor-pointer object-cover"
        />
        <ul className="gap-7 xl:gap-10 text-white hidden lg:flex">
          <li className="cursor-pointer hover:text-[#FFF8D6] border-b-[4px] border-b-transparent hover:border-b-[#617a55] transition-all ">
            HOME
          </li>
          <li className="cursor-pointer hover:text-[#FFF8D6] border-b-[4px] border-b-transparent hover:border-b-[#617a55] transition-all ">
            ABOUT US
          </li>
          <li className="cursor-pointer hover:text-[#FFF8D6] border-b-[4px] border-b-transparent hover:border-b-[#617a55] transition-all ">
            WHY NBB
          </li>
          <li className="cursor-pointer hover:text-[#FFF8D6] border-b-[4px] border-b-transparent hover:border-b-[#617a55] transition-all ">
            NBB CODE
          </li>
          <li className="cursor-pointer hover:text-[#FFF8D6] border-b-[4px] border-b-transparent hover:border-b-[#617a55] transition-all ">
            FAQ'S
          </li>
          <li className="cursor-pointer hover:text-[#FFF8D6] border-b-[4px] border-b-transparent hover:border-b-[#617a55] transition-all ">
            CONTACT US
          </li>
        </ul>
        <button className="hidden lg:block border-transparent rounded-[48px] py-1.5 px-6 bg-[#617A55] text-base text-white transition-all hover:bg-[#75876c] hover:scale-[1.2]">
          GET NBB
        </button>
        <div className="lg:hidden" onClick={() => setIsMobileMenu(true)}>
          <HamburgerIcon />
        </div>
      </div>
      {/* mobile header */}
      {isMobileMenu && (
        <div className="absolute w-[240px] h-[100vh] bg-[#A4D0A4]  top-0 z-[100]">
          I am mobile header
        </div>
      )}

      {/* slider */}
      <div className={`px-[40px] mt-[30px]`} onClick={() => setIsMobileMenu(false)}>
        <Slider {...settings}>
          {DATA.map((data) => {
            return (
              <div className="">
                <div className="flex gap-x-[50px] text-center text-[#FFF8D6] items-center w-full justify-center">
                  {" "}
                  {data.text}
                  {/* <div
                    className={`bg-[#441f0d9f] w-full h-full absolute left-0 top-0 z-[-1]`}
                  ></div> */}
                  <Image
                    src={data.img}
                    alt="Background image"
                    quality={100}
                    className="w-full h-[79vh] rounded-[48px] object-cover opacity-75"
                  />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-transparent opacity-50 rounded-[48px]"></div>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
      {/* <div className="w-fit h-[10vh] justify-end items-center flex px-[60px] text-[50px] transition-all cursor-pointer hover:scale-[0.9] absolute right-0 z-[10]">
        <SiGooglemessages />
      </div> */}
    </div>
    //   <section className="w-full min-h-[100vh] flex justify-center items-center">
    //   <div>
    //   <Slider {...settings}>
    //     {DATA.map((data) => {
    //       return (
    //         <div>
    //           <div
    //             className={`top-0 left-0 img-container w-full h-full absolute z-[-2]`}
    //           >
    //             <Image src={slider3} layout="fill" />
    //           </div>
    //           <div
    //             className={` bg-[#441f0d9f]  w-full h-full absolute left-0 top-0 z-[-1]`}
    //           ></div>
    //           <div className="max-w-[840px] px-[20px] bg-[#44 1f0d9f] md:px-0 text-center text-white mt-[20px]">
    //             <h1 className="text-[40px] sm:text-[60px] md:text-[70px] leading-[40px] sm:leading-[60px] md:leading-[70px] font-[700]">
    //               Your Best{" "}
    //               <span className="text-[#d4a051]">Tour Choice</span>
    //             </h1>
    //             <p className="text-[16px] sm:text-[20px] leading-[22px] md:leading-[26px] font-[400] bg-[#000000ab ] p-[20px ] rounded-[10px] mt-[20px]">
    //               Lorem Ipsum is simply dummy text of the printing and
    //               typesetting industry. Lorem Ipsum has been the
    //               industry&#39;s standard dummy text ever since the 1500s
    //             </p>
    //           </div>
    //         </div>
    //       );
    //     })}
    //   </Slider>
    //   </div>
    // </section>
  );
};

export default Header;
