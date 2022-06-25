import React from "react";
import LoginRegisterForm from "../LoginRegisterForm/LoginRegisterForm";

function Login() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  function handleChangeEmail(e) {
    setEmail(e.target.value);
  }

  function handleChangePassword(e) {
    setPassword(e.target.value);
  }

  return (
    <LoginRegisterForm
      greetings={"Рады видеть!"}
      submitText={"Войти"}
      isInRigister={false}
      inputs={
        <>
          <label className="login__label">E-mail</label>
          <input
            autoComplete="off"
            className="login__input"
            type="email"
            id="email-input"
            name="email"
            required
            value={email || ""}
            onChange={handleChangeEmail}
          />
          <label className="login__label">Пароль</label>
          <input
            className="login__input"
            type="password"
            name="password"
            minLength="8"
            required
            value={password || ""}
            onChange={handleChangePassword}
          />
        </>
      }
    />
  );
}

export default Login;
