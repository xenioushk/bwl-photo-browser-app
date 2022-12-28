import React, { useState, useEffect } from "react"
// import { useParams } from "react-router-dom"
import PhotoCard from "./PhotoCard"
import axios from "axios"
import loader from "../../loader.gif"

const Photos = (props) => {
  // const params = useParams()

  const [isLoaded, setIsLoaded] = useState(false)
  const [photos, setPhotos] = useState([])
  const [limit, setLimit] = useState(6)
  const [page, setPage] = useState(1)
  const [loadMoreBtn, setLoadMoreBtn] = useState(1)
  const [status, setStatus] = useState(false)
  const [loadMoreBtnText, setLoadMoreBtnText] = useState("Load More")
  const [loadMoreBtnDisabled, setLoadMoreBtnDisabled] = useState(false)

  useEffect(() => {
    // GET request using axios inside useEffect React hook

    setLimit(6)
    var apiLink
    // console.log(props)
    if (typeof props.albumId !== "undefined") {
      apiLink = `http://jsonplaceholder.typicode.com/albums/${props.albumId}/photos?_limit=${limit}&_page=${page}`
    } else {
      apiLink = `http://jsonplaceholder.typicode.com/photos?_limit=${limit}&_page=${page}`
    }

    const fetchData = () => {
      axios
        .get(apiLink)
        .then((res) => {
          console.log(res.data)
          console.log(res.data.length)
          setLoadMoreBtnText("Load More")
          setLoadMoreBtnDisabled(false)
          setIsLoaded(true)
          setStatus(res.data.length > 0 ? true : false)
          // maximum number of page value is greater than 1 then we are going to show the button.

          // res.data.max_pages > 1 ? setLoadMoreBtn(1) : setLoadMoreBtn(0)

          // setJobs(jobs.push(res.data.job_data))
          setPhotos((prev) => prev.concat(res.data))
        })
        .catch((err) => console.log(err))
    }

    fetchData()
  }, [page])

  const onClick = (e) => {
    //Remove it later.

    // setLimit((prev) => prev)

    let currentPage
    setPage((currentPage = parseInt(page) + 1))
    setLoadMoreBtnText("Loading....")
    setLoadMoreBtnDisabled(true)

    // if (currentPage === maxPages) {
    //   e.target.remove()
    // }
  }

  return (
    <div className="container px-4 mx-auto items-center md:px-0 mt-5">
      {isLoaded ? (
        <>
          {status === true ? (
            <>
              <div className="grid grid-cols-1 gap-4 px-6 md:grid-cols-3 md:p-0 lg:grid-cols-6 gap-6">
                {photos.map((photo, index) => (
                  <PhotoCard key={index} photo={photo} single={false} />
                ))}
              </div>

              {loadMoreBtn ? (
                <div className="grid grid-cols-1 gap-y-4 mt-4 md:mt-6">
                  <button disabled={loadMoreBtnDisabled === true ? "disabled" : ""} className="transition bg-primaryBlue-600 text-white text-underline-none font-bold px-4 py-4 rounded hover:bg-gray-800 btn-inline p-3 mx-auto w-1/2 md:w-1/4" onClick={onClick}>
                    {loadMoreBtnText}
                  </button>
                </div>
              ) : (
                ""
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
