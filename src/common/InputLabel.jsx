// InputLabel.jsx
import React from "react";

const InputLabel = ({ htmlFor, label }) => {
  return (
    <label htmlFor={htmlFor} className="mt-10 text-sm font-[600]">
      {label}
    </label>
  );
};

export default InputLabel;
