import React from "react"
import { Link } from "react-router-dom"
import type { Photo, Album } from "../../types"

interface BreadcrumbProps {
  title: string
  albumCategory?: string
  photo?: Photo
  album?: Album
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ title, albumCategory, photo, album }) => {
  return (
    <>
      <nav className="app-breadcrumb shadow bg-Gray-100 space-y-2 border-1 border-bg-Gray-100 px-5 py-3 w-full mt-2 mb-4 rounded">
        <ol className="list-reset text-sm font-bold flex flex-wrap text-black">
          <li>
            <Link to={"/"} title="Home" className="home">
              Home
            </Link>
          </li>

          {albumCategory ? (
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

          {photo && album ? (
            <>
              <li className="text-gray-900">
                <span className="text-gray-500 mx-1">/</span>
                <Link to={`/all-albums/`} className="all-albums transition hover:text-primaryBlue-600" title="All Albums">
                  Albums
                </Link>
              </li>
              <li className="text-gray-900">
                <span className="text-gray-500 mx-1">/</span>
                <Link to={`/album/${album.id}`} className="album transition hover:text-primaryBlue-600" title={album.title}>
                  {album.title}
                </Link>
              </li>
            </>
          ) : (
            ""
          )}

          <li className="text-gray-900 font-normal">
            <span className="text-gray-500 mx-1">/</span>
            {title}
          </li>
        </ol>
      </nav>
    </>
  )
}

export default Breadcrumb
