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
      <div className="flex flex-col w-full justify-center lg:justify-start items-center lg:items-start  gap-2">
        <ButtonUI
          size="x-large"
          bgColor="white"
          textColor="black"
          // handleClick={handleClick}
        >
          <div className="flex items-center justify-between w-full px-4">
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
        <div className="flex flex-col gap-4">
          <TextFieldUI
            fieldState={email}
            setFieldState={setEmail}
            disabled={false}
            readOnly={false}
            label="Email"
            // maxChar={50}
            startIcon={<i className="fas fa-user"></i>}
            fullWidth
            size="md"
            className={" border-none outline-none"}
            rounded={false}
          />
          <TextFieldUI
            fieldState={password}
            setFieldState={setPassword}
            disabled={false}
            readOnly={false}
            label="Email"
            // maxChar={50}
            startIcon={<i className="fas fa-user"></i>}
            fullWidth
            size="md"
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
    </>
  );
};

export default EmailSignInForm;
