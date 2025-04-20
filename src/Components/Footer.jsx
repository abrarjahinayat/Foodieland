import React from 'react'
import logo from "../assets/images/logo.png"
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
const Footer = () => {
  return (
    <footer>
        <div className="container">
            <div className='flex justify-between items-center py-10 border-b border-primary-black/10 mb-10'>
                <div>

            <img src={logo} alt="" />
            <p className='text-base font-regular leading-[28px] text-primary-black/60 mt-4'>Lorem ipsum dolor sit amet, consectetuipisicing elit, </p>

                </div>
                <div>
                        <ul className='flex gap-x-15 '>
                            <li className='list'>Recipes</li>
                            <li className='list'>Blog</li>
                            <li className='list'>Contact</li>
                            <li className='list'>About us</li>
                        </ul>
                    </div>
            </div>
            <div className='flex items-center justify-center mb-12 relative'>

            <p className=' text-center text-lg font-medium text-primary-black/60'>© 2020 Flowbase. Powered by <span className="text-[#FF7967]">Webflow</span></p>
              <div className='flex gap-x-10 text-[22px] absolute right-0 '>
                                <FaFacebookF />
                                <FaTwitter />
                                <FaInstagram />
                                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer