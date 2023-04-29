import Image from "next/image";
import logo from "../../assets/images/logo.png";
import HamburgerIcon from "@/assets/icons/HamburgerIcon";
import { useEffect, useState } from "react";
import CloseIcon from "@/assets/icons/CloseIcon";
import LandingPage from "../LandingPage";
import { CSSTransition } from "react-transition-group";

const Header = () => {
  const [isMobileMenu, setIsMobileMenu] = useState(false);

  useEffect(() => {
    console.log('in Dashboard COntainer')
    const handleResize = () => {
      const isMobile = window.innerWidth > 1024
      if (isMobile && setIsMobileMenu) {
        setIsMobileMenu(false)
      }
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [isMobileMenu])

  return (
    <div className="grad h-[100vh] overflow-hidden">
      <div
        className={` flex justify-between items-center px-[30px] w-full bg-[#61 7A55]  xl:px-[60px] py-[10px]  border-b-[0.5px]`}
      >
        <Image
          src={logo}
          alt="logo"
          className="w-[190px] h-[50px] text-center text-[#FFF8D6] cursor-pointer object-cover"
        />
        <ul className="gap-4 xl:gap-10 text-white hidden lg:flex">
          <li className="cursor-pointer bg-[#617A55]  rounded-[4px] py-[4px] px-[8px] hover:text-[#FFF8D6]  transition-all ">
            HOME
          </li>
          <li className="cursor-pointer hover:bg-[#617A55]  rounded-[4px] py-[4px] px-[8px] hover:text-[#FFF8D6]  transition-all ">
            ABOUT US
          </li>
          <li className="cursor-pointer hover:bg-[#617A55]  rounded-[4px] py-[4px] px-[8px] hover:text-[#FFF8D6]  transition-all ">
            WHY NBB
          </li>
          <li className="cursor-pointer hover:bg-[#617A55]  rounded-[4px] py-[4px] px-[8px] hover:text-[#FFF8D6]  transition-all ">
            NBB CODE
          </li>
          <li className="cursor-pointer hover:bg-[#617A55]  rounded-[4px] py-[4px] px-[8px] hover:text-[#FFF8D6]  transition-all ">
            FAQ'S
          </li>
          <li className="cursor-pointer hover:bg-[#617A55]  rounded-[4px] py-[4px] px-[8px] hover:text-[#FFF8D6]  transition-all ">
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
      <CSSTransition
        in={isMobileMenu}
        timeout={300}
        classNames="sidebar"
        unmountOnExit
      >
        <>
          <div className="absolute w-[280px] h-[100vh] bg-[#617A55]  top-0 z-[20]">
            <div
              className="absolute top-6 right-6"
              onClick={() => setIsMobileMenu(false)}
            >
              <CloseIcon />
            </div>
            <ul className="flex flex-col gap-6 text-white p-[20px] py-[100px] ">
              <li className="cursor-pointer bg-[#A4D0A4] text-[#2e2e2e] font-semibold  rounded-[4px] py-[4px] px-[8px]   transition-all ">
                HOME
              </li>
              <li className="cursor-pointer hover:bg-[#A4D0A4] hover:text-[#2e2e2e]   rounded-[4px] py-[4px] px-[8px]   transition-all ">
                ABOUT US
              </li>
              <li className="cursor-pointer hover:bg-[#A4D0A4] hover:text-[#2e2e2e]   rounded-[4px] py-[4px] px-[8px]   transition-all ">
                WHY NBB
              </li>
              <li className="cursor-pointer hover:bg-[#A4D0A4] hover:text-[#2e2e2e]  rounded-[4px] py-[4px] px-[8px]  transition-all ">
                NBB CODE
              </li>
              <li className="cursor-pointer hover:bg-[#A4D0A4] hover:text-[#2e2e2e]   rounded-[4px] py-[4px] px-[8px]   transition-all ">
                FAQ'S
              </li>
              <li className="cursor-pointer hover:bg-[#A4D0A4] hover:text-[#2e2e2e]  rounded-[4px] py-[4px] px-[8px]   transition-all ">
                CONTACT US
              </li>
              <button className=" border-transparent rounded-[48px] py-1.5 px-6 bg-[#A4D0A4] text-[#2e2e2e] text-base font-semibold  transition-all hover:bg-[#b3d9b3] ">
                GET NBB
              </button>
            </ul>
          </div>
          <div
            className="fixed inset-0 z-10 bg-black bg-opacity-30 brightness-50"
            onClick={() => setIsMobileMenu(false)}
          ></div>
        </>
      </CSSTransition>

      <LandingPage />
    </div>
  );
};

export default Header;
