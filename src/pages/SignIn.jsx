import React, { useState } from "react";
import ButtonUI from "../components/ui/ButtonUI";
import TextFieldUI from "../components/ui/TextFieldUI";
import SearchInputUI from "../components/ui/SearchInputUI";
import { LogoSVG } from "../../public/SVGs";
import DividerUI from "../components/ui/DividerUI";
import AuthFooter from "../components/modules/auth/AuthFooter";

const SignIn = () => {
  const [userNameOrEmail, setUserNameOrEmail] = useState("");

  return (
    <>
      <div className="min-h-screen w-[100%] flex flex-col  lg:flex-row">
        <div className="hidden lg:flex items-center h-screen w-[55%] justify-center">
          <LogoSVG />
        </div>
        <div className="flex flex-col w-[100%] justify-center lg:justify-start px-4 lg:px-0 lg:items-start lg:w-[45%]">
          <div className="block lg:hidden mt-8">
            <LogoSVG width={50} height={50} />
          </div>
          <h1
            className="text-gray-200 
               text-4xl sm:text-5xl md:text-6xl 
               font-black 
               leading-[48px] sm:leading-[64px] md:leading-[84px]
               mt-12 sm:mt-16 md:mt-20">
            Happening now
          </h1>
          <h1 className="text-gray-200 text-2xl sm:text-3xl lg:text-4xl font-[900] leading-[84px] sm:leading-[64px] my-4 ld:my-12">
            Join today.
          </h1>
          <div className="flex flex-col w-full justify-center lg:justify-start items-center lg:items-start  gap-2">
            <ButtonUI
              label={"Sign in as Ammad"}
              size="x-large"
              bgColor={"white"}
              textColor="black"
            />
            <ButtonUI
              label={"Sign in as Ammad"}
              size="x-large"
              bgColor={"white"}
              textColor="black"
            />
            <div className="w-[250px] lg:w-[300px]">
              <DividerUI content={"or"} />
            </div>
            <ButtonUI
              label={"Create Account"}
              size="x-large"
              bgColor={"primary"}
              textColor="white"
            />
            <p className="w-[250px] lg:w-[300px] break-words text-xs text-gray-600">
              By signing up, you agree to the{" "}
              <a
                href="/terms"
                className="text-blue-600 no-underline hover:underline">
                Terms of Service
              </a>{" "}
              and{" "}
              <a
                href="/privacy"
                className="text-blue-600 no-underline hover:underline">
                Privacy Policy
              </a>
              , including{" "}
              <a
                href="/cookies"
                className="text-blue-600 no-underline hover:underline">
                Cookie Use
              </a>
              .
            </p>
            <div className="my-6">
              <h1 className="text-gray-200 text-md font-[900]">
                Already have an account?
              </h1>
              <div className="my-4">
                <ButtonUI
                  label={"Create Account"}
                  size="x-large"
                  bgColor={"transparent-primary"}
                  textColor="white"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <AuthFooter />
    </>
  );
};

export default SignIn;
