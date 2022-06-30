import React from "react";
import successPic from "../../images/success.png";
import errorPic from "../../images/error.png";

function InfoTooltip({ isOpen, onClose, isSuccess }) {
  return (
    <div
      className={`infoTooltip ${isOpen ? "infoTooltip_active" : ""}`}
    >
      <div className="infoTooltip__containe">
        <button
          type="button"
          className="infoTooltip__close-icon"
          aria-label="Закрыть"
          onClick={onClose}
        ></button>
        <img
          className="infoTooltip__image"
          src={!isSuccess ? errorPic : successPic}
          alt=""
        />
        <p className="infoTooltip__text">
          {isSuccess
            ? "Вы успешно зарегистрировались!"
            : "Что-то пошло не так! Попробуйте ещё раз."}
        </p>
      </div>
    </div>
  );
}
export default InfoTooltip;