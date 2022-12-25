import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import AlbumItem from "./AlbumItem"
import axios from "axios"
import loader from "../../loader.gif"

const AllAlbums = (props) => {
  const params = useParams()

  const [isLoaded, setIsLoaded] = useState(false)
  const [albums, setAbums] = useState([])
  const [maxPages, setMaxPages] = useState(1)
  // const [limit, setLimit] = useState(5)
  const [page, setPage] = useState(1)
  const [loadMoreBtn, setLoadMoreBtn] = useState(0)
  const [status, setStatus] = useState(false)
  const [loadMoreBtnText, setLoadMoreBtnText] = useState("Load More")
  const [loadMoreBtnDisabled, setLoadMoreBtnDisabled] = useState(false)

  // Test Case

  // Limit

  // API end Points.

  // All Images.
  // http://jsonplaceholder.typicode.com/photos

  // Filtering.
  // http://jsonplaceholder.typicode.com/photos?_limit=5&_page=6

  // Albums.
  // http://jsonplaceholder.typicode.com/albums/1/photos

  // Limit For Albums.
  // http://jsonplaceholder.typicode.com/albums/1/photos?_limit=2

  // All Albums.
  // http://jsonplaceholder.typicode.com/albums

  // Single Image.
  // http://jsonplaceholder.typicode.com/photos/7

  useEffect(() => {
    // GET request using axios inside useEffect React hook

    // const catFilter = typeof props.catSlug !== "undefined" ? `&catslug=${props.catSlug}` : ""

    // const apiLink = `/wp-json/pmapi/v1/jobs?limit=4&&page=${page}${catFilter}`
    var apiLink
    console.log(props.albumId)
    if (typeof props.albumId !== undefined) {
      apiLink = `http://jsonplaceholder.typicode.com/albums/8/photos?_limit=5&_page=6`
    } else {
      apiLink = `http://jsonplaceholder.typicode.com/photos?_limit=5&_page=6`
    }

    apiLink = `http://jsonplaceholder.typicode.com/albums`

    const fetchData = () => {
      axios
        .get(apiLink)
        .then((res) => {
          console.log(res.data)
          console.log(res.data.length)
          setLoadMoreBtnText("Load More")
          setLoadMoreBtnDisabled(false)
          setMaxPages(res.data.max_pages)
          setIsLoaded(true)
          setStatus(res.data.length > 0 ? true : false)

          if (typeof props.catSlug !== "undefined") {
            // console.log(props.catSlug)
            // setCateName(res.data.cat_name)
          }
          // maximum number of page value is greater than 1 then we are going to show the button.

          res.data.max_pages > 1 ? setLoadMoreBtn(1) : setLoadMoreBtn(0)

          // setJobs(jobs.push(res.data.job_data))
          setAbums((prev) => prev.concat(res.data))
        })
        .catch((err) => console.log(err))
    }

    fetchData()
  }, [page, props.catSlug])

  const onClick = (e) => {
    //Remove it later.

    // setLimit((prev) => prev)

    let currentPage
    setPage((currentPage = parseInt(page) + 1))
    setLoadMoreBtnText("Loading....")
    setLoadMoreBtnDisabled(true)

    if (currentPage === maxPages) {
      e.target.remove()
    }
  }

  return (
    <div className="container px-4 mx-auto items-center md:px-0">
      {isLoaded ? (
        <>
          {status === true ? (
            <>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                {albums.map((album, index) => (
                  <AlbumItem key={index} album={album} single={false} />
                ))}
              </div>

              {loadMoreBtn ? (
                <div className="grid grid-cols-1 gap-y-4 mt-4 md:mt-6">
                  <button disabled={loadMoreBtnDisabled === true ? "disabled" : ""} className="transition bg-Green-900 text-white text-underline-none font-bold px-4 py-4 rounded hover:bg-gray-800 btn-inline p-3 mx-auto w-1/2 md:w-1/4" onClick={onClick}>
                    {loadMoreBtnText}
                  </button>
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
