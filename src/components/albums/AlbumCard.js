import React from "react"
import { Link } from "react-router-dom"
import PropTypes from "prop-types"

const AlbumCard = (props) => {
  return (
    <div className="flex flex-col justify-center text-center bg-Gray-100 rounded shadow-md relative py-4 px-3 gap-3" key={props.album.id}>
      <span className="text-sm transition inline-block w-1/1 m-auto md:absolute md:top-1 md:right-1 bg-primaryBlue-100 px-2 py-1 rounded text-white hover:bg-primaryBlue-500">Album#{props.album.id}</span>
      <h2 className="text-2xl text-lg font-bold md:mt-8">{props.album.title}</h2>
      <Link to={`/album/${props.album.id}`} className="border rounded transition bg-transparent text-primaryBlue-600 text-underline-none font-bold px-2 py-2 md:px-2 py-1 w-1/1 m-auto hover:bg-primaryBlue-600 hover:text-white ">
        Browse Photos
      </Link>
    </div>
  )
}

// Default Value
AlbumCard.defaultProps = {
  single: false,
}

// Type Casing.
AlbumCard.propTypes = {
  single: PropTypes.bool,
}

export default AlbumCard
