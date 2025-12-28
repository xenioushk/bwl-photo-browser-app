import React from "react"
import Page from "./Page"
import Breadcrumb from "../base/Breadcrumb"
import { useParams } from "react-router-dom"
import PhotoCard from "../photos/PhotoCard"
import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import PhotoDetailSkeleton from "../skeleton/PhotoDetailSkeleton"

const fetchPhoto = async (photoId) => {
  return await axios.get(`/photos/${photoId}`)
}

const fetchAlbum = async (albumId) => {
  return await axios.get(`/albums/${albumId}`)
}

const fetchUser = async (userId) => {
  return await axios.get(`/users/${userId}`)
}

const SinglePhotoPage = () => {
  const { photoId } = useParams()

  const {
    isLoading: isPhotoLoading,
    data: photoResponse,
    isError: isPhotoError,
    error: photoError,
  } = useQuery({
    queryKey: ["my-photo", photoId],
    queryFn: () => fetchPhoto(photoId),
  })
  const albumId = photoResponse?.data.albumId
  const photoData = photoResponse?.data

  const {
    isLoading: isAlbumLoading,
    data: albumResponse,
    isError: isAlbumError,
    error: albumError,
  } = useQuery({
    queryKey: ["my-album", albumId],
    queryFn: () => fetchAlbum(albumId),
    enabled: !!albumId,
  })
  const userId = albumResponse?.data.userId
  const albumData = albumResponse?.data

  const {
    isLoading: isUserLoading,
    data: userResponse,
    isError: isUserError,
    error: userError,
  } = useQuery({
    queryKey: ["my-user", userId],
    queryFn: () => fetchUser(userId),
    enabled: !!userId,
  })
  const userData = userResponse?.data

  if (isPhotoLoading || isAlbumLoading || isUserLoading) {
    return (
      <>
        <PhotoDetailSkeleton count={2} />
      </>
    )
  }

  if (isPhotoError) {
    return (
      <>
        <div className="grid justify-items-center">{photoError.message}</div>
      </>
    )
  }

  if (isAlbumError) {
    return (
      <>
        <div className="grid justify-items-center">{albumError.message}</div>
      </>
    )
  }

  if (isUserError) {
    return (
      <>
        <div className="grid justify-items-center">{userError.message}</div>
      </>
    )
  }

  // Ensure all data is loaded before rendering
  if (!photoData || !albumData || !userData) {
    return (
      <>
        <PhotoDetailSkeleton count={2} />
      </>
    )
  }
  if (true)
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
