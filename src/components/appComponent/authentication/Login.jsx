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
        <div className="relative hidden sm:block basis-1/2">
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
        <div className="basis-1/2" style={{ height: "100vh" }}>
          <div className="flex justify-center items-center h-full">
            <div className="block">
              <h2 className="text-3xl font-bold mb-2 text-white">
                Nice to see you!
              </h2>
              <p className="mb-5 text-white">
                Enter your email and password to sign in
              </p>
              <div className="grid w-full max-w-sm items-center gap-1.5 mb-8">
                <Label htmlFor="email">Email</Label>
                <Input
                  type="email"
                  id="email"
                  placeholder="Email"
                  className="text-white"
                />
              </div>
              <div className="grid w-full max-w-sm items-center gap-1.5 mb-5">
                <Label htmlFor="password">Password</Label>
                <Input
                  className="text-white"
                  type="password"
                  id="password"
                  placeholder="Enter Password"
                />
              </div>
              <div className="flex items-center space-x-2 mb-5">
                <Switch id="airplane-mode" />
                <Label htmlFor="airplane-mode">Remember Me</Label>
              </div>
              <Button className="w-full">SIGN IN</Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
