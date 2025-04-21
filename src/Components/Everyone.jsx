import React, {useState} from "react";
import everyone from "../assets/images/everyoneimg.png";
const Everyone = () => {
  let [learn, setLearn] = useState(false);
  let handleLearn = ()=>{
   setLearn(!learn)
  }
  return (
    <section className="mt-10 mb-5 lg:mt-[143px] lg:mb-[160px]">
      <div className="container">
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-2/4">
            <h2 className="text-primary-black text-2xl font-semibold lg:w-[526px] lg:text-5xl">
              Everyone can be a chef in their own kitchen
            </h2>
            <p className="font-regular text-primary-black/60 mt-2 text-base leading-[28px] lg:mt-6 lg:w-[490px]">
              Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad
              minim.....{" "}
              {
                learn &&
                <span className="font-regular text-primary-black/60 text-base leading-[28px] lg:w-[490px]">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi, assumenda vel? Molestias, fugiat adipisci aspernatur natus earum officia fuga sit quae obcaecati ad dicta recusandae totam tempore ipsa in, nulla sapiente quos dignissimos quis animi maiores vitae delectus excepturi. Dolorum quibusdam omnis laborum illum nulla inventore quasi necessitatibus et hic.</span>
              }
            </p>
            {
              learn ?  <button onClick={handleLearn} className="bg-primary-black rounded-2xl px-9 py-4 text-sm font-semibold text-[#FFFFFF] mt-3 lg:mt-[93px] lg:px-[53px] lg:py-[22px]">
              Learn Less
            </button>
            :
            <button onClick={handleLearn} className="bg-primary-black rounded-2xl px-9 py-4 text-sm font-semibold text-[#FFFFFF] mt-3 lg:mt-[93px] lg:px-[53px] lg:py-[22px]">
            Learn More
          </button>
            }
           
           
          </div>
          <div className="lg:w-2/4">
            <img src={everyone} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Everyone;
