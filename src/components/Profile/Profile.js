import React from "react";
import { NavLink } from "react-router-dom";
import { CurrentUserContext } from '../../context/CurrentUserContext';
import Header from "../Header/Header";


function Profile({ onExit, onSubmit }) {

  const currentUser = React.useContext(CurrentUserContext);
  const [email, setEmail] = React.useState("");
  const [name, setName] = React.useState("");
  const [isValidEmail, setValidityEmail] = React.useState(false);
  const [errorEmail, setErrorEmail] = React.useState('');
  const [isValidName, setValidityName] = React.useState(false);
  const [errorName, setErrorName] = React.useState('');

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
  React.useEffect(() => {
    setName(currentUser.name);
    setEmail(currentUser.email);
  }, [currentUser]);


  function handleSubmit(e) {
    e.preventDefault();

    onSubmit({
      name,
      email,
    });
  }
  return (
    <>
      <Header loggedIn={true} />
      <section className="profile page__container">
        <div className="profile__container">
          <h3 className="profile__greetings">Привет, {name}!</h3>
          <form className="profile__form" onSubmit={handleSubmit}>
            <div className="profile__item">
              <label className="profile__lable">Имя</label>
              <input
                className="profile__input"
                type="text"
                name="name"
                autoComplete="off"
                minLength="2"
                maxLength="40"
                required
                value={name || ''}
                onChange={handleInputNameChange}
              />
              <span className="error error_place_profile">{errorName}</span>
            </div>

            <div className="profile__item">
              <label className="profile__lable">E-mail</label>
              <input
                className="profile__input"
                type="email"
                name="email"
                autoComplete="off"
                required
                value={email || ''}
                onChange={handleInputEmailChange}
              />
              <span className="error error_place_profile">{errorEmail}</span>
            </div>

            <button
              disabled={!isValidEmail && !isValidName}
              type="submit"
              className="profile__button profile__button_type_edit"
            >
              Редактировать
            </button>
          </form>
          <NavLink to="/">
            <button
              onClick={onExit}
              type="button"
              className="profile__button profile__button_type_exit"
            >
              Выйти из аккаунта
            </button>
          </NavLink>
        </div>
      </section>

    </>
  );
}

export default Profile;
