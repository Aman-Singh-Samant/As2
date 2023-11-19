import React, { useState, useEffect } from "react";

const Custom = ({ view, setView }) => {
  const [info, setInfo] = useState();
  useEffect(() => {
    try {
      fetch("https://v2.jokeapi.dev/joke/Any?type=single&amount=4")
        .then((res) => res.json())
        .then((data) => setInfo(data.jokes));
    } catch (error) {
      console.log(error);
    }
  }, []);

  const Display = info?.map((i) => {
    return (
      <div
        className="bg-gradient-to-r
        from-stone-50 via-stone-100 to-stone-50
        hover:from-amber-50 hover:via-amber-100 
        hover:to-amber-50 text-[1rem] font-normal 
        justify-center m-auto p-1 w-[15vw] max-sm:w-[80vw] max-sm:m-2
        hover:shadow-[0_10px_20px_rgba(255,193,150,0.9)]
        shadow-[0_10px_20px_rgba(231,229,228,0.9)]
        rounded-xl text-wrap"
        key={i.id}
      >
        {i.joke}
      </div>
    );
  });

  const handleOnClick = (e) => {
    setView(!view);
    console.log("a", info);
  };
  return (
    <div className="flex-col">
      <div className="my-5 max-sm:flex-col max-sm:w-[80vw] flex w-[70vw] m-auto justify-center">
        {view ? Display : ""}
      </div>

      <button
        onClick={handleOnClick}
        className="bg-stone-50 rounded-2xl border-solid border px-5 py-1.5 border-orange-400 text-lg font-normal text-stone-500 absolute left-[48%] max-sm:left-[10%]" 
      >
        {!view ? "Customise" : "Collapse"}
      </button>
    </div>
  );
};

export default Custom;
