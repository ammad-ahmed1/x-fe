import React, { useState } from "react";
import TextFieldUI from "../../ui/TextFieldUI";
import ModalUI from "../../ui/ModalUI";
import ButtonUI from "../../ui/ButtonUI";
import DatePickerUI from "../../ui/DatePickerUI";
import MobileDateInputUI from "../../ui/MobileDateInputUI";
import useForm from "../../../hooks/useForm";
import { signupSchema, signupErrorMessages } from "../../../utils/validators";

const EmailSignUpForm = () => {
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
      console.log("Form submitted", values);
      handleValidate();
    },
  });

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col w-[270px] md:w-[465px] gap-4">
      <TextFieldUI
        name="user_name"
        fieldState={values?.user_name}
        onChange={handleFieldChange}
        errorMsg={errors?.user_name}
        disabled={false}
        readOnly={false}
        label="Name"
        startIcon={<i className="fas fa-user"></i>}
        fullWidth
        size="xlg"
        className="border-none outline-none"
        rounded={false}
      />

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

      <div className="mt-4 max-w-[400px]" role="note">
        <h3 className="text-gray-200 text-[15px] font-bold" id="dob-disclaimer">
          Date of birth
        </h3>
        <p className="text-gray-500 text-[13px] mt-1">
          This will not be shown publicly. Confirm your own age, even if this
          account is for a business, a pet, or something else.
        </p>
      </div>

      <span className="hidden md:block">
        <DatePickerUI
          name="user_dob"
          dateState={values?.user_dob}
          setDateState={setFormData}
          onChange={handleFieldChange}
          dateFormat="mm/dd/yyyy"
          errorMsg={errors?.user_dob}
        />
      </span>

      <span className="block md:hidden">
        <MobileDateInputUI />
      </span>

      <div className="my-8 mx-auto flex justify-center">
        <ButtonUI
          label="Next"
          bgColor="gray"
          textColor="black"
          externalClass="h-[50px] w-[270px] md:w-[450px] bg-gray-500 text-black"
        />
      </div>
    </form>
  );
};

export default EmailSignUpForm;
