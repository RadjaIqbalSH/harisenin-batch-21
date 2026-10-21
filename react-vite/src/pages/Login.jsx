import { useEffect, useState } from "react"
import { useNavigate } from "react-router";

import "../assets/styles/login.css" 
import LogoImage from "../assets/logo.png"
import Heading3 from "../components/heading3";
import BodyMediumRegular from "../components/bodyMediumRegular";
import FormLogin from "../components/FormLogin";

const STATIC_USERNAME = "admin"
const STATIC_PASSWORD = "admin"

function LoginPage() {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [errorUsername, setErrorUsername] = useState(false)
  const [errorPassword, setErrorpassword] = useState(false)
  const [errorLogin, setErrorLogin] = useState(false)

  const navigate = useNavigate()

  useEffect(() => {
    if (username.length < 1) {
      setErrorUsername(true)
    } else {
      setErrorUsername(false)
    }
  }, [username])

  const handleUsername = (event) => {
    setUsername(event.target.value)
  }

  useEffect(() => {
    if (password.length < 1) {
      setErrorpassword(true)
    } else {
      setErrorpassword(false)
    }
  }, [password])

  const handlePassword = (event) => {
    setPassword(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if (username === STATIC_USERNAME && password === STATIC_PASSWORD) {
        navigate("/");
    } else {
        setErrorLogin(true)
    }
  }

  const [theme, setTheme] = useState(false)

  const handelTheme = () => {
    if (theme) {
      setTheme(false)
    } else {
      setTheme(true)
    }
  }

  return (
    <>
      <main className="container">
       
        <div className="login-container" style={theme ? {
          backgroundColor: "white" 
        } : {}}>
          <button onClick={handelTheme} style={{backgroundColor: "black"}}>Theme : {theme ? 'Light' : "Dark"}</button>
          <img className="logo" src={LogoImage} alt="logo" />
          <Heading3 theme={theme} style={{ marginBottom: 8 }}>
            Masuk
          </Heading3>
          <BodyMediumRegular theme={theme} style={{ marginBottom: 37 }}>
            Selamat datang kembali!
          </BodyMediumRegular>
          <span
            id="label-error-login"
            className="body-small-regular"
            style={{ color: "red", visibility: errorLogin ? "visible" : "hidden" }}
          >
            Invalid username / password
          </span>
          <FormLogin
            theme={theme}
            handleSubmit={handleSubmit}
            handleUsername={handleUsername}
            errorUsername={errorUsername}
            handlePassword={handlePassword}
            errorPassword={errorPassword}
          />
        </div>
      </main>
    </>
  )
}

export default LoginPage
