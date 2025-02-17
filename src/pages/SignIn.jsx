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
        // onChange={handleChange}
        placeholder="Enter your email or username"
        label="Username or Email"
        maxChar={50}
        startIcon={<i className="fas fa-user"></i>}
        fullWidth
        size="large"
        rounden={false}
      />
      ;
    </div>
  );
};

export default SignIn;
