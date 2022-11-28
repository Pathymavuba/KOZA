import React from "react"
import "../styles/signup.css"
import { Link } from "react-router-dom"
import axios from "axios"
import { useContext } from "react"
import { myContext } from "../Mycontext"
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import Profile from "../assets/profile.png"
import person from "../assets/Chatting-pana.png"
import "bootstrap/dist/css/bootstrap.min.css"

const Signup = () => {
  const navigate = useNavigate()

  const {
    username,
    setUsername,
    password,
    setPassword,
    confirmPassword,
    setConfirmPassword,
    setToken,
  } = useContext(myContext)
  // eslint-disable-next-line no-undef
  const login_url = `${process.env.REACT_APP_URL_BACKEND}/login`
  const [profile, setProfile] = useState()
  const [error, setError] = useState(false)

  const handleProfile = (imageProfile) => {
    if (imageProfile) {
      setProfile(imageProfile[0])
    }
  }

  const createUser = async (e) => {
    e.preventDefault()
    if (profile) {
      const formData = new FormData()
      formData.append("file", profile)
      // eslint-disable-next-line no-undef
      formData.append("upload_preset", "pathymavuba")

      let image = await axios({
        method: "POST",
        // eslint-disable-next-line no-undef
        url: `${process.env.REACT_APP_URL_CLOUDINARY}`,
        data: formData,
      })
      // eslint-disable-next-line no-undef
      const createuser_url = `${process.env.REACT_APP_URL_BACKEND}/signup`
      if (confirmPassword === password) {
        axios
          .post(createuser_url, {
            username: username,
            password: password,
            profile: image.data.secure_url,
          })
          .then((data) => {
            console.log(data)
            // eslint-disable-next-line no-empty
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

            // navigate("/accueil/login")
          })
          .catch(function (error) {
            console.log(error)
          })
      } else {
        setError(!error)
      }
    } else {
      // eslint-disable-next-line no-undef
      const createuser_url = `${process.env.REACT_APP_URL_BACKEND}/signup`
      if (confirmPassword === password) {
        axios
          .post(createuser_url, {
            username: username,
            password: password,
            profile: Profile,
          })
          .then((data) => {
            console.log(data)
            // navigate("/accueil/login")
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
          })
          .catch(function (error) {
            console.log(error)
          })
      } else {
        setError(!error)
      }
    }
  }

  return (
    <div className="login">
      <div className="login-image">
        <h1>Koza</h1>
        <p>Koza helps you connect and share with people in your life</p>
        <img src={person} alt="" />
      </div>
      <div className="card_login">
        <form>
          {error && (
            <div className="alert alert-danger" role="alert">
              Your password is not correct!
            </div>
          )}

          <input
            type="text"
            placeholder="username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="password"
            onChange={(e) => {
              setPassword(e.target.value)
              setError(false)
            }}
          />
          <input
            type="password"
            placeholder="confirm password"
            onChange={(e) => {
              setConfirmPassword(e.target.value)
              setError(false)
            }}
          />
          <div className="button-uppload">
            <label htmlFor="avatar">choose profile picture</label>
            <input
              type="file"
              accept="image/jpg,png,jpeg"
              id="avatar"
              name="avatar"
              // eslint-disable-next-line no-undef
              onChange={(e) => handleProfile(e.target.files)}
            />
          </div>
          <input
            onClick={createUser}
            type="button"
            className="btn-signup"
            value="signup"
          />
          <Link to="/accueil/login">
            <h5>click here to login</h5>
          </Link>
        </form>
      </div>
    </div>
  )
}

export default Signup
