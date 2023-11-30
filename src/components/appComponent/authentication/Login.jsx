import React from "react";
import Loginpage from "../../../../public/assets/loginpage.png";
import Image from "next/image";

const Login = () => {
  return (
    <>
      <div className="flex flex-row">
        <div className="basis-1/2">
          <Image
            src={Loginpage}
            alt=""
            style={{ height: "100vh"}}
          />
        </div>
        <div className="basis-1/2">02</div>
      </div>
    </>
  );
};

export default Login;
