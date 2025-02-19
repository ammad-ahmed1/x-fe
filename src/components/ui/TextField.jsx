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
    <div
      className="relative w-fit h-fit py-2 border border-[rgb(51,54,57)]"
      onFocus={() => console.log("focused")}>
      {label && label}
      {startIcon && startIcon}
      <input
        className={`absolute left-1 ${customClass} mt-4`}
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
