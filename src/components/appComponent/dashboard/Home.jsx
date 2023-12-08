import React from "react";
import Sidebar from "./Sidebar";

const Home = () => {
  return (
    <>
      <div className="grid grid-cols-6 gap-10">
        <div className="bg-inherit">
          <Sidebar />
        </div>
        <div className="bg-inherit col-span-5">

        </div>
      </div>
    </>
  );
};

export default Home;
