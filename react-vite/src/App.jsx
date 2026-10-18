import { useEffect, useState } from "react"

import "./assets/styles/login.css" 
import LogoImage from "./assets/logo.png"
import GoogleImage from "./assets/google-icon.png"

function App() {

  const [username, setUsername] = useState("")
  const [errorUsername, setErrorUsername] = useState(false)
  const [password, setPassword] = useState("")
  const [errorPassword, setErrorpassword] = useState(false)

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
    event.preventDefault()

    // if (username = "admin") {

    // }

  }

  return (
    <>
      <main className="container">
        <div className="login-container">
          <img className="logo" src={LogoImage} alt="logo" />
          <h1 className="heading-3" style={{ marginBottom: 8 }}>
            Masuk 
          </h1>
          <p className="body-medium-regular" style={{ marginBottom: 37 }}>
            Selamat datang kembali!
          </p>
          <span
            id="label-error-login"
            className="body-small-regular"
            style={{ color: "red", visibility: "hidden" }}
          >
            Invalid username / password
          </span>
          <form onSubmit={handleSubmit} id="login-form" className="login-form" action="">
            <div className="form-field" style={{ marginBottom: 37 }}>
              <label className="body-medium-medium" htmlFor="username">
                Username
              </label>
              <input
                className="input-text"
                id="username"
                type="text"
                onChange={handleUsername}
                placeholder="Masukkan username"
              />
              <span
                id="error-label-username"
                className="body-small-regular error-label"
                style={{
                  visibility: errorUsername ? "visible" : "hidden"
                }}
              >
                Username is required
              </span>
            </div>
            <div className="form-field" style={{ marginBottom: 12 }}>
              <label className="body-medium-medium" htmlFor="pasword">
                Kata Sandi
              </label>
              <input
                className="input-text"
                id="pasword"
                type="password"
                placeholder="Masukkan kata sandi"
                onChange={handlePassword}
              />
              <span
                id="error-label-password"
                className="body-small-regular error-label"
                style={{
                  visibility : errorPassword ? "visible" : "hidden"
                }}
              >
                Password is required
              </span>
              <button
                id="btn-password-visibility"
                className="btn-unstyled password-visibility"
                type="button"
                onclick="handleClik()"
              >
                <svg
                  width={20}
                  height={20}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88"
                  />
                </svg>
              </button>
            </div>
            <div className="form-info-wrapper">
              <span className="body-small-regular">
                Belum punya akun?{" "}
                <a className="body-small-regular" href="">
                  Daftar
                </a>
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
        </div>
      </main>
    </>
  )
}

export default App
