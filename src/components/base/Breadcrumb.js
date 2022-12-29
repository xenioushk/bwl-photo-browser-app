import React from "react"

import { Link } from "react-router-dom"

const Breadcrumb = (props) => {
  return (
    <>
      <nav className="shadow bg-Gray-100 space-y-2 border-1 border-bg-Gray-100 px-5 py-3 w-full mt-2 mb-4 rounded">
        <ol className="list-reset text-sm font-normal flex flex-wrap md:font-bold text-black">
          <li>
            <Link to={"/"}>Home</Link>
          </li>

          {props.albumCategory ? (
            <>
              <li>
                <span className="text-gray-500 mx-1">/</span>
                <Link to={`/all-albums/`} className="transition hover:text-primaryBlue-600" title="All Albums">
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
                <Link to={`/all-albums/`} className="transition hover:text-primaryBlue-600" title="All Albums">
                  Albums
                </Link>
              </li>
              <li className="text-gray-900">
                <span className="text-gray-500 mx-1">/</span>
                <Link to={`/album/${props.album.id}`} className="transition hover:text-primaryBlue-600" title={props.album.title}>
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
