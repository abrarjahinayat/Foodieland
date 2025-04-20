import React from "react";
import everyone from "../assets/images/everyoneimg.png"
const Everyone = () => {
  return (
    <section className="mt-[143px] mb-[160px]">
      <div className="container">
        <div className="flex">
          <div className="w-2/4">
            <h2 className="text-primary-black w-[526px] text-5xl font-semibold">
              Everyone can be a chef in their own kitchen
            </h2>
            <p className="font-regular text-primary-black/60 mt-6 w-[490px] text-base leading-[28px]">
              Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad
              minim{" "}
            </p>

            <button className="bg-primary-black mt-[93px] rounded-2xl px-[53px] py-[22px] text-sm font-semibold text-[#FFFFFF]">
              Learn More
            </button>
          </div>
          <div className="w-2/4">
          <img src={everyone} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Everyone;
