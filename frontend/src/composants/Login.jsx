import React from "react"
import "../styles/signup.css"
import { Link } from "react-router-dom"
import axios from "axios"
import { useContext } from "react"
import { myContext } from "../Mycontext"
import { useNavigate } from "react-router-dom"

const Login = () => {
  const { username, setUsername, password, setPassword, setToken } =
    useContext(myContext)
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
        navigate("/accueil/koza")
      })
      .catch((err) => {
        console.log("userComperror", err)
      })
  }

  return (
    <div className="login">
      <div className="card_login">
        <form action="">
          <input
            type="text"
            placeholder="username"
            onChange={(e) => setUsername(e.target.value)}
          />

          <input
            type="password"
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
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
