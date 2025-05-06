// Handle form values (text inputs, checkboxes, etc.)
// Validate inputs (required, pattern, length, etc.)
// Show errors clearly
// Know when form is submitting, submitted, or failed
// Reset or clear the form
// Allow you to hook into submission (API call, etc.)
import React, { useCallback, useState } from "react";
import { signupErrorMessages } from "../utils/validators";

const useForm = ({
  initialValues,
  validationSchema,
  validationErrors,
  errorMsgs,
  formErrors,
  onSubmit,
}) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState(formErrors);

  const handleReset = () => {
    setValues(initialValues);
    setErrors({});
  };
  const handleFieldChange = useCallback(
    (name, val, validation) => {
      setValues((prev) => ({
        ...prev,
        [name]: val,
      }));

      const validationRegex = validationSchema?.[name];
      const errorMsg = errorMsgs?.[name];

      if (validationRegex && !validationRegex.test(val)) {
        setErrors((prev) => ({
          ...prev,
          [name]: errorMsg,
        }));
      } else {
        setErrors((prev) => ({
          ...prev,
          [name]: "",
        }));
      }
    },
    [setValues, validationSchema, errors]
  );
  // console.log(errors, "....err state");
  const handleValidate = () => {};
  const handleSubmit = (e) => {
    e?.preventDefault?.();
    onSubmit(values);
  };
  return { handleReset, handleFieldChange, handleValidate, handleSubmit };
  return <div></div>;
};

export default useForm;
