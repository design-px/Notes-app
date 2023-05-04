import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {

  const [themeMode, setThemeMode] = useState('')

  useEffect(() => {
    setThemeMode(localStorage.getItem('theme-mode') || 'dark')
  }, [])

  useEffect(() => {
    document.querySelector('body').setAttribute('data-theme', themeMode)
    localStorage.setItem('theme-mode', themeMode)
  }, [themeMode])

  const toggleTheme = () => {
    setThemeMode(themeMode === 'dark' ? 'light' : 'dark')
  }

  return (
    <>
      <nav className="nav-top">

        <NavLink to="/">Home</NavLink>
        <NavLink to="/notes">Notes</NavLink>

        <div className="change-theme">
          <input
            type="checkbox"
            className="theme-inp"
            id="toggle-theme"
            onChange={toggleTheme}
          />
          <label htmlFor="toggle-theme" className="theme-label"></label>
        </div>

      </nav>
    </>
  )
}
