import React from "react";
import ButtonUI from "../../ui/ButtonUI";
import DividerUI from "../../ui/DividerUI";
import { AppleSVG, GoogleSVG } from "../../../../public/SVGs";
import TextFieldUI from "../../ui/TextFieldUI";
import useForm from "../../../hooks/useForm";
import { signinErrorMessages, signinSchema } from "../../../utils/validators";
// import { signinSchema, signinErrorMessages } from "../../../utils/validators";

const EmailSignInForm = () => {
  const {
    values,
    errors,
    handleFieldChange,
    handleSubmit,
    handleReset,
    handleValidate,
  } = useForm({
    initialValues: {
      user_email: "",
      user_psw: "",
    },
    validationSchema: signinSchema, //null
    formErrors: {
      user_email: "",
      user_psw: "",
    },
    errorMsgs: signinErrorMessages,
    onSubmit: (values) => {
      console.log("Sign in with:", values);
      handleValidate();
    },
  });

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col w-[270px] md:w-[300px] gap-4">
      <ButtonUI size="x-large" bgColor="white" textColor="black">
        <div className="flex items-center w-full justify-between px-4">
          <GoogleSVG className="w-5 h-5" />
          <span>Sign in with Google</span>
          <div className="w-5 h-5" />
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

      <div className="w-full">
        <DividerUI content={"or"} />
      </div>

      <TextFieldUI
        name="user_email"
        fieldState={values?.user_email}
        onChange={handleFieldChange}
        errorMsg={errors?.user_email}
        type="email"
        disabled={false}
        readOnly={false}
        label="Email"
        startIcon={<i className="fas fa-envelope"></i>}
        fullWidth
        size="xlg"
        className="border-none outline-none"
        rounded={false}
      />

      <TextFieldUI
        name="user_psw"
        fieldState={values?.user_psw}
        onChange={handleFieldChange}
        errorMsg={errors?.user_psw}
        type="password"
        disabled={false}
        readOnly={false}
        label="Password"
        startIcon={<i className="fas fa-lock"></i>}
        fullWidth
        size="xlg"
        className="border-none outline-none"
        rounded={false}
      />

      <ButtonUI label="Next" size="x-large" bgColor="white" textColor="black" />

      <ButtonUI
        label="Create Account"
        size="x-large"
        bgColor="transparent-primary"
        textColor="white"
      />
    </form>
  );
};

export default EmailSignInForm;
