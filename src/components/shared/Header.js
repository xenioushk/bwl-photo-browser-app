import React from "react"
import { Link } from "react-router-dom"
import logo from "../../logo.png"

const Header = () => {
  return (
    <section className="bg-Gray-100">
      <nav className="relative container px-4 py-3 mx-auto md:px-0">
        <div className="flex items-center justify-between">
          <div className="">
            <Link to="/">
              <span className="text-2xl text-underline-none text-bold">
                <img src={logo} alt="Logo" />
              </span>
            </Link>
          </div>

          <div className="space-x-6 text-right md:flex">
            <Link to="/all-albums" className="transition bg-primaryBlue-600 text-white text-underline-none font-bold px-4 py-4 rounded hover:bg-black md:px-4 py-2 inline-block">
              All Albums
            </Link>
          </div>
        </div>
      </nav>
    </section>
  )
}

export default Header
