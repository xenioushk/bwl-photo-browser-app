import React from "react"
import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <footer>
      <div className="border-t border-black-500 border-t-1 mt-10">
        <div className="container flex flex-col-reverse items-center justify-between mx-auto md:flex-row py-6">
          <div className="text-left md:w-1/2">
            <p>Copyright &copy; 2022-2024. All Rights Reserved.</p>
          </div>
          <div className="font-bold space-x-6 mb-3 md:w-1/2 md:mb-0 text-right">
            <Link to="/" title="Home" className="footer-link transition text-gray-700 hover:text-primaryBlue-600">
              Home
            </Link>
            <Link to="/about" title="About" className="footer-link transition text-gray-700 hover:text-primaryBlue-600">
              About
            </Link>
            <Link to="/terms" title="Terms & Conditions" className="footer-link transition text-gray-700 hover:text-primaryBlue-600">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
