import React from "react";
import { NavLink } from "react-router-dom";
import Header from "../Header/Header";

function Profile({ username, useremail }) {

  const [email, setEmail] = React.useState("");
  const [name, setName] = React.useState("");


  function handleChangeEmail(e) {
    setEmail(e.target.value);
  }
  function handleChangeName(e) {
    setName(e.target.value);
  }

  return (
    <>
      <Header loggedIn={true} />
      <section className="profile page__container">
        <div className="profile__container">
          <h3 className="profile__greetings">Привет, {username}!</h3>
          <form className="profile__form">
            <div className="profile__item">
              <label className="profile__lable">Имя</label>
              <input className="profile__input" type="text" name='name' autoComplete='off' minLength='2' maxLength='40' required value={name || username} onChange={handleChangeName} /></div>
            <div className="profile__item">
              <label className="profile__lable">E-mail</label>
              <input className="profile__input" type="email" name='email' autoComplete='off' minLength='2' maxLength='40' required value={email || useremail} onChange={handleChangeEmail} /></div>
            <button
              type="submit"
              className="profile__button profile__button_type_edit"
            >
              Редактировать
            </button>
          </form>
          <NavLink to="/"><button
            type="button"
            className="profile__button profile__button_type_exit"
          >
            Выйти из аккаунта
          </button></NavLink>
        </div >
      </section >
    </>
  );
}

export default Profile;
