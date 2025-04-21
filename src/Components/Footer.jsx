import React from "react";
import logo from "../assets/images/logo.png";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="border-primary-black/10 mb-4 flex flex-col items-center justify-between border-b py-4 lg:mb-10 lg:flex-row lg:py-10">
          <div>
            <img src={logo} alt="" />
            <p className="font-regular text-primary-black/60 mt-2 text-base leading-[28px] lg:mt-4">
              Lorem ipsum dolor sit amet, consectetuipisicing elit,{" "}
            </p>
          </div>
          <div>
            <ul className="mt-3 flex gap-x-10 lg:mt-0 lg:gap-x-15">
              <li className="list">Recipes</li>
              <li className="list">Blog</li>
              <li className="list">Contact</li>
              <li className="list">About us</li>
            </ul>
          </div>
        </div>
        <div className="relative mb-12 flex flex-col items-center justify-center lg:flex-row">
          <p className="text-primary-black/60 text-center text-lg font-medium">
            © 2020 Flowbase. Powered by{" "}
            <span className="text-[#FF7967]">Webflow</span>
          </p>
          <div className="mt-5 flex gap-x-10 text-[22px] lg:absolute lg:right-0 lg:mt-0">
            <FaFacebookF />
            <FaTwitter />
            <FaInstagram />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
