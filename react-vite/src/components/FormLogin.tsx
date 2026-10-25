import { NavLink } from "react-router";
import GoogleImage from "../assets/google-icon.png";
import Field from "./Field";
import InputText from "./InputText";
import InputPassword from "./InputPassword";
import type { ChangeEventHandler, SubmitEventHandler } from "react";

interface IFormLoginProps {
  handleSubmit: SubmitEventHandler<HTMLFormElement>;
  handleUsername: ChangeEventHandler<HTMLInputElement, HTMLInputElement>;
  errorUsername: boolean;
  handlePassword: ChangeEventHandler<HTMLInputElement, HTMLInputElement>;
  errorPassword: boolean;
}

export default function FormLogin(props: IFormLoginProps) {
  const {
    handleSubmit,
    handleUsername,
    errorUsername,
    handlePassword,
    errorPassword,
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

      <div className="form-info-wrapper">
        <span className="body-small-regular">
          Belum punya akun?{" "}
          <NavLink className="body-small-regular" to="/register">
            Daftar
          </NavLink>
        </span>
        <a className="body-small-regular" href="">
          Lupa kata sandi?
        </a>
      </div>
      <div className="form-action">
        <button
          className="btn-secondary-contained body-small-semibold"
          style={{ width: "100%" }}
          type="submit"
        >
          Masuk
        </button>
        <span className="body-small-medium">Atau</span>
        <button
          className="btn-secondary-outlined body-small-semibold"
          style={{ width: "100%" }}
        >
          <img className="btn-logo" src={GoogleImage} />
          Masuk dengan Google
        </button>
      </div>
    </form>
  );
}
