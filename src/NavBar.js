import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div className="navbar">
      <NavLink to="/"><button>Home</button></NavLink>
      <NavLink to="addconcert"><button>Add A Concert</button></NavLink>
      <NavLink to="/videos"><button>Music Videos</button></NavLink>
    </div>
  );
}

export default NavBar