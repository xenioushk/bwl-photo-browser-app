import React from "react"
import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <>
      <section className="mt-6 border-t-2 border-black-500">
        <div className="container flex flex-col-reverse items-center justify-between mx-auto md:flex-row py-6">
          <div className="text-left md:w-1/2">
            <p>Copyright &copy; 2022-2023. All Rights Reserved.</p>
          </div>
          <div className="font-bold space-x-6 mb-3 md:w-1/2 text-right">
            <Link to="/" className="transition text-gray-700 hover:text-primaryBlue-600">
              Home
            </Link>
            <Link to="/about" className="transition text-gray-700 hover:text-primaryBlue-600">
              About
            </Link>
            <Link to="/terms" className="transition text-gray-700 hover:text-primaryBlue-600">
              Terms
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default Footer
