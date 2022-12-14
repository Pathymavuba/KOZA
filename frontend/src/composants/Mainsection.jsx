/* eslint-disable prettier/prettier */
import React from "react"
import "../styles/mainsection.css"
import { AiOutlineSearch } from "react-icons/ai"

import { useContext } from "react"
import { useEffect } from "react"
import axios from "axios"
import { myContext } from "../Mycontext"
import RecentConversation from "./RecentConversation"

const Mainsection = () => {
  const {
    userId,
    token,
    setConversationRecent,
    conversationRecent,
    // eslint-disable-next-line no-unused-vars
    message,
  } = useContext(myContext)

  useEffect(() => {
    axios({
      method: "GET",
      // eslint-disable-next-line no-undef
      url: `${process.env.REACT_APP_URL_BACKEND}/${userId}`,
      headers: { "Content-Type": "application/json", authorization: token },
    })
      .then((res) => {
        setConversationRecent(res.data)
        console.log(res.data,"ok")
      })
      .catch((err) => console.log(err))
  }, [token, userId])

  return (
    <div className="mainsection">
      <div className="seachbar">
        <label htmlFor="search-box">
          {" "}
          <AiOutlineSearch className="icone-search" />{" "}
        </label>
        <input type="text" id="search-box" placeholder="search" />
      </div>
      <div className="listmessage">
        <div className="titre-recent">
          <h4>Recent</h4>
        </div>

        {conversationRecent.map((conversation, index) => {
          return (
            <RecentConversation
              key={index}
              recentId={
                conversation.members[0]._id === userId
                  ? conversation.members[1]._id
                  : conversation.members[0]._id
              }
              name={
                conversation.members[0]._id === userId
                  ? conversation.members[1].username
                  : conversation.members[0].username
              }
              profile={
                conversation.members[0]._id === userId
                ? conversation.members[1].profile
                : conversation.members[0].profile
              }
              // lastmessage="??a va?"
            />
          )
        })}
      </div>
    </div>
  )
}

export default Mainsection
