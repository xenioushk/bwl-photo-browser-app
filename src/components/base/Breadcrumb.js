import React from "react"

import { Link } from "react-router-dom"

const Breadcrumb = (props) => {
  return (
    <>
      <nav className="app-breadcrumb shadow bg-Gray-100 space-y-2 border-1 border-bg-Gray-100 px-5 py-3 w-full mt-2 mb-4 rounded">
        <ol className="list-reset text-sm font-bold flex flex-wrap text-black">
          <li>
            <Link to={"/"} title="Home" className="home">
              Home
            </Link>
          </li>

          {props.albumCategory ? (
            <>
              <li>
                <span className="text-gray-500 mx-1">/</span>
                <Link to={`/all-albums/`} className="all-albums transition hover:text-primaryBlue-600" title="All Albums">
                  Albums
                </Link>
              </li>
            </>
          ) : (
            ""
          )}

          {props.photo ? (
            <>
              <li className="text-gray-900">
                <span className="text-gray-500 mx-1">/</span>
                <Link to={`/all-albums/`} className="all-albums transition hover:text-primaryBlue-600" title="All Albums">
                  Albums
                </Link>
              </li>
              <li className="text-gray-900">
                <span className="text-gray-500 mx-1">/</span>
                <Link to={`/album/${props.album.id}`} className="album transition hover:text-primaryBlue-600" title={props.album.title}>
                  {props.album.title}
                </Link>
              </li>
            </>
          ) : (
            ""
          )}

          <li className="text-gray-900 font-normal">
            <span className="text-gray-500 mx-1">/</span>
            {props.title}
          </li>
        </ol>
      </nav>
    </>
  )
}

export default Breadcrumb
