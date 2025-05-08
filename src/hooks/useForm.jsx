// Handle form values (text inputs, checkboxes, etc.)
// Validate inputs (required, pattern, length, etc.)
// Show errors clearly
// Know when form is submitting, submitted, or failed
// Reset or clear the form
// Allow you to hook into submission (API call, etc.)
import React, { useCallback, useState } from "react";

const useForm = ({
  initialValues,
  validationSchema,
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
  const handleValidate = () => {
    Object.entries(values).forEach(([fieldName, value]) => {
      const validationRegex = validationSchema[fieldName];
      const errorMsg = errorMsgs[fieldName];
      if (fieldName == "user_dob") {
        console.log(value);
      }
      if (validationRegex && validationRegex.test(value)) {
        setErrors((prev) => ({
          ...prev,
          [fieldName]: "",
        }));
      } else {
        setErrors((prev) => ({
          ...prev,
          [fieldName]: errorMsg,
        }));
      }
    });
  };
  const handleSubmit = (e) => {
    e?.preventDefault?.();
    handleValidate();
    onSubmit(values);
  };
  return {
    values,
    errors,
    handleReset,
    handleFieldChange,
    handleValidate,
    handleSubmit,
  };
};

export default useForm;
