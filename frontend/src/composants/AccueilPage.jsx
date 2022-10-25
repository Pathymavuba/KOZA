import React from "react"
import "../styles/accueilPage.css"
import { Outlet } from "react-router-dom"

const AccueilPage = () => {
  return (
    <div>
      <Outlet />
    </div>
  )
}

export default AccueilPage
