import React from "react";
import image from "../../assets/banner.png";
import Services from "../../components/Services/Services";

const Home = () => {
  return (
    <div className="bg-[#07332F] text-white max-h-screen py-7">
      <div className="max-w-screen-xl px-5 mx-auto">
        <div className="grid md:grid-cols-2 items-center justify-between gap-10">
          <div className="">
            <div className="text-5xl font-bold">
              <h1>Your Best Medical </h1>
              <h1 className="mt-3">Help Center</h1>
            </div>
            <p className="mt-9">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatum debitis minus, obcaecati velit labore excepturi
              delectus esse ipsa. Veniam illo, sint saepe at officiis magni
              dolores vitae quia itaque architecto?
            </p>
            <button className="px-4 py-2 bg-[#F7A582] mt-5 rounded-md">
              All Service
            </button>
          </div>
          <div className="">
            <img src={image} alt="" />
          </div>
        </div>
      </div>

          {/* others home sections  */}
          <Services />
          
    </div>
  );
};

export default Home;
