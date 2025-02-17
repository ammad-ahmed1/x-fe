import React, { useState } from "react";

const TextField = ({
  fieldState,
  setFieldState,
  type,
  placeholder,
  label,
  errorMsg,
  setErrorMsg,
  disabledState,
  readOnlyState,
  validation,
  startIcon,
  endIcon,
  fullWidth,
  size,
  customClass,
  onChange,
  maxChar,
  minChar,
  rounded,
}) => {
  const handleChange = (val) => {
    setFieldState(val);
  };
  return (
    <div>
      {label && label}
      {startIcon && startIcon}
      <input
        type={type}
        placeholder={placeholder}
        disabled={disabledState}
        readOnly={readOnlyState}
        value={fieldState}
        onChange={(e) => handleChange(e.target.value)}
        maxLength={maxChar}
        minLength={minChar}
      />
      {endIcon && endIcon}
      {errorMsg && errorMsg}
    </div>
  );
};

export default TextField;
