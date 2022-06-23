import React from "react";
import LoginRegisterForm from "../LoginRegisterForm/LoginRegisterForm";

function Login() {
  return (
    <LoginRegisterForm greetings={'Рады видеть!'} submitText={'Войти'} isInRigister={false}
      inputs={<>
        <label className="login__label">Имя</label>
        <input className="login__input"
          type="text" name='name' id="name-input" autoComplete='off' minLength='2' maxLength='40' required />
        <label className="login__label" >E-mail</label>
        <input value="" autoComplete='off'
          className="login__input" type="email" id="email-input" name='email' required />
      </>} />
  )
}

export default Login;