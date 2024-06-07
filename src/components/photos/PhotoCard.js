import React from "react"
import { Link } from "react-router-dom"
import PropTypes from "prop-types"

const PhotoCard = (props) => {
  return (
    <>
      {!props.single ? (
        <div className="flex flex-col justify-item-start bg-gray rounded shadow-xl border relative">
          {props.albumBadge === true ? (
            <span className="text-sm transition absolute top-1 right-1 bg-primaryBlue-100 px-2 py-1 rounded text-white hover:bg-primaryBlue-500">
              <Link to={`/album/${props.photo.albumId}`} className="block" title={`Browse Album#${props.photo.albumId} Photos`}>
                Album#{props.photo.albumId}
              </Link>
            </span>
          ) : (
            ""
          )}

          <Link to={`/photo/${props.photo.id}`} title={props.photo.title} className="single-photo flex flex-col transition p-0 text-black-600 font-normal text-sm text-center md:font-bold text-bold hover:text-primaryBlue-500 ">
            <img src={props.photo.thumbnailUrl} alt={props.photo.title} className="block w-full self-start" />
            <span className="p-3">{props.photo.title}</span>
          </Link>
        </div>
      ) : (
        <>
          <div className="flex justify-center items-start py-0 ">
            <img src={props.photo.url} alt={props.photo.title} className="block w-full rounded-xl shadow-2xl" />
          </div>

          <div className="flex flex-col gap-4 px-1 mt-4 md:mt-0 md:px-6 md:col-span-1 xl:col-span-2">
            <h2 className="text-xl font-bold">{props.photo.title}</h2>

            <p>
              <strong>Album:</strong>{" "}
              <Link to={`/album/${props.album.id}`} title={props.album.title}>
                {props.album.title}
              </Link>
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
