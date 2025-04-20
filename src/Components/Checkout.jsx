import React from 'react'
import checkout1 from "../assets/images/checkout/checkout1.png"
import checkout2 from "../assets/images/checkout/checkout2.png"
import checkout3 from "../assets/images/checkout/checkout3.png"
import checkout4 from "../assets/images/checkout/checkout4.png"
import { FaInstagram } from "react-icons/fa";

const Checkout = () => {
  return (
    <section className='bg-secondary-item py-[80px]'>
        <div className="container">
            <h2 className="text-primary-black  text-5xl font-semibold text-center">Check out @foodieland on Instagram</h2>
           <p className="font-regular text-primary-black/60 mt-6 mb-[80px] w-[840px] text-base mx-auto leading-[28px]"> Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore <span className='block text-center'>magna aliqut enim ad minim </span></p>

           <div className='flex gap-x-10'>
                <img src={checkout1} alt="" />
                <img src={checkout2} alt="" />
                <img src={checkout3} alt="" />
                <img src={checkout4} alt="" />
           </div>
           <button className="bg-primary-black mt-[93px] flex mx-auto items-center gap-x-4 rounded-2xl px-[53px] py-[22px] text-sm font-semibold text-[#FFFFFF]">
           Visit Our Instagram <FaInstagram className='text-[22px]' />
            </button>
        </div>
    </section>
  )
}

export default Checkout