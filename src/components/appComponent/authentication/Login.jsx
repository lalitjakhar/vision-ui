import React from "react";
import Loginpage from "../../../../public/assets/loginpage.png";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Button2 } from "@/components/ui/button2";
import Link from "next/link";

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
          <div className="container h-full pl-4 sm:pl-12 md:pl-20 lg:pl-36 pr-4 sm:pr-24 md:pr-12 lg:pr-40 xl:pr-52">
            <div className="flex justify-between items-center flex-col h-full pt-48 pb-32">
              <div className="w-full">
                <h2 className="text-3xl font-bold mb-2 text-white">
                  Nice to see you!
                </h2>
                <p className="mb-5 text-white">
                  Enter your email and password to sign in
                </p>
                <div className="grid w-full items-center gap-1.5 mb-8">
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
                  <Switch />
                  <Label>Remember Me</Label>
                </div>
                <Button2 className="w-full mb-5">SIGN IN</Button2>
                <div className="text-center ">
                  <h2 className="text-white">
                    Don&apos;t have an account?{" "}
                    <Link className="font-bold" href="/signup">
                      Sign Up
                    </Link>
                  </h2>
                </div>
              </div>
              <div className="text-center">
                <p className="text-white">
                  © 2023, Made with &#10084;&#65039; by Simmmple & Simmmple for a better web
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
