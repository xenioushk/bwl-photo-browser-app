import React from "react"
import { Link } from "react-router-dom"
import PropTypes from "prop-types"

const PhotoCard = (props) => {
  document.title = `${props.photo.title} | Photo Browser App `
  return (
    <>
      {!props.single ? (
        <div className="flex flex-col justify-center bg-gray rounded shadow-md relative">
          {props.albumBadge === true ? (
            <span className="text-sm transition absolute top-1 right-1 bg-primaryBlue-100 px-2 py-1 rounded text-white hover:bg-primaryBlue-500">
              <Link to={`/album/${props.photo.albumId}`} className="block">
                Album#{props.photo.albumId}
              </Link>
            </span>
          ) : (
            ""
          )}

          <Link to={`/photo/${props.photo.id}`} className="flex flex-col gap-3 transition p-3 text-black-600 font-normal text-sm text-center md:font-bold text-bold hover:text-primaryBlue-500 ">
            <img src={props.photo.thumbnailUrl} alt={props.photo.title} className="block w-full" />
            <span>{props.photo.title}</span>
          </Link>
        </div>
      ) : (
        <>
          <div className="">
            <img src={props.photo.url} alt="Logo" />
          </div>

          <div className="flex flex-col gap-4">
            <h2>{props.photo.title}</h2>
            <p>
              <strong>Album:</strong> <Link to={`/album/${props.album.id}`}>{props.album.title}</Link>
            </p>

            <h3 className="text-xl font-bold border-bottom-1">Author Information:</h3>
            <ul>
              <li>Name: {props.user.name}</li>
              <li>Email: {props.user.email}</li>
              <li>Phone: {props.user.phone}</li>
              <li>Website: {props.user.website}</li>
            </ul>

            <h4 className="text-md font-bold border-bottom-1">Address:</h4>

            <ul>
              <li>Address: {props.user.address.street}</li>
              <li>Suite: {props.user.address.suite}</li>
              <li>City: {props.user.address.city}</li>
              <li>Zipcode: {props.user.address.zipcode}</li>
            </ul>

            <h4 className="text-md font-bold border-bottom-1">Company:</h4>

            <ul>
              <li>Name: {props.user.company.name}</li>
              <li>Catch Phrase: {props.user.company.catchPhrase}</li>
              <li>Business: {props.user.company.bs}</li>
            </ul>
          </div>
        </>
      )}
    </>
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
