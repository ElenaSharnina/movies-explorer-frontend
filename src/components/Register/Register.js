import React from "react";
import LoginRegisterForm from "../LoginRegisterForm/LoginRegisterForm";

function Register() {

  const [email, setEmail] = React.useState("");
  const [name, setName] = React.useState("");
  const [password, setPassword] = React.useState("");

  function handleChangeEmail(e) {
    setEmail(e.target.value);
  }
  function handleChangeName(e) {
    setName(e.target.value);
  }
  function handleChangePassword(e) {
    setPassword(e.target.value);
  }

  return (
    <LoginRegisterForm
      greetings={"Добро пожаловать!"}
      submitText={"Зарегистрироваться"}
      isInRigister={true}
      inputs={
        <>
          <label className="register__label" htmlFor="text-input">
            Имя
          </label>
          <input
            className="register__input"
            type="text"
            name="name"
            id="name-input"
            autoComplete="off"
            minLength="2"
            maxLength="40"
            required
            value={name || ""}
            onChange={handleChangeName}
          />
          <label className="register__label">E-mail</label>
          <input
            autoComplete="off"
            className="register__input"
            type="email"
            id="email-input"
            name="email"
            required
            value={email || ""}
            onChange={handleChangeEmail}
          />
          <label className="register__label">Пароль</label>
          <input
            className="register__input"
            type="password"
            name="password"
            minLength="8"
            required
            value={password || ""}
            onChange={handleChangePassword}
          />
        </>
      }
    />
  );
}

export default Register;
