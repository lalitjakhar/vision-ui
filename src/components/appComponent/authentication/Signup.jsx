import React from "react";
import Loginpage from "../../../../public/assets/loginpage.png";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import AppleIcon from "@mui/icons-material/Apple";
import GoogleIcon from "@mui/icons-material/Google";

const Signup = () => {
  return (
    <>
      <div className="flex flex-row">
        <div className="relative hidden md:block md:basis-1/2">
          <Image src={Loginpage} alt="" style={{ height: "100%" }} />
          <div className="absolute top-1/2 left-12 text-center">
            <p className="text-xl tracking-wider font-medium text-white">
              INSPIRED BY THE FUTURE:
            </p>
            <p className="text-5xl font-bold tracking-wider text-white ">
              THE VISION UI DASHBOARD
            </p>
          </div>
        </div>
        <div className="basis-full md:basis-1/2" style={{ height: "100%" }}>
          <div className="container h-full pl-4 sm:pl-12 md:pl-20 lg:pl-36 pr-4 sm:pr-24 md:pr-12 lg:pr-40 xl:pr-52">
            <div className="flex justify-between items-center  flex-col h-full py-16 md:py-36">
              <div className="w-full">
                <div className="flex justify-center flex-col text-center">
                  <h2 className="text-4xl font-bold text-white">Welcome!</h2>
                  <p className="text-white text-base  w-full md:w-3/4 text-center">
                    Use these awesome forms to login or create new account in
                    your project for free.
                  </p>
                </div>
                <div
                  className="text-center my-7 p-8"
                  style={{ backgroundColor: "#131538", borderRadius: "20px" }}
                >
                  <h4 className="text-2xl font-bold text-gray-400">
                    Register With
                  </h4>
                  <div className="flex justify-center gap-4 my-4">
                    <div
                      className="flex items-center justify-center"
                      style={{
                        width: "71px",
                        height: "71px",
                        borderRadius: "15px",
                        border: "2px solid gray",
                      }}
                    >
                      <FacebookRoundedIcon
                        sx={{ width: "30px", height: "30px", color: "white" }}
                      />
                    </div>
                    <div
                      className="flex items-center justify-center"
                      style={{
                        width: "71px",
                        height: "71px",
                        borderRadius: "15px",
                        border: "2px solid gray",
                      }}
                    >
                      <AppleIcon
                        sx={{ width: "30px", height: "30px", color: "white" }}
                      />
                    </div>
                    <div
                      className="flex items-center justify-center"
                      style={{
                        width: "71px",
                        height: "71px",
                        borderRadius: "15px",
                        border: "2px solid gray",
                      }}
                    >
                      <GoogleIcon
                        sx={{ width: "30px", height: "30px", color: "white" }}
                      />
                    </div>
                  </div>
                  <p className="text-2xl font-semibold text-gray-400 mb-6">
                    or
                  </p>
                  <div className="text-start">
                    <div className="grid w-full gap-2 mb-8">
                      <Label htmlFor="email">Name</Label>
                      <Input
                        type="name"
                        id="name"
                        placeholder="Your Name"
                        className="text-white"
                      />
                    </div>
                    <div className="grid w-full gap-2 mb-8">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        type="email"
                        id="email"
                        placeholder="Your Email address"
                        className="text-white"
                      />
                    </div>
                    <div className="grid w-full items-center gap-2 mb-6">
                      <Label htmlFor="password">Password</Label>
                      <Input
                        className="text-white"
                        type="password"
                        id="password"
                        placeholder="Enter Your Password"
                      />
                    </div>
                    <div className="flex items-center space-x-2 mb-8">
                      <Switch id="remember-me" defaultChecked />
                      <Label htmlFor="remember-me">Remember Me</Label>
                    </div>
                    <Button className="w-full mb-5">SIGN UP</Button>
                    <div className="text-center ">
                      <h2 className="text-gray-400">
                        Already have an account?{" "}
                        <Link className="font-bold text-white" href="/login">
                          Sign In
                        </Link>
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-center text-sm">
                <p className="text-white">
                  © 2023, Made with ❤️ by Simmmple & Simmmple for a better web
                </p>
                <div className="flex justify-center items-center gap-3 mt-2">
                  <a className="text-white" href="">
                    Simmmple
                  </a>
                  <a className="text-white" href="">
                    Simmmple
                  </a>
                  <a className="text-white" href="">
                    Blog
                  </a>
                  <a className="text-white" href="">
                    License
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
