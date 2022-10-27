import React from "react"
import "../styles/conversation.css"
import profile from "../assets/profile.png"
import { MdPhotoCamera } from "react-icons/md"
import { AiOutlineSend } from "react-icons/ai"
import { myContext } from "../Mycontext"
import { useContext } from "react"
import { useEffect } from "react"
import axios from "axios"
import { useState } from "react"
import { io } from "socket.io-client"
import { useRef } from "react"
import { BsFillEmojiSmileFill } from "react-icons/bs"
import Picker from "emoji-picker-react"

const Conversation = () => {
  const {
    user,
    otherId,
    token,
    userId,
    conversationId,
    setConversationId,
    message,
    setMessage,
    textsended,
    setTextsended,
  } = useContext(myContext)
  const [userConversation, setUserConversation] = useState("")
  const [userConversationId, setUserConversationId] = useState("")
  const [onlineUsers, setOnlineUsers] = useState([])
  const [sendMessage, setSendeMessage] = useState(null)
  const [receiveMessage, setReceiveMessage] = useState(null)
  const [showPicker, setShowPicker] = useState(false)
  const socket = useRef()

  useEffect(() => {
    socket.current = io("http://localhost:8800")
    socket.current.emit("new-user-add", user._id)
    socket.current.on("get-users", (users) => {
      setOnlineUsers(users)
      console.log(onlineUsers)
    })
  }, [user])

  //send message to socket server
  useEffect(() => {
    if (sendMessage !== null) {
      socket.current.emit("send-message", sendMessage)
    }
  }, [sendMessage])

  //receive message from socket server
  useEffect(() => {
    socket.current.on("receive-message", (data) => {
      setReceiveMessage(data)
    })
  }, [])

  useEffect(() => {
    if (
      receiveMessage !== null &&
      receiveMessage.userConversationId === conversationId
    ) {
      setMessage((prev) => [...prev, receiveMessage])
    }
  }, [receiveMessage])

  const addMessage = () => {
    axios({
      method: "POST",
      headers: { "Content-Type": "application/json", authorization: token },
      url: `http://localhost:4200/koza/message/`,
      data: {
        conversationId: conversationId,
        text: textsended,
        senderId: userId,
      },
    })
      .then(() => {
        const receiverId = { userConversationId }
        setSendeMessage({ textsended, receiverId })
      })
      .catch((err) => console.error(err))

    setTextsended("")
  }

  console.log(message, "je veux ")

  useEffect(() => {
    axios({
      method: "GET",
      url: `http://localhost:4200/koza/find/${userId}/${otherId}`,
      headers: { "Content-Type": "application/json", authorization: token },
    })
      .then((item) => {
        setConversationId(item.data._id)

        item.data.members[0]._id === otherId
          ? setUserConversation(item.data.members[0].username)
          : setUserConversation(item.data.members[1].username)

        item.data.members[0].id === otherId
          ? setUserConversationId(item.data.members[0]._id)
          : setUserConversationId(item.data.members[1]._id)
      })
      .catch((err) => console.log(err))
  }, [otherId])

  useEffect(() => {
    axios({
      method: "POST",
      url: "http://localhost:4200/koza/createConversation",
      headers: { "Content-Type": "application/json", authorization: token },
      data: {
        members: [userId, otherId],
      },
    })
      .then((item) => console.log(item))
      .catch((err) => console.log(err))
  }, [userId, otherId])

  useEffect(() => {
    axios({
      method: "GET",
      url: `http://localhost:4200/koza/message/${conversationId}`,
      headers: { "Content-Type": "application/json", authorization: token },
    })
      .then((item) => {
        setMessage(item.data)
      })
      .catch((err) => console.log(err))
  }, [conversationId, textsended, message])

  return (
    <div className="conversation">
      <div style={{ width: "100%" }}>
        <div className="profile-conversation">
          <img src={profile} alt="mon profile" />
          <div className="name-receiver">
            <h2>{userConversation}</h2>
            <p style={{ textAlign: "center" }}>Online</p>
          </div>
        </div>
        <div className="bottom"></div>
      </div>

      <div className="discussion">
        {message.map((messages) => {
          let statutStyle =
            messages.senderId !== userId ? "messagereceived" : "messagesended"
          let d = new Date(messages.createdAt)
          let date =
            d.getHours() + ":" + d.getMinutes() + ", " + d.toDateString()

          return (
            // eslint-disable-next-line react/jsx-key
            <div className={statutStyle}>
              <div className="message">{messages.text}</div>
              <div className="timestamp">{date}</div>
            </div>
          )
        })}
      </div>

      <div className="bottom-last"> </div>

      <div
        style={{
          position: "absolute",
          top: "10%",
          left: "70%",
          zIndex: "10000",
        }}
      >
        {" "}
        {showPicker && <Picker pickerStyle={{ width: "100%" }} />}
      </div>

      <div className="send-message">
        <div className="send-text">
          <input
            type="text"
            placeholder="text here"
            onChange={(e) => {
              setTextsended(e.target.value)
            }}
            value={textsended}
          />
          <label>
            <BsFillEmojiSmileFill
              className="icon-emoji"
              onClick={() => setShowPicker((val) => !val)}
            />
          </label>
          <label htmlFor="file">
            {" "}
            <MdPhotoCamera className="icon-camera" />{" "}
          </label>
          <input type="file" id="file" style={{ display: "none" }} />
        </div>
        <div className="icon-send" onClick={addMessage}>
          <AiOutlineSend className="send" />
        </div>
      </div>
    </div>
  )
}

export default Conversation
