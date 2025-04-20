import React from "react";
import breakfast from "../assets/images/categories img/breakfast.png";
import vegan from "../assets/images/categories img/vegan.png";
import meat from "../assets/images/categories img/meat.png";
import dessert from "../assets/images/categories img/dessert.png";
import lunch from "../assets/images/categories img/lunch.png";
import chocolate from "../assets/images/categories img/chocolate.png";
const Categories = () => {
  return (
    <section className="mt-[162px] mb-[183px]">
      <div className="container">
        <div className="flex justify-between">
          <h2 className="text-primary-black text-[48px] font-semibold tracking-[-4%]">
            Categories
          </h2>
          <button className="bg-secondary-color text-primary-black mb-[80px] rounded-2xl px-[27px] py-[21px] text-base font-semibold tracking-[-2%]">
            View All Categories
          </button>
        </div>
        <div className="flex gap-x-10">
          <div className="relative w-[180px] rounded-[30px] bg-[#708246]/10">
            <img
              className="absolute bottom-[102px] left-10 m-auto"
              src={breakfast}
              alt=""
            />
            <p className="text-primary-black px-[40px] pt-[100px] pb-[30px] text-center text-lg font-semibold tracking-[-2%]">
              Breakfast
            </p>
          </div>
          <div className="relative w-[180px] rounded-[30px] bg-[#6CC63F]/10">
            <img
              className="absolute bottom-[102px] left-10 m-auto"
              src={vegan}
              alt=""
            />
            <p className="text-primary-black px-[40px] pt-[100px] pb-[30px] text-center text-lg font-semibold tracking-[-2%]">
              Vegan
            </p>
          </div>
          <div className="relative w-[180px] rounded-[30px] bg-[#CC261B]/10">
            <img
              className="absolute bottom-[102px] left-10 m-auto"
              src={meat}
              alt=""
            />
            <p className="text-primary-black px-[40px] pt-[100px] pb-[30px] text-center text-lg font-semibold tracking-[-2%]">
              Meat
            </p>
          </div>
          <div className="relative w-[180px] rounded-[30px] bg-[#F09E00]/10">
            <img
              className="absolute bottom-[102px] left-10 m-auto"
              src={dessert}
              alt=""
            />
            <p className="text-primary-black px-[40px] pt-[100px] pb-[30px] text-center text-lg font-semibold tracking-[-2%]">
              Dessert
            </p>
          </div>
          <div className="relative w-[180px] rounded-[30px] bg-[#000000]/5">
            <img
              className="absolute bottom-[102px] left-10 m-auto"
              src={lunch}
              alt=""
            />
            <p className="text-primary-black px-[40px] pt-[100px] pb-[30px] text-center text-lg font-semibold tracking-[-2%]">
              Lunch
            </p>
          </div>
          <div className="relative w-[180px] rounded-[30px] bg-[#000000]/5">
            <img
              className="absolute bottom-[102px] left-10 m-auto"
              src={chocolate}
              alt=""
            />
            <p className="text-primary-black px-[40px] pt-[100px] pb-[30px] text-center text-lg font-semibold tracking-[-2%]">
              Chocolate
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Categories;
