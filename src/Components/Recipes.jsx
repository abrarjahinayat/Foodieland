import React from "react";
import burger from "../assets/images/recipes img/burger.png";
import salmon from "../assets/images/recipes img/salmon.png";
import pancake from "../assets/images/recipes img/pancake.png";
import salad from "../assets/images/recipes img/salad.png";
import meatball from "../assets/images/recipes img/meatball.png";
import orange from "../assets/images/recipes img/orange.png";
import potchicken from "../assets/images/recipes img/pot chicken.png";
import crimechicken from "../assets/images/recipes img/crime chicken.png";
import ads from "../assets/images/recipes img/Ads.png";
import { PiTimerFill } from "react-icons/pi";
import { PiForkKnifeFill } from "react-icons/pi";
const Recipes = () => {
  return (
    <section>
      <div className="container">
        <h2 className="text-primary-black mb-9 text-center text-[48px] font-semibold tracking-[-4%]">
          Simple and tasty recipes
        </h2>
        <p className="font-regular text-primary-black/60 mx-auto w-[706px] text-base leading-[28px]">
          Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod
          tempor incididunt ut{" "}
        </p>
        <p className="font-regular text-primary-black/60 mb-[84px] text-center text-base leading-[28px]">
          {" "}
          labore et dolore magna aliqut enim ad minim
        </p>

        <div className="mb-10 flex gap-x-10">
          <div className="bg-secondary-item w-[400px] rounded-[30px]">
            <img className="mx-auto" src={burger} alt="" />
            <p className="text-primary-black ml-6 w-[292px] pt-6 text-2xl leading-8 font-semibold tracking-[-4%]">
              Big and Juicy Wagyu Beef Cheeseburger
            </p>
            <div className="flex gap-x-6">
              <span className="flex items-center gap-x-[10px] pt-6 pb-9 pl-6">
                <PiTimerFill className="text-2xl" />
                <p className="text-primary-black/60 text-sm font-medium">
                  30 Minutes
                </p>
              </span>
              <span className="flex items-center gap-x-[10px] pt-6 pb-9 pl-6">
                <PiForkKnifeFill className="text-2xl" />
                <p className="text-primary-black/60 text-sm font-medium">
                  30 Snack
                </p>
              </span>
            </div>
          </div>
          <div className="bg-secondary-item w-[400px] rounded-[30px]">
            <img className="mx-auto" src={salmon} alt="" />
            <p className="text-primary-black ml-6 w-[400px] pt-6 text-2xl leading-8 font-semibold tracking-[-4%]">
              Fresh Lime Roasted Salmon with Ginger Sauce
            </p>
            <div className="flex gap-x-6">
              <span className="flex items-center gap-x-[10px] pt-6 pb-9 pl-6">
                <PiTimerFill className="text-2xl" />
                <p className="text-primary-black/60 text-sm font-medium">
                  30 Minutes
                </p>
              </span>
              <span className="flex items-center gap-x-[10px] pt-6 pb-9 pl-6">
                <PiForkKnifeFill className="text-2xl" />
                <p className="text-primary-black/60 text-sm font-medium">
                  30 Snack
                </p>
              </span>
            </div>
          </div>
          <div className="bg-secondary-item w-[400px] rounded-[30px]">
            <img className="mx-auto" src={pancake} alt="" />
            <p className="text-primary-black ml-6 w-[350px] pt-6 text-2xl leading-8 font-semibold tracking-[-4%]">
              Strawberry Oatmeal Pancake with Honey Syrup
            </p>
            <div className="flex gap-x-6">
              <span className="flex items-center gap-x-[10px] pt-6 pb-9 pl-6">
                <PiTimerFill className="text-2xl" />
                <p className="text-primary-black/60 text-sm font-medium">
                  30 Minutes
                </p>
              </span>
              <span className="flex items-center gap-x-[10px] pt-6 pb-9 pl-6">
                <PiForkKnifeFill className="text-2xl" />
                <p className="text-primary-black/60 text-sm font-medium">
                  30 Snack
                </p>
              </span>
            </div>
          </div>
        </div>
        <div className="mb-10 flex gap-x-10">
          <div className="bg-secondary-item w-[400px] rounded-[30px]">
            <img className="mx-auto" src={salad} alt="" />
            <p className="text-primary-black ml-6 w-[292px] pt-6 text-2xl leading-8 font-semibold tracking-[-4%]">
              Fresh and Healthy Mixed Mayonnaise Salad
            </p>
            <div className="flex gap-x-6">
              <span className="flex items-center gap-x-[10px] pt-6 pb-9 pl-6">
                <PiTimerFill className="text-2xl" />
                <p className="text-primary-black/60 text-sm font-medium">
                  30 Minutes
                </p>
              </span>
              <span className="flex items-center gap-x-[10px] pt-6 pb-9 pl-6">
                <PiForkKnifeFill className="text-2xl" />
                <p className="text-primary-black/60 text-sm font-medium">
                  30 Snack
                </p>
              </span>
            </div>
          </div>
          <div className="bg-secondary-item w-[400px] rounded-[30px]">
            <img className="mx-auto" src={meatball} alt="" />
            <p className="text-primary-black ml-6 w-[400px] pt-6 text-2xl leading-8 font-semibold tracking-[-4%]">
              Chicken Meatballs with Cream Cheese
            </p>
            <div className="flex gap-x-6">
              <span className="flex items-center gap-x-[10px] pt-6 pb-9 pl-6">
                <PiTimerFill className="text-2xl" />
                <p className="text-primary-black/60 text-sm font-medium">
                  30 Minutes
                </p>
              </span>
              <span className="flex items-center gap-x-[10px] pt-6 pb-9 pl-6">
                <PiForkKnifeFill className="text-2xl" />
                <p className="text-primary-black/60 text-sm font-medium">
                  30 Snack
                </p>
              </span>
            </div>
          </div>
          <div>
            <img src={ads} alt="" />
          </div>
        </div>
        <div className="mb-10 flex gap-x-10">
          <div className="bg-secondary-item w-[400px] rounded-[30px]">
            <img className="mx-auto" src={orange} alt="" />
            <p className="text-primary-black ml-6 w-[352px] pt-6 text-2xl leading-8 font-semibold tracking-[-4%]">
              Fruity Pancake with Orange & Blueberry
            </p>
            <div className="flex gap-x-6">
              <span className="flex items-center gap-x-[10px] pt-6 pb-9 pl-6">
                <PiTimerFill className="text-2xl" />
                <p className="text-primary-black/60 text-sm font-medium">
                  30 Minutes
                </p>
              </span>
              <span className="flex items-center gap-x-[10px] pt-6 pb-9 pl-6">
                <PiForkKnifeFill className="text-2xl" />
                <p className="text-primary-black/60 text-sm font-medium">
                  30 Snack
                </p>
              </span>
            </div>
          </div>
          <div className="bg-secondary-item w-[400px] rounded-[30px]">
            <img className="mx-auto" src={potchicken} alt="" />
            <p className="text-primary-black ml-6 w-[370px] pt-6 text-2xl leading-8 font-semibold tracking-[-4%]">
              The Best Easy One Pot Chicken and Rice
            </p>
            <div className="flex gap-x-6">
              <span className="flex items-center gap-x-[10px] pt-6 pb-9 pl-6">
                <PiTimerFill className="text-2xl" />
                <p className="text-primary-black/60 text-sm font-medium">
                  30 Minutes
                </p>
              </span>
              <span className="flex items-center gap-x-[10px] pt-6 pb-9 pl-6">
                <PiForkKnifeFill className="text-2xl" />
                <p className="text-primary-black/60 text-sm font-medium">
                  30 Snack
                </p>
              </span>
            </div>
          </div>
          <div className="bg-secondary-item w-[400px] rounded-[30px]">
            <img className="mx-auto" src={crimechicken} alt="" />
            <p className="text-primary-black ml-6 w-[400px] pt-6 text-2xl leading-8 font-semibold tracking-[-4%]">
              The Creamiest Creamy Chicken and Bacon Pasta
            </p>
            <div className="flex gap-x-6">
              <span className="flex items-center gap-x-[10px] pt-6 pb-9 pl-6">
                <PiTimerFill className="text-2xl" />
                <p className="text-primary-black/60 text-sm font-medium">
                  30 Minutes
                </p>
              </span>
              <span className="flex items-center gap-x-[10px] pt-6 pb-9 pl-6">
                <PiForkKnifeFill className="text-2xl" />
                <p className="text-primary-black/60 text-sm font-medium">
                  30 Snack
                </p>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Recipes;
