import React from "react"
// import useSinglePhotoData from "../hooks/UseSinglePhotoData"
// import useSingleAlbumData from "../hooks/UseSingleAlbumData"
// import useSingleUserData from "../hooks/UseSingleUserData"
import Breadcrumb from "../base/Breadcrumb"

import { useParams } from "react-router-dom"
import PhotoCard from "../photos/PhotoCard"
import loader from "../../loader.gif"

import { useQuery } from "react-query"
import axios from "axios"

const fetchPhoto = (photoId) => {
  return axios.get(`/photos/${photoId}`)
}

const fetchAlbum = (albumId) => {
  return axios.get(`/albums/${albumId}`)
}

const fetchUser = (userId) => {
  return axios.get(`/users/${userId}`)
}

const SinglePhotoPage = () => {
  const { photoId } = useParams() // get ID from url

  const { isLoading: aIsLoading, data: aData, isError: aIsError, error: aError } = useQuery(["my-photo", photoId], () => fetchPhoto(photoId))
  const albumId = aData?.data.albumId
  const photoData = aData?.data
  // console.log(albumId)
  const { isLoading: bIsLoading, data: bData, isError: bIsError, error: bError } = useQuery(["my-album", albumId], () => fetchAlbum(albumId), { enabled: !!albumId })
  // const { isLoading: bIsLoading, data: bData, isError: bIsError, error: bError } = useQuery(["my-album", albumId], () => fetchAlbum(albumId), { enabled: !!albumId })
  const userId = bData?.data.userId
  const albumData = bData?.data
  // console.log(userId)

  const { isLoading: cIsLoading, data: cData, isError: cIsError, error: cError } = useQuery(["my-user", userId], () => fetchUser(userId), { enabled: !!userId })
  // const { isLoading: cIsLoading, data: cData, isError: cbIsError, error: cError } = useQuery(["my-user", userId], () => fetchUser(userId), { enabled: !!userId })
  // const userInfo = cData?.data.userId
  const userData = cData?.data

  if (aIsLoading || bIsLoading || cIsLoading) {
    return (
      <>
        <div className="grid justify-items-center">
          <img src={loader} alt="Logo" />
        </div>
      </>
    )
  }

  if (aIsError) {
    return (
      <>
        <div className="grid justify-items-center">{aError.message}</div>
      </>
    )
  }

  if (bIsError) {
    return (
      <>
        <div className="grid justify-items-center">{bError.message}</div>
      </>
    )
  }

  if (cIsError) {
    return (
      <>
        <div className="grid justify-items-center">{cError.message}</div>
      </>
    )
  }

  return (
    <>
      <div className="container px-4 mx-auto items-center mt-4 md:px-0">
        <Breadcrumb title={photoData.title} photo={photoData} album={albumData} />
        <div className="grid grid-cols-3 gap-4 mt-4">

          <PhotoCard key={photoId} photo={photoData} album={albumData} user={userData} single={true} />
        </div>
      </div>
    </>
  )
}

export default SinglePhotoPage
