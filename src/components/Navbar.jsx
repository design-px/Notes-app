import { NavLink } from "react-router-dom";

export default function Navbar() {

  return (
    <>
      <nav className="nav-top">

        <NavLink to="/">Home</NavLink>
        <NavLink to="/notes">Notes</NavLink>

      </nav>
    </>
  )
}
