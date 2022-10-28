import React from "react"
import "../styles/signup.css"
import { Link } from "react-router-dom"
import axios from "axios"
import { useContext } from "react"
import { myContext } from "../Mycontext"
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import Profile from "../assets/profile.png"

const Signup = () => {
  const navigate = useNavigate()

  const { username, setUsername, password, setPassword } = useContext(myContext)
  const [profile, setProfile] = useState()

  console.log(profile, "trigo")

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
        url: "https://api.cloudinary.com/v1_1/dyejqdtgf/upload",
        data: formData,
      })
      console.log("victor", image.data.secure_url)
      const createuser_url = "http://localhost:4200/koza/signup"
      axios
        .post(createuser_url, {
          username: username,
          password: password,
          profile: image.data.secure_url,
        })
        .then((data) => {
          console.log(data)
          navigate("/accueil/login")
        })
        .catch(function (error) {
          console.log(error)
        })
    } else {
      const createuser_url = "http://localhost:4200/koza/signup"
      axios
        .post(createuser_url, {
          username: username,
          password: password,
          profile: Profile,
        })
        .then((data) => {
          console.log(data)
          navigate("/accueil/login")
        })
        .catch(function (error) {
          console.log(error)
        })
    }
  }

  return (
    <div className="login">
      <div className="card_login">
        <form>
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
            type="file"
            accept="image/jpg,png,jpeg"
            id="avatar"
            name="avatar"
            // eslint-disable-next-line no-undef
            onChange={(e) => handleProfile(e.target.files)}
          />

          <input
            onClick={createUser}
            type="button"
            className="btn-signup"
            value="signup"
          />

          <Link to="/accueil/login">
            {" "}
            <h5>click here to login</h5>{" "}
          </Link>
        </form>
      </div>
    </div>
  )
}

export default Signup
