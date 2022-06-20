import React from "react";

function Profile({ name, email }) {
  return (
    <section className="profile page__container">
      <div className="profile__container">
        <h3 className="profile__greetings">Привет, {name}!</h3>
        <ul className="profile__list">
          <li className="profile__item">
            <p className="profile__text">Имя</p>
            <p className="profile__text">{name}</p>
          </li>
          <li className="profile__item">
            <p className="profile__text">E-mail</p>
            <p className="profile__text">{email}</p>
          </li>
        </ul>
        <button type="button" className="profile__button profile__button_type_edit">Редактировать</button>
        <button type="button" className="profile__button profile__button_type_exit">Выйти из аккаунта</button>
      </div>
    </section>
  );
}

export default Profile;
