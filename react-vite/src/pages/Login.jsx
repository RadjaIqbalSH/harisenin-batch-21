import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import axios from 'axios';

import "../assets/styles/login.css";
import LogoImage from "../assets/logo.png";
import Heading3 from "../components/heading3";
import BodyMediumRegular from "../components/bodyMediumRegular";
import FormLogin from "../components/FormLogin";
// import { ThemeContext } from "../context/theme";
import { useTheme } from "../store/theme"

const STATIC_USERNAME = "admin";
const STATIC_PASSWORD = "admin";

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [errorUsername, setErrorUsername] = useState(false);
  const [errorPassword, setErrorpassword] = useState(false);
  const [errorLogin, setErrorLogin] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    if (username.length < 1) {
      setErrorUsername(true);
    } else {
      setErrorUsername(false);
    }
  }, [username]);

  const handleUsername = (event) => {
    setUsername(event.target.value);
  };

  useEffect(() => {
    if (password.length < 1) {
      setErrorpassword(true);
    } else {
      setErrorpassword(false);
    }
  }, [password]);

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await login(username, password)
    // if (username === STATIC_USERNAME && password === STATIC_PASSWORD) {
    //   navigate("/");
    // } else {
    //   setErrorLogin(true);
    // }
  };

  // const [theme, setTheme] = useState(false);

  const themeStore = useTheme()

  // const handelTheme = () => {
  //   if (theme) {
  //     themeStore.changeTheme(),
  //     setTheme(false);
  //   } else {
  //     setTheme(true);
  //   }
  // };

  async function  login (username, password) {
    const options = {
      method: 'POST',
      url: 'https://dytuputtiertanijmjev.supabase.co/auth/v1/token',
      params: {grant_type: "password"},
      headers: {
        Authorization: 'Bearer sb_secret_PFrzVsZnNPvV3apbguclsw_QIUOy3pX',
        'Content-Type': 'application/json',
        apikey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR5dHVwdXR0aWVydGFuaWptamV2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTI3NDcwMTcsImV4cCI6MjEwODMyMzAxN30.9j8Ur3SGzGbvq6RZlVUjrrSZnZ-Glyrtypi2CbPTDlA'
      },
      data: { email: username, password: password }
    };

    try {
      const { data } = await axios.request(options);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      {/* <ThemeContext value={theme}> */}
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
      {/* </ThemeContext> */}
    </>
  );
}

export default LoginPage;
