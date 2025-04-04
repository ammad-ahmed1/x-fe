import React, { useState } from "react";
import ButtonUI from "../components/ui/ButtonUI";
import TextFieldUI from "../components/ui/TextFieldUI";
import SearchInputUI from "../components/ui/SearchInputUI";
import { LogoSVG } from "../../public/SVGs";

const SignIn = () => {
  const [userNameOrEmail, setUserNameOrEmail] = useState("");

  return (
    <div className="flex justify-around items-center h-screen">
      <div className="flex items-center">
        <LogoSVG />
      </div>
      <div>
        <h1 className="text-6xl font-bold leading-[84px] sm:leading-[64px]">
          Happening now
        </h1>
        <h1 className="text-3xl font-bold leading-[84px] sm:leading-[64px]">
          {" "}
          Join today.
        </h1>
        <div className="flex flex-col gap-4">
          <ButtonUI
            label={"Sign in as Ammad"}
            size="large"
            bgColor={"white"}
            textColor="black"
          />
          <ButtonUI
            label={"Sign in as Ammad"}
            size="large"
            bgColor={"white"}
            textColor="black"
          />
          <ButtonUI
            label={"Create Account"}
            size="large"
            bgColor={"red-500"}
            textColor="white"
          />
        </div>
      </div>
    </div>
  );
};

export default SignIn;
