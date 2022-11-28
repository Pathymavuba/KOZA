import axios from "axios"

export function createAnewUser(
  uri,
  username,
  password,
  login_url,
  setToken,
  navigate,
  image
) {
  axios
    .post(uri, {
      username: username,
      password: password,
      profile: image ? image.data.secure_url : undefined,
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
}
