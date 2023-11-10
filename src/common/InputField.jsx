// InputField.jsx

import React, { useState, useId } from "react";
import InputLabel from "./InputLabel";
import { useField } from "formik";

const InputField = ({ label, type, name, placeholder }) => {
  const [isFocused, setIsFocused] = useState(false);
  const id = useId();
  const [, { value, onChange, onBlur }] = useField(name);

  const inputStyle = {
    borderBottom: isFocused ? "2px solid #0AA36E" : "1px solid #ddd",
    background: "#FFF",
    boxShadow: isFocused
      ? "0px 0px 10px 0px rgba(10, 163, 110, 0.50) inset"
      : "none",
    outline: "none",
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
    onBlur(); // onBlur is important for Formik to track field changes
  };

  return (
    <div className="mb-4">
      <InputLabel htmlFor={id} label={label} />
      <input
        id={id}
        style={inputStyle}
        className="border-b w-full px-2 py-1 mt-1 outline-none"
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
    </div>
  );
};

export default InputField;
