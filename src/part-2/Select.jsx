import React, { useState } from "react";
import Custom from "./Custom";

const Select = () => {
  const [view1, setView1] = useState(false);
  const [view2, setView2] = useState(false);
  const [view3, setView3] = useState(false);

  return (
    <div className=" h-[100vh] bg-stone-100 flex-col justify-center m-0">
      <span className=" text-md text-gray-500 left-[20vw] relative top-0">
        Customise the specifications below.
      </span>

      <div className="bg-stone-50 w-[100vw] py-8 text-gray-500 text-lg font-bold mb-3">
        <div className="justify-between flex text-orange-400 ">
          <span className="relative max-sm:left-[5vw] left-[20vw]">
            Steel (sariya)
          </span>
          <span className="relative max-sm:right-[5vw] right-[20vw]">
            INR 150
          </span>
        </div>
        <div className="justify-between flex">
          <span className="relative left-[20vw] max-sm:left-[5vw] max-sm:w-[200px]">
            Rathi, Kamdhenu or eq.
          </span>
          <span className="relative right-[20vw] max-sm:right-[5vw]">
            per sqft
          </span>
        </div>
        <Custom view={view1} setView={setView1} />
      </div>

      <div className="bg-stone-50 w-[100vw] py-8 text-gray-500 text-lg font-bold my-3">
        <div className="justify-between flex text-orange-400">
          <span className="relative left-[20vw] max-sm:left-[5vw]">
            Concreet
          </span>
          <span className="relative right-[20vw] max-sm:right-[5vw]">
            INR 150
          </span>
        </div>
        <div className="justify-between flex">
          <span className="relative left-[20vw] max-sm:left-[5vw] max-sm:w-[200px]">
            RMC (Ultratech, Prism, ACC)
          </span>
          <span className="relative right-[20vw] max-sm:right-[5vw]">
            per sqft
          </span>
        </div>
        <Custom view={view2} setView={setView2} />
      </div>

      <div className="bg-stone-50 w-[100vw] py-8 text-gray-500 text-lg font-bold my-3">
        <div className="justify-between flex text-orange-400">
          <span className="relative left-[20vw] max-sm:left-[5vw]">
            Floor Finish
          </span>
          <span className="relative right-[20vw] max-sm:right-[5vw]">
            INR 150
          </span>
        </div>
        <div className="justify-between flex">
          <span className="relative left-[20vw] max-sm:left-[5vw] max-sm:w-[200px]">
            Vitrified tiles (base rate INR 65/-)
          </span>
          <span className="relative right-[20vw] max-sm:right-[5vw]">
            per sqft
          </span>
        </div>
        <Custom view={view3} setView={setView3} />
      </div>
    </div>
  );
};

export default Select;
