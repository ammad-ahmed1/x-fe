// Handle form values (text inputs, checkboxes, etc.)
// Validate inputs (required, pattern, length, etc.)
// Show errors clearly
// Know when form is submitting, submitted, or failed
// Reset or clear the form
// Allow you to hook into submission (API call, etc.)
import React, { useCallback, useState } from "react";

const useForm = ({ initialValues, validationSchema }) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});

  const handleReset = () => {
    setValues(initialValues);
    setErrors({});
  };
  console.log(values, "........form valsss");
  const handleFieldChange = useCallback(
    (name, val) => {
      console.log("I am called");
      console.log(name, ".....name");
      console.log(val, ".....val");
      setValues((prev) => ({
        ...prev,
        [name]: val, // dynamically update the correct field
      }));

      //  if (validation?.test(val)) {
      //    setIsShowErrorMsg(false);
      //  }
    },
    [setValues]
  );
  const handleValidate = () => {};
  const handleSubmit = () => {};
  return { handleReset, handleFieldChange, handleValidate, handleSubmit };
  return <div></div>;
};

export default useForm;
