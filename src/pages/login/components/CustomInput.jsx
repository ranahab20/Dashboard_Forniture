import React from "react";

function CustomInput({
  label,
  name,
  type = "text",
  value,
  onChange,
  required = false,
  className
}) {
  return (
    <>
      <label>
        {label}

        <input
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          required={required}
          className={className}
        />
      </label>
    </>
  );
}

export default CustomInput;
