import React, { useEffect } from "react"
import "../styles/contact.css"
import { AiOutlineSearch } from "react-icons/ai"
import axios from "axios"
import { myContext } from "../Mycontext"
import { useContext } from "react"
import UserContact from "./UserContact"

const Contact = () => {
  const { users, userId, setUsers, token } = useContext(myContext)

  useEffect(() => {
    axios
      // eslint-disable-next-line no-undef
      .get(`${process.env.REACT_APP_URL_BACKEND}/users/${userId}`, {
        headers: { "Content-Type": "application/json", Authorization: token },
      })
      .then((users) => {
        setUsers(users.data.users)
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
        <input type="text" id="search-box" placeholder="search" />
      </div>
      <div className="list-contact">
        <div className="titre-recent">
          <h2>All users</h2>
        </div>
        {users.map((data, index) => {
          return (
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
