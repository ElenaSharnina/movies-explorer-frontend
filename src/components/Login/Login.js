import React from "react";
import LoginRegisterForm from "../LoginRegisterForm/LoginRegisterForm";
import { useState } from "react";

function Login({ onLogin }) {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [isValidEmail, setValidityEmail] = useState(false);
  const [errorEmail, setErrorEmail] = useState("");
  const [isValidPass, setValidityPass] = useState(false);
  const [errorPass, setErrorPass] = useState("");

  // валидация
  const handleInputEmailChange = (event) => {
    const input = event.target;
    setEmail(input.value);
    setValidityEmail(input.validity.valid);
    if (!isValidEmail) {
      setErrorEmail(input.validationMessage);
    } else {
      setErrorEmail("");
    }
  };
  const handleInputPassChange = (event) => {
    const input = event.target;
    setPassword(input.value);
    setValidityPass(input.validity.valid);
    if (!isValidPass) {
      setErrorPass(input.validationMessage);
    } else {
      setErrorPass("");
    }
  };
  // сабмит формы входа
  function handleSubmit(e) {
    e.preventDefault();
    onLogin({ email, password });
  }

  return (
    <LoginRegisterForm
      greetings={"Рады видеть!"}
      submitText={"Войти"}
      isInRigister={false}
      onSubmit={handleSubmit}
      isValid={isValidEmail && isValidPass}
      inputs={
        <>
          <label className="login__label">E-mail</label>
          <input
            autoComplete="off"
            className="login__input"
            type="email"
            pattern='^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$'
            id="email-input"
            name="email"
            required
            value={email || ""}
            onChange={handleInputEmailChange}
          />
          <span className="error">{errorEmail}</span>
          <label className="login__label">Пароль</label>
          <input
            className="login__input"
            type="password"
            name="password"
            minLength="8"
            required
            value={password || ""}
            onChange={handleInputPassChange}
          />
          <span className="error">{errorPass}</span>
        </>
      }
    />
  );
}

export default Login;
