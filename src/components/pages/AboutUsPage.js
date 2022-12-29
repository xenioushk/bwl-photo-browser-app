import { useEffect } from "react"
import Page from "./Page"

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

const AboutUs = () => {
  // Use Effect.

  useEffect(() => {
    document.title = "About Us"
  }, [])

  var photoId = 1

  const { isLoading: aIsLoading, data: aData, isError: aIsError, error: aError } = useQuery(["my-photo", photoId], () => fetchPhoto(photoId))
  const albumId = aData?.data.id
  console.log(albumId)
  const { isLoading: bIsLoading, data: bData, isError: bIsError, error: bError } = useQuery(["my-album", albumId], () => fetchAlbum(albumId), { enabled: !!albumId })
  const userId = bData?.data.userId
  console.log(userId)

  const { isLoading: cIsLoading, data: cData, isError: cbIsError, error: cError } = useQuery(["my-user", userId], () => fetchUser(userId), { enabled: !!userId })
  // const userInfo = cData?.data.userId
  const userInfo = cData?.data
  console.log({ userInfo })

  // useQuery("all-users", fetchPhoto)

  if (aIsLoading) {
    return <>A Loading....</>
  }

  if (aIsError) {
    return <>{aError.message}</>
  }

  return (
    <Page title="About Us">
      <div className="container px-4 mx-auto items-center mt-4 md:px-0">
        <div className="grid grid-cols-1 gap-y-4">
          <h2 className="text-3xl">About Us</h2>
          <p>The primary goal of Pocket Money is to create a marketplace where people will publish small tasks that can be done by anyone without any formal training in a few hours, for example, baby sitting, dog walking, grocery shopping, etc. Thus the job opportunity at pocket money for both students and non-students. With the initial plan the product owner can earn money by running advertisements and sponsorships. Pocket Money is a modern responsive web application that runs on all the platforms that supports internet browser.</p>

          {/* {aData?.data.map((photo) => {
            return <div key={photo.id}>{photo.title}</div>
          })} */}
        </div>
      </div>
    </Page>
  )
}

export default AboutUs
