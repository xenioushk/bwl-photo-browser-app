import { useQuery } from "react-query"
import axios from "axios"

const fetchAllPhoto = () => {
  return axios.get(`/photos/?_limit=5`)
}

const useAllPhotosData = (params) => {
  const { onSuccess, onError, photoId } = params
  return useQuery("single-photo", fetchAllPhoto, {
    // cacheTime: 5000, // 5 second
    // staleTime: 30000,
    // refetchOnMount: true, // default true
    // refetchOnWindowFocus: true,
    // refetchInterval: 3000, // polling interval
    // refetchIntervalInBackground: true // fetch data in background

    enabled: false, // disable fetching data on mount.
    onSuccess,
    onError,
  })
}

export default useAllPhotosData
