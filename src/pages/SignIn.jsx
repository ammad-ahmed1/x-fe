import React, { useState } from "react";
import TextField from "../components/ui/TextField";

const SignIn = () => {
  const [userNameOrEmail, setUserNameOrEmail] = useState("");
  console.log(userNameOrEmail, "...........un");

  return (
    <div>
      <TextField
        fieldState={userNameOrEmail}
        setFieldState={setUserNameOrEmail}
        disabled={false}
        readOnly={false}
        label="Phone, Email or Username"
        // maxChar={50}
        startIcon={<i className="fas fa-user"></i>}
        fullWidth
        size="large"
        className={"w-[250px] border-none outline-none"}
        rounden={false}
      />

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
