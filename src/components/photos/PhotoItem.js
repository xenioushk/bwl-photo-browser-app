import React from "react"
import { Link } from "react-router-dom"
import PropTypes from "prop-types"

// {
//   "albumId": 1,
//   "id": 26,
//   "title": "asperiores nobis voluptate qui",
//   "url": "https://via.placeholder.com/600/474645",
//   "thumbnailUrl": "https://via.placeholder.com/150/474645"
// },

const PhotoItem = (props) => {
  return (
    <div className="bg-Gray-300 space-y-2 border-2 border-bg-Gray-300 mb-4 p-2 md:p-8 mb-0" key={props.photo.id}>
      <h2 className="text-2xl font-bold mb-3">
        {!props.single ? (
          <Link to={`/photo/${props.photo.id}`} className="transition text-Green-900 hover:text-black">
            {props.photo.title}
          </Link>
        ) : (
          <>{props.photo.title}</>
        )}
      </h2>

      {!props.single ? (
        <div className="grid grid-cols-4 gap-4">
          <div className="col-span-3">
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-y-2 gap-x-1">
              <img src={props.photo.thumbnailUrl} alt="Logo" />
            </div>
          </div>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-4 gap-4">
            <div className="col-span-4 mb-5">
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
