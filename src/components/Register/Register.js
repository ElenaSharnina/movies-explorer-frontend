import React from "react";
import { useState } from 'react';
import LoginRegisterForm from "../LoginRegisterForm/LoginRegisterForm";

function Register({ onRegister }) {

  const [email, setEmail] = React.useState("");
  const [name, setName] = React.useState("");
  const [password, setPassword] = React.useState("");

  const [isValidEmail, setValidityEmail] = useState(false);
  const [errorEmail, setErrorEmail] = useState('');
  const [isValidName, setValidityName] = useState(false);
  const [errorName, setErrorName] = useState('');
  const [isValidPass, setValidityPass] = useState(false);
  const [errorPass, setErrorPass] = useState('');

  const handleInputEmailChange = (event) => {
    const input = event.target;
    setEmail(input.value);
    setValidityEmail(input.validity.valid);
    if (!isValidEmail) {
      setErrorEmail(input.validationMessage);
    }
    else {
      setErrorEmail('');
    }
  }
  const handleInputNameChange = (event) => {
    const input = event.target;
    setName(input.value);
    setValidityName(input.validity.valid);
    if (!isValidName) {
      setErrorName(input.validationMessage);
    } else {
      setErrorName('');
    }
  }
  const handleInputPassChange = (event) => {
    const input = event.target;
    setPassword(input.value);
    setValidityPass(input.validity.valid);
    if (!isValidPass) {
      setErrorPass(input.validationMessage);
    } else {
      setErrorPass('');
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    onRegister({ name, email, password });
  }

  return (
    <LoginRegisterForm
      greetings={"Добро пожаловать!"}
      submitText={"Зарегистрироваться"}
      isInRigister={true}
      onSubmit={handleSubmit}
      isValid={isValidEmail && isValidName && isValidPass}
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
            pattern="^[a-zA-Zа-яА-ЯЁё -]+$"
            required
            value={name || ""}
            onChange={handleInputNameChange}
          />
          <span className="error">{errorName}</span>
          <label className="register__label">E-mail</label>
          <input
            autoComplete="off"
            className="register__input"
            type="email"
            id="email-input"
            name="email"
            required
            value={email || ""}
            onChange={handleInputEmailChange}
          />
          <span className="error">{errorEmail}</span>
          <label className="register__label">Пароль</label>
          <input
            className="register__input"
            type="password"
            name="password"
            minLength="8"
            required
            value={password || ""}
            onChange={handleInputPassChange}
          /><span className="error">{errorPass}</span>
        </>
      }
    />
  );
}

export default Register;
