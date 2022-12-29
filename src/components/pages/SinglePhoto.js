import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import PhotoItem from "../photos/PhotoCard"
import axios from "axios"
import loader from "../../loader.gif"

const SinglePhoto = () => {
  // get ID from url
  const params = useParams()

  // console.log(params.id) // {userId: '4200'}

  const [isLoaded, setIsLoaded] = useState(false)
  const [singlePhoto, setSinglePhoto] = useState([])
  const [photoId] = useState(params.photoId)
  const [status, setStatus] = useState(false)

  useEffect(() => {
    // GET request using axios inside useEffect React hook
    // const postId = {id: "[hexValue]", token: "[userToken]"}
    const fetchData = async () => {
      await axios
        // .get(`/wp-json/pmapi/v1/job?p_id=${postId}`)
        .get(`/photos/${photoId}`)
        .then((res) => {
          setIsLoaded(true)
          // setIsLoaded(false)
          // setStatus(res.data.length)
          setStatus(true)
          // setJobTitle(res.data.job_data[0].title)
          // setJobCategory(res.data.job_data[0].category)
          // setJobCategorySlug(res.data.job_data[0].cat_slug)
          setSinglePhoto((prev) => prev.concat(res.data))
          document.title = `${res.data.title} | Photo Browser Application`
        })
        .catch((err) => console.log(err))
    }

    fetchData()
  }, [photoId])

  return (
    <div className="container px-4 mx-auto items-center mt-4 md:px-0">
      {isLoaded ? (
        <div className="grid grid-cols-2 gap-y-4 mt-4">{status === true ? singlePhoto.map((photo, index) => <PhotoItem key={index} photo={photo} single={true} />) : "<p>No photo found !</p>"}</div>
      ) : (
        <div className="grid justify-items-center">
          <img src={loader} alt="Logo" />
        </div>
      )}
    </div>
  )
}

export default SinglePhoto
