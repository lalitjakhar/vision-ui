import React from "react";
import Loginpage from "../../../../public/assets/loginpage.png";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";

const Login = () => {
  return (
    <>
      <div className="flex flex-row">
        <div className="relative hidden md:block md:basis-1/2">
          <Image src={Loginpage} alt="" style={{ height: "100vh" }} />
          <div className="absolute top-1/2 left-12 text-center">
            <p className="text-xl tracking-wider font-medium text-white">
              INSPIRED BY THE FUTURE:
            </p>
            <p className="text-5xl font-bold tracking-wider text-white ">
              THE VISION UI DASHBOARD
            </p>
          </div>
        </div>
        <div className="basis-full md:basis-1/2" style={{ height: "100vh" }}>
          <div className="container h-full sm:px-24 md:px-12 lg:px-40">
            <div className="flex justify-between items-center  flex-col h-full py-40">
              <div className="w-full">
                <h2 className="text-3xl font-bold mb-2 text-white">
                  Nice to see you!
                </h2>
                <p className="mb-5 text-white">
                  Enter your email and password to sign in
                </p>
                <div className="grid w-full  items-center gap-1.5 mb-8">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    type="email"
                    id="email"
                    placeholder="Your Email address"
                    className="text-white"
                  />
                </div>
                <div className="grid w-full  items-center gap-1.5 mb-5">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    className="text-white"
                    type="password"
                    id="password"
                    placeholder="Enter Your Password"
                  />
                </div>
                <div className="flex items-center space-x-2 mb-5">
                  <Switch id="remember-me" />
                  <Label htmlFor="remember-me">Remember Me</Label>
                </div>
                <Button className="w-full mb-5">SIGN IN</Button>
                <div className="text-center ">
                  <h2 className="text-white">
                    Don't have an account?{" "}
                    <span className="font-bold">Sign Up</span>
                  </h2>
                </div>
              </div>
                <div className="text-center">
                  <p className="text-white">
                    © 2023, Made with ❤️ by Simmmple & Simmmple for a better web
                  </p>
                  <div className="flex justify-center items-center gap-3 mt-3">
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

export default Login;
