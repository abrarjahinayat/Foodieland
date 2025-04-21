import React, { useState } from "react";
import Logo from "../assets/images/logo.png";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaBars } from "react-icons/fa6";
import { MdCloseFullscreen } from "react-icons/md";

const Header = () => {
  let [menu, setmenu] = useState(false);
  let [navBar, setNavbar] = useState("translate-y-[-160%]");
  let handleNavbar = () => {
    setmenu(!menu);
    if (menu) {
      setNavbar("translate-y-[-160%]");
    } else {
      setNavbar("translate-y-[0%]");
    }
  
  };
  let [active, setActive] = useState(1);
  let handleActive = (number) => {
    setActive(number);
  };
  return (
    <header className="border-primary-black/10 border:mt-10 border-b py-5 lg:py-10">
      <nav>
        <div className="container">
          <div className="flex justify-between">
            <div>
              <img src={Logo} alt="logo" />
            </div>
            {menu ? (
              <MdCloseFullscreen
                onClick={handleNavbar}
                className="text-2xl lg:hidden"
              />
            ) : (
              <FaBars onClick={handleNavbar} className="text-2xl lg:hidden" />
            )}

            <div className="hidden lg:block">
              <ul className="gap-x-15 lg:flex">
                <li
                  onClick={() => handleActive(1)}
                  className={`${active == 1 ? "on" : "list"} " active " `}
                >
                  Home
                </li>
                <li  onClick={() => handleActive(2)} className={`${active == 2 ? "on" : "list"} " active " `}>Recipes</li>
                <li onClick={()=> handleActive(3)} className={`${active == 3 ? "on" : "list"} " active " `}>Blog</li>
                <li onClick={()=> handleActive(4)} className={`${active == 4 ? "on" : "list"} " active " `}>Contact</li>
                <li onClick={()=> handleActive(5)} className={`${active == 5 ? "on" : "list"} " active " `}>About us</li>
              </ul>
            </div>
            <div className="hidden gap-x-10 text-[22px] lg:flex">
              <FaFacebookF />
              <FaTwitter />
              <FaInstagram />
            </div>
          </div>
          {/* ====== For mobile view ===== */}
          {navBar && (
            <ul
              className={` ${navBar} " bg-secondary-item/95 lg:flex" absolute left-0 mt-6 w-full translate-y-[-160%] flex-col items-center justify-center gap-x-15 py-3 text-center transition duration-500 ease-in-out`}
            >
              <li className="list  mt-3">Home</li>
              <li className="list mt-3">Recipes</li>
              <li className="list mt-3">Blog</li>
              <li className="list mt-3">Contact</li>
              <li className="list mt-3">About us</li>
              <ul className="mt-5 flex justify-center gap-x-10 text-[22px]">
                <FaFacebookF />
                <FaTwitter />
                <FaInstagram />
              </ul>
            </ul>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
