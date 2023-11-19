import React from "react";
import {Link} from 'react-router-dom'

const Home = () => {
  return (
    //arbitary values in tailwind
    <div className="bg-bkg h-[100vh] bg-center bg-no-repeat bg-cover justify-center items-center flex">
      <div className="absolute bottom-[20vh] w-[60vw]  ">
        <span className=" bg-gray-900 text-white text-4xl font-semibold leading-tight pr-2">
          The most <br />
          <span className="text-amber-500">professional </span> <br />
          way to build <br />
          your Home
        </span>
      </div>
      <Link to="/As2/selection" className="absolute bottom-8">
        <button className="bg-amber-500 border-white border rounded-md px-8 p-0.5 text-white ">
          Use Smart Cost Estimatior
        </button>
      </Link>
    </div>
  );
};

export default Home;
