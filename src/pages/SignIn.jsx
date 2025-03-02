import React, { useState } from "react";
import ButtonUI from "../components/ui/ButtonUI";
import TextFieldUI from "../components/ui/TextFieldUI";
import SearchInputUI from "../components/ui/SearchInputUI";

const SignIn = () => {
  const [userNameOrEmail, setUserNameOrEmail] = useState("");

  return (
    <div className="flex flex-col justify-center gap-4 ml-8">
      <TextFieldUI
        fieldState={userNameOrEmail}
        setFieldState={setUserNameOrEmail}
        disabled={false}
        readOnly={false}
        label="Phone, Email or Username"
        // maxChar={50}
        startIcon={<i className="fas fa-user"></i>}
        fullWidth
        size="md"
        className={"w-[250px] border-none outline-none"}
        rounded={false}
      />
      {/* <ButtonUI label={"Hello"} size="small" /> */}
      <SearchInputUI />
      {/* <div
        tabindex="0"
        class="p-4 border border-gray-300 rounded-lg  focus:shadow-lg focus:outline-none">
        This is a focusable div. Click or tab to focus.
      </div>

      <div
        tabindex="0"
        class="p-4 border border-gray-300 rounded-lg focus:border-blue-500 focus:bg-blue-100 focus:shadow-lg focus:outline-none">
        This is a focusable div. Click or tab to focus.
      </div>
      <div
        tabindex="0"
        class="p-4 border border-gray-300 rounded-lg focus:border-blue-500 focus:bg-blue-100 focus:shadow-lg focus:outline-none">
        This is a focusable div. Click or tab to focus.
      </div> */}
    </div>
  );
};

export default SignIn;
