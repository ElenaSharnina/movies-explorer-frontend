import React from "react";
import errorPic from "../../images/error.png";
import successPic from "../../images/success.png";

function ErrorPopup({ isOpen, onClose, isSuccess }) {
  return (
    <div
      className={`errorr ${isOpen ? "error_active" : ""}`}
    >
      <div className="error__container">
        <button
          type="button"
          className="error__close-icon"
          aria-label="Закрыть"
          onClick={onClose}
        ></button>
        <img
          className="error__image"
          src={!isSuccess ? errorPic : successPic}
          alt=""
        />
        <p className="error__text">
          {isSuccess
            ? "Вы успешно поменяли данные!"
            : "Что-то пошло не так! Попробуйте ещё раз."}
        </p>
      </div>
    </div>
  );
}
export default ErrorPopup;