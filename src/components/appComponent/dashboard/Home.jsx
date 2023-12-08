import React from "react";
import Sidebar from "./Sidebar";

const Home = () => {
  return (
    <>
      <div className="grid grid-cols-6 gap-10">
        <div className="bg-slate-500 h-12">
          <Sidebar />
        </div>
        <div className="bg-black h-12 col-span-5">

        </div>
      </div>
    </>
  );
};

export default Home;
