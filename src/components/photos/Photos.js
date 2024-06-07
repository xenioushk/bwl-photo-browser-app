import React, { useState, useEffect } from "react"
import PhotoCard from "./PhotoCard"
import axios from "axios"
import Button from "../base/Button"
import Breadcrumb from "../base/Breadcrumb"
import PhotoSkeleton from "../skeleton/PhotoSkeleton"

const Photos = ({ albumId, albumTitle }) => {
  const limit = 18
  const [skeletonStatus, setSkeletonStatus] = useState(true)
  const [dataStatus, setDataStatus] = useState(false)
  const [photosData, setPhotosData] = useState([])
  const [noPhotosDataStatus, setNoPhotosDataStatus] = useState(false)
  const [page, setPage] = useState(1)
  const [loadMoreBtn, setLoadMoreBtn] = useState(false)
  const [loadMoreBtnDisabled, setLoadMoreBtnDisabled] = useState(true)
  const [albumBadge, setAlbumBadge] = useState(true)

  useEffect(() => {
    var apiLink
    if (typeof albumId !== "undefined") {
      setAlbumBadge(false)
      apiLink = `/albums/${albumId}/photos?_limit=${limit}&_page=${page}`
    } else {
      apiLink = `/photos?_limit=${limit}&_page=${page}`
    }

    const fetchData = async () => {
      await axios
        .get(apiLink)
        .then((res) => {
          if (res.data.length === limit) {
            setLoadMoreBtn(true)
            setLoadMoreBtnDisabled(false)
            setDataStatus(true)
            setPhotosData((prev) => prev.concat(res.data))
            setSkeletonStatus(false)
          } else {
            // Remove the load more button.
            setSkeletonStatus(false)
            setLoadMoreBtn(false)
            setNoPhotosDataStatus(true)
          }
        })
        .catch((err) => console.log(err))
    }

    fetchData()
  }, [page, albumId])

  const onClick = (e) => {
    setSkeletonStatus(true)
    setPage((prevPage) => prevPage + 1)
    setLoadMoreBtnDisabled(true)
  }

  return (
    <div className="container px-4 mx-auto items-center md:px-0 mt-5">
      {albumTitle ? <Breadcrumb albumCategory="All Albums" title={albumTitle} /> : <></>}

      <div className="grid grid-cols-1 gap-4 px-0 sm:grid-cols-2 md:grid-cols-3 md:p-0 lg:grid-cols-4 gap-6 xl:grid-cols-6">
        {dataStatus === true ? (
          <>
            {photosData.map((photo, index) => (
              <PhotoCard key={index} photo={photo} single={false} albumBadge={albumBadge} />
            ))}
          </>
        ) : (
          <></>
        )}
        {skeletonStatus === true ? <PhotoSkeleton count={limit} /> : <></>}
      </div>

      {loadMoreBtn === true ? (
        <div className="grid grid-cols-1 text-center">
          <Button disabled={loadMoreBtnDisabled} btnText="Load More" onClick={onClick} />
        </div>
      ) : (
        ""
      )}
      {noPhotosDataStatus === true ? <div className="grid grid-cols-1 text-center mt-6">No more photos available !</div> : ""}
    </div>
  )
}

export default Photos
