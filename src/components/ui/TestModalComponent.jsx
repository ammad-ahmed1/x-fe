import React, { useState } from "react";
import ButtonUI from "./ButtonUI";
import TextFieldUI from "./TextFieldUI";
import DatePickerUI from "./DatePickerUI";
import useForm from "../../hooks/useForm";
import { signupErrorMessages, signupSchema } from "../../utils/validators";

const TestModalComponent = () => {
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    user_psw: "",
    user_dob: "",
  });

  const [formErrors, setformErrors] = useState({
    user_name: "",
    user_email: "",
    user_psw: "",
    user_dob: "",
  });

  const isLoggedIn = true;
  const user = {
    userName: "Ammad Ahmed",
    email: "ammad@example.com",
    avatar: "A",
    provider: "google",
  };

  const {
    values,
    errors,
    handleFieldChange,
    handleSubmit,
    handleReset,
    handleValidate,
  } = useForm({
    initialValues: formData,
    validationSchema: signupSchema,
    formErrors: formErrors,
    errorMsgs: signupErrorMessages,
    onSubmit: (values) => {
      // console.log(values);
      handleValidate();
    },
  });
  console.log(errors, ".......err");
  // console.log(values, ".......vals");
  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col w-[270px] md:w-[450px] gap-4">
        <ButtonUI
          size="x-large"
          bgColor="white"
          textColor="black"
          // handleClick={handleClick}
        >
          <div className="flex items-center  justify-between w-full px-4">
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
                {/* <GoogleSVG className="w-5 h-5" /> */}
              </>
            ) : (
              <>
                {/* <GoogleSVG className="w-5 h-5" /> */}
                <span>Sign up with Google</span>
                <div className="w-5 h-5" />
              </>
            )}
          </div>
        </ButtonUI>
        <ButtonUI
          label={
            <span className="flex items-center justify-center gap-2">
              {/* <AppleSVG className="w-5 h-5" /> */}
              Sign in with Apple
            </span>
          }
          size="x-large"
          bgColor="white"
          textColor="black"
        />
        <div className="w-[250px] lg:w-[300px]">
          {/* <DividerUI content={"or"} /> */}
        </div>
        <div className="flex flex-col w-[250px] lg:w-[300px] gap-4">
          <TextFieldUI
            name="user_name"
            state={formData}
            fieldState={values?.user_name}
            onChange={handleFieldChange}
            errorMsg={errors?.user_name}
            // validation={signupSchema?.user_email}
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
            name="user_email"
            fieldState={values?.user_email}
            errorMsg={errors?.user_email}
            // validation={signupSchema?.user_email}
            onChange={handleFieldChange}
            disabled={false}
            readOnly={false}
            label="Email"
            startIcon={<i className="fas fa-user"></i>}
            fullWidth
            size="xlg"
            className={" border-none outline-none"}
            rounded={false}
          />
          <TextFieldUI
            name="user_psw"
            fieldState={values?.user_psw}
            errorMsg={errors?.user_psw}
            onChange={handleFieldChange}
            disabled={false}
            readOnly={false}
            label="Password"
            startIcon={<i className="fas fa-user"></i>}
            fullWidth
            size="xlg"
            className={" border-none outline-none"}
            rounded={false}
          />
          <DatePickerUI
            name="user_dob"
            dateState={values?.user_dob}
            setDateState={setFormData}
            onChange={handleFieldChange}
            dateFormat={"mm/dd/yyyy"}
            errorMsg={errors?.user_dob}
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
      </form>
    </>
  );
};

export default TestModalComponent;
