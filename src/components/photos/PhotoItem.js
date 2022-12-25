import React from "react"
import { Link } from "react-router-dom"
import PropTypes from "prop-types"

const PhotoItem = (props) => {
  return (
    <div className="bg-Gray-300 space-y-2 border-2 border-bg-Gray-300 mb-4 p-0 md:px-4 md:py-4" key={props.photo.id}>
      {!props.single ? (
        <div className="grid grid-cols-12">
          <div className="col-span-12 text-center">
            <img src={props.photo.thumbnailUrl} alt={props.photo.title} className="block m-auto" />
            <Link to={`/photo/${props.photo.id}`} className="transition text-Green-900 hover:text-black">
              {props.photo.title}
            </Link>
            <p>
              <Link to={`/album/${props.photo.albumId}`} className="mt-3 block">
                Album#{props.photo.albumId}
              </Link>
            </p>
          </div>
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
PhotoItem.defaultProps = {
  single: false,
}

// Type Casing.
PhotoItem.propTypes = {
  single: PropTypes.bool,
}

export default PhotoItem
