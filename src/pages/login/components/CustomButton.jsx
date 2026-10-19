import React from "react";

const CustomButton = ({ children, type = "button", loading = false }) => {
  return (
    <>
      <button type={type} disabled={loading}>
        {loading ? "Loading..." : children}
      </button>
    </>
  );
};

export default CustomButton;
