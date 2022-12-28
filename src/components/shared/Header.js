import React from "react"
import { Link } from "react-router-dom"
import logo from "../../logo.png"

const Header = () => {
  return (
    <section className="bg-Gray-100">
      <nav className="relative container px-6 py-3 mx-auto md:px-0">
        <div className="flex items-center justify-between">
          <Link to="/">
            <span className="text-left">
              <img src={logo} alt="Logo" />
            </span>
          </Link>

          <div className="space-x-6 text-right md:flex">
            <Link to="/all-albums" className="transition bg-primaryBlue-600 text-white text-underline-none font-normal text-sm px-2 py-2 rounded hover:bg-black md:px-4 py-2 md:text-md md:font-bold">
              All Albums
            </Link>
          </div>
        </div>
      </nav>
    </section>
  )
}

export default Header
