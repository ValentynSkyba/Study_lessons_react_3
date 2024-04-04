import { useState } from "react";
import FormIdLabels from "./components/RegisterFormControled/FormIdLabels";
import RegisterFormControlled from "./components/RegisterFormControled/RegisterFormControled";
import RegisterFormUncontrolled from "./components/RegisterFormUncontrolled/RegisterFormUncontrolled";

const App = () => {
  //генератор інпутів для форми
  const [countOfInputs, setCountOfInputs] = useState(3);

  const handleRegister = (data) => {
    console.log("Fetch register...");
    setTimeout(() => {
      console.log(data);
      console.log("Register is done...");
    }, 3000);
  };

  return (
    <div className="flexCenter formWrapper">
      {/* <RegisterFormUncontrolled onRegister={handleRegister} /> */}
      <button onClick={() => setCountOfInputs((prev) => prev + 1)}>
        {countOfInputs}
      </button>
      <RegisterFormControlled onRegister={handleRegister} />
      <FormIdLabels countOfInputs={countOfInputs} />
    </div>
  );
};

export default App;
