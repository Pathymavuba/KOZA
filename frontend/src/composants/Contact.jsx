import React, { useEffect, useState } from "react"
import "../styles/contact.css"
import { AiOutlineSearch } from "react-icons/ai"
import axios from "axios"
import { myContext } from "../Mycontext"
import { useContext } from "react"
import UserContact from "./UserContact"
// import ReactLoading from "react-loading"
import Skeleton from "@mui/material/Skeleton"
import Typography from "@mui/material/Typography"

const Contact = () => {
  const { users, userId, setUsers, token } = useContext(myContext)
  const [loadContact, setLoadContact] = useState(true)
  const [searchTerm, setSearchTerm] = useState("")
  const handleSeach = (e) => {
    let value = e.target.value
    setSearchTerm(value)
  }
  useEffect(() => {
    axios
      // eslint-disable-next-line no-undef
      .get(`${process.env.REACT_APP_URL_BACKEND}/users/${userId}`, {
        headers: { "Content-Type": "application/json", Authorization: token },
      })
      .then((users) => {
        setUsers(users.data.users)
        setLoadContact(!loadContact)
      })
      .catch((err) => console.log(err))
  }, [token])

  return (
    <div className="mainsection-contact">
      <div className="seachbar">
        <label htmlFor="search-box">
          {" "}
          <AiOutlineSearch className="icone-search" />{" "}
        </label>
        <input
          type="text"
          id="search-box"
          placeholder="search"
          onChange={handleSeach}
        />
      </div>
      <div className="list-contact">
        <div className="titre-recent">
          <h2>All users</h2>
        </div>
        {users
          .filter((data) => {
            return data.username.includes(searchTerm)
          })
          .map((data, index) => {
            return loadContact ? (
              <div style={{ width: "100%" }}>
                <div className="profile-message" style={{ marginTop: "5%" }}>
                  <Skeleton width="80%">
                    {" "}
                    <Typography>.</Typography>
                  </Skeleton>
                </div>
                <div className="bordure"></div>
              </div>
            ) : (
              <div className="info-contact" key={index}>
                <UserContact usercontact={data.username} recentId={data._id} />
              </div>
            )
          })}
      </div>
    </div>
  )
}

export default Contact
