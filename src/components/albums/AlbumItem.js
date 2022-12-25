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

const AlbumItem = (props) => {
  return (
    <div className="bg-Gray-300 space-y-2 border-2 border-bg-Gray-300 mb-4 p-2 md:p-8 mb-0" key={props.album.id}>
      <div className="grid grid-cols-4 gap-4">
        <div className="col-span-4 mb-5">
          <h2 className="text-2xl font-bold mb-3">{props.album.title}</h2>
          <Link to={`/album/${props.album.id}`} className="btn btn-theme transition text-Green-900 hover:text-black">
            Browse Photos
          </Link>
        </div>
      </div>
    </div>
  )
}

// Default Value
AlbumItem.defaultProps = {
  single: false,
}

// Type Casing.
AlbumItem.propTypes = {
  single: PropTypes.bool,
}

export default AlbumItem
