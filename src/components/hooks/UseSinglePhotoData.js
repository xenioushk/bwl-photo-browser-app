import { useQuery } from "react-query"
import axios from "axios"

const fetchSinglePhoto = (photoId) => {
  return axios.get(`/photos/${photoId}`)
}

const useSinglePhotoData = ({ photoId }) => {
  return useQuery(["single-photo", photoId], () => fetchSinglePhoto(photoId))
  // return useQuery(["single-photo", photoId], () => fetchSinglePhoto(photoId), {
  //   onSuccess,
  //   onError,
  // })
}

export default useSinglePhotoData
