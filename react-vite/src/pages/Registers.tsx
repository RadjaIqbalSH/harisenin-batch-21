import { useEffect, useState, type ChangeEventHandler, type SubmitEventHandler } from "react";
import { useNavigate } from "react-router";

import "../assets/styles/registration.css" 
import LogoImage from "../assets/logo.png"
import FormRegister from "../components/FormRegister";
import { api } from "../utils/axios";

function RegisterPage() {

  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [errorUsername, setErrorUsername] = useState<boolean>(false);
  const [errorPassword, setErrorpassword] = useState<boolean>(false);
  const [errorConfirmPassword, setErrorConfirmPassword] = useState<boolean>(false);
  const [errorLogin, setErrorLogin] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState("Invalid username / password")

  const navigate = useNavigate();

  const handleUsername: ChangeEventHandler<HTMLInputElement, HTMLInputElement> = (event) => {
    setUsername(event.target.value);
  };

  const handlePassword: ChangeEventHandler<HTMLInputElement, HTMLInputElement> = (event) => {
    setPassword(event.target.value);
  };
  const handleConfirmPassword: ChangeEventHandler<HTMLInputElement, HTMLInputElement> = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleSubmit: SubmitEventHandler<HTMLFormElement> = async (event ) => {
    event.preventDefault();
    await login(username, password, confirmPassword)
  };

  async function  login (username: string, password: string, confirmPassword: string) {
    if (password !== confirmPassword) {
      setErrorLogin(true);
      setErrorMsg("Password not match");
      return;
    }
    try {
      const { data } = await api.post("/auth/v1/signup", { email: username, password: password }, {
        params: {grant_type: "password"},
      })
      localStorage.setItem("token", data.access_token)
      navigate("/")
    } catch {
      setErrorLogin(true)
    }
  }

  useEffect(() => {
    setErrorUsername(username.length < 1);
    setErrorpassword(password.length < 1);
    setErrorConfirmPassword(confirmPassword.length < 1);
  }, [username, password, confirmPassword]);

  return (
    <main className="container">
      <div className="registration-container">
        <img className="logo" src={LogoImage} alt="logo" />
        <h1 className="heading-3" style={{ marginBottom: 8 }}>
          Daftar
        </h1>
        <p className="body-medium-regular" style={{ marginBottom: 37 }}>
          Selamat datang!
        </p>
        <span
          id="label-error-login"
          className="body-small-regular"
          style={{
            color: "red",
            visibility: errorLogin ? "visible" : "hidden",
          }}
        >
          {errorMsg}
        </span>
        <FormRegister
          handleSubmit={handleSubmit}
          errorPassword={errorPassword}
          handlePassword={handlePassword}
          errorUsername={errorUsername}
          handleUsername={handleUsername}
          errorConfirmPassword={errorConfirmPassword}
          handleConfirmPassword={handleConfirmPassword}
        />
      </div>
    </main>
  );
}

export default RegisterPage;
