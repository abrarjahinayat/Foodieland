import React from 'react'
import bannerimg from '../assets/images/bannerimg.png'
const Banner = () => {
  return (
    <section className='mt-10'>
        <div className="container">
            <img src={bannerimg} alt="" />
        </div>
    </section>
  )
}

export default Banner