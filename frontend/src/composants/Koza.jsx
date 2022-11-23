import React from "react"
import Leftsection from "./Leftsection"
import "../styles/koza.css"
import Conversation from "./Conversation"
import { Outlet } from "react-router-dom"
import ConversationCover from "./ConversationCover"
import { useContext } from "react"
import { myContext } from "../Mycontext"
import LoaderMain from "./LoaderMain"
import { useEffect } from "react"

// eslint-disable-next-line react/prop-types
const Koza = ({ logout }) => {
  // { logout }
  const { showConversation, loadermain, setLoadermain } = useContext(myContext)
  useEffect(() => {
    setTimeout(() => setLoadermain(false), 3000)
  }, [])

  const result = loadermain ? (
    <LoaderMain />
  ) : (
    <div className="koza">
      <Leftsection logout={logout} />
      <Outlet />
      {showConversation ? <Conversation /> : <ConversationCover />}
    </div>
  )

  return result
}

export default Koza
