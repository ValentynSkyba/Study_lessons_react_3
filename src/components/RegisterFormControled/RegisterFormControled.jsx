import React, { useId, useState } from "react";

const RegisterFormControlled = ({ onRegister }) => {
  const userNameId = useId();

  //для кожного поля форми
  // const [username, setUsername] = useState("");
  // для бездіч полів, універсальний обробник
  const [formState, setFormState] = useState({
    username: "",
    email: "",
    password: "",
    country: "Ukraine",
    age: 0,
    gender: "male",
    accept: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onRegister(formState);
  };

  //обробних для декліька полів
  //const handleChangeName = (e) => {
  //     setFormState((prev) => ({ ...prev, username: e.target.value }));
  //   };

  //   const handleChangeEmail = (e) => {
  //     setFormState((prev) => ({ ...prev, email: e.target.value }));
  //   };
  //   const handleChangePassword = (e) => {
  //     setFormState((prev) => ({ ...prev, password: e.target.value }));
  //   };

  // обробник для одного поля!!!

  const handleChangeInput = (e) => {
    const { name, value } = e.target;

    //обробних для чекбоксу
    if (name === "accept") {
      return setFormState((prev) => ({ ...prev, accept: !prev.accept }));

      //універсальний обробник для всіх чекбоксів
      //return setFormState((prev) => ({ ...prev, [name]: !prev.[name] }));
    }
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="form">
        <label htmlFor={userNameId} className="label">
          Username
          <input
            id={userNameId}
            value={formState.username}
            onChange={handleChangeInput}
            //для кожного поля форми
            //value={username}
            // onChange={(e) => setUsername(e.target.value)}
            className="input"
            type="text"
            name="username"
          />
        </label>
        <label className="label">
          Email
          <input
            value={formState.email}
            onChange={handleChangeInput}
            className="input"
            type="email"
            name="email"
          />
        </label>
        <label className="label">
          Password
          <input
            value={formState.password}
            onChange={handleChangeInput}
            className="input"
            type="password"
            name="password"
          />
        </label>
        <label htmlFor="country" className="label">
          Country
          <select
            className="input"
            value={formState.country}
            name="country"
            onChange={handleChangeInput}
          >
            <option value="Ukraine">Ukraine</option>
            <option value="UK">UK</option>
            <option value="UK">USA</option>
          </select>
        </label>

        <label className="label">
          Age
          <input
            type="number"
            className="input"
            value={formState.age}
            onChange={handleChangeInput}
            name="age"
          />
        </label>

        <div>
          <label>
            <input
              onChange={handleChangeInput}
              checked={formState.gender === "male"}
              type="radio"
              value="male"
              name="gender"
            />
            Male
          </label>
          <labek>
            <input
              onChange={handleChangeInput}
              checked={formState.gender === "female"}
              type="radio"
              value="female"
              name="gender"
            />
            Female
          </labek>
        </div>
        <label>
          <input
            checked={formState.rules}
            type="checkbox"
            className="input"
            name="accept"
          />
          Accept rules
        </label>

        <button className="btn border">Register</button>
      </form>
    </div>
  );
};

export default RegisterFormControlled;
