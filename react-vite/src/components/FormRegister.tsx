import { NavLink } from "react-router";
import GoogleImage from "../assets/google-icon.png";
import Field from "./Field";
import InputText from "./InputText";
import InputPassword from "./InputPassword";
import type { ChangeEventHandler, SubmitEventHandler } from "react";

interface IFormRegisterProps {
  handleSubmit: SubmitEventHandler<HTMLFormElement>;
  handleUsername: ChangeEventHandler<HTMLInputElement, HTMLInputElement>;
  errorUsername: boolean;
  handlePassword: ChangeEventHandler<HTMLInputElement, HTMLInputElement>;
  errorPassword: boolean;
  handleConfirmPassword: ChangeEventHandler<HTMLInputElement, HTMLInputElement>;
  errorConfirmPassword: boolean;
}

export default function FormRegister(props: IFormRegisterProps) {
  const {
    handleSubmit,
    handleUsername,
    errorUsername,
    handlePassword,
    errorPassword,
    handleConfirmPassword,
    errorConfirmPassword,
  } = props;

  return (
    <form onSubmit={handleSubmit} className="login-form">
      <Field
        id="username"
        label="Username"
        isError={errorUsername}
        errorMsg="Username is required"
      >
        <InputText
          id="username"
          placeholder="Input username"
          onChange={handleUsername}
        />
      </Field>
      <Field
        id="password"
        label="password"
        isError={errorPassword}
        errorMsg="Password is required"
      >
        <InputPassword
          onChange={handlePassword}
        />
      </Field>
      <Field
        id="confirm-password"
        label="Kofirmasi Kata Sandi"
        isError={errorConfirmPassword}
        errorMsg="Confirm Password is required"
      >
        <InputPassword
          onChange={handleConfirmPassword}
        />
      </Field>
      <div className="form-info-wrapper">
        <span className="body-small-regular">
          Sudah punya akun?{" "}
          <NavLink className="body-small-regular" to="/login">
            Masuk
          </NavLink>
        </span>
      </div>
      <div className="form-action">
        <button
          className="btn-secondary-contained body-small-semibold"
          style={{ width: "100%" }}
        >
          Daftar
        </button>
        <span className="body-small-medium">Atau</span>
        <button
          className="btn-secondary-outlined body-small-semibold"
          style={{ width: "100%" }}
        >
          <img className="btn-logo" src={GoogleImage} />
          Daftar dengan Google
        </button>
      </div>
    </form>
  );
}
