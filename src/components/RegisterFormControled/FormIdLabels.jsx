import React from "react";
import CustomInput from "./CustomInput";

const FormIdLabels = ({ countOfInputs }) => {
  return (
    <form className="form">
      {Array(countOfInputs)
        .fill("")
        .map((_, index) => (
          <CustomInput key={index} />
        ))}
    </form>
  );
};

export default FormIdLabels;
