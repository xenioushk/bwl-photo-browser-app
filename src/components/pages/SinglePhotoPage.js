import React from "react"
import Page from "./Page"
import Breadcrumb from "../base/Breadcrumb"
import { useParams } from "react-router-dom"
import PhotoCard from "../photos/PhotoCard"
import { useQuery } from "react-query"
import axios from "axios"
import PhotoDetailSkeleton from "../skeleton/PhotoDetailSkeleton"

const fetchPhoto = async (photoId) => {
  // setTimeout(() => {
  return await axios.get(`/photos/${photoId}`)
  // }, 50000)
}

const fetchAlbum = async (albumId) => {
  return await axios.get(`/albums/${albumId}`)
}

const fetchUser = async (userId) => {
  return await axios.get(`/users/${userId}`)
}

const SinglePhotoPage = () => {
  const { photoId } = useParams() // get ID from url

  const { isLoading: aIsLoading, data: aData, isError: aIsError, error: aError } = useQuery(["my-photo", photoId], () => fetchPhoto(photoId))
  const albumId = aData?.data.albumId
  const photoData = aData?.data

  const { isLoading: bIsLoading, data: bData, isError: bIsError, error: bError } = useQuery(["my-album", albumId], () => fetchAlbum(albumId), { enabled: !!albumId })
  const userId = bData?.data.userId
  const albumData = bData?.data

  const { isLoading: cIsLoading, data: cData, isError: cIsError, error: cError } = useQuery(["my-user", userId], () => fetchUser(userId), { enabled: !!userId })
  const userData = cData?.data

  if (aIsLoading || bIsLoading || cIsLoading) {
    return (
      <>
        <PhotoDetailSkeleton count={2} />
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
    <Page title={photoData.title}>
      <div className="container px-4 mx-auto items-center md:px-0 mt-5">
        <Breadcrumb title={photoData.title} photo={photoData} album={albumData} />
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 mt-4">
          <PhotoCard key={photoId} photo={photoData} album={albumData} user={userData} single={true} />
        </div>
      </div>
    </Page>
  )
}

export default SinglePhotoPage
