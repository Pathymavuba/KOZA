import React from "react"
import "../styles/signup.css"
import { Link } from "react-router-dom"
import axios from "axios"
import { useContext } from "react"
import { myContext } from "../Mycontext"
import { useNavigate } from "react-router-dom"
import person from "../assets/Chatting-pana.png"
import { useState } from "react"
import "bootstrap/dist/css/bootstrap.min.css"

const Login = () => {
  const {
    username,
    setUsername,
    password,
    setPassword,
    setToken,
    // setLoadermain,
  } = useContext(myContext)
  const [error, SetError] = useState(false)
  // eslint-disable-next-line no-undef
  const login_url = `${process.env.REACT_APP_URL_BACKEND}/login`
  const navigate = useNavigate()

  const login_user = () => {
    axios({
      method: "POST",
      url: login_url,
      data: { username: username, password: password },
    })
      .then((user) => {
        console.log(user)
        localStorage.setItem("token", user.data.token)
        localStorage.setItem("userId", user.data.payload.id)
        localStorage.setItem("profileUser", user.data.payload.profile)
        setToken(localStorage.getItem("token"))
        // setLoadermain(false)
        // setTimeout(() => setLoadermain(false), 5000)
        navigate("/accueil/koza")
      })
      .catch((err) => {
        console.log("userComperror", err)
        SetError(!error)
      })
  }

  return (
    <div className="login">
      <div className="login-image">
        <h1>Koza</h1>
        <p>Koza helps you connect and share with people in your life</p>
        <img src={person} alt="" />
      </div>
      <div className="card_login">
        <form action="">
          {error && (
            <div className="alert alert-danger" role="alert">
              Your password is not correct or user doesnt exist!
            </div>
          )}
          <input
            type="text"
            placeholder="username"
            onChange={(e) => {
              setUsername(e.target.value)
              SetError(false)
            }}
          />

          <input
            type="password"
            placeholder="password"
            onChange={(e) => {
              setPassword(e.target.value)
              SetError(false)
            }}
          />

          <input
            onClick={login_user}
            type="button"
            className="btn-signup"
            value="Login"
          />

          <Link to="/">
            {" "}
            <h5>click here to create a new account</h5>{" "}
          </Link>
        </form>
      </div>
    </div>
  )
}

export default Login
