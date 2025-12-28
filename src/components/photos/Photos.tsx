import React, { useState, useEffect } from "react"
import PhotoCard from "./PhotoCard"
import Button from "../base/Button"
import Breadcrumb from "../base/Breadcrumb"
import PhotoSkeleton from "../skeleton/PhotoSkeleton"
import usePhotos from "../hooks/usePhotos"
import type { Photo } from "../../types"

interface PhotosProps {
  albumId?: string | null
  albumTitle?: string
}

const Photos: React.FC<PhotosProps> = ({ albumId = null, albumTitle }) => {
  const limit = 18
  const [page, setPage] = useState(1)
  const [allPhotos, setAllPhotos] = useState<Photo[]>([])
  const albumBadge = !albumId // Show album badge only on main photos page

  const albumIdNumber = albumId ? parseInt(albumId, 10) : null
  const { data, isLoading, isError, error } = usePhotos(page, limit, albumIdNumber)

  useEffect(() => {
    if (data && data.length > 0) {
      setAllPhotos((prev) => [...prev, ...data])
    }
  }, [data])

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1)
  }

  const hasMorePhotos = data && data.length === limit

  if (isError) {
    return (
      <div className="container px-4 mx-auto items-center md:px-0 mt-5">
        {albumTitle && <Breadcrumb albumCategory="All Albums" title={albumTitle} />}
        <div className="text-center mt-10">
          <p className="text-red-600 text-lg mb-4">Failed to load photos: {error?.message}</p>
          <Button btnText="Try Again" onClick={() => window.location.reload()} />
        </div>
      </div>
    )
  }

  return (
    <div className="container px-4 mx-auto items-center md:px-0 mt-5">
      {albumTitle && <Breadcrumb albumCategory="All Albums" title={albumTitle} />}

      <div className="grid grid-cols-1 gap-4 px-0 sm:grid-cols-2 md:grid-cols-3 md:p-0 lg:grid-cols-4 gap-6 xl:grid-cols-6">
        {allPhotos.map((photo, index) => (
          <PhotoCard key={index} photo={photo} single={false} albumBadge={albumBadge} />
        ))}

        {isLoading && <PhotoSkeleton count={limit} />}
      </div>

      {hasMorePhotos && (
        <div className="grid grid-cols-1 text-center">
          <Button disabled={isLoading} btnText="Load More" onClick={handleLoadMore} />
        </div>
      )}

      {!isLoading && allPhotos.length === 0 && <div className="grid grid-cols-1 text-center mt-6">No photos available!</div>}

      {!hasMorePhotos && allPhotos.length > 0 && <div className="grid grid-cols-1 text-center mt-6">No more photos available!</div>}
    </div>
  )
}

export default Photos
