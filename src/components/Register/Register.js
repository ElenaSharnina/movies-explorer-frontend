import React from "react";
import LoginRegisterForm from "../LoginRegisterForm/LoginRegisterForm";

function Register() {
  return (
    <LoginRegisterForm greetings={'Добро пожаловать!'} submitText={'Зарегистрироваться'} spanText={'Уже зарегистрированы?'} spanButtonText={'Войти'}
      inputs={<>
        <label className="register__label" htmlFor="text-input">Имя</label>
        <input className="register__input"
          type="text" name='name' id="name-input" autoComplete='off' minLength='2' maxLength='40' required />
        <label className="register__label" >E-mail</label>
        <input value="" autoComplete='off'
          className="register__input" type="email" id="email-input" name='email' required />
        <label className="register__label" >Пароль</label>
        <input value=""
          className="register__input" type="password" name='password' minLength='8' required />
      </>} />
  )
}

export default Register;