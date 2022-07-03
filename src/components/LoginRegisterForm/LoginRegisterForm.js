import { PROPERTY_TYPES } from "@babel/types";
import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../images/logo.svg";

function LoginRegisterForm({ greetings, submitText, inputs, isInRigister, onSubmit }) {
  return (
    <section className="login-register">
      <NavLink to="/">
        <img className="login-register__logo logo" src={Logo} alt="логотип" />
      </NavLink>
      <h3 className="login-register__greetings">{greetings}</h3>
      <form className="login-register__form" onSubmit={onSubmit}>
        <div className="login-register__fields">{inputs}</div>
        <button type="submit" className="login-register__button">
          {submitText}
        </button>
      </form>
      {isInRigister ? (
        <span className="login-register__span">
          Уже зарегистрированы?
          <NavLink to="/signin">
            <button className="login-register__bth-enter">Войти</button>
          </NavLink>
        </span>
      ) : (
        <span className="login-register__span">
          Еще не зарегистрированы{" "}
          <NavLink to="/signup">
            <button className="login-register__bth-enter">Регистрация</button>
          </NavLink>
        </span>
      )}
    </section>
  );
}

export default LoginRegisterForm;
