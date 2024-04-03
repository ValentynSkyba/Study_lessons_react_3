import RegisterFormControlled from "./components/RegisterFormControled/RegisterFormControled";
import RegisterFormUncontrolled from "./components/RegisterFormUncontrolled/RegisterFormUncontrolled";

const App = () => {
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
      <RegisterFormControlled onRegister={handleRegister} />
    </div>
  );
};

export default App;
