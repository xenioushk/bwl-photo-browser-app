import React from "react"
import { Link } from "react-router-dom"
import type { Album } from "../../types"

interface AlbumCardProps {
  album: Album
}

const AlbumCard: React.FC<AlbumCardProps> = ({ album }) => {
  return (
    <div className="flex flex-col justify-center text-center border bg-white rounded shadow-md relative py-4 px-3 gap-3" key={album.id}>
      <span className="text-sm transition inline-block w-1/1 m-auto md:absolute md:top-1 md:right-1 bg-primaryBlue-100 px-2 py-1 rounded text-white hover:bg-primaryBlue-500">Album#{album.id}</span>
      <h2 className="text-2xl text-lg font-bold md:mt-8">{album.title}</h2>
      <Link to={`/album/${album.id}`} className="btn-browse-photos border rounded transition bg-transparent text-primaryBlue-600 text-underline-none text-sm font-normal px-2 py-2 md:px-2 md:font-bold md:text-md py-1 w-1/1 m-auto hover:bg-primaryBlue-600 hover:text-white ">
        Browse Photos
      </Link>
    </div>
  )
}

export default AlbumCard
