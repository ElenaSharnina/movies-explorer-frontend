import React from "react";
import Logo from "../../images/logo.svg"

function Register() {
  return (
    <section className="register">
      <img className="welcome__logo logo" src={Logo} alt="логотип" />
      <h3 className="register__greetings">Добро пожаловать!</h3>
      <form className="register__form">
        <label className="register__text" htmlFor="text-input">Имя</label>
        <input className="register__input"
          type="text" name='name' id="name-input" autoComplete='off' minLength='2' maxLength='40' required />
        <label className="register__text" >E-mail</label>
        <input value="" autoComplete='off'
          className="register__input" type="email" id="email-input" name='email' required />
        <label className="register__text" >Пароль</label>
        <input value=""
          className="register__input" type="password" id="password-input" name='password' minLength='8' required />
        <button type='submit' className="register__button">Зарегистрироваться</button>
      </form>
      <span className="welcome__span">Уже зарегистрированы? <button className="register__button_type_enter">Войти</button></span>


    </section >

  )
}

export default Register;