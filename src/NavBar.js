import React from "react"
import { NavLink } from "react-router-dom"

const NavBar = () => {
  return (
    <div className="navbar">
      <NavLink to="/"><button className="home-button">🏡 Home 🏡</button></NavLink>
      <NavLink to="addconcert"><button className="add-a-concert">🎸 Add A Concert 🎸</button></NavLink>
      <NavLink to="/videos"><button className="video-button">🎥 Music Videos 🎥</button></NavLink>
    </div>
  )
}

export default NavBar
