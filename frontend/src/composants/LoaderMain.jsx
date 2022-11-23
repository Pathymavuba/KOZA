import React from "react"
import "../styles/loaderMain.scss"

const LoaderMain = () => {
  return (
    <div className="loader">
      <div className="square"></div>
      <div className="square"></div>
      <div className="square last"></div>
      <div className="square clear"></div>
      <div className="square"></div>
      <div className="square last"></div>
      <div className="square clear"></div>
      <div className="square "></div>
      <div className="square last"></div>
    </div>
  )
}

export default LoaderMain
