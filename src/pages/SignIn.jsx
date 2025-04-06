import React, { useState } from "react";
import ButtonUI from "../components/ui/ButtonUI";
import TextFieldUI from "../components/ui/TextFieldUI";
import SearchInputUI from "../components/ui/SearchInputUI";
import { AppleSVG, GoogleSVG, LogoSVG } from "../../public/SVGs";
import DividerUI from "../components/ui/DividerUI";
import AuthFooter from "../components/modules/auth/AuthFooter";
import ModalUI from "../components/ui/ModalUI";
import EmailSignUpForm from "../components/modules/auth/EmailSignUpForm";

const SignIn = () => {
  const [isSignupModalOpen, setIsSignUpModalOpen] = useState(true);
  const [isSigninModalOpen, setIsSigninModalOpen] = useState(false);
  const handleShowSignupModal = () => {
    setIsSignUpModalOpen(!isSignupModalOpen);
  };
  const isLoggedIn = true;
  const user = {
    userName: "Ammad Ahmed",
    email: "ammad@example.com",
    avatar: "A",
    provider: "google",
  };
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
      <ModalUI
        isOpen={isSignupModalOpen}
        onClose={handleShowSignupModal}
        size="large"
        title={"Create your account"}
        footer={
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded"
            onClick={() => console.log("Tweet posted!")}>
            Tweet
          </button>
        }>
        <EmailSignUpForm />
      </ModalUI>
    </>
  );
};

export default SignIn;
