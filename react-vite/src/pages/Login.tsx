import { useEffect, useState, type ChangeEventHandler, type SubmitEventHandler } from "react";
import { useNavigate } from "react-router";

import "../assets/styles/login.css";
import LogoImage from "../assets/logo.png";
import Heading3 from "../components/heading3";
import BodyMediumRegular from "../components/bodyMediumRegular";
import FormLogin from "../components/FormLogin";
import { useTheme } from "../store/theme"
import { api } from "../utils/axios";

function LoginPage() {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [errorUsername, setErrorUsername] = useState<boolean>(false);
  const [errorPassword, setErrorpassword] = useState<boolean>(false);
  const [errorLogin, setErrorLogin] = useState<boolean>(false);

  const navigate = useNavigate();
  const themeStore = useTheme();

  const handleUsername: ChangeEventHandler<HTMLInputElement, HTMLInputElement> = (event) => {
    setUsername(event.target.value);
  };

  const handlePassword: ChangeEventHandler<HTMLInputElement, HTMLInputElement> = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit: SubmitEventHandler<HTMLFormElement> = async (event ) => {
    event.preventDefault();
    await login(username, password)
  };

  async function  login (username: string, password: string) {
    try {
      const data = { email: username, password: password }
      const response = await api.post("/auth/v1/token", 
        data, 
        {
          params: {
            grant_type: "password"
          }
        }
      )
      localStorage.setItem("token", response.data.access_token)
      navigate("/")
    } catch {
      setErrorLogin(true)
    }
  }

  useEffect(() => {
    setErrorUsername(username.length < 1);
    setErrorpassword(password.length < 1);
  }, [username, password]);

  return (
    <>
      <main className="container">
        <div
          className="login-container"
          style={
            themeStore.theme
              ? {
                  backgroundColor: "white",
                }
              : {}
          }
        >
          <button onClick={themeStore.changeTheme} style={{ backgroundColor: "black" }}>
            Theme : {themeStore.theme ? "Light" : "Dark"}
          </button>
          <img className="logo" src={LogoImage} alt="logo" />
          <Heading3 style={{ marginBottom: 8 }}>
            Masuk
          </Heading3>
          <BodyMediumRegular style={{ marginBottom: 37 }}>
            Selamat datang kembali!
          </BodyMediumRegular>
          <span
            id="label-error-login"
            className="body-small-regular"
            style={{
              color: "red",
              visibility: errorLogin ? "visible" : "hidden",
            }}
          >
            Invalid username / password
          </span>
          <FormLogin
            handleSubmit={handleSubmit}
            handleUsername={handleUsername}
            errorUsername={errorUsername}
            handlePassword={handlePassword}
            errorPassword={errorPassword}
          />
        </div>
      </main>
    </>
  );
}

export default LoginPage;
