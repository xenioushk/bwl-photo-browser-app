import React, { useState, useEffect } from "react"
import PhotoCard from "./PhotoCard"
import axios from "axios"
import loader from "../../loader.gif"
import Button from "../base/Button"
import Breadcrumb from "../base/Breadcrumb"

const Photos = ({ albumId, albumTitle }) => {
  const [isLoaded, setIsLoaded] = useState(false)
  const [photos, setPhotos] = useState([])
  // const [albumId, setAlbumId] = useState("")

  const [page, setPage] = useState(1)
  const [loadMoreBtn, setLoadMoreBtn] = useState(1)
  const [status, setStatus] = useState(false)
  const [loadMoreBtnText, setLoadMoreBtnText] = useState("Load More")
  const [loadMoreBtnDisabled, setLoadMoreBtnDisabled] = useState(false)
  const [albumBadge, setAlbumBadge] = useState(true)

  // if (typeof props.albumId !== "undefined") {
  //   setAlbumId(props.albumId)
  // }

  useEffect(() => {
    const limit = 10
    var apiLink
    if (typeof albumId !== "undefined") {
      setAlbumBadge(false)
      apiLink = `/albums/${albumId}/photos?_limit=${limit}&_page=${page}`
    } else {
      apiLink = `/photos?_limit=${limit}&_page=${page}`
    }

    const fetchData = () => {
      axios
        .get(apiLink)
        .then((res) => {
          // console.log(res.data)
          // console.log(res.data.length)

          if (res.data.length === limit) {
            setLoadMoreBtnText("Load More")
            setLoadMoreBtnDisabled(false)
            setIsLoaded(true)
            setStatus(res.data.length > 0 ? true : false)
            setPhotos((prev) => prev.concat(res.data))
          } else {
            // Remove the load more button.
            setLoadMoreBtn(0)
          }
        })
        .catch((err) => console.log(err))
    }

    fetchData()
  }, [page, albumId])

  const onClick = (e) => {
    setPage((prevPage) => prevPage + 1)

    setLoadMoreBtnText("Loading....")
    setLoadMoreBtnDisabled(true)
  }

  return (
    <div className="container px-4 mx-auto items-center md:px-0 mt-5">
      {albumTitle ? <Breadcrumb albumCategory="All Albums" title={albumTitle} /> : <></>}

      {isLoaded ? (
        <>
          {status === true ? (
            <>
              <div className="grid grid-cols-1 gap-4 px-0 sm:grid-cols-2 md:grid-cols-3 md:p-0 lg:grid-cols-4 gap-6 xl:grid-cols-5 gap-6 ">
                {photos.map((photo, index) => (
                  <PhotoCard key={index} photo={photo} single={false} albumBadge={albumBadge} />
                ))}
              </div>

              {loadMoreBtn ? (
                <div className="grid grid-cols-1 text-center gap-y-4 mt-4 md:mt-6">
                  <Button disabled={loadMoreBtnDisabled} btnText={loadMoreBtnText} onClick={onClick} />
                </div>
              ) : (
                <div className="grid grid-cols-1 text-center gap-y-4 mt-4 md:mt-6">
                  <p>No more photos available!</p>
                </div>
              )}
            </>
          ) : (
            <>
              <p>No Photo Found !</p>
            </>
          )}
        </>
      ) : (
        <div className="grid justify-items-center">
          <img src={loader} alt="Logo" />
        </div>
      )}
    </div>
  )
}

export default Photos
