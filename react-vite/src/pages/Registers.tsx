import { useEffect, useState, type ChangeEventHandler, type SubmitEventHandler } from "react";
import { useNavigate } from "react-router";
import axios from 'axios';

import "../assets/styles/registration.css" 
import LogoImage from "../assets/logo.png"
import FormRegister from "../components/FormRegister";

function RegisterPage() {

  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");

  const [errorUsername, setErrorUsername] = useState<boolean>(false);
  const [errorPassword, setErrorpassword] = useState<boolean>(false);
  const [errorConfirmPassword, setErrorConfirmPassword] = useState<boolean>(false);
  const [errorLogin, setErrorLogin] = useState<boolean>(false);

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
    await login(username, password)
  };

  // const [theme, setTheme] = useState(false);

  async function  login (username: string, password: string) {
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

      localStorage.setItem("token", data.access_token)

      navigate("/")

    } catch {
      setErrorLogin(true)
    }
  }

  useEffect(() => {
    // ngambil token yang ada di storage
    const token = localStorage.getItem("token")

    if (token) {
      navigate("/")
    }
  }, [])

  useEffect(() => {
    if (username.length < 1) {
      setErrorUsername(true);
    } else {
      setErrorUsername(false);
    }
  }, [username]);

  useEffect(() => {
    if (password.length < 1) {
      setErrorpassword(true);
    } else {
      setErrorpassword(false);
    }
  }, [password]);

  useEffect(() => {
    if (confirmPassword.length < 1) {
      setErrorConfirmPassword(true);
    } else {
      setErrorConfirmPassword(false);
    }
  }, [password]);


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
          Invalid username / password
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
