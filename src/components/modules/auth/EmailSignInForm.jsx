import React, { useState } from "react";
import ButtonUI from "../../ui/ButtonUI";
import DividerUI from "../../ui/DividerUI";
import { useSelector } from "react-redux";
import { AppleSVG, GoogleSVG } from "../../../../public/SVGs";
import TextFieldUI from "../../ui/TextFieldUI";

const EmailSignInForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const isLoggedIn = true;
  const user = {
    userName: "Ammad Ahmed",
    email: "ammad@example.com",
    avatar: "A",
    provider: "google",
  };
  return (
    <>
      <div className="flex flex-col w-[270px] md:w-[465px] gap-4">
        <ButtonUI
          size="x-large"
          bgColor="white"
          textColor="black"
          // handleClick={handleClick}
        >
          <div className="flex items-center w-[270px] md:w-[300px] justify-between w-full px-4">
            {isLoggedIn ? (
              <>
                <div className="flex items-center">
                  <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center mr-2">
                    <span className="text-white text-xs font-bold">
                      {user?.avatar}
                    </span>
                  </div>
                  <span>Sign in as {user?.userName.split(" ")[0]}</span>
                </div>
                <GoogleSVG className="w-5 h-5" />
              </>
            ) : (
              <>
                <GoogleSVG className="w-5 h-5" />
                <span>Sign up with Google</span>
                <div className="w-5 h-5" />
              </>
            )}
          </div>
        </ButtonUI>
        <ButtonUI
          label={
            <span className="flex items-center justify-center gap-2">
              <AppleSVG className="w-5 h-5" />
              Sign in with Apple
            </span>
          }
          size="x-large"
          bgColor="white"
          textColor="black"
        />
        <div className="w-[250px] lg:w-[300px]">
          <DividerUI content={"or"} />
        </div>
        <div className="flex flex-col w-[250px] lg:w-[300px] gap-4">
          <TextFieldUI
            fieldState={email}
            setFieldState={setEmail}
            disabled={false}
            readOnly={false}
            label="Name"
            // maxChar={50}
            startIcon={<i className="fas fa-user"></i>}
            fullWidth
            size="xlg"
            className={" border-none outline-none"}
            rounded={false}
          />
          <TextFieldUI
            fieldState={email}
            setFieldState={setEmail}
            disabled={false}
            readOnly={false}
            label="Email"
            // maxChar={50}
            startIcon={<i className="fas fa-user"></i>}
            fullWidth
            size="xlg"
            className={" border-none outline-none"}
            rounded={false}
          />
        </div>
        <ButtonUI
          label={"Next"}
          size="x-large"
          bgColor={"white"}
          textColor="black"
        />
        <ButtonUI
          label={"Create Account"}
          size="x-large"
          bgColor={"transparent-primary"}
          textColor="white"
        />
      </div>
    </>
  );
};

export default EmailSignInForm;
