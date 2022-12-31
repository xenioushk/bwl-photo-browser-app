import React, { useState, useEffect } from "react"
import AlbumCard from "./AlbumCard"
import axios from "axios"
import Button from "../base/Button"
import Breadcrumb from "../base/Breadcrumb"
import AlbumSkeleton from "../skeleton/AlbumSkeleton"

const AllAlbums = () => {
  const limit = 18
  const [skeletonStatus, setSkeletonStatus] = useState(true)
  const [dataStatus, setDataStatus] = useState(false)
  const [albumsData, setAlbumsData] = useState([])
  const [noAlbumsDataStatus, setNoAlbumsDataStatus] = useState(false)
  const [page, setPage] = useState(1)
  const [loadMoreBtn, setLoadMoreBtn] = useState(false)
  const [loadMoreBtnDisabled, setLoadMoreBtnDisabled] = useState(true)

  useEffect(() => {
    var apiLink = `/albums?_limit=${limit}&_page=${page}`

    const fetchData = async () => {
      await axios
        .get(apiLink)
        .then((res) => {
          if (res.data.length === limit) {
            setLoadMoreBtn(true)
            setLoadMoreBtnDisabled(false)
            setDataStatus(true)
            setAlbumsData((prev) => prev.concat(res.data))
            setSkeletonStatus(false)
          } else {
            // Remove the load more button.
            setSkeletonStatus(false)
            setLoadMoreBtn(false)
            setNoAlbumsDataStatus(true)
          }
        })
        .catch((err) => console.log(err))
    }

    fetchData()
  }, [page])

  const onClick = (e) => {
    setSkeletonStatus(true)
    setPage((prevPage) => prevPage + 1)
    setLoadMoreBtnDisabled(true)
  }

  return (
    <div className="container px-4 mx-auto items-center md:px-0 mt-5">
      <Breadcrumb title="All Albums" />
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 gap-8 lg:grid-cols-4 xl:grid-cols-6">
        {dataStatus === true ? (
          <>
            {albumsData.map((album, index) => (
              <AlbumCard key={index} album={album} />
            ))}
          </>
        ) : (
          <></>
        )}
        {skeletonStatus === true ? <AlbumSkeleton count={limit} /> : <></>}
      </div>
      {loadMoreBtn === true ? (
        <div className="grid grid-cols-1 text-center">
          <Button disabled={loadMoreBtnDisabled} btnText="Load More" onClick={onClick} />
        </div>
      ) : (
        ""
      )}
      {noAlbumsDataStatus === true ? <div className="grid grid-cols-1 text-center mt-6">No more albums available !</div> : ""}
    </div>
  )
}

export default AllAlbums
