import { useQuery } from "@tanstack/react-query"
import axios from "axios"

const fetchSinglePhoto = (photoId) => {
  return axios.get(`/photos/${photoId}`)
}

const useSinglePhotoData = ({ photoId }) => {
  return useQuery({
    queryKey: ["single-photo", photoId],
    queryFn: () => fetchSinglePhoto(photoId),
  })
  // return useQuery({
  //   queryKey: ["single-photo", photoId],
  //   queryFn: () => fetchSinglePhoto(photoId),
  //   onSuccess,
  //   onError,
  // })
}

export default useSinglePhotoData
