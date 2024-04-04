import { useId } from "react";

const CustomInput = () => {
  const id = useId();
  return (
    <div>
      <label htmlFor={id}>Item</label>
      <input id={id} type="text" />
    </div>
  );
};

export default CustomInput;
