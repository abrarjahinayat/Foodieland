import React from 'react'
import Logo from '../assets/images/logo.png'
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
const Header = () => {
  return (
    <header className='py-10 border-b border-primary-black/10 border:mt-10'>
        <nav>
            <div className="container">
                <div className='flex justify-between'>
                    <div>
                        <img src={Logo} alt="logo" />
                    </div>
                    <div>
                        <ul className='flex gap-x-15 '>
                            <li className='list'>Home</li>
                            <li className='list'>Recipes</li>
                            <li className='list'>Blog</li>
                            <li className='list'>Contact</li>
                            <li className='list'>About us</li>
                        </ul>
                    </div>
                    <div className='flex gap-x-10 text-[22px]'>
                    <FaFacebookF />
                    <FaTwitter />
                    <FaInstagram />
                    </div>
                </div>
            </div>
        </nav>
    </header>
  )
}

export default Header