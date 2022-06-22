import React from "react";
import Logo from "../../images/logo.svg"

function LoginRegisterForm({ greetings, submitText, spanText, spanButtonText, inputs }) {
  return (
    <section className="login-register">
      <img className="login-register__logo logo" src={Logo} alt="логотип" />
      <h3 className="login-register__greetings">{greetings}</h3>
      <form className="login-register__form">
        {inputs}
        <button type='submit' className="login-register__button">{submitText}</button>
      </form>
      <span className="login-register__span">{spanText} <button className="login-register__bth-enter">{spanButtonText}</button></span>
    </section >
  )
}

export default LoginRegisterForm;