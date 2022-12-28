import React from "react"
import { Link } from "react-router-dom"
import PropTypes from "prop-types"

const PhotoCard = (props) => {
  return (
    <div className="" key={props.photo.id}>
      {!props.single ? (
        <div className="flex flex-col justify-center bg-gray rounded shadow-md relative">
          <span className="text-sm transition absolute top-1 right-1 bg-primaryBlue-100 px-2 py-1 rounded text-white hover:bg-primaryBlue-500">
            <Link to={`/album/${props.photo.albumId}`} className="block">
              Album#{props.photo.albumId}
            </Link>
          </span>

          <Link to={`/photo/${props.photo.id}`} className="transition p-3 text-black-600 font-normal text-sm text-center md:font-bold text-bold hover:text-primaryBlue-500 ">
            <img src={props.photo.thumbnailUrl} alt={props.photo.title} className="block w-full" />
            {props.photo.title}
          </Link>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-4 gap-4">
            <div className="col-span-4 mb-5">
              <h2>{props.photo.title}</h2>
              <p>
                Album ID: <Link to={`/photos/album/${props.photo.albumId}`}>{props.photo.albumId}</Link>
              </p>
              <img src={props.photo.url} alt="Logo" />
            </div>
          </div>
        </>
      )}
    </div>
  )
}

// Default Value
PhotoCard.defaultProps = {
  single: false,
}

// Type Casing.
PhotoCard.propTypes = {
  single: PropTypes.bool,
}

export default PhotoCard
