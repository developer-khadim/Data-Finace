import React from "react";
import laptop from "../assets/laptop.jpg";

const Analytics = () => {
  return (
    <>
      <div className="w-full bg-white px-4 py-16">
        <div className="max-w-[1240px] mx-auto grid md:grid-cols-2  ">
          <img src={laptop} alt="/"  className="w-[500px] mx-auto my-4 "/>
          <div  className="flex flex-col justify-center " >
            <p className="text-[#00df9a] font-bold uppercase " >Data Analytics dashbord</p>
            <h1 className="md:text-4xl sm:text-3xl text-xl font-bold py-2" >Manage Data Analytics Centrally</h1>
            <p  >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
              ex itaque quod eos iure porro fuga mollitia autem ipsum alias odio
              ab debitis molestiae dolorem nisi sint, illum rerum similique.
            </p>
            <button className=" w-[200px] mx-auto my-6 md:mx-0 font-medium py-3 rounded-md hover:bg-[#43c79d] hover:text-black border bg-black duration-300 text-[#00fd9a] ">
              {" "}
              Get Started
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Analytics;
