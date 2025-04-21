import React from 'react'
import inbox1 from "../assets/images/inbox1.png"
import inbox2 from "../assets/images/inbox2.png"
const Inbox = () => {
  return (
    <section className='my-5 lg:my-[160px]'>
        <div className="container">
            <div className='bg-secondary-item rounded-[60px] py-10 lg:py-[80px] relative'>
            <h2 className='text-primary-black text-2xl  lg:text-5xl text-center font-semibold'>Deliciousness to your inbox</h2>
            <p className="font-regular text-primary-black/60 mt-2 lg:mt-6 mb-7 lg:mb-[64px] lg:w-[620px] text-base mx-auto leading-[28px]">Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor <span className='lg:block text-center'> incididunt ut labore et dolore magna aliqut enim ad minim</span> </p>
            
            <div className='flex relative items-center justify-center'>
            <input className='bg-[#FFFFFF] mb-3 lg:mb-0 w-full py-5 lg:py-[32px] pl-4 lg:pl-[32px] lg:w-[480px] rounded-2xl  lg:rounded-[24px] placeholder:text-sm placeholder:font-medium placeholder:text-primary-black/40' type="text" placeholder='Your email address...' />

            <button className="bg-primary-black rounded-2xl top-[8px] lg:top-[10px] right-0 lg:right-[410px] absolute px-5 py-4 lg:px-[46px] lg:py-[22px] text-xs lg:text-sm font-semibold text-[#FFFFFF]">
            Subscribe
            </button>
            </div>
            
            <img className=' hidden lg:block absolute bottom-0' src={inbox1} alt="" />
            <img className=' hidden lg:block absolute right-0 bottom-0' src={inbox2} alt="" />
          
            </div>
        </div>
    </section>
  )
}

export default Inbox