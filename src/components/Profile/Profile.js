import React from "react";
import Header from "../Header/Header";

function Profile({ name, email }) {
  return (
    <>
      <Header loggedIn={true} />
      <section className="profile page__container">
        <div className="profile__container">
          <h3 className="profile__greetings">Привет, {name}!</h3>
          <form className="profile__form">
            <div class="profile__item">
              <label className="profile__lable">Имя</label>
              <input className="profile__input" type="text" name='name' autoComplete='off' minLength='2' maxLength='40' required value={name} /></div>
            <div class="profile__item">
              <label className="profile__lable">E-mail</label>
              <input className="profile__input" type="email" name='email' autoComplete='off' minLength='2' maxLength='40' required value={email} /></div>
            <button
              type="submit"
              className="profile__button profile__button_type_edit"
            >
              Редактировать
            </button>
          </form>
          <button
            type="button"
            className="profile__button profile__button_type_exit"
          >
            Выйти из аккаунта
          </button>
        </div >
      </section >
    </>
  );
}

export default Profile;
