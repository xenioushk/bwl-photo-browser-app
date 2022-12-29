import React from "react"

import { Link } from "react-router-dom"

const Breadcrumb = (props) => {
  return (
    <>
      <nav className="bg-Gray-100 space-y-2 border-1 border-bg-Gray-100 px-5 py-3 w-full mt-2 mb-2 rounded">
        <ol className="list-reset text-sm font-normal md:font-bold md:font-bold flex">
          <li>
            <Link to={"/"} className="text-Green-900 hover:text-gray-500">
              Home
            </Link>
          </li>

          {props.albumCategory ? (
            <>
              <li>
                <span className="text-gray-500 mx-2">/</span>
              </li>
              <li>
                <Link to={`/all-albums/`} className="text-Green-900 hover:text-gray-500">
                  Albums
                </Link>
              </li>
            </>
          ) : (
            ""
          )}

          {props.photo ? (
            <>
              <li>
                <span className="text-gray-500 mx-2">/</span>
              </li>
              <li className="text-gray-900 font-normal">
                <Link to={`/all-albums/`} className="text-Green-900 hover:text-gray-500">
                  Albums
                </Link>
              </li>
              <li>
                <span className="text-gray-500 mx-2">/</span>
              </li>
              <li className="text-gray-900 font-normal">
                <Link to={`/album/${props.album.id}`} className="text-Green-900 hover:text-gray-500">
                  {props.album.title}
                </Link>
              </li>
            </>
          ) : (
            ""
          )}

          <li>
            <span className="text-gray-500 mx-2">/</span>
          </li>
          <li className="text-gray-900 font-normal">{props.title}</li>
        </ol>
      </nav>
    </>
  )
}

export default Breadcrumb
