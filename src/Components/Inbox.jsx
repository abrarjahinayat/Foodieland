import React from 'react'
import inbox1 from "../assets/images/inbox1.png"
import inbox2 from "../assets/images/inbox2.png"
const Inbox = () => {
  return (
    <section className='my-[160px]'>
        <div className="container">
            <div className='bg-secondary-item rounded-[60px] py-[80px] relative'>
            <h2 className='text-primary-black  text-5xl text-center font-semibold'>Deliciousness to your inbox</h2>
            <p className="font-regular text-primary-black/60 mt-6 mb-[64px] w-[620px] text-base mx-auto leading-[28px]">Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor <span className='block text-center'> incididunt ut labore et dolore magna aliqut enim ad minim</span> </p>
            
            <div className='flex relative items-center justify-center'>
            <input className='bg-[#FFFFFF] py-[32px] pl-[32px] w-[480px]  rounded-[24px] placeholder:text-sm placeholder:font-medium placeholder:text-primary-black/40' type="text" placeholder='Your email address...' />

            <button className="bg-primary-black rounded-2xl right-[410px] absolute px-[46px] py-[22px] text-sm font-semibold text-[#FFFFFF]">
              Learn More
            </button>
            </div>
            
            <img className='absolute bottom-0' src={inbox1} alt="" />
            <img className='absolute right-0 bottom-0' src={inbox2} alt="" />
          
            </div>
        </div>
    </section>
  )
}

export default Inbox