import React, { useState, useEffect } from "react"
import AlbumCard from "./AlbumCard"
import axios from "axios"
import loader from "../../loader.gif"
import Button from "../base/Button"
import Breadcrumb from "../base/Breadcrumb"

const AllAlbums = () => {
  const [isLoaded, setIsLoaded] = useState(false)
  const [albums, setAbums] = useState([])
  const [page, setPage] = useState(1)
  const [loadMoreBtn, setLoadMoreBtn] = useState(0)
  const [status, setStatus] = useState(false)
  const [loadMoreBtnText, setLoadMoreBtnText] = useState("Load More")
  const [loadMoreBtnDisabled, setLoadMoreBtnDisabled] = useState(false)

  useEffect(() => {
    const limit = 12
    var apiLink = `/albums?_limit=${limit}&_page=${page}`

    const fetchData = () => {
      axios
        .get(apiLink)
        .then((res) => {
          if (res.data.length === limit) {
            setLoadMoreBtnText("Load More")
            setLoadMoreBtnDisabled(false)
            setIsLoaded(true)
            setStatus(res.data.length > 0 ? true : false)
            setLoadMoreBtn(1)
            setAbums((prev) => prev.concat(res.data))
          } else {
            // Remove the load more button.
            setLoadMoreBtn(0)
          }
        })
        .catch((err) => console.log(err))
    }

    fetchData()
  }, [page])

  const onClick = (e) => {
    setPage((prevPage) => prevPage + 1)
    setLoadMoreBtnText("Loading....")
    setLoadMoreBtnDisabled(true)
  }

  return (
    <div className="container px-4 mx-auto items-center md:px-0 mt-5">
      <Breadcrumb title="All Albums" />
      {isLoaded ? (
        <>
          {status === true ? (
            <>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 gap-8 lg:grid-cols-4 xl:grid-cols-6">
                {albums.map((album, index) => (
                  <AlbumCard key={index} album={album} single={false} />
                ))}
              </div>

              {loadMoreBtn ? (
                <div className="grid grid-cols-1 gap-y-4 mt-4 text-center md:mt-6">
                  <Button disabled={loadMoreBtnDisabled} btnText={loadMoreBtnText} onClick={onClick} />
                </div>
              ) : (
                ""
              )}
            </>
          ) : (
            <>
              <p>No Post Found !</p>
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

export default AllAlbums
