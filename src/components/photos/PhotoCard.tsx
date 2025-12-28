import React from "react"
import { Link } from "react-router-dom"
import type { Photo, Album, User } from "../../types"

interface PhotoCardProps {
  photo: Photo
  single: boolean
  albumBadge?: boolean
  album?: Album
  user?: User
}

const PhotoCard: React.FC<PhotoCardProps> = ({ photo, single, albumBadge = false, album, user }) => {
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    // Fallback to a solid color placeholder when image fails to load
    const target = e.target as HTMLImageElement
    target.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='600'%3E%3Crect width='600' height='600' fill='%23${photo.id ? (photo.id * 123456).toString(16).slice(0, 6) : "cccccc"}'/%3E%3Ctext x='50%25' y='50%25' font-size='24' fill='white' text-anchor='middle' dominant-baseline='middle'%3EPhoto ${photo.id}%3C/text%3E%3C/svg%3E`
  }

  return (
    <>
      {!single ? (
        <div className="flex flex-col justify-item-start bg-gray rounded shadow-xl border relative">
          {albumBadge === true ? (
            <span className="text-sm transition absolute top-1 right-1 bg-primaryBlue-100 px-2 py-1 rounded text-white hover:bg-primaryBlue-500">
              <Link to={`/album/${photo.albumId}`} className="block" title={`Browse Album#${photo.albumId} Photos`}>
                Album#{photo.albumId}
              </Link>
            </span>
          ) : (
            ""
          )}

          <Link to={`/photo/${photo.id}`} title={photo.title} className="single-photo flex flex-col transition p-0 text-black-600 font-normal text-sm text-center md:font-bold text-bold hover:text-primaryBlue-500 ">
            <img src={photo.thumbnailUrl} alt={photo.title} className="block w-full self-start" onError={handleImageError} />
            <span className="p-3">{photo.title}</span>
          </Link>
        </div>
      ) : (
        <>
          <div className="flex justify-center items-start py-0 ">
            <img src={photo.url} alt={photo.title} className="block w-full rounded-xl shadow-2xl" onError={handleImageError} />
          </div>

          {album && user && (
            <div className="flex flex-col gap-4 px-1 mt-4 md:mt-0 md:px-6 md:col-span-1 xl:col-span-2">
              <h2 className="text-xl font-bold">{photo.title}</h2>

              <p>
                <strong>Album:</strong>{" "}
                <Link to={`/album/${album.id}`} title={album.title}>
                  {album.title}
                </Link>
              </p>

              <h3 className="text-xl font-bold border-bottom-1">Author Information:</h3>
              <ul>
                <li>Name: {user.name}</li>
                <li>Email: {user.email}</li>
                <li>Phone: {user.phone}</li>
                <li>Website: {user.website}</li>
              </ul>

              <h4 className="text-md font-bold border-bottom-1">Address:</h4>

              <ul>
                <li>Address: {user.address.street}</li>
                <li>Suite: {user.address.suite}</li>
                <li>City: {user.address.city}</li>
                <li>Zipcode: {user.address.zipcode}</li>
              </ul>

              <h4 className="text-md font-bold border-bottom-1">Company:</h4>

              <ul>
                <li>Name: {user.company.name}</li>
                <li>Catch Phrase: {user.company.catchPhrase}</li>
                <li>Business: {user.company.bs}</li>
              </ul>
            </div>
          )}
        </>
      )}
    </>
  )
}

export default PhotoCard
