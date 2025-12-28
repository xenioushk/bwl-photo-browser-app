import React from "react"
import { Link } from "react-router-dom"
import logo from "../../logo.png"
import logoMobile from "../../logo_mobile.png"

const Header: React.FC = () => {
  return (
    <section className="bg-Gray-100 md:p-0 shadow">
      <nav className="header-nav relative container px-4 md:px-0 py-3 mx-auto">
        <div className="flex items-center justify-between gap-y-2 md:justify-between md:flex-row gap-0">
          <Link to="/">
            <span className="text-left">
              <img src={logo} alt="Logo" className="hidden md:block" />
              <img src={logoMobile} alt="Logo" className="md:hidden" />
            </span>
          </Link>

          <div className=" align-items-end">
            <Link to="/all-albums" title="Explore All Albums" className="transition bg-primaryBlue-600 text-white text-underline-none font-normal text-sm px-2 py-1 rounded hover:bg-black md:px-4 py-2 md:text-md md:font-bold">
              All Albums
            </Link>
          </div>
        </div>
      </nav>
    </section>
  )
}

export default Header
