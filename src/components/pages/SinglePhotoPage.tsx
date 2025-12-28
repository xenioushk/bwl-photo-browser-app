import React from "react"
import Page from "./Page"
import Breadcrumb from "../base/Breadcrumb"
import { useParams } from "react-router-dom"
import PhotoCard from "../photos/PhotoCard"
import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import PhotoDetailSkeleton from "../skeleton/PhotoDetailSkeleton"
import type { Photo, Album, User } from "../../types"

interface PhotoResponse {
  data: Photo
}

interface AlbumResponse {
  data: Album
}

interface UserResponse {
  data: User
}

const fetchPhoto = async (photoId: string): Promise<PhotoResponse> => {
  return await axios.get<Photo>(`/photos/${photoId}`)
}

const fetchAlbum = async (albumId: number): Promise<AlbumResponse> => {
  return await axios.get<Album>(`/albums/${albumId}`)
}

const fetchUser = async (userId: number): Promise<UserResponse> => {
  return await axios.get<User>(`/users/${userId}`)
}

const SinglePhotoPage: React.FC = () => {
  const { photoId } = useParams<{ photoId: string }>()

  const {
    isLoading: isPhotoLoading,
    data: photoResponse,
    isError: isPhotoError,
    error: photoError,
  } = useQuery({
    queryKey: ["my-photo", photoId],
    queryFn: () => fetchPhoto(photoId!),
    enabled: !!photoId,
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
    queryFn: () => fetchAlbum(albumId!),
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
    queryFn: () => fetchUser(userId!),
    enabled: !!userId,
  })
  const userData = userResponse?.data

  if (isPhotoLoading || isAlbumLoading || isUserLoading) {
    return (
      <>
        <PhotoDetailSkeleton />
      </>
    )
  }

  if (isPhotoError) {
    return (
      <>
        <div className="grid justify-items-center">{(photoError as Error).message}</div>
      </>
    )
  }

  if (isAlbumError) {
    return (
      <>
        <div className="grid justify-items-center">{(albumError as Error).message}</div>
      </>
    )
  }

  if (isUserError) {
    return (
      <>
        <div className="grid justify-items-center">{(userError as Error).message}</div>
      </>
    )
  }

  // Ensure all data is loaded before rendering
  if (!photoData || !albumData || !userData) {
    return (
      <>
        <PhotoDetailSkeleton />
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
