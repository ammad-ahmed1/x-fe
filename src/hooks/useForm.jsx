// Handle form values (text inputs, checkboxes, etc.)
// Validate inputs (required, pattern, length, etc.)
// Show errors clearly
// Know when form is submitting, submitted, or failed
// Reset or clear the form
// Allow you to hook into submission (API call, etc.)
import React, { useCallback, useState } from "react";

const useForm = ({ initialValues, validationSchema, onSubmit }) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});

  const handleReset = () => {
    setValues(initialValues);
    setErrors({});
  };
  const handleFieldChange = useCallback(
    (name, val) => {
      setValues((prev) => ({
        ...prev,
        [name]: val,
      }));

      //  if (validation?.test(val)) {
      //    setIsShowErrorMsg(false);
      //  }
    },
    [setValues]
  );
  const handleValidate = () => {};
  const handleSubmit = (e) => {
    e?.preventDefault?.();
    onSubmit(values);
  };
  return { handleReset, handleFieldChange, handleValidate, handleSubmit };
  return <div></div>;
};

export default useForm;
