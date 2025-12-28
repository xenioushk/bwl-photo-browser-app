import React, { useState, useEffect } from "react"
import AlbumCard from "./AlbumCard"
import Button from "../base/Button"
import Breadcrumb from "../base/Breadcrumb"
import AlbumSkeleton from "../skeleton/AlbumSkeleton"
import useAlbums from "../hooks/useAlbums"

const AllAlbums = () => {
  const limit = 18
  const [page, setPage] = useState(1)
  const [allAlbums, setAllAlbums] = useState([])

  const { data, isLoading, isError, error } = useAlbums(page, limit)

  // Accumulate albums as we load more pages
  useEffect(() => {
    if (data && data.length > 0) {
      setAllAlbums((prev) => [...prev, ...data])
    }
  }, [data])

  const hasMore = data && data.length === limit
  const showLoadMore = !isLoading && hasMore
  const noMoreAlbums = !isLoading && data && data.length < limit && allAlbums.length > 0

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1)
  }

  if (isError) {
    return (
      <div className="container px-4 mx-auto items-center md:px-0 mt-5">
        <Breadcrumb title="All Albums" />
        <div className="grid justify-items-center mt-8 text-red-600">Error loading albums: {error.message}</div>
      </div>
    )
  }

  return (
    <div className="container px-4 mx-auto items-center md:px-0 mt-5">
      <Breadcrumb title="All Albums" />
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 gap-8 lg:grid-cols-4 xl:grid-cols-6">
        {allAlbums.map((album, index) => (
          <AlbumCard key={album.id || index} album={album} />
        ))}
        {isLoading && <AlbumSkeleton count={limit} />}
      </div>
      {showLoadMore && (
        <div className="grid grid-cols-1 text-center">
          <Button disabled={isLoading} btnText="Load More" onClick={handleLoadMore} />
        </div>
      )}
      {noMoreAlbums && <div className="grid grid-cols-1 text-center mt-6">No more albums available!</div>}
    </div>
  )
}

export default AllAlbums
