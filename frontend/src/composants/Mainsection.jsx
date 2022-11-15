/* eslint-disable prettier/prettier */
import React, { useState } from "react"
import "../styles/mainsection.css"
import { AiOutlineSearch } from "react-icons/ai"
import ReactLoading from "react-loading"
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
  const [loadRecentConversation, setLoadRecentConversation] = useState(true)
 

  useEffect(() => {
    axios({
      method: "GET",
      // eslint-disable-next-line no-undef
      url: `${process.env.REACT_APP_URL_BACKEND}/${userId}`,
      headers: { "Content-Type": "application/json", authorization: token },
    })
      .then((res) => {
        setConversationRecent(res.data)
        setLoadRecentConversation(!loadRecentConversation)
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

        {loadRecentConversation ? (
          <ReactLoading
            className="loader"
            type="bubbles"
            color="blue"
            height={467}
            width={175}
          />
        ) : ( 
          conversationRecent.map((conversation, index) => {
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
                // lastmessage="ça va?"
              />
            )
          })
        )}
      </div>
    </div>
  )
}

export default Mainsection
